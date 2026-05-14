---
layout: layouts/article.njk
title: "Bazální metabolismus: výpočet, vzorce a kalkulačka"
description: "Bazální metabolismus (BMR) – co to je, jak ho spočítat (Mifflin-St Jeor, Harris-Benedict), co ho ovlivňuje a jak ho využít při hubnutí. S příklady a kalkulačkou."
permalink: /bazalni-metabolismus/
date: 2026-04-25
dateModified: 2026-05-10
category: "Metabolismus"
perex: "Bazální metabolismus (BMR) je energie, kterou tělo spotřebuje jen tak, abyste přežili klidný den. Spočítáte si ho za půl minuty a získáte základ pro každé hubnutí, přibírání nebo udržování váhy."
heroImage: "/img/bazalni-metabolismus.webp"
heroAlt: "Bazální metabolismus: výpočet, vzorce a kalkulačka"
ogImage: "/img/og-bazalni-metabolismus.png"
sources:
  - { label: "Mifflin MD et al. – A new predictive equation for resting energy expenditure (Am J Clin Nutr 1990)", url: "https://pubmed.ncbi.nlm.nih.gov/2305711/" }
  - { label: "Harris JA, Benedict FG. – A biometric study of basal metabolism (1919)", url: "https://pubmed.ncbi.nlm.nih.gov/16576330/" }
  - { label: "Pontzer H et al. – Daily energy expenditure through the human life course (Science 2021)", url: "https://pubmed.ncbi.nlm.nih.gov/34385400/" }
  - { label: "Frankenfield D et al. – Comparison of predictive equations for resting metabolic rate (J Am Diet Assoc 2005)", url: "https://pubmed.ncbi.nlm.nih.gov/15883556/" }
  - { label: "Cunningham JJ. – Body composition as a determinant of energy expenditure (Am J Clin Nutr 1991)", url: "https://pubmed.ncbi.nlm.nih.gov/1858706/" }
  - { label: "NIH NIDDK – Body Weight Planner", url: "https://www.niddk.nih.gov/bwp" }
  - { label: "Müller MJ et al. – Functional body composition and related aspects in research on obesity (Obes Rev 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29280300/" }
  - { label: "WHO – Obesity and overweight", url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" }
jsonld:
  - "@context": "https://schema.org"
    "@type": "Article"
    headline: "Bazální metabolismus: výpočet, vzorce a kalkulačka"
    description: "Bazální metabolismus (BMR) – co to je, jak ho spočítat, co ho ovlivňuje a jak ho využít při hubnutí."
    datePublished: "2026-04-25"
    dateModified: "2026-05-10"
    author:
      "@type": "Organization"
      name: "Ideální BMI"
    publisher:
      "@type": "Organization"
      name: "Lidmila Maršálková"
      logo:
        "@type": "ImageObject"
        url: "https://idealnibmi.com/img/BMI-calc.png"
    image: "https://idealnibmi.com/img/og-bazalni-metabolismus.png"
    mainEntityOfPage: "https://idealnibmi.com/bazalni-metabolismus/"
  - "@context": "https://schema.org"
    "@type": "FAQPage"
    mainEntity:
      - "@type": "Question"
        name: "Co je bazální metabolismus?"
        acceptedAnswer:
          "@type": "Answer"
          text: "Bazální metabolismus (BMR) je množství energie, které tělo spotřebuje na udržení základních životních funkcí v naprostém klidu – dýchání, oběh, buněčné procesy, udržování tělesné teploty. Tvoří 60–70 % celkového denního výdeje energie. U průměrné dospělé ženy je to 1 300–1 500 kcal, u muže 1 600–1 900 kcal."
      - "@type": "Question"
        name: "Jaký vzorec pro BMR je nejpřesnější?"
        acceptedAnswer:
          "@type": "Answer"
          text: "Pro většinu lidí je nejpřesnější Mifflin-St Jeor (1990). Validační studie Frankenfielda (2005) ukázala, že u osob s normální i vyšší hmotností odhaduje BMR s chybou ±10 %. Harris-Benedict má tendenci BMR mírně nadhodnocovat. U sportovců s vysokým podílem svalů je přesnější Cunningham vzorec, který zohledňuje fat-free mass."
      - "@type": "Question"
        name: "Můžu zvýšit svůj bazální metabolismus?"
        acceptedAnswer:
          "@type": "Answer"
          text: "Ano, ale realisticky o 100–200 kcal denně. Hlavní páka je svalová hmota: každý kilogram svalů spálí navíc cca 13 kcal denně. Silový trénink, dostatek bílkovin (1,6–2,2 g/kg) a kvalitní spánek jsou tři ověřené páky. Naopak zelený čaj, kávový extrakt a 'jíst často' BMR významně nezvýší."
      - "@type": "Question"
        name: "Klesá metabolismus s věkem?"
        acceptedAnswer:
          "@type": "Answer"
          text: "Méně, než se říká. Studie Pontzera et al. (Science 2021) ukázala, že BMR upravený podle hmotnosti zůstává relativně stabilní mezi 20.–60. rokem a klesá až po šedesátce (cca 0,7 % ročně). 'Pomalý metabolismus po čtyřicítce' je tedy z 80 % způsobený ztrátou svalů a nižší aktivitou, ne věkem samotným."
      - "@type": "Question"
        name: "Můžu jíst pod úroveň BMR?"
        acceptedAnswer:
          "@type": "Answer"
          text: "Krátkodobě ano, dlouhodobě ne. Pokud jíte pod BMR (typicky pod 1 200 kcal u žen, 1 500 u mužů), tělo přepíná do úsporného režimu: BMR klesne o 5–15 % (adaptivní termogeneze), klesá hladina hormonů štítné žlázy, ztrácíte svaly a zhoršuje se nálada. Bezpečný kalorický deficit je 300–500 kcal pod TDEE, ne pod BMR."
---

Bazální metabolismus (BMR) je základní pojem každého plánu na hubnutí, přibírání nebo udržování váhy. Říká, **kolik energie vaše tělo spotřebuje, když celý den nic neděláte** – jen dýcháte, srdce bije, mozek pracuje. Tahle hodnota tvoří 60–70 % celkového denního výdeje a slouží jako výchozí bod pro výpočet kalorického příjmu.

V tomto článku se dozvíte, co BMR přesně je, jak si ho spočítat dvěma nejpoužívanějšími vzorci (Mifflin-St Jeor a Harris-Benedict), co ho reálně ovlivňuje, jak ho využít při hubnutí a které „triky na zrychlení metabolismu" nefungují. Na konci najdete FAQ s nejčastějšími otázkami a kdy stojí za to konzultovat lékaře.

## Co je bazální metabolismus

**Bazální metabolismus (BMR, Basal Metabolic Rate)** je množství energie, kterou tělo spotřebuje za 24 hodin v podmínkách úplného klidu. Měřeno přesně to znamená: vleže, nalačno (12+ hodin), v termoneutrálním prostředí, při klidu duše i těla. V praxi se používá termín **klidový metabolismus (RMR, Resting Metabolic Rate)**, který je o 5–10 % vyšší a měří se za méně přísných podmínek. Pro běžné použití rozdíl ignorujeme.

### Na co tělo BMR utratí

Energie z BMR jde na **udržování orgánů a buněčných procesů**. Podle [Müller et al. (Obes Rev 2018)](https://pubmed.ncbi.nlm.nih.gov/29280300/) je rozdělení zhruba následující:

| Orgán / tkáň | Podíl BMR | Pozn. |
|---|---|---|
| Játra | 21 % | Detoxikace, glukoneogeneze |
| Mozek | 20 % | Konstantní, nelze redukovat |
| Kosterní svaly (v klidu) | 22 % | Roste s objemem svalů |
| Srdce | 9 % | Konstantní |
| Ledviny | 8 % | Filtrace |
| Tuková tkáň | 4 % | Velmi nízká aktivita |
| Ostatní (kosti, kůže, GIT) | 16 % | – |

**Klíčové poznatky:** mozek a játra dohromady spotřebují více než 40 % BMR a tato část je prakticky neměnná. Tuk spaluje minimum, takže lidé se stejnou hmotností, ale různým podílem tuku, mají různý BMR.

### BMR vs. TDEE

BMR je jen základ. Celkový denní výdej (**TDEE, Total Daily Energy Expenditure**) zahrnuje navíc:

- **Termický efekt potravy (TEF)** – energie na trávení, ~10 % příjmu
- **Cvičení (EAT)** – cílený trénink, 5–15 % výdeje
- **NEAT** – pohyb mimo trénink (chůze, schody, postávání), 15–30 % výdeje

Pro [BMI kalkulačku](/) ani pro hubnutí samotné BMR nestačí – musíme z něj spočítat TDEE.

## Jak vypočítat bazální metabolismus

Existuje několik ověřených vzorců. Nejpoužívanější jsou dva, plus jeden specializovaný pro sportovce.

### 1. Mifflin-St Jeor (nejpřesnější pro většinu lidí)

Publikováno [Mifflinem a kolegy v Am J Clin Nutr 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/). Validace [Frankenfielda 2005](https://pubmed.ncbi.nlm.nih.gov/15883556/) ho označila za nejpřesnější u dospělé populace s odchylkou ±10 %.

> **Muži:** BMR = 10 × váha (kg) + 6,25 × výška (cm) − 5 × věk + 5
>
> **Ženy:** BMR = 10 × váha (kg) + 6,25 × výška (cm) − 5 × věk − 161

### 2. Harris-Benedict (revidovaný)

Původní Harris-Benedict pochází z roku 1919 ([studie zde](https://pubmed.ncbi.nlm.nih.gov/16576330/)). Revize v 80. letech zlepšila přesnost, ale stále má tendenci BMR **mírně nadhodnocovat**, zejména u lidí s nadváhou.

> **Muži:** BMR = 88,362 + 13,397 × váha (kg) + 4,799 × výška (cm) − 5,677 × věk
>
> **Ženy:** BMR = 447,593 + 9,247 × váha (kg) + 3,098 × výška (cm) − 4,330 × věk

### 3. Cunningham (pro sportovce s vysokým FFM)

[Cunningham (1991)](https://pubmed.ncbi.nlm.nih.gov/1858706/) navrhl vzorec, který nezohledňuje pohlaví a věk, ale **fat-free mass (FFM)** – beztukovou hmotu. Pro sportovce a kulturisty je často přesnější:

> **BMR = 500 + 22 × FFM (kg)**

Příklad: muž 90 kg, 12 % tuku → FFM = 79,2 kg → BMR = 500 + 22 × 79,2 = **2 242 kcal**.

Pro běžnou populaci je rozdíl mezi Mifflin a Cunningham zanedbatelný. Použijte ho jen, pokud znáte své procento tuku z DEXA nebo přesné bioimpedance.

### Příklady výpočtu

| Osoba | Mifflin-St Jeor | Harris-Benedict | Rozdíl |
|---|---|---|---|
| Žena, 70 kg, 165 cm, 35 let | 1 376 kcal | 1 439 kcal | +63 |
| Muž, 85 kg, 180 cm, 40 let | 1 780 kcal | 1 841 kcal | +61 |
| Žena, 60 kg, 170 cm, 25 let | 1 338 kcal | 1 413 kcal | +75 |
| Muž, 100 kg, 175 cm, 50 let | 1 849 kcal | 1 934 kcal | +85 |

Místo ručního počítání použijte naši [BMR / TDEE kalkulačku](/kalkulacka-bmr/), která vrací oba vzorce + TDEE pro pět úrovní aktivity.

## Od BMR k TDEE: kolik kalorií opravdu spálíte

BMR sám o sobě k ničemu praktickému nestačí. Pro plánování diety potřebujete **TDEE** – kolik kalorií tělo spálí za celý den včetně pohybu.

> **TDEE = BMR × koeficient aktivity**

| Úroveň aktivity | Koeficient | Příklad života |
|---|---|---|
| Sedavá | 1,2 | Kancelář, žádné cvičení |
| Mírně aktivní | 1,375 | Lehké cvičení 1–3× týdně |
| Středně aktivní | 1,55 | Cvičení 3–5× týdně |
| Velmi aktivní | 1,725 | Intenzivní trénink 6–7× týdně |
| Extrémně aktivní | 1,9 | Fyzická práce + trénink |

### Reálný příklad

Žena, 70 kg, 165 cm, 35 let, středně aktivní:

- BMR (Mifflin-St Jeor) = **1 376 kcal**
- TDEE = 1 376 × 1,55 = **2 133 kcal**
- Pro hubnutí (deficit 400 kcal) cílový příjem = **~1 730 kcal denně**

Pozor: koeficienty aktivity jsou **statistický odhad**. Pokud máte sedavou práci, ale pravidelně cvičíte, jste typicky mezi 1,375 a 1,55. Pokud chodíte 12 000 kroků denně, jste blíž 1,55. Sledujte výsledek 4–6 týdnů a upravte podle reality.

Více o praktickém [počítání kalorií najdete v samostatném článku](/pocitani-kalorii/).

## Co bazální metabolismus ovlivňuje

BMR není pevná hodnota – mění se podle několika faktorů. Některé ovlivnit můžete, jiné ne.

### Co ovlivnit můžete

- **Svalová hmota** – největší modifikovatelná páka. Každý kilogram svalů navíc spálí cca **13 kcal denně**. 5 kg více svalů = 65 kcal/den, 24 000 kcal/rok = ~3 kg tuku rozdílu při stejném příjmu.
- **Aktivita a kondice** – pravidelně trénované tělo má díky vyšší enzymatické aktivitě BMR o 3–5 % vyšší.
- **Termoregulace** – chladnější prostředí mírně zvyšuje BMR (až o 5 % při 18 °C oproti 24 °C). Klinicky zanedbatelné.

### Co ovlivnit nemůžete (snadno)

- **Genetika** – tvoří odhadem 30–40 % rozdílů v BMR mezi lidmi.
- **Věk** – po 60. roce klesá BMR o cca 0,7 % ročně podle [Pontzera et al. (Science 2021)](https://pubmed.ncbi.nlm.nih.gov/34385400/). Mezi 20.–60. rokem je překvapivě stabilní, takže „pomalý metabolismus po 40" je z většiny případů důsledek ztráty svalů, ne věku.
- **Pohlaví** – muži mají v průměru o 5–10 % vyšší BMR díky vyššímu podílu svalů.
- **Hormony** – štítná žláza (T3, T4) reguluje BMR. Hypotyreóza ho snižuje o 10–30 %, hyperthyreóza zvyšuje.
- **Nemoci a horečka** – horečka zvyšuje BMR o 13 % na každý °C nad 37.
- **Těhotenství a kojení** – BMR stoupá o 15–25 % v 2. a 3. trimestru.

### Adaptivní termogeneze (proč se hubnutí zpomaluje)

Když dlouhodobě jíte méně, tělo se adaptuje: BMR klesne **o 5–15 % nad rámec očekávaného poklesu z úbytku váhy**. Tomuto jevu se říká **adaptivní termogeneze** a je hlavní příčina stagnací při dlouhých dietách. Studie publikovaná v Obesity (Rosenbaum 2008) ukázala, že lidé, kteří zhubli o 10 % hmotnosti, měli BMR o 250–400 kcal nižší, než by odpovídalo nové váze.

Praktický důsledek: při hubnutí **přepočítávejte TDEE každých 5 kg úbytku** a nezvyšujte deficit, když stagnujete – často pomůže refeed den nebo krátká přestávka v dietě.

## Mýty o metabolismu

Internet je plný „triků na zrychlení metabolismu". Většina z nich nefunguje nebo je efekt klinicky zanedbatelný.

| Mýtus | Realita |
|---|---|
| **„Jezte 6× denně, zrychlí to metabolismus."** | Mýtus. TEF (termický efekt potravy) je 10 % příjmu nezávisle na frekvenci jídel. 3× nebo 6× za den vychází stejně. |
| **„Zelený čaj a kofein spalují tuk."** | Efekt je reálný, ale malý: 50–100 kcal/den navíc. Žádná dieta se na něm nedá postavit. |
| **„Pikantní jídlo zrychlí metabolismus."** | Capsaicin (chilli) zvyšuje BMR o ~30 kcal po dobu 1–2 hodin. Klinicky zanedbatelné. |
| **„Cardio je nejlepší pro zrychlení metabolismu."** | Naopak. Silový trénink přidává svaly, kardio ne. Pro dlouhodobý nárůst BMR je silový důležitější. |
| **„Pijte studenou vodu, tělo ji musí zahřát."** | Efekt 4–7 kcal na sklenici. Pijte vodu, ale ne kvůli BMR. |
| **„Detox dieta resetuje metabolismus."** | Vědecky neexistuje. Játra a ledviny detoxikují non-stop, žádná „čistka" tomu nepomůže. |

Co opravdu funguje na nárůst BMR:

1. **Silový trénink** 2–3× týdně – buduje svaly, které spalují energii i v klidu.
2. **Bílkoviny 1,6–2,2 g/kg** – mají TEF 20–30 %, drží svaly při hubnutí.
3. **Spánek 7–9 hodin** – nedostatek snižuje BMR i hladinu leptinu (hormon sytosti).
4. **NEAT** – chůze, schody, stání. Nezvyšuje přímo BMR, ale výrazně zvedá TDEE.
5. **Nepodkračujte BMR dlouhodobě** – aby se neaktivovala adaptivní termogeneze.

## Bazální metabolismus a hubnutí

Pochopení BMR je pro hubnutí zásadní. Tady jsou tři klíčové zásady.

### Pravidlo 1: nikdy nejezte dlouhodobě pod BMR

Váš kalorický příjem při hubnutí by neměl klesnout pod hodnotu BMR. Pod touto hranicí tělo:

- zpomaluje metabolismus (adaptivní termogeneze, pokles 5–15 % BMR),
- spaluje svalovou hmotu místo tuku,
- zvyšuje hladinu ghrelinu (chuť k jídlu) a snižuje leptin,
- snižuje hladinu hormonů štítné žlázy,
- zvyšuje riziko jojo efektu po návratu k normálu.

Praktická hranice: **1 200 kcal u žen, 1 500 kcal u mužů**. Pod tím jen krátkodobě a pod dohledem.

### Pravidlo 2: deficit 300–500 kcal pod TDEE, ne pod BMR

Bezpečný a udržitelný deficit je 300–500 kcal denně **z TDEE**, ne z BMR. Pro ženu z předchozího příkladu (TDEE 2 133, BMR 1 376):

- Cílový příjem při hubnutí: 1 633–1 833 kcal
- Tempo úbytku: 0,3–0,6 kg za týden
- Příjem **stále nad BMR**, takže se metabolismus nezpomaluje

Více o nastavení deficitu v pillar článku [Jak snížit BMI](/jak-snizit-bmi/).

### Pravidlo 3: přepočítávejte při úbytku váhy

Když zhubnete 5 kg, váš BMR klesne o cca 50 kcal/den (lehčí tělo potřebuje méně energie). Pokud cílový příjem nepřepočítáte, deficit se zmenší a hubnutí zpomalí. **Po každých 5 kg si znovu spočítejte TDEE** v [BMR kalkulačce](/kalkulacka-bmr/).

| Parametr | Doporučení |
|---|---|
| Minimální příjem | Nikdy pod BMR (1 200 kcal ženy, 1 500 muži) |
| Optimální deficit | 300–500 kcal pod TDEE |
| Tempo hubnutí | 0,5–1 kg týdně |
| Bílkoviny | 1,6–2,2 g/kg hmotnosti |
| Přepočet TDEE | Každých 5 kg úbytku |

Pokud hubnete po 50. roce, kde se sarkopenie a hormonální změny přidávají, podívejte se na [hubnutí po 50](/hubnuti-po-50/) – tam jsou specifika.

## Jak BMR měřit přesně

Vzorce dávají odhad s odchylkou ±10 %. Pokud potřebujete přesnější číslo (např. při stagnaci, podezření na hormonální poruchu nebo u sportovců), existují klinické metody.

### Nepřímá kalorimetrie (zlatý standard)

Měří spotřebu kyslíku a produkci CO₂ pomocí dýchací masky během 20–30 minut v klidu. Z toho přesně dopočítá BMR. **Přesnost ±2 %**, ale dostupnost v ČR je omezená – některá obezitologická centra, sportovní laboratoře a nemocnice. Cena: 800–2 500 Kč mimo pojištění.

### Bioimpedanční analýza (BIA)

Klasická „váha s elektrodami" měří odpor těla a odhadne FFM, ze kterého spočítá BMR (Cunningham). **Přesnost ±5–10 %**, levnější (vyšetření v lékárně 200–500 Kč) a dostupnější. Klinicky použitelné, ale ovlivňuje ji hydratace, doba od jídla a tréninku.

### DEXA sken

Rentgenová absorpciometrie. Změří přesně FFM a tukovou hmotu. **Přesnost ±3 %**, ale není primárně určená k měření BMR – BMR se z FFM dopočítává. Cena 1 500–3 000 Kč, dostupné v některých soukromých klinikách.

### Co stačí běžnému uživateli

Pro 95 % lidí Mifflin-St Jeor + sledování reálných výsledků 4–6 týdnů dá lepší obraz než drahá kalorimetrie. Vzorec spočítá orientační číslo, realita ho upraví podle toho, jak váš deficit funguje.

## Kdy konzultovat s odborníkem

Online vzorce pro BMR jsou orientační. Pokud máte nestandardní složení těla (vysoký podíl svalů, otoky, hormonální poruchy), skutečný BMR se může od výpočtu lišit i o 200–400 kcal.

Doporučujeme konzultaci, pokud:

- **Máte podezření na poruchu štítné žlázy** – praktický lékař vás pošle na TSH, fT4, případně protilátky. Hypotyreóza snižuje BMR o 10–30 %, snadno léčitelná hormonální substitucí.
- **Hubnete při velkém deficitu a stagnujete déle než 4 týdny** – nutriční terapeut posoudí adaptaci metabolismu a navrhne refeed nebo dietní pauzu.
- **Trpíte chronickou únavou, ztrátou energie, mrznutím a vypadáváním vlasů** – známky příliš nízkého kalorického příjmu nebo hypotyreózy.
- **Sportujete na vysoké úrovni** – sportovní lékař může doporučit nepřímou kalorimetrii pro přesné nastavení výživy.
- **Máte BMI nad 35** – obezitolog má přístup k přesnějšímu měření a komplexní léčbě (farmakoterapie GLP-1, bariatrie).

V ČR je nepřímá kalorimetrie dostupná v **obezitologických centrech** (Endokrinologický ústav v Praze, FN Brno, FN Olomouc) a některých sportovních laboratořích.

## Často kladené otázky

### Co je bazální metabolismus?

Bazální metabolismus (BMR) je množství energie, které tělo spotřebuje na udržení základních životních funkcí v naprostém klidu – dýchání, oběh, buněčné procesy, udržování tělesné teploty. Tvoří 60–70 % celkového denního výdeje energie. U průměrné dospělé ženy je to 1 300–1 500 kcal, u muže 1 600–1 900 kcal.

### Jaký vzorec pro BMR je nejpřesnější?

Pro většinu lidí je nejpřesnější Mifflin-St Jeor (1990). Validační studie Frankenfielda (2005) ukázala, že u osob s normální i vyšší hmotností odhaduje BMR s chybou ±10 %. Harris-Benedict má tendenci BMR mírně nadhodnocovat. U sportovců s vysokým podílem svalů je přesnější Cunningham vzorec, který zohledňuje fat-free mass.

### Můžu zvýšit svůj bazální metabolismus?

Ano, ale realisticky o 100–200 kcal denně. Hlavní páka je svalová hmota: každý kilogram svalů spálí navíc cca 13 kcal denně. Silový trénink, dostatek bílkovin (1,6–2,2 g/kg) a kvalitní spánek jsou tři ověřené páky. Naopak zelený čaj, kávový extrakt a „jíst často" BMR významně nezvýší.

### Klesá metabolismus s věkem?

Méně, než se říká. Studie Pontzera et al. (Science 2021) ukázala, že BMR upravený podle hmotnosti zůstává relativně stabilní mezi 20.–60. rokem a klesá až po šedesátce (cca 0,7 % ročně). „Pomalý metabolismus po čtyřicítce" je tedy z 80 % způsobený ztrátou svalů a nižší aktivitou, ne věkem samotným.

### Můžu jíst pod úroveň BMR?

Krátkodobě ano, dlouhodobě ne. Pokud jíte pod BMR (typicky pod 1 200 kcal u žen, 1 500 u mužů), tělo přepíná do úsporného režimu: BMR klesne o 5–15 % (adaptivní termogeneze), klesá hladina hormonů štítné žlázy, ztrácíte svaly a zhoršuje se nálada. Bezpečný kalorický deficit je 300–500 kcal pod TDEE, ne pod BMR.

### Proč mám stejný BMR jako kamarádka, ale ona nepřibírá a já ano?

Rozdíl bývá v **TDEE, ne v BMR**. Dva lidé se stejným BMR mohou mít různě aktivní lifestyle (NEAT), různě přesně počítat kalorie nebo různou citlivost na inzulin. Také hraje roli vědomá i nevědomá podhodnocování příjmu – studie ukazují, že většina lidí podhodnocuje příjem o 200–500 kcal denně, aniž si toho všimne.

### Jaký je rozdíl mezi BMR a RMR?

BMR (basal) se měří za přísných podmínek: ráno, vleže, nalačno 12+ hodin, v termoneutrálním prostředí. RMR (resting) je o 5–10 % vyšší a měří se za běžných klidových podmínek. Pro praktické použití (kalkulačka, nastavení diety) jsou hodnoty zaměnitelné.

---

**Shrnutí:** BMR = energie pro základní životní funkce v klidu, **60–70 % celkového výdeje**. Spočítejte si ho v [BMR kalkulačce](/kalkulacka-bmr/) podle vzorce Mifflin-St Jeor. Pro hubnutí: deficit 300–500 kcal **pod TDEE** (nikdy pod BMR), bílkoviny 1,6–2,2 g/kg, silový trénink 2–3× týdně, přepočet po každých 5 kg úbytku. Pokud chcete pochopit metabolismus jako celek, čtěte [článek o metabolismu](/metabolismus/). První krok udělejte teď: spočítejte si TDEE a porovnejte s vaším aktuálním příjmem – to je výchozí bod pro každou změnu.
