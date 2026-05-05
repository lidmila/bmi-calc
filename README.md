# Ideální BMI – v2 redesign

Nová verze webu postavená na **Eleventy + Tailwind CSS**. Statický výstup, deploy přes Cloudflare Pages.

## Vývoj

```powershell
npm install         # první spuštění
npm run dev         # lokální server s hot-reload (eleventy + tailwindcss --watch)
npm run build       # produkční build do _site/
```

Po `npm run dev` otevři `http://localhost:8080`.

## Architektura

```
src/
├── _data/                   # globální data (site.js, nav.js)
├── _includes/
│   ├── layouts/             # base.njk, article.njk, calculator.njk
│   └── partials/            # header, footer, cookie-banner, head-meta, head-analytics, ad
├── blog/                    # markdown články (article layout)
├── css/tailwind.css         # zdrojové Tailwind CSS
├── img/                     # statické obrázky (passthrough)
├── js/                      # JS knihovny (passthrough)
│   ├── app.js               # NOVÉ – UI app pro nový design (dark mode, mobile menu, calc, blog filter)
│   ├── calculator.js        # PŮVODNÍ – BMI matematika (zdroj pravdy)
│   ├── cookies.js           # PŮVODNÍ – consent management
│   └── data/                # CDC LMS data pro děti
├── *.njk                    # stránky (index, kalkulacka-*, blog, o-nas, metodika)
└── *.md                     # stránky v markdownu (ochrana-soukromi, podminky)
static/                      # passthrough do rootu _site (robots.txt, sitemap.xml, ads.txt, google verify)
```

## Stav redesignu

### ✅ Hotové

- **Build pipeline:** Eleventy 3 + Tailwind 3, `npm run dev` / `npm run build`.
- **Designový systém:** brand teal/emerald palette, Inter + Fraunces, dark mode (toggle v headeru, persistované).
- **Layouts:** base, article (s TOC, reading time, dateModified, sources box), calculator.
- **Partials:** header s mega-dropdown, 4-sloupcový footer, cookie banner, AdSense slot.
- **Homepage** (`/`): nový hero, redesigned BMI kalkulačka s animovaným SVG gauge, 6 cards na další kalkulačky, BMI tabulka, FAQ s `<details>`, support box.
- **Nové kalkulačky** (plně funkční):
  - `/kalkulacka-bmr/` – BMR + TDEE (Mifflin-St Jeor)
  - `/kalkulacka-idealni-vaha/` – Devine, Robinson, Miller
  - `/kalkulacka-whtr/` – pas k výšce
  - `/kalkulacka-deficit/` – kalorický deficit a délka diety
  - `/kalkulacka-tep/` – tepové zóny (Tanaka + Karvonen)
- **Blog index** (`/blog/`) s filtrováním podle kategorie.
- **Obsahové stránky:** `/o-nas/`, `/metodika/` (zdroje výpočtů, odkazy na WHO/CDC/NIH).
- **Právní:** `/ochrana-soukromi/`, `/podminky/` (markdown, převedené z původního obsahu).
- **Sample článek migrovaný:** `/jak-snizit-bmi/` – plně přepsaný do nové struktury jako vzor pro ostatní.

### ⚠️ Stub (potřebuje obsah)

12 článků v `src/blog/*.md` má momentálně placeholder s notice „Migrace probíhá":

| Slug | Stav |
|---|---|
| `bazalni-metabolismus.md` | stub |
| `bmi-u-deti.md` | stub |
| `bmi-vs-jine-metody.md` | stub |
| `hubnuti-chuzi.md` | stub |
| `hubnuti-po-40.md` | stub |
| `hubnuti-po-50.md` | stub |
| `hubnuti-po-porodu.md` | stub |
| `metabolismus.md` | stub |
| `nejlepsi-sport-na-hubnuti.md` | stub |
| `pocitani-kalorii.md` | stub |
| `stupne-obezity.md` | stub |
| `tepova-frekvence-spalovani.md` | stub |

**Jak migrovat:** otevři odpovídající `XXX.html` v rootu repa, zkopíruj texty z `<section>` blocků a přepiš do markdownu. Použij `src/blog/jak-snizit-bmi.md` jako šablonu (frontmatter, sources, jsonld).

### 🖼️ Obrázky k dodání

Viz `src/img/_TODO-images.txt` – nezbytné: OG obrázek 1200×630 pro homepage, favicon set, ideálně custom hero ilustrace.

## Deploy do produkce (přepnutí na nový web)

Aktuálně `wrangler.jsonc` posílá Cloudflare na root (`./`), takže v produkci stále jede stará verze. **Až bude redesign hotový a otestovaný:**

1. Smaž root HTML soubory (zachované jako referenci pro migraci článků):
   ```powershell
   Remove-Item index.html, blog.html, *.html -Exclude README.md
   Remove-Item css\style.css   # nahrazeno Tailwind buildem
   ```
2. V `wrangler.jsonc` přepni `directory` na `_site`:
   ```jsonc
   { "name": "bmi-calc", "compatibility_date": "2026-02-10", "assets": { "directory": "./_site" } }
   ```
3. Přidej build krok pro Cloudflare Pages: v dashboardu nastav „Build command" na `npm run build`, „Output directory" na `_site`.
4. Deploy.

**Doporučuji počkat se smazáním root HTML, dokud nejsou všechny články migrované** – obsah článků v rootu slouží jako zdroj při migraci.

## Quick wins z auditu (kde jsou)

| Audit bod | Řešení v redesignu |
|---|---|
| Reklama jako první obsah pod h1 | Reklamní slot je až po kalkulačce a obsahových sekcích (`partials/ad.njk`) |
| `</div>` v `<nav>` | Nový header v `partials/header.njk` má validní HTML |
| `og:image` 40×40 | `head-meta.njk` čeká `/img/og-default.png` 1200×630 (TODO dodat) |
| `dateModified` v JSON-LD | Article frontmatter podporuje `dateModified`, předává do JSON-LD |
| Footer link-dump | 4-sloupcový footer v `partials/footer.njk` |
| Banner Advance uprostřed obsahu | Odebráno; pokud chceš zachovat, přidej decentně do nového layoutu |

## Co dál (návrhy do dalších sezení)

1. **Migrace 12 článků** ze stubů do markdownu (cca 30–60 min/článek).
2. **Reviewer / autorský box** – přidat odbornou recenzi (jeden externí nutriční terapeut nebo lékař), `reviewer` frontmatter v article layoutu už čeká.
3. **OG obrázky a favicon set** – viz `src/img/_TODO-images.txt`.
4. **Custom hero ilustrace** – uživatel si dodá sám.
5. **Sitemap.xml** – po přepnutí na `_site` regenerovat (Eleventy plugin `@quasibit/eleventy-plugin-sitemap`).
6. **Web Vitals měření** po deployi (PageSpeed Insights).
