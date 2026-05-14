---
layout: layouts/article.njk
title: "O nás – kdo stojí za Ideálním BMI"
description: "Kdo jsme, proč jsme web Ideální BMI vytvořili, jak píšeme obsah a odkud čerpáme. Editorial standardy, zdroje, redakce a kontakt."
permalink: /o-nas/
date: 2026-05-14
dateModified: 2026-05-14
category: "Web"
perex: "Ideální BMI je nezávislý český projekt s kalkulačkami a články o zdraví, hmotnosti a životním stylu. Píšeme jen to, co umíme doložit primárními zdroji – WHO, CDC, NICE, ÚZIS a recenzovanými studiemi."
sources:
  - { label: "WHO – Body mass index", url: "https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/body-mass-index" }
  - { label: "CDC – About Adult BMI", url: "https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html" }
  - { label: "NICE NG246 – Obesity: identification, assessment and management", url: "https://www.nice.org.uk/guidance/ng246" }
  - { label: "ÚZIS – Zdravotnická ročenka ČR", url: "https://www.uzis.cz/" }
  - { label: "Mifflin MD, St Jeor ST. A new predictive equation for resting energy expenditure (Am J Clin Nutr, 1990)", url: "https://pubmed.ncbi.nlm.nih.gov/2305711/" }
jsonld:
  - "@context": "https://schema.org"
    "@type": "AboutPage"
    name: "O nás – Ideální BMI"
    description: "Kdo stojí za webem Ideální BMI, jak píšeme obsah a odkud čerpáme."
    url: "https://idealnibmi.com/o-nas/"
    publisher:
      "@type": "Organization"
      name: "CodeWhiskers"
      url: "https://idealnibmi.com"
      logo:
        "@type": "ImageObject"
        url: "https://idealnibmi.com/img/BMI-calc.png"
    mainEntity:
      "@type": "Organization"
      name: "Ideální BMI"
      url: "https://idealnibmi.com"
      foundingDate: "2025"
      areaServed: "CZ"
      knowsAbout: ["BMI", "obezita", "hubnutí", "metabolismus", "výživa", "tepová frekvence", "kalorický deficit"]
---

## Proč jsme tenhle web vytvořili

Když jsme v roce 2025 začali plánovat vlastní redukci hmotnosti, vyhledali jsme si BMI kalkulačku česky a zjistili dvě věci. Většina českých kalkulaček je **přepis anglické šablony s reklamou navíc**, bez vysvětlení, odkud čísla pocházejí a co znamenají v praxi. A když už někde vysvětlení je, často kombinuje zastaralé vzorce (Harris–Benedict z roku 1919), polopravdy ze sociálních sítí a optimistická tvrzení o produktech, které autor prodává.

To je v pořádku, dokud jde o módu. Ne ale u témat, kde uživatel rozhoduje o vlastním zdraví. **Ideální BMI** je náš pokus udělat to lépe: kalkulačky a články psané pro českého čtenáře, postavené na primárních zdrojích, bez sponzorovaného obsahu a bez snahy cokoliv prodat.

## Kdo jsme

Web provozuje **CodeWhiskers** (IČ 05684447), malé české vydavatelství zaměřené na užitkové weby s důrazem na rychlost, soukromí a ověřené informace. Nejsme zdravotnické zařízení ani poradna. Jsme tým editorů a vývojářů, který spolupracuje s nutričním terapeutem a praktickým lékařem na korekturách textů s rizikem chybné interpretace.

- **Sídlo:** Jindice 115, 285 04 Rašovice-Uhlířské Janovice
- **Provozovatel:** CodeWhiskers, IČ 05684447 (neplátce DPH)
- **Kontakt:** [hello@codewhiskers.app](mailto:hello@codewhiskers.app) · viz [stránka Kontakt](/kontakt/)

## Jak píšeme obsah

Každý článek a každá kalkulačka prochází stejnou rutinou:

1. **Zadání tématu** – buď z naší rešerše nejčastěji hledaných českých dotazů (Google Trends, Search Console), nebo z dotazu čtenáře.
2. **Primární rešerše** – výchozím zdrojem je vždy autoritativní instituce (WHO, CDC, NICE, NHS, NIH, AHA) nebo recenzovaná studie z PubMed. Sekundárním zdrojem mohou být doporučení odborných společností (Endocrine Society, EASO, ESC). Wikipedie ani populární portály nejsou pro nás zdrojem – jen orientačním vodítkem.
3. **Návrh textu** – píše editor s redakční zkušeností. Cílem je text, který čtenáři pomůže udělat **jedno informované rozhodnutí**, ne vyčerpávající přehled.
4. **Odborná korektura** – u článků dotýkajících se klinických rozhodnutí (obezita, GLP-1 analogy, kalorické deficity, dětské BMI, těhotenství) jde text na korekturu k nutričnímu terapeutovi nebo praktickému lékaři. Pokud najde nepřesnost, text upravujeme – ne my, on/ona.
5. **Citace zdrojů** – každý článek má sekci **Zdroje** s odkazy. U klíčových tvrzení uvádíme jméno studie/instituce přímo v textu.
6. **Aktualizace** – pole `Aktualizováno` u článku ukazuje datum poslední redakční revize. Články revidujeme minimálně jednou ročně, případně dříve při změně doporučení autoritativního zdroje (např. nové NICE guideline).

## Editorial standardy

- **Žádné placené umístění.** Neúčastníme se affiliate programů na doplňky stravy, dietní plány, kouče, suplementy ani léky. Reklamní prostor na webu provozujeme přes Google AdSense (kontextová reklama, kterou neurčujeme), nikdy ne jako native obsah.
- **Žádné sponzorované články.** Pokud někdy budeme spolupracovat s instituci na obsahu (např. preventivní kampaň), bude to **jasně označené** v hlavičce článku.
- **Žádná pseudověda.** Detox čaje, „spalovače tuků", odkyselování, bezhladovkové diety, alkalická voda, miracle morning techniky – tohle u nás nenajdete. Pokud autor tvrdí, že má bezbolestnou cestu k hubnutí, lže.
- **Transparentní limity.** Každý vzorec a každá tabulka má v textu uvedené, **kdy nefunguje** (sportovci se zvýšenou svalovou hmotou, senioři, těhotné ženy, etnické rozdíly). BMI samo o sobě má 100 let starou metodiku a my to nezakrýváme – viz [BMI vs. jiné metody](/bmi-vs-jine-metody/).
- **Žádné lékařské diagnózy.** Kalkulačky a články jsou **orientační**. Pro klinické rozhodnutí (jestli máte obezitu, jestli máte hubnout, jak agresivní deficit zvolit) vždy konzultujte praktického lékaře, nutričního terapeutu nebo obezitologa.

## Odkud čerpáme

Při tvorbě výpočtů a tabulek vycházíme z primárních zdrojů:

- **BMI klasifikace** – [WHO, Body Mass Index](https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/body-mass-index) a [CDC Adult BMI](https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html).
- **BMI u dětí** – percentilové grafy CDC a WHO Growth Reference (5–19 let).
- **Bazální metabolismus (BMR)** – rovnice [Mifflin–St Jeor (1990)](https://pubmed.ncbi.nlm.nih.gov/2305711/), v klinické praxi přesnější než Harris–Benedict.
- **Kalorický deficit** – doporučení [NICE NG246](https://www.nice.org.uk/guidance/ng246) (500–600 kcal/den, 0,5–1 kg týdně).
- **Obvod pasu k výšce (WHtR)** – [Ashwell & Hsieh (2014)](https://pubmed.ncbi.nlm.nih.gov/24417568/), prahy <0,5 (zdravé) až ≥0,6 (vysoké riziko).
- **Tepové zóny** – Karvonenova formule a tepový rezerv, [American Heart Association](https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates).
- **Česká epidemiologie** – [ÚZIS – Zdravotnická ročenka ČR](https://www.uzis.cz/) a Národní zdravotní registr.

Kompletní metodiku výpočtů s odkazy na primární prameny najdete na samostatné stránce [Metodika](/metodika/).

## Co u nás nenajdete

- **Diagnostické nástroje.** Žádná kalkulačka na webu nepředstavuje lékařské vyšetření. Pokud máte zdravotní obtíže, jděte k lékaři, ne k nám.
- **Jídelníčky na míru.** Neposíláme PDF s 30-denním jídelníčkem za 990 Kč. Nutričně individuální plán dělá nutriční terapeut osobně.
- **Affiliate odkazy na suplementy.** Pokud doporučujeme něco konkrétního (vitamin D u seniorů, kreatin u silových sportovců), je to proto, že to doporučuje primární zdroj, a odkaz nepřináší žádný benefit nám.
- **Tlak na konverzi.** Nemáme push notifikace, popupy, ani odpočet do konce „akce". Jediné, co děláme, je dobrovolná donate hláška na konci textů – přijímáme jednorázové podpory přes Stripe.

## Ochrana soukromí

Kalkulačky běží **plně v prohlížeči**. Vaše výška, váha, věk ani jiné údaje se neodesílají na server, nikam neukládáme, nikomu nesdílíme. Měříme jen anonymní návštěvnost přes Google Analytics 4 (lze opt-out přes cookie banner). Detaily viz [Ochrana soukromí](/ochrana-soukromi/).

## Aktualizace obsahu

Žijeme v době, kdy se doporučení v obezitologii mění rychle – příchod GLP-1 analogů (semaglutid, tirzepatid) v posledních letech zásadně proměnil léčbu obezity 2. a 3. stupně. Naše články to musí reflektovat:

- **Roční revize** – každý článek má v plánu rešerši alespoň jednou za 12 měsíců.
- **Mimořádná revize** – pokud autoritativní zdroj (WHO, NICE, ESC) vydá nové doporučení k tématu, do 90 dnů upravujeme dotčené články.
- **Veřejná změna** – datum poslední aktualizace najdete v hlavičce každého článku jako `Aktualizováno DD. MM. YYYY`. Při zásadní změně doplňujeme do textu krátkou poznámku `Aktualizace YYYY-MM:`.

## Disclaimer

Obsah na webu Ideální BMI má **informativní a edukační charakter**. Není to lékařská konzultace, diagnóza, doporučení k léčbě ani náhrada péče praktického lékaře, obezitologa nebo nutričního terapeuta. Provozovatel neodpovídá za případné škody vzniklé z aplikace informací z webu bez konzultace s odborníkem.

Pokud máte zdravotní potíže (extrémní hubnutí nebo přibírání, bolesti, dušnost, vyčerpání), jakékoliv klinické rozhodnutí konzultujte s lékařem. V akutní situaci volejte 155 nebo 112.

## Něco vás zaujalo, něco vám chybí?

Připomínky, návrhy tématu, opravy faktických chyb i jen poděkování posílejte na [hello@codewhiskers.app](mailto:hello@codewhiskers.app). Odpovídáme do 5 pracovních dní. Více najdete na stránce [Kontakt](/kontakt/).
