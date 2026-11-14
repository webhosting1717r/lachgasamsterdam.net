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
| Contact | geen telefoonnummer op de site (sinds 13 november 2026) | een 06-nummer op elke pagina |
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
9. lachgas247amsterdam.nl (verwant merk van de concurrent, met locatiepagina's voor Weesp, Zaandam, Naarden, Almere, Hoofddorp en productpagina's "lachgas tanks amsterdam" en "lachgas patronen amsterdam")

Let op: lachgasamsterdam.nl is een andere aanbieder met een vergelijkbare URL-structuur en positionering (Fastgas 2KG/4KG/10KG, 20 tot 30 minuten, geen statiegeld). lachgasamsterdam.net staat volledig los van die site en van alle andere lachgassites; alles op dit domein is uitsluitend voor dit domein geschreven. Controle op 9 november 2026: unieke zinnen van deze site (onder meer uit /lachgas-amsterdam/ en /over-ons/) komen in zoekmachines nergens anders voor. De .nl-site zelf kon vanuit de bouwomgeving niet worden opgehaald, dus herhaal de controle af en toe: zoek een zin tussen aanhalingstekens in Google. Neem nooit tekst over van andere lachgassites en laat niemand tekst van deze site hergebruiken.

## 3. Acties buiten de code (hoogste prioriteit)

1. **Search Console.** Voeg `lachgasamsterdam.net` toe als Domein-property, dien `https://www.lachgasamsterdam.net/sitemap.xml` in en vraag via URL-inspectie indexering aan voor /, /lachgas-amsterdam/, /bestellen/, /lachgas-tanks/ en /bezorggebied/. Controleer na een week onder Pagina's of er "Gecrawld, momenteel niet geïndexeerd" of "Duplicaat" staat.
2. **IndexNow.** Na elke deploy met gewijzigde inhoud: `npm run build && npm run indexnow`. Dit meldt alle URL's bij Bing, Yandex, Seznam en Naver (Google doet niet mee). Het sleutelbestand staat al op de site.
3. **Bing Webmaster Tools.** Importeer de Search Console-property; Bing levert ook DuckDuckGo en de AI-zoekmachines.
4. **Duplicaten.** Binnen de site is de overlap tussen locatiepagina's teruggebracht (de identieke staart met bestelstappen en twee algemene FAQ's is vervangen door één plaatsspecifieke alinea) en `/lachgas-tank-bestellen/` deelt geen blokken meer met `/bestellen/`. Naar buiten toe: deze site deelt geen teksten, nummer of naam met andere websites. Houd dat zo.
5. **Geen telefoonnummer.** Op verzoek van de eigenaar staat er sinds 13 november 2026 nergens een telefoon- of WhatsApp-nummer: niet in de teksten, niet in schema.org, niet in `llms.txt` en sinds 14 november ook niet meer in de deel-afbeelding (`og.jpg`). `npm run seo` faalt zodra er weer een nummer of een `tel:`-/`wa.me`-link in de build staat. Gevolg voor SEO en omzet: zie hoofdstuk 6.
6. **Google Bedrijfsprofiel.** Een profiel als "bezorgdienst zonder bezoekadres" (service area business) met Amsterdam en de 15 plaatsen als werkgebied, de website-URL en openingstijden 24/7. Echte reviews daar wegen zwaarder dan wat dan ook op de site. Google vraagt voor zo'n profiel wel een verifieerbaar contactkanaal.
7. **Backlinks.** Bedrijfsgidsen (Telefoonboek, Cylex, Openingstijden.nl), een KvK-vermelding als het bedrijf is ingeschreven, en lokale vermeldingen (leveranciersoverzichten voor horeca). Geen gekochte links en geen links vanaf andere lachgassites.
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

**Eerder deze dag:** nieuw mobiel menu, IndexNow-script met sleutelbestand, eigen Nederlands WhatsApp-nummer, Tikkie als betaalmethode naast PIN en contant.

## 5. Bewust niet gedaan

- Geen prijzen op de site (keuze van de eigenaar), geen verzonnen reviews of cijfers, geen recreatieve framing.
- Geen bedrijfsgegevens (handelsnaam, KvK, vestigingsplaats, e-mail) toegevoegd: die moet de eigenaar aanleveren. Dit is wel het sterkste ontbrekende vertrouwenssignaal (E-E-A-T) en de concurrent toont ze ook niet; zet ze in `/over-ons/`, `/contact/`, de privacyverklaring en de footer, en in `lib/schema.ts` als `legalName`, `email` en `identifier` (KvK).
- Horeca-factuur: vijf pagina's zeggen "vraag na bij je eerste bestelling". Leg de echte werkwijze vast (factuur met btw ja/nee, per levering of maandelijks) en zet dat ene antwoord op alle vijf plekken.
- Extra plaatsen (Naarden, Bussum, Muiden) alleen toevoegen als je er echt bezorgt; één object in `lib/content/locations.ts` volstaat.
- Footer met 57 links is bewust gelaten: voor een nieuwe site helpen de sitebrede links de locatiepagina's gecrawld te krijgen. Heroverweeg na indexatie.

## 6. Ronde 14 november 2026: nummers, indexering, merknaam

Aanleiding: de site moet zonder enig telefoonnummer live staan, foutloos indexeren in Search Console en gevonden worden op de eigen naam ("lachgasamsterdam", de domeinnaam zonder .net).

**Telefoonnummers.** De site zelf was al schoon, maar er stonden nog nummers op plekken die een tekstzoekopdracht niet vindt:

- `public/og.jpg` (de afbeelding bij gedeelde links in WhatsApp en op sociale media) toonde een 085-nummer in een gele knop. De afbeelding is opnieuw gemaakt met de domeinnaam op die plek. Ze komt nu uit `scripts/og.mjs` (`npm run og`), zodat de tekst erop voortaan in de code staat en doorzoekbaar is.
- Dit document noemde het oude eigen nummer en het nummer van een concurrent; beide zijn weggehaald.
- De commitgeschiedenis op GitHub bevat de oude nummers nog in commitberichten en oude versies van bestanden. Dat is alleen zichtbaar voor wie toegang tot de repository heeft en staat niet op de website.
- Controle: alle afbeeldingen zijn bekeken, van de achtergrondvideo twintig beelden verspreid over de volle vijf seconden, en de metadata van alle bestanden is doorzocht. `npm run seo` controleert nu elke pagina (tekst, attributen, JSON-LD) en elk tekstbestand in `out/` op nummers en bel-/WhatsApp-links en geeft dan een fout.
- Het alarmnummer 112 in de veiligheidsteksten is bewust blijven staan.

**Indexering.** Vergelijking van de live site met de build op 14 november: alle 63 URL's uit de sitemap geven status 200, verwijzen met hun canonical naar zichzelf, hebben `index, follow` en zijn byte voor byte gelijk aan de build. Redirects kloppen (http naar https, zonder www naar www, zonder slash naar met slash), onbekende URL's geven een echte 404. Geen enkele pagina is ooit hernoemd of verwijderd, dus er zijn geen oude URL's die een 404 geven. Wat wel is aangepast:

- `/404/` gaf status 200 (een kopie van de foutpagina die Next.js meelevert). Postbuild verwijdert die map nu, zodat alleen de echte 404 overblijft.
- `favicon.ico` was een beschadigd bestand (afgekapt, strikte lezers konden het niet openen). Het is opnieuw gemaakt in 16, 32 en 48 pixels.
- `llms.txt` krijgt de header `X-Robots-Tag: noindex`, zodat het tekstbestand niet als los zoekresultaat in Google kan komen.
- De SEO-check controleert nu ook de robots-meta per pagina, hreflang (zelfverwijzing, x-default, wederkerigheid), `robots.txt`, de 404-pagina en datums in de sitemap.
- In `lib/site.ts` staat `verification` klaar: vul daar de code van Search Console (en eventueel Bing) in als je via een HTML-tag wilt verifiëren in plaats van via DNS.

Wat Search Console normaal laat zien en geen fout is: "Pagina met omleiding" voor de varianten met http, zonder www en zonder slash aan het eind; "Alternatieve pagina met correcte canonieke tag" voor URL's met een parameter erachter; en in het videorapport de melding dat de video niet de hoofdinhoud is (dat is de decoratieve achtergrondvideo).

**Merknaam.** Voor de zoekopdracht op de domeinnaam telt vooral dat de homepage geïndexeerd is en dat Google de schrijfwijze aan de site koppelt:

- `WebSite` en het bedrijf in schema.org hebben nu `alternateName` "Lachgasamsterdam" en "lachgasamsterdam.net" (Google leidt daar de sitenaam in de zoekresultaten van af).
- De domeinnaam staat zichtbaar in de eerste alinea en het eerste FAQ-antwoord van de homepage, op Over ons, in de footer van elke pagina, in `llms.txt` en op de deel-afbeelding.
- De titel van de contactpagina bevatte de merknaam twee keer en is ingekort.

**Wat code niet oplost.** Er bestaat een oudere site op de .nl-variant van dezelfde naam, met reviews en een jaar voorsprong. Bovenaan komen op "lachgasamsterdam" lukt daarom alleen met de acties uit hoofdstuk 3: de property in Search Console, de sitemap indienen, indexering aanvragen voor de homepage en de vijf belangrijkste pagina's, en een paar echte vermeldingen op andere websites. Reken op dagen tot enkele weken voor indexering en langer voor de eerste plek.

**Gevolg van een site zonder contactkanaal.** Overal staat "bestel via WhatsApp", maar er is geen nummer, link of formulier. Een bezoeker kan dus niet bestellen, en een commerciële site zonder contactgegevens of bedrijfsidentiteit scoort bij Google slechter op betrouwbaarheid. Als het nummer bewust weg moet, overweeg dan een ander kanaal (bijvoorbeeld een e-mailadres of formulier) en zet dat op `/contact/`.
