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

## 4. Codewijzigingen in deze ronde

Zie hoofdstuk 5 voor de bevindingen uit de audit; dit zijn de wijzigingen die zijn doorgevoerd.

- Nieuw mobiel menu (zie README) en twee toegankelijkheidsfixes uit Lighthouse.
- IndexNow-script en sleutelbestand.
- `lastmod` bijgewerkt.
