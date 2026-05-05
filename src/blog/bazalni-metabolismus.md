---
layout: layouts/article.njk
title: "Bazální metabolismus: výpočet, vzorce a kalkulačka"
description: "Vypočítejte si bazální metabolismus (BMR) pomocí ověřených vzorců. Zjistěte, kolik kalorií spalujete v klidu a jak BMR využít při hubnutí."
permalink: /bazalni-metabolismus/
date: 2026-04-25
dateModified: 2026-05-05
category: "Metabolismus"
perex: "…"
heroImage: "/img/bazalni-metabolismus.webp"
heroAlt: "Bazální metabolismus: výpočet, vzorce a kalkulačka"
ogImage: "/img/og-bazalni-metabolismus.png"
sources:
  - { label: "Mifflin MD et al. – A new predictive equation for resting energy expenditure", url: "https://pubmed.ncbi.nlm.nih.gov/2305711/" }
  - { label: "NIH – Body Weight Planner / Energy expenditure", url: "https://www.niddk.nih.gov/bwp" }
  - { label: "WHO – Obesity and overweight", url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" }
  - { label: "Harris JA, Benedict FG. – A biometric study of basal metabolism", url: "https://pubmed.ncbi.nlm.nih.gov/16576330/" }
jsonld:
  - "@context": "https://schema.org"
    "@type": "Article"
    headline: "Bazální metabolismus: výpočet, vzorce a kalkulačka"
    description: "Vypočítejte si bazální metabolismus (BMR) pomocí ověřených vzorců. Zjistěte, kolik kalorií spalujete v klidu a jak BMR využít při hubnutí."
    datePublished: "2026-04-25"
    dateModified: "2026-05-05"
    author:
      "@type": "Organization"
      name: "Ideální BMI"
    publisher:
      "@type": "Organization"
      name: "CodeWhiskers"
      logo:
        "@type": "ImageObject"
        url: "https://idealnibmi.com/img/BMI-calc.png"
    image: "https://idealnibmi.com/img/og-bazalni-metabolismus.png"
    mainEntityOfPage: "https://idealnibmi.com/bazalni-metabolismus/"
---

<p>Znalost bazálního metabolismu je klíčová pro nastavení správného kalorického příjmu při hubnutí. Pokud jíte pod úroveň BMR, riskujete zpomalení metabolismu, ztrátu svalové hmoty a zdravotní problémy. V tomto článku vám ukážeme, jak si BMR vypočítat a jak ho využít v praxi.</p>

<h2>Jak vypočítat bazální metabolismus</h2>
<p>Existuje několik ověřených vzorců pro výpočet BMR. Nejpoužívanější jsou dva:</p>

<h3>1. Mifflin-St Jeor (nejpřesnější pro většinu lidí)</h3>

<p><strong>Muži:</strong> BMR = 10 × váha (kg) + 6,25 × výška (cm) − 5 × věk + 5</p>
<p><strong>Ženy:</strong> BMR = 10 × váha (kg) + 6,25 × výška (cm) − 5 × věk − 161</p>

<h3>2. Harris-Benedict (revidovaný)</h3>

<p><strong>Muži:</strong> BMR = 88,362 + 13,397 × váha (kg) + 4,799 × výška (cm) − 5,677 × věk</p>
<p><strong>Ženy:</strong> BMR = 447,593 + 9,247 × váha (kg) + 3,098 × výška (cm) − 4,330 × věk</p>

<h3>Který vzorec použít?</h3>
<p>Pro většinu lidí je <strong>Mifflin-St Jeor přesnější</strong>, zejména pro osoby s nadváhou nebo obezitou. Harris-Benedict má tendenci BMR mírně nadhodnocovat. Oba vzorce jsou ale dostatečně přesné pro orientační výpočet.</p>

<h3>Příklady výpočtu</h3>
<table>
<thead><tr><th>Osoba</th><th>Mifflin-St Jeor</th><th>Harris-Benedict</th></tr></thead>
<tbody>
<tr><td>Žena, 70 kg, 165 cm, 35 let</td><td>1 376 kcal</td><td>1 439 kcal</td></tr>
<tr><td>Muž, 85 kg, 180 cm, 40 let</td><td>1 780 kcal</td><td>1 841 kcal</td></tr>
<tr><td>Žena, 60 kg, 170 cm, 25 let</td><td>1 338 kcal</td><td>1 413 kcal</td></tr>
<tr><td>Muž, 100 kg, 175 cm, 50 let</td><td>1 849 kcal</td><td>1 934 kcal</td></tr>
</tbody>
</table>

<img src="/img/bmr-kalkulacka.webp" alt="Osoba s kalkulačkou pro výpočet kalorií" loading="lazy">

<h2>Od bazálního metabolismu k celkovému výdeji (TDEE)</h2>
<p>BMR říká, kolik kalorií spalujete v absolutním klidu. Ale vy přece neleříte celý den v posteli. Proto potřebujete spočítat <strong>TDEE</strong> (Total Daily Energy Expenditure) – celkový denní energetický výdej, který zahrnuje i pohyb.</p>

<h3>Výpočet TDEE</h3>

<p><strong>TDEE = BMR × koeficient aktivity</strong></p>

<table>
<thead><tr><th>Úroveň aktivity</th><th>Koeficient</th><th>Příklad</th></tr></thead>
<tbody>
<tr><td>Sedavá</td><td>1,2</td><td>Kancelářská práce, minimum pohybu</td></tr>
<tr><td>Mírně aktivní</td><td>1,375</td><td>Lehké cvičení 1–3× týdně</td></tr>
<tr><td>Středně aktivní</td><td>1,55</td><td>Cvičení 3–5× týdně</td></tr>
<tr><td>Velmi aktivní</td><td>1,725</td><td>Intenzivní cvičení 6–7× týdně</td></tr>
<tr><td>Extrémně aktivní</td><td>1,9</td><td>Fyzicky náročná práce + trénink</td></tr>
</tbody>
</table>

<h3>Příklad</h3>
<p>Žena, 70 kg, 165 cm, 35 let, středně aktivní:</p>
<ul>
<li>BMR (Mifflin-St Jeor) = 1 376 kcal</li>
<li>TDEE = 1 376 × 1,55 = <strong>2 133 kcal</strong></li>
<li>Pro hubnutí (deficit 400 kcal) = <strong>~1 730 kcal denně</strong></li>
</ul>
<p>Podrobněji o nastavení kalorického deficitu se dočtete v článku o <a href="/pocitani-kalorii/">počítání kalorií při hubnutí</a>.</p>

<h2>Jak zvýšit bazální metabolismus</h2>
<p>Bazální metabolismus můžete do určité míry ovlivnit. Hlavní pákou je <strong>složení těla</strong> – čím více svalové hmoty máte, tím vyšší je váš BMR.</p>

<h3>Ověřené způsoby</h3>
<ol>
<li><strong>Silový trénink</strong> – buduje svalovou hmotu, která spaluje energii i v klidu. Každý kg svalů navíc = ~13 kcal/den navíc. Více v článku o <a href="/metabolismus/">metabolismu</a>.</li>
<li><strong>Dostatečný příjem bílkovin</strong> – bílkoviny mají termický efekt 20–30 % (tělo spotřebuje energii na jejich trávení) a chrání svaly při hubnutí.</li>
<li><strong>Nepodkračujte BMR</strong> – pokud jíte méně kalorií, než je váš bazální metabolismus, tělo přepne do „úsporného režimu" a metabolismus zpomalí.</li>
<li><strong>Kvalitní spánek</strong> – 7–9 hodin. Nedostatek spánku snižuje BMR i leptin (hormon sytosti).</li>
<li><strong>Zvyšujte NEAT</strong> – denní pohyb mimo trénink (chůze, schody, stání) zvyšuje celkový výdej, i když přímo nemění BMR.</li>
</ol>

<h2>Bazální metabolismus a hubnutí</h2>
<p>Pochopení BMR je pro hubnutí zásadní. Zde jsou klíčové zásady:</p>

<h3>Nikdy nejezte pod BMR</h3>
<p>Váš kalorický příjem při hubnutí by neměl klesnout pod hodnotu bazálního metabolismu. Pod touto hranicí tělo:</p>
<ul>
<li>Zpomaluje metabolismus (adaptivní termogeneze)</li>
<li>Spaluje svalovou hmotu místo tuku</li>
<li>Zvyšuje chuť k jídlu a hladinu ghrelinu</li>
<li>Zvyšuje riziko jo-jo efektu</li>
</ul>

<h3>Správné nastavení kalorického deficitu</h3>
<table>
<thead><tr><th>Parametr</th><th>Doporučení</th></tr></thead>
<tbody>
<tr><td>Minimální příjem</td><td>Nikdy pod BMR (obvykle 1 200–1 500 kcal u žen, 1 500–1 800 u mužů)</td></tr>
<tr><td>Deficit</td><td>300–500 kcal pod TDEE</td></tr>
<tr><td>Tempo hubnutí</td><td>0,5–1 kg týdně</td></tr>
<tr><td>Bílkoviny</td><td>1,2–2 g/kg hmotnosti denně</td></tr>
</tbody>
</table>

<h3>Proč se váha zastaví</h3>
<p>Při hubnutí klesá vaše hmotnost – a s ní i BMR. Tělo lehčího člověka prostě potřebuje méně energie. Proto se hubnutí postupně zpomaluje a je nutné buď mírně snížit příjem, nebo zvýšit pohyb. Přepočítávejte si BMR přibližně každých 5 kg.</p>

<h2>Shrnutí</h2>
<ul>
<li>Bazální metabolismus (BMR) = energie na udržení života v klidu = <strong>60–70 %</strong> celkového výdeje</li>
<li>Nejpřesnější vzorec: <strong>Mifflin-St Jeor</strong></li>
<li>TDEE = BMR × koeficient aktivity → základ pro nastavení kalorického příjmu</li>
<li>Při hubnutí nikdy <strong>nejezte pod BMR</strong></li>
<li>BMR zvýšíte hlavně <strong>silovým tréninkem a dostatkem bílkovin</strong></li>
<li>Přepočítávejte BMR každých ~5 kg úbytku</li>
</ul>
<p><a href="/">Spočítejte si své BMI</a> a zjistěte, kde stojíte. Pokud chcete pochopit metabolismus jako celek, přečtěte si náš článek <a href="/metabolismus/">Co je metabolismus</a>.</p>

## Kdy konzultovat s odborníkem

Online vzorce pro BMR jsou orientační. Pokud máte nestandardní složení těla (vysoký podíl svalů, otoky, hormonální poruchy), skutečný BMR se může od výpočtu lišit i o 200–400 kcal.

Doporučujeme konzultaci, pokud:

- **Máte podezření na poruchu štítné žlázy** – praktický lékař vás pošle na TSH a fT4.
- **Hubnete při velkém deficitu a stagnujete** – nutriční terapeut posoudí adaptaci metabolismu.
- **Trpíte únavou, ztrátou energie a chladem** – známky příliš nízkého kalorického příjmu.

Pro přesné měření klidového výdeje energie existuje **nepřímá kalorimetrie** (dostupná v některých obezitologických centrech).
