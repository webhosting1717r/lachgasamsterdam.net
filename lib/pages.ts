import type { Page } from './types';
import { locations } from './content/locations';
import { products } from './content/products';
import { services } from './content/services';
import { info } from './content/info';
import { hubs } from './content/hubs';

/* Alle subpagina's (zonder home en 404). Elke slug is een eigen zoekopdracht/intentie. */
export const pages: Page[] = [...hubs, ...products, ...services, ...locations, ...info];

export const bySlug = new Map(pages.map((p) => [p.slug, p]));

export const get = (slug: string): Page => {
  const p = bySlug.get(slug);
  if (!p) throw new Error(`Onbekende pagina: ${slug}`);
  return p;
};

/* Controle op dubbele slugs en kapotte relaties tijdens de build. */
(() => {
  const seen = new Set<string>();
  for (const p of pages) {
    if (seen.has(p.slug)) throw new Error(`Dubbele slug: ${p.slug}`);
    seen.add(p.slug);
  }
  for (const p of pages) for (const r of p.related) if (!seen.has(r)) throw new Error(`${p.slug}: related ${r} bestaat niet`);
})();
