# lachgasamsterdam.net

Next.js 16 (App Router) als statische export, bedoeld voor Vercel. De build levert pure HTML + ~10 KB inline CSS + één script van ±0,6 KB (start de achtergrondvideo). `scripts/build.mjs` draait `next build` en daarna `scripts/postbuild.mjs`, dat de volledige Next/React-runtime uit `out/` haalt, dus er is geen JavaScript-bundel (leeg Lighthouse-treemap).

## Gebruiken

```bash
npm install
npm run build      # scripts/build.mjs: next build + postbuild -> out/
node serve.mjs 8797  # lokaal testen met brotli, op http://localhost:8797
```

## Waar staat wat

| Pad | Inhoud |
| --- | --- |
| `lib/site.ts` | domein, WhatsApp (+44 7441 484380), levertijd, lastmod |
| `lib/content/*.ts` | alle pagina-inhoud: `products`, `services` (zoekopdrachten), `locations`, `info`, `hubs` (bestellen, bezorggebied, contact, juridisch) |
| `lib/pages.ts` | verzamelt alle pagina's en controleert dubbele slugs en kapotte "bekijk ook"-links tijdens de build |
| `app/[slug]/page.tsx` | template voor elke subpagina (metadata, JSON-LD, FAQ, kruimelpad) |
| `app/page.tsx` | homepage |
| `lib/schema.ts` | JSON-LD: LocalBusiness, WebSite, WebPage, BreadcrumbList, Service, ProductModel, Article, FAQPage |
| `public/` | video (`bg-v1.mp4`), poster, productfoto's, OG-afbeelding, iconen, `llms.txt` |

Blokken in `blocks`: `p`, `h2`, `h3`, `ul`, `steps`, `cards`, `table`, `note`. Bij vier of meer `h2`-koppen komt vanzelf een inhoudsopgave met ankerlinks. `lang: 'en'` zet de taal van een pagina, `twin` koppelt een Nederlandse en een Engelse pagina met hreflang.

Een nieuwe zoekopdracht-pagina toevoegen = een object toevoegen in `lib/content/services.ts` (of een andere groep). Sitemap, footer-overzicht (`/overzicht/`) en routes volgen vanzelf.

## Vercel

1. Push naar een GitHub-repo en importeer die in Vercel. `vercel.json` zet `framework` op `null`, de build op `npm run build` en de uitvoer op `out/`, zodat Vercel precies serveert wat de build in `out/` achterlaat. Laat dit staan: met het Next.js-framework gebruikt Vercel een adapter (`NEXT_ADAPTER_PATH`) die `out/` al binnen `next build` kopieert, vóór `postbuild` de runtime eruit haalt. De site staat dan met de Next-scripts onder `/_next/static/immutable/` live en Search Console meldt die als "Andere fout". `scripts/build.mjs` haalt die variabele daarom ook zelf uit de omgeving.
2. Voeg bij Domains `www.lachgasamsterdam.net` toe (primair) en `lachgasamsterdam.net`, dat in het dashboard naar www doorstuurt. Zet in `vercel.json` geen tweede redirect in de andere richting: dat geeft een redirectlus.
3. Zet bij je DNS-provider de records die Vercel noemt.
4. Search Console: voeg `https://www.lachgasamsterdam.net/` toe als Domein-property, dien `https://www.lachgasamsterdam.net/sitemap.xml` in en vraag de homepage te laten indexeren.

Elke URL heeft een slash aan het eind (`trailingSlash`), alle canonicals, de sitemap en de JSON-LD gebruiken `https://www.lachgasamsterdam.net`.

## Na wijzigingen controleren

- `npm run build` moet zonder fouten eindigen (postbuild faalt als er nog een `<script src>` naar `/_next/` of een JS-bestand in `out/_next/` over is).
- Googlebot rekt het venster op tot de hele paginahoogte (bijvoorbeeld 412×8000). Gebruik daarom geen `100vh`, `100svh` of `100%` zonder plafond (`min(…, 1100px)`): anders wordt de hero duizenden pixels hoog en valt de kop buiten de Search Console-screenshot.
- `npm run seo` (na de build) controleert titels, descriptions, koppen, woordaantallen, interne links, dubbele ids, JSON-LD en de sitemap. Exitcode 1 bij fouten.
- Werk `lastmod` en `lastmodText` in `lib/site.ts` bij als je inhoud wijzigt.
- Lighthouse mobile en desktop op home, een product-, locatie- en infopagina.
