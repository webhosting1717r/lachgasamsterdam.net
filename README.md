# lachgasamsterdam.net

Next.js 16 (App Router) als statische export, bedoeld voor Vercel. De build levert pure HTML + ~10 KB inline CSS + één script van ±0,6 KB (start de achtergrondvideo). `scripts/postbuild.mjs` haalt daarna de volledige Next/React-runtime uit `out/`, dus er is geen JavaScript-bundel (leeg Lighthouse-treemap).

## Gebruiken

```bash
npm install
npm run build      # next build + postbuild -> out/
node serve.mjs 8797  # lokaal testen met brotli, op http://localhost:8797
```

## Waar staat wat

| Pad | Inhoud |
| --- | --- |
| `lib/site.ts` | domein, telefoon (085 212 8051), WhatsApp (+31 97010270187), levertijd, lastmod |
| `lib/content/*.ts` | alle pagina-inhoud: `products`, `services` (zoekopdrachten), `locations`, `info`, `hubs` (bestellen, bezorggebied, contact, juridisch) |
| `lib/pages.ts` | verzamelt alle pagina's en controleert dubbele slugs en kapotte "bekijk ook"-links tijdens de build |
| `app/[slug]/page.tsx` | template voor elke subpagina (metadata, JSON-LD, FAQ, kruimelpad) |
| `app/page.tsx` | homepage |
| `lib/schema.ts` | JSON-LD: LocalBusiness, WebSite, WebPage, BreadcrumbList, Service, ProductModel, Article, FAQPage |
| `public/` | video (`bg-v1.mp4`), poster, productfoto's, OG-afbeelding, iconen, `llms.txt` |

Een nieuwe zoekopdracht-pagina toevoegen = een object toevoegen in `lib/content/services.ts` (of een andere groep). Sitemap, footer-overzicht (`/overzicht/`) en routes volgen vanzelf.

## Vercel

1. Push naar een GitHub-repo en importeer die in Vercel (framework wordt automatisch als Next.js herkend; build `npm run build`).
2. Voeg bij Domains `lachgasamsterdam.net` toe (primair) en `www.lachgasamsterdam.net`; `vercel.json` stuurt www permanent door naar de kale domeinnaam.
3. Zet bij je DNS-provider de records die Vercel noemt.
4. Search Console: voeg `https://lachgasamsterdam.net/` toe als Domein-property, dien `https://lachgasamsterdam.net/sitemap.xml` in en vraag de homepage te laten indexeren.

Elke URL heeft een slash aan het eind (`trailingSlash`), alle canonicals, de sitemap en de JSON-LD gebruiken `https://lachgasamsterdam.net` zonder www.

## Na wijzigingen controleren

- `npm run build` moet zonder fouten eindigen.
- Lighthouse mobile en desktop op home, een product-, locatie- en infopagina.
