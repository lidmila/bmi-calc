---
layout: layouts/article.njk
title: "Kontakt"
description: "Kontaktní formulář pro redakci Ideální BMI – připomínky, návrhy tématu, opravy chyb i nabídky spolupráce."
permalink: /kontakt/
date: 2026-05-14
dateModified: 2026-05-14
category: "Web"
perex: "Napište nám připomínku k článku, návrh tématu nebo nabídku spolupráce. Ozveme se obvykle do 5 pracovních dní."
jsonld:
  - "@context": "https://schema.org"
    "@type": "ContactPage"
    name: "Kontakt – Ideální BMI"
    url: "https://idealnibmi.com/kontakt/"
    publisher:
      "@type": "Person"
      name: "Lidmila Maršálková"
      url: "https://idealnibmi.com/o-nas/"
    mainEntity:
      "@type": "Person"
      name: "Lidmila Maršálková"
      email: "hello@codewhiskers.app"
      url: "https://idealnibmi.com/o-nas/"
      contactPoint:
        "@type": "ContactPoint"
        contactType: "editorial"
        email: "hello@codewhiskers.app"
        areaServed: "CZ"
        availableLanguage: ["cs", "en"]
---

## Napište nám

Vyplňte formulář níže nebo nám pošlete e-mail na **[hello@codewhiskers.app](mailto:hello@codewhiskers.app)**. Obvykle odpovídáme do 5 pracovních dní.

<div class="not-prose my-8">
<form action="https://api.web3forms.com/submit" method="POST" class="card p-6 sm:p-8 grid gap-4">
  <input type="hidden" name="access_key" value="REPLACE_WITH_WEB3FORMS_KEY">
  <input type="hidden" name="subject" value="Zpráva z idealnibmi.com">
  <input type="hidden" name="from_name" value="Ideální BMI – kontaktní formulář">
  <input type="hidden" name="redirect" value="https://idealnibmi.com/kontakt/?odeslano=1">
  <input type="checkbox" name="botcheck" style="display:none">

  <div class="grid gap-4 sm:grid-cols-2">
    <div>
      <label class="label" for="kontakt-jmeno">Jméno</label>
      <input class="input" type="text" id="kontakt-jmeno" name="Jméno" required placeholder="Vaše jméno">
    </div>
    <div>
      <label class="label" for="kontakt-email">E-mail</label>
      <input class="input" type="email" id="kontakt-email" name="E-mail" required placeholder="vas@email.cz">
    </div>
  </div>

  <div>
    <label class="label" for="kontakt-tema">Téma zprávy</label>
    <select class="input" id="kontakt-tema" name="Téma" required>
      <option value="">Vyberte téma…</option>
      <option value="Připomínka k článku">Připomínka k článku</option>
      <option value="Návrh tématu">Návrh tématu</option>
      <option value="Faktická chyba">Faktická chyba v textu</option>
      <option value="Technická chyba">Technická chyba na webu</option>
      <option value="Spolupráce">Spolupráce / autorství</option>
      <option value="Mediální dotaz">Mediální dotaz</option>
      <option value="Jiné">Jiné</option>
    </select>
  </div>

  <div>
    <label class="label" for="kontakt-zprava">Vaše zpráva</label>
    <textarea class="input" id="kontakt-zprava" name="Zpráva" rows="6" required placeholder="Krátce popište, s čím se ozýváte. Pokud jde o článek, prosíme uveďte odkaz."></textarea>
  </div>

  <div class="flex items-start gap-2">
    <input type="checkbox" id="kontakt-souhlas" name="Souhlas s ochranou soukromí" required class="mt-1">
    <label for="kontakt-souhlas" class="text-sm text-slate-600 dark:text-slate-400">
      Souhlasím se zpracováním údajů pro účely zodpovězení dotazu podle <a href="/ochrana-soukromi/" class="text-brand-700 underline">Ochrany soukromí</a>.
    </label>
  </div>

  <button type="submit" class="btn-primary w-full sm:w-auto justify-self-start">Odeslat zprávu</button>

  <p class="text-xs text-slate-500 dark:text-slate-400">Formulář používá službu Web3Forms – zprávu doručí na <strong>hello@codewhiskers.app</strong>. Vaše údaje neukládáme.</p>
</form>
</div>

## S čím se na nás můžete obrátit

### Faktická chyba v článku
Najdete u nás zastaralý vzorec, špatnou citaci nebo nepřesnou statistiku? **Napište prosím konkrétně co a kde.** Pokud máte odkaz na primární zdroj (PubMed, oficiální doporučení), priorita roste. Opravu provedeme do 14 dnů a do hlavičky článku doplníme datum revize.

### Návrh tématu
Hledáte český článek na téma, které jinde nenajdete? Pošlete nám návrh – pokud zapadá do našeho zaměření (BMI, hmotnost, hubnutí, metabolismus, výživa, pohyb) a má kvalitní primární zdroje, zařadíme ho do plánu. Nezveřejňujeme však recenze produktů, kuchařky ani návody, které by mohly nahrazovat individuální nutriční konzultaci.

### Spolupráce na obsahu
Jste nutriční terapeut, obezitolog, sportovní lékař nebo studujete medicínu v posledním ročníku? Máte zájem psát nebo recenzovat texty pro náš web? Ozvěte se – uvítáme spolupráci.

### Citace našeho obsahu
Texty Ideální BMI můžete citovat s uvedením zdroje a odkazu. Pro převzetí celého článku nebo komerční použití nás kontaktujte – v drtivé většině případů povolujeme zdarma, jen chceme vědět kam to jde.

### Hlášení technické chyby
Něco nefunguje (kalkulačka vrací nesmyslný výsledek, stránka se nenačte, kontrast je nečitelný)? Napište nám prohlížeč + zařízení + co se stalo. Reagujeme prioritně.

### Mediální dotazy
Pro novináře a podcasty: kontakt přes formulář nebo e-mail, do předmětu prosím **„Média"**. Rádi poskytneme komentář k tématu BMI, obezity v ČR a statistik ÚZIS s odkazy na primární zdroje.

## Co po nás chtít nemůžeme

- **Individuální zdravotní radu.** Neumíme a nemůžeme posuzovat, zda máte hubnout, co máte jíst, kterou kalkulačku použít na konkrétní diagnózu. To je práce lékaře nebo nutričního terapeuta. Pokud potřebujete osobní péči, vyhledejte obezitologickou ambulanci ve své oblasti.
- **Diagnostiku.** Žádný e-mail nedokáže nahradit vyšetření.
- **Sestavení jídelníčku.** Individuální plán je práce nutričního terapeuta.

## Formální záležitosti a fakturace

Pro fakturaci, právní záležitosti a obchodní komunikaci pište přímo na **hello@codewhiskers.app**, nebo navštivte stránku [Provozovatel](/provozovatel/), kde najdete fakturační údaje.

Právní informace najdete v [Obchodních podmínkách](/podminky/), zpracování osobních údajů popisuje [Ochrana soukromí](/ochrana-soukromi/).
