import type { Metadata } from 'next';
import { site } from './site';

const og = [{ url: '/og.png', width: 1200, height: 630, alt: 'Lachgas Amsterdam: Fastgas Wegwerp Tank bezorgd, 24/7' }];

export function pageMeta(opts: { title: string; description: string; path: string; absolute?: boolean }): Metadata {
  const full = opts.absolute ? opts.title : `${opts.title} | ${site.name}`;
  return {
    title: { absolute: full },
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: { type: 'website', locale: 'nl_NL', siteName: site.name, url: opts.path, title: full, description: opts.description, images: og },
    twitter: { card: 'summary_large_image', title: full, description: opts.description, images: ['/og.png'] },
  };
}

export const defaultOg = og;
