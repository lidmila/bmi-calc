/**
 * Generate OG image, favicons, and apple-touch-icon from src/img/logo.png.
 * Run once after logo updates: `node scripts/generate-icons.js`
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
// Prefer transparent version if it exists; falls back to the regular logo.
const TRANSPARENT = path.join(ROOT, "src", "img", "logo-transparent.png");
const SRC = fs.existsSync(TRANSPARENT) ? TRANSPARENT : path.join(ROOT, "src", "img", "logo.png");
const OUT = path.join(ROOT, "src", "img");

// Brand colors
const PAPER = { r: 255, g: 250, b: 243, alpha: 1 };

async function main() {
  if (!fs.existsSync(SRC)) {
    console.error("Missing logo at", SRC);
    process.exit(1);
  }
  const meta = await sharp(SRC).metadata();
  console.log(`Source logo: ${meta.width}×${meta.height} ${meta.format}`);

  // === Favicons (transparent bg, logo as-is, scaled) ===
  await sharp(SRC).resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(OUT, "favicon-32.png"));
  console.log("✓ favicon-32.png");

  await sharp(SRC).resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(OUT, "favicon-192.png"));
  console.log("✓ favicon-192.png");

  // Apple touch icon — paper bg (iOS doesn't render transparency well on home screen)
  await sharp(SRC)
    .resize(160, 160, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 10, bottom: 10, left: 10, right: 10, background: PAPER })
    .png()
    .toFile(path.join(OUT, "apple-touch-icon.png"));
  console.log("✓ apple-touch-icon.png (180×180)");

  // === OG image 1200×630 ===
  // Compose: paper background + centered logo + wordmark text rendered as SVG
  const ogSvg = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
      <defs>
        <radialGradient id="g1" cx="20%" cy="0%" r="60%">
          <stop offset="0" stop-color="#ccfbf1" stop-opacity="0.7"/>
          <stop offset="1" stop-color="#fffaf3" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="g2" cx="90%" cy="100%" r="50%">
          <stop offset="0" stop-color="#ffb8a8" stop-opacity="0.6"/>
          <stop offset="1" stop-color="#fffaf3" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="#fffaf3"/>
      <rect width="1200" height="630" fill="url(#g1)"/>
      <rect width="1200" height="630" fill="url(#g2)"/>
      <text x="600" y="430" font-family="Georgia, 'Times New Roman', serif" font-size="86" font-weight="700" text-anchor="middle" fill="#0b1420">
        Ideální <tspan fill="#e85a47" font-style="italic">BMI</tspan>
      </text>
      <text x="600" y="490" font-family="-apple-system, Arial, sans-serif" font-size="28" text-anchor="middle" fill="#0b1420" opacity="0.7">
        Přesný výpočet BMI online · zdarma
      </text>
      <line x1="500" y1="525" x2="700" y2="525" stroke="#e85a47" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `);

  // Render the SVG, then composite the logo on top
  const ogBackground = await sharp(ogSvg).png().toBuffer();
  const logoForOG = await sharp(SRC).resize(220, 220, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();

  await sharp(ogBackground)
    .composite([{ input: logoForOG, top: 110, left: (1200 - 220) / 2 }])
    .png()
    .toFile(path.join(OUT, "og-default.png"));
  console.log("✓ og-default.png (1200×630)");

  // === SVG favicon — embed PNG as data URI inside SVG so dark mode media query works ===
  // This isn't a true vector but lets browsers prefer it. Keep size tiny.
  const logo32buf = await sharp(SRC).resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const dataUri = `data:image/png;base64,${logo32buf.toString("base64")}`;
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><image href="${dataUri}" width="64" height="64"/></svg>`;
  fs.writeFileSync(path.join(OUT, "favicon.svg"), faviconSvg, "utf8");
  console.log("✓ favicon.svg");

  console.log("\nAll icons regenerated from logo.png");
}

main().catch(e => { console.error(e); process.exit(1); });
