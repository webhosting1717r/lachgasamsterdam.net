# lachgasamsterdam.net

Next.js 16 (App Router) als statische export, bedoeld voor Vercel. De build levert pure HTML + ~12 KB inline CSS + één script van ±0,8 KB (sluit het mobiele menu met Escape en start de achtergrondvideo). `scripts/build.mjs` draait `next build` en daarna `scripts/postbuild.mjs`, dat de volledige Next/React-runtime uit `out/` haalt, dus er is geen JavaScript-bundel (leeg Lighthouse-treemap).

## Gebruiken

```bash
npm install
npm run build      # scripts/build.mjs: next build + postbuild -> out/
npm start          # node serve.mjs 8797: lokaal testen met brotli, op http://localhost:8797
npm run check      # typecheck + build + seo-check in één keer (doe dit voor elke push)
```

## Waar staat wat

| Pad | Inhoud |
| --- | --- |
| `lib/site.ts` | domein, schrijfwijzen van de merknaam (`alternateNames`), deel-afbeelding, verificatiecodes voor Search Console en Bing (`verification`), levertijd, datums (`lastmod`, `contentDate`, `published`), IndexNow-sleutel |
| `lib/content/*.ts` | alle pagina-inhoud: `products`, `services` (zoekopdrachten), `locations` (ook `etaRows()`: de levertijdtabel die home, bezorggebied en lachgas-bezorgen delen), `info`, `hubs` (bestellen, bezorggebied, contact, juridisch) |
| `lib/pages.ts` | verzamelt alle pagina's en controleert dubbele slugs en kapotte "bekijk ook"-links tijdens de build |
| `app/[slug]/page.tsx` | template voor elke subpagina (metadata, JSON-LD, FAQ, kruimelpad) |
| `app/page.tsx` | homepage |
| `components/ui.tsx` | header met desktopmenu en mobiel menu (`<details>`, gegroepeerd, sluit via knop, overlay of Escape, scroll-lock in CSS), footer, blokken, FAQ, blueprint-zoom |
| `lib/schema.ts` | JSON-LD: LocalBusiness, WebSite, WebPage, BreadcrumbList, Service, ProductModel, Article, FAQPage |
| `public/` | video (`bg-v2.mp4`, 150 KB), poster, productfoto's, deel-afbeelding (`og.jpg`, gemaakt door `scripts/og.mjs`), iconen, `llms.txt`, IndexNow-sleutelbestand |
| `scripts/og.mjs` | `npm run og`: maakt `public/og.jpg` opnieuw (merknaam, belofte, domeinnaam). De tekst op de afbeelding staat in dit script, niet alleen in het plaatje. Vereist Playwright met Chromium |
| `scripts/indexnow.mjs` | `npm run indexnow`: meldt alle URL's uit de sitemap (of alleen de opgegeven paden) bij IndexNow (Bing, Yandex, Seznam, Naver) |

De homepage is de enige pagina voor de hoofdquery "lachgas amsterdam" en voor de merknaam "lachgasamsterdam" (de domeinnaam zonder .net); `/lachgas-amsterdam/` is de hub "Amsterdam per stadsdeel" (stadsdelen en Weesp hangen daar in het kruimelpad onder). Houd dat zo: geen tweede pagina met H1 of titel "Lachgas Amsterdam". De domeinnaam staat zichtbaar op de homepage, op Over ons, in de footer en op de deel-afbeelding, en als `alternateName` in schema.org (daar leidt Google de sitenaam van af).

## Geen telefoonnummers

Op de site staat nergens een telefoon- of WhatsApp-nummer en nergens een `tel:`- of `wa.me`-link: niet in teksten, attributen, JSON-LD (`telephone`), `llms.txt`, de deel-afbeelding of deze documentatie. Dat is een keuze van de eigenaar; voeg er geen toe zonder dat die erom vraagt. `npm run seo` geeft een fout als er toch een in de build staat (tien cijfers die met 0 beginnen, `+31 …`, 0800/0900). Afbeeldingen kan het script niet lezen: bekijk een nieuwe afbeelding altijd zelf. Het alarmnummer 112 in de veiligheidsteksten blijft staan.

Blokken in `blocks`: `p`, `h2`, `h3`, `ul`, `steps`, `cards`, `table`, `note`. Bij vier of meer `h2`-koppen komt vanzelf een inhoudsopgave met ankerlinks. `lang: 'en'` zet de taal van een pagina, `twin` koppelt een Nederlandse en een Engelse pagina met hreflang.

Een nieuwe zoekopdracht-pagina toevoegen = een object toevoegen in `lib/content/services.ts` (of een andere groep). Sitemap, footer-overzicht (`/overzicht/`) en routes volgen vanzelf.

## Vercel

1. Push naar een GitHub-repo en importeer die in Vercel. `vercel.json` zet `framework` op `null`, de build op `npm run build` en de uitvoer op `out/`, zodat Vercel precies serveert wat de build in `out/` achterlaat. Laat dit staan: met het Next.js-framework gebruikt Vercel een adapter (`NEXT_ADAPTER_PATH`) die `out/` al binnen `next build` kopieert, vóór `postbuild` de runtime eruit haalt. De site staat dan met de Next-scripts onder `/_next/static/immutable/` live en Search Console meldt die als "Andere fout". `scripts/build.mjs` haalt die variabele daarom ook zelf uit de omgeving.
2. Voeg bij Domains `www.lachgasamsterdam.net` toe (primair) en `lachgasamsterdam.net`, dat in het dashboard naar www doorstuurt. Zet in `vercel.json` geen tweede redirect in de andere richting: dat geeft een redirectlus.
3. Zet bij je DNS-provider de records die Vercel noemt.
4. Search Console: voeg `lachgasamsterdam.net` toe als Domein-property (verificatie via een TXT-record in de DNS), of `https://www.lachgasamsterdam.net/` als URL-prefix-property (kies "HTML-tag", zet alleen de code in `site.verification.google` in `lib/site.ts` en deploy). Dien daarna `https://www.lachgasamsterdam.net/sitemap.xml` in en vraag via URL-inspectie indexering aan voor de homepage en de belangrijkste pagina's. "Pagina met omleiding" voor de varianten met http, zonder www of zonder slash aan het eind is geen fout: die horen door te sturen.
5. Na elke deploy met gewijzigde inhoud: `npm run build && npm run indexnow` (alle URL's) of `node scripts/indexnow.mjs /pad/ /ander-pad/` (alleen gewijzigde pagina's). Google gebruikt IndexNow niet; daar blijft Search Console voor nodig.

Elke URL heeft een slash aan het eind (`trailingSlash`), alle canonicals, de sitemap en de JSON-LD gebruiken `https://www.lachgasamsterdam.net`.

## Na wijzigingen controleren

- `npm run build` moet zonder fouten eindigen (postbuild faalt als er nog een `<script src>` naar `/_next/` of een JS-bestand in `out/_next/` over is). Postbuild verwijdert ook `out/404/`: alleen `404.html` blijft, zodat `/404/` geen pagina met status 200 is.
- Googlebot rekt het venster op tot de hele paginahoogte (bijvoorbeeld 412×8000). Gebruik daarom geen `100vh`, `100svh` of `100%` zonder plafond (`min(…, 1100px)`): anders wordt de hero duizenden pixels hoog en valt de kop buiten de Search Console-screenshot.
- `npm run seo` (na de build) controleert titels (max 62 tekens incl. merk), descriptions, koppen (ook dubbele H1's), woordaantallen, canonical en robots-meta, hreflang, interne links, dubbele ids, JSON-LD, de sitemap, `robots.txt`, de 404-pagina, telefoonnummers en verboden formuleringen (superlatieven, recreatieve termen, 'bellen'). Exitcode 1 bij fouten.
- Zet `updated: 'JJJJ-MM-DD'` op de pagina waarvan je de tekst wijzigt (sitemap, JSON-LD en de regel "Bijgewerkt" volgen). `site.lastmod` is alleen voor home en overzicht, `site.contentDate` de fallback voor pagina's zonder `updated`.
- Lighthouse mobile en desktop op home, een product-, locatie- en infopagina.
- Mobiel menu: open en sluit via de knop, een tik op de overlay en Escape; controleer ook met JavaScript uit (het is een `<details>`).
