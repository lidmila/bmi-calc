/**
 * Convert legacy root *.html articles to src/blog/*.md.
 *
 * Strategy:
 * - Extract <main>...</main> body from each source HTML.
 * - Strip ads, scripts, container/section/div wrappers, class attributes.
 * - Rewrite internal *.html links to /slug/ pretty URLs.
 * - Promote first <h1> into frontmatter title; first <p> into perex.
 * - Write markdown with frontmatter + cleaned HTML body (Markdown allows raw HTML;
 *   article layout's @tailwindcss/typography styles it via .prose).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "src", "blog");

// slug → metadata for the 12 articles to migrate
const articles = [
  { slug: "hubnuti-chuzi",            cat: "Hubnutí",      date: "2026-03-18", img: "hubnuti-chuzi.webp" },
  { slug: "hubnuti-po-40",            cat: "Hubnutí",      date: "2026-03-22", img: "hubnuti-po-40.webp" },
  { slug: "hubnuti-po-50",            cat: "Hubnutí",      date: "2026-03-25", img: "hubnuti-po-50.webp" },
  { slug: "hubnuti-po-porodu",        cat: "Hubnutí",      date: "2026-04-02", img: "hubnuti-po-porodu.webp" },
  { slug: "pocitani-kalorii",         cat: "Výživa",       date: "2026-04-08", img: "pocitani-kalorii.webp" },
  { slug: "nejlepsi-sport-na-hubnuti",cat: "Sport",        date: "2026-04-12", img: "nejlepsi-sport-na-hubnuti.webp" },
  { slug: "tepova-frekvence-spalovani", cat: "Sport",      date: "2026-04-15", img: "tepova-frekvence-spalovani.webp" },
  { slug: "metabolismus",             cat: "Metabolismus", date: "2026-04-22", img: "metabolismus.webp" },
  { slug: "bazalni-metabolismus",     cat: "Metabolismus", date: "2026-04-25", img: "bazalni-metabolismus.webp" },
  { slug: "stupne-obezity",           cat: "BMI",          date: "2026-05-01", img: "stupne-obezity.webp" },
  { slug: "bmi-u-deti",               cat: "BMI",          date: "2026-05-03", img: "bmi-u-deti.webp" },
  { slug: "bmi-vs-jine-metody",       cat: "BMI",          date: "2026-05-04", img: "bmi-vs-jine-metody.webp" },
];

function extractMain(html) {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  return m ? m[1] : "";
}

function extractDescription(html) {
  const m = html.match(/<meta name="description" content="([^"]+)"/i);
  return m ? m[1] : "";
}

function extractKeywords(html) {
  const m = html.match(/<meta name="keywords" content="([^"]+)"/i);
  return m ? m[1] : "";
}

function clean(body, heroImg) {
  return body
    // ad blocks (entire div containing adsbygoogle)
    .replace(/<div[^>]*class="ad-container"[^>]*>[\s\S]*?<\/div>\s*/gi, "")
    .replace(/<ins\s+class="adsbygoogle"[\s\S]*?<\/ins>\s*<script>[\s\S]*?<\/script>\s*/gi, "")
    .replace(/<script[\s\S]*?<\/script>\s*/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    // sections
    .replace(/<section[^>]*>/gi, "")
    .replace(/<\/section>/gi, "")
    // div wrappers (open + close pairs)
    .replace(/<div[^>]*>/gi, "")
    .replace(/<\/div>/gi, "")
    // inline styles / classes / onerror
    .replace(/\s+style="[^"]*"/gi, "")
    .replace(/\s+class="[^"]*"/gi, "")
    .replace(/\s+onerror="[^"]*"/gi, "")
    // fix relative image paths
    .replace(/src="img\//g, 'src="/img/')
    // remove duplicated hero image (one whose src matches heroImage)
    .replace(new RegExp(`<img[^>]*src="${heroImg}"[^>]*>\\s*`, "gi"), "")
    // remove now-empty lines (only whitespace)
    .split("\n").map(l => l.replace(/^\s+$/, "")).join("\n")
    // collapse 3+ blank lines to single blank
    .replace(/\n{3,}/g, "\n\n")
    // strip leading whitespace on each line for tidier markdown
    .replace(/^[ \t]+/gm, "")
    .trim();
}

function rewriteLinks(body) {
  // *.html → /slug/  (only same-host, basic relative form)
  return body.replace(/href="([a-z0-9-]+)\.html(#[^"]*)?"/gi, (m, slug, hash) => {
    return `href="/${slug}/${hash || ""}"`;
  });
}

function unwrapH1(body) {
  // Find first <h1>…</h1>, capture title, remove from body
  const m = body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!m) return { title: "", rest: body };
  const title = m[1].replace(/<[^>]+>/g, "").trim();
  const rest = body.replace(m[0], "").trim();
  return { title, rest };
}

function extractPerex(body) {
  // First <p>…</p> after h1 removal becomes perex
  const m = body.match(/<p>([\s\S]*?)<\/p>/i);
  if (!m) return { perex: "", rest: body };
  const perex = m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  // truncate perex to ~200 chars at sentence boundary
  const short = perex.length > 220 ? perex.slice(0, 220).replace(/[^.]*$/, "").trim() + "…" : perex;
  return { perex: short, rest: body.replace(m[0], "").trim() };
}

function escapeYaml(s) {
  return s.replace(/"/g, '\\"').replace(/\n/g, " ").trim();
}

function generate(meta) {
  const srcPath = path.join(ROOT, `${meta.slug}.html`);
  if (!fs.existsSync(srcPath)) {
    console.warn(`SKIP: ${srcPath} does not exist`);
    return;
  }
  const html = fs.readFileSync(srcPath, "utf8");
  const description = extractDescription(html);
  const keywords = extractKeywords(html);
  let body = extractMain(html);
  body = clean(body, `/img/${meta.img}`);
  body = rewriteLinks(body);

  const { title, rest: afterH1 } = unwrapH1(body);
  const { perex, rest } = extractPerex(afterH1);

  const frontmatter = [
    "---",
    `layout: layouts/article.njk`,
    `title: "${escapeYaml(title)}"`,
    `description: "${escapeYaml(description)}"`,
    keywords ? `keywords: "${escapeYaml(keywords)}"` : null,
    `permalink: /${meta.slug}/`,
    `date: ${meta.date}`,
    `dateModified: 2026-05-05`,
    `category: "${meta.cat}"`,
    `perex: "${escapeYaml(perex)}"`,
    `heroImage: "/img/${meta.img}"`,
    `heroAlt: "${escapeYaml(title)}"`,
    `ogImage: "/img/og-${meta.slug}.png"`,
    "---",
    "",
    rest,
    ""
  ].filter(Boolean).join("\n");

  const outPath = path.join(OUT, `${meta.slug}.md`);
  fs.writeFileSync(outPath, frontmatter, "utf8");
  console.log(`✓ ${meta.slug}.md (${(frontmatter.length / 1024).toFixed(1)} KB)`);
}

articles.forEach(generate);
console.log(`\nDone. ${articles.length} articles migrated.`);
