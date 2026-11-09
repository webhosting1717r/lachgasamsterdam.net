# SEO-analyse lachgasamsterdam.net, november 2026

Doel: beter ranken dan lachgasamsterdam247.nl voor "lachgas amsterdam" en varianten ("lachgas bestellen amsterdam", "lachgas bezorgen amsterdam", "lachgas kopen amsterdam", "lachgas amsterdam 24/7"). Peildatum 9 november 2026.

## 1. Waar staan we

| | lachgasamsterdam.net | lachgasamsterdam247.nl |
| --- | --- | --- |
| Techniek | Next.js statische export, alleen HTML + inline CSS, 1 klein script | WordPress 7.1.4, Astra-thema, Elementor |
| Pagina's | 63 inhoudelijke pagina's, gemiddeld 1022 woorden | 3 pagina's (home, About, Services), 13 demo-posts ("Hello world!", "post-1"), 4 lege contactformulieren |
| Titel homepage | "Lachgas Amsterdam \| Fastgas tank bezorgd, 24/7" | " - Lachgas Amsterdam 24/7" (kapot: lege paginatitel) |
| Structured data | LocalBusiness, WebSite, WebPage, BreadcrumbList, Service, ProductModel, Article, FAQPage | alleen Organization, WebSite, WebPage (Yoast-standaard) |
| Lighthouse mobiel | 100 / 96 / 100 / 100 | 56 / 96 / 75 / 100 |
| LCP mobiel | 1,4 s | 9,4 s |
| Gewicht homepage | 855 KiB | 3,2 MiB (2,3 MiB te besparen met moderne afbeeldingsformaten) |
| Contact | WhatsApp +31 97 010 270 187 | WhatsApp 06 26 76 66 30 (Nederlands nummer) |
| Reviews | geen | vier verzonnen testimonials met demo-afbeeldingen uit het thema |
| Framing | keuken, horeca, techniek; 18+; Opiumwet uitgelegd | "feest of privégebruik", "discretie voorop" |
| Domein actief sinds | eind oktober 2026 | november 2025 |
| Laatste wijziging | 9 november 2026 | 31 oktober 2026 |

Conclusie: op inhoud, techniek en structured data staan we ruim voor. De concurrent rankt toch (plek 3 in de zoekresultaten die we konden raadplegen), omdat zijn domein een jaar ouder is, al geïndexeerd is en een Nederlands nummer toont. Onze site komt in diezelfde zoekresultaten nergens voor, ook niet bij een zoekopdracht op de domeinnaam. Het probleem is dus geen kwaliteitsprobleem maar een indexatie- en autoriteitsprobleem. Dat lost geen enkele codewijziging op; wel de acties in hoofdstuk 3.

## 2. Zoekresultaten "lachgas amsterdam" (november 2026)

1. lachgasserviceamsterdam.nl
2. lachgascentrale.nl/lachgas-amsterdam/
3. lachgasamsterdam247.nl
4. gassdamsco.nl
5. gasadam020.nl
6. fastgas247.nl
7. lachgasamsterdam.nl (laughing-gas-delivery-amsterdam)
8. lachgasnu.nl
9. lachgas247amsterdam.nl (zustermerk van de concurrent, met locatiepagina's voor Weesp, Zaandam, Naarden, Almere, Hoofddorp en productpagina's "lachgas tanks amsterdam" en "lachgas patronen amsterdam")

Opvallend: lachgasamsterdam.nl heeft bijna dezelfde URL-structuur als deze site (lachgas-amsterdam-centrum, laughing-gas-delivery-amsterdam, slagroompatronen, lachgas-informatie, bezorggebied, horeca, lachgas-haarlem) en dezelfde positionering (Fastgas 2KG/4KG/10KG, 20 tot 30 minuten, geen statiegeld). Als die inhoud (deels) gelijk is aan die van lachgasamsterdam.net, kiest Google één versie en verliest de nieuwste. Dit kon vanuit deze omgeving niet worden gecontroleerd (de host was niet bereikbaar). Controleer het zelf: kopieer een alinea van /lachgas-amsterdam/ en zoek die tussen aanhalingstekens.

## 3. Acties buiten de code (hoogste prioriteit)

1. **Search Console.** Voeg `lachgasamsterdam.net` toe als Domein-property, dien `https://www.lachgasamsterdam.net/sitemap.xml` in en vraag via URL-inspectie indexering aan voor /, /lachgas-amsterdam/, /bestellen/, /lachgas-tanks/ en /bezorggebied/. Controleer na een week onder Pagina's of er "Gecrawld, momenteel niet geïndexeerd" of "Duplicaat" staat.
2. **IndexNow.** Na elke deploy met gewijzigde inhoud: `npm run build && npm run indexnow`. Dit meldt alle URL's bij Bing, Yandex, Seznam en Naver (Google doet niet mee). Het sleutelbestand staat al op de site.
3. **Bing Webmaster Tools.** Importeer de Search Console-property; Bing levert ook DuckDuckGo en de AI-zoekmachines.
4. **Duplicate content met zustersites.** Zorg dat lachgasamsterdam.net, lachgasamsterdam.nl, lachgasdienstamsterdam.nl en lachgasholland.nl geen (deels) gelijke teksten hebben. Eén aanbod, één tekst per domein. Als twee domeinen hetzelfde bedrijf zijn, kies dan één hoofddomein en laat het andere daarnaar verwijzen (301), of geef het eigen teksten. Dit is de meest waarschijnlijke reden dat een technisch superieure site niet verschijnt.
5. **Nederlands nummer.** Sinds 9 november 2026 staat overal het Nederlandse WhatsApp-nummer +31 97 010 270 187 (daarvoor een +44-nummer, wat voor een Amsterdamse bezorgdienst een vertrouwenssignaal in het nadeel was). Zet hetzelfde nummer op de zustersites en in het Google Bedrijfsprofiel, zodat naam, nummer en website overal gelijk zijn.
6. **Google Bedrijfsprofiel.** Een profiel als "bezorgdienst zonder bezoekadres" (service area business) met Amsterdam en de 15 plaatsen als werkgebied, de website-URL en openingstijden 24/7. Echte reviews daar wegen zwaarder dan wat dan ook op de site.
7. **Backlinks.** Minimaal: vermeldingen op de zustersites naar lachgasamsterdam.net (één link per site, met ankertekst "Lachgas Amsterdam"), bedrijfsgidsen (Telefoonboek, Cylex, Openingstijden.nl), en een KvK-vermelding als het bedrijf is ingeschreven. Geen gekochte links.
8. **Geduld en vers houden.** De site is twee weken oud. Werk `lastmod` bij als inhoud verandert, voeg maandelijks een of twee pagina's toe (bijvoorbeeld plaatsen die de concurrent wel heeft: Naarden, Bussum, Uithoorn, Aalsmeer, Zaandijk) en houd de FAQ's actueel.

## 4. Codewijzigingen in deze ronde (9 november 2026)

Zeven onafhankelijke audits (on-page, schema, techniek, content, interne links, concurrentie-gap, mobiele UX) leverden 70 bevindingen; de bevestigde punten zijn doorgevoerd.

**Kannibalisatie op "lachgas amsterdam" opgelost.** Home en `/lachgas-amsterdam/` hadden vrijwel dezelfde titel en H1, en 130+ interne ankers "Lachgas Amsterdam" wezen naar de subpagina. De homepage is nu de enige pagina voor de hoofdquery; `/lachgas-amsterdam/` is "Amsterdam per stadsdeel" (titel, H1, kruimelpad, menu, footer). Stadsdelen en Weesp hangen in het kruimelpad onder die hub.

**Titels en H1's gericht op de queries van de concurrent.** `/lachgas-24-7/` heet nu "Lachgas Amsterdam 24/7: dag en nacht bezorgd" (de exacte zoekfrase stond op geen enkele pagina). "Fastgas Amsterdam", "Lachgas tanks Amsterdam", "Lachgas bezorgdienst in Amsterdam", "lachgas patronen" (naast slagroompatronen) en de synoniemen lachgastank, lachgascilinder en lachgasfles staan nu in titels, H1's of eigen alinea's. Stadsdeelpagina's heten "Lachgas {stadsdeel}: 24/7 bezorgd" zodat "lachgas bezorgen in Amsterdam" alleen nog bij `/lachgas-bezorgen/` hoort. Negen te lange titels (merknaam werd afgekapt) zijn ingekort; de SEO-check waarschuwt nu vanaf 62 tekens en faalt op dubbele H1's.

**Tegenstrijdigheden weggehaald.** De hero-chip "Binnen 20-30 min" stond op alle 23 locatiepagina's, ook waar de tekst 30 tot 45 minuten zei; de chip toont nu de tijd van de plaats zelf. De vier levertijdtabellen (home, bezorggebied, lachgas bezorgen, in de buurt) spraken elkaar tegen (Purmerend 25-40, 30-45 en 30-40) en komen nu uit één bron. Vier pagina's zeiden dat je kon bellen; contact loopt alleen via WhatsApp. "Weesp en 15 plaatsen" telde Weesp dubbel. Almere sprak zichzelf tegen over de rijtijd.

**Interne links.** De homepage linkt nu in de tekst naar `/lachgas-bestellen-amsterdam/` en `/lachgas-bezorgen/` (de twee transactionele pagina's kregen geen enkele link van de sterkste pagina). `/lachgas-kopen-amsterdam/` krijgt links vanuit tanks, bestellen en de stadspagina; `/lachgas-in-de-buurt/` vanuit alle 15 plaatsen. De "Bekijk ook"-blokken van locatiepagina's verwijzen niet langer naar zes hubs die al in het menu staan, maar naar querypagina's en buurplaatsen. De juridische notitie onderaan 40 pagina's linkt niet meer naar de wetspagina (die kreeg 245 links, meer dan elke commerciële pagina). Kaart- en menu-ankers bevatten alleen nog de kop, niet de beschrijving (de kaart blijft volledig klikbaar).

**Structured data.** `servicePhone` verwijst naar het WhatsApp-ContactPoint (was een string, ongeldig). Contact is een ContactPage, over ons een AboutPage; juridische pagina's zijn geen Article meer. Stadsdelen zijn AdministrativeArea binnen Amsterdam, plaatsen City binnen hun gemeente. De drie formaten zijn varianten van de hoofdtank, met 18+ als doelgroep. FAQ-antwoorden houden hun links. Engelse pagina's hebben Engelse serviceType en inLanguage, plus hreflang x-default. Geen BreadcrumbList met één item op de homepage.

**Datums.** Elke pagina heeft een eigen `updated`-datum (sitemap, JSON-LD en de zichtbare regel "Bijgewerkt"); 46 pagina's staan op 9 november, 17 ongewijzigde pagina's op 30 oktober. Een sitemap waarin alle datums bij elke deploy gelijk opschuiven, negeert Google.

**Snelheid en mobiel.** Achtergrondvideo van 739 KB naar 150 KB (960x540, zelfde beeld); OG-afbeelding van 415 KB naar 64 KB (WhatsApp toont boven circa 300 KB vaak geen voorvertoning); extra 480 px-variant van de blueprint. Tabellen vielen op 360 px buiten beeld (alleen de eerste kolom zichtbaar); ze passen nu, en tabellen met drie kolommen stapelen. H1 brak op 360 px in vier regels met een losse "min."; contrast van kicker, kruimelpad en lead op de poster verhoogd. De vaste WhatsApp-balk verschijnt pas als de hero-knop uit beeld is (browsers zonder scroll-animaties tonen hem direct) en heet "Bestel via WhatsApp". `content-visibility` op panelen veroorzaakte de Lighthouse-fout op tikdoelen en een springende scrollbalk; verwijderd.

**Eerder deze dag:** nieuw mobiel menu, IndexNow-script met sleutelbestand, Nederlands WhatsApp-nummer.

## 5. Bewust niet gedaan

- Geen prijzen op de site (keuze van de eigenaar), geen verzonnen reviews of cijfers, geen recreatieve framing.
- Geen bedrijfsgegevens (handelsnaam, KvK, vestigingsplaats, e-mail) toegevoegd: die moet de eigenaar aanleveren. Dit is wel het sterkste ontbrekende vertrouwenssignaal (E-E-A-T) en de concurrent toont ze ook niet; zet ze in `/over-ons/`, `/contact/`, de privacyverklaring en de footer, en in `lib/schema.ts` als `legalName`, `email` en `identifier` (KvK).
- Horeca-factuur: vijf pagina's zeggen "vraag na bij je eerste bestelling". Leg de echte werkwijze vast (factuur met btw ja/nee, per levering of maandelijks) en zet dat ene antwoord op alle vijf plekken.
- Extra plaatsen (Naarden, Bussum, Muiden) alleen toevoegen als je er echt bezorgt; één object in `lib/content/locations.ts` volstaat.
- Footer met 57 links is bewust gelaten: voor een nieuwe site helpen de sitebrede links de locatiepagina's gecrawld te krijgen. Heroverweeg na indexatie.
