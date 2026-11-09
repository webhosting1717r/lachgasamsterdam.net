import type { Metadata } from 'next';
import { site } from './site';

const og = [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Lachgas Amsterdam: Fastgas Wegwerp Tank bezorgd, 24/7' }];

type Opts = {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
  /** hreflang-tegenhangers: { 'nl-NL': '/pad/', en: '/path/' } (inclusief de pagina zelf) */
  languages?: Record<string, string>;
  /** 'article' voor kennispagina's: voegt gewijzigd-datum toe aan Open Graph */
  article?: boolean;
  locale?: string;
  /** laatste inhoudelijke wijziging (JJJJ-MM-DD) voor og:article:modified_time */
  modified?: string;
};

export function pageMeta(opts: Opts): Metadata {
  const full = opts.absolute ? opts.title : `${opts.title} | ${site.name}`;
  const locale = opts.locale ?? 'nl_NL';
  return {
    title: { absolute: full },
    description: opts.description,
    alternates: { canonical: opts.path, ...(opts.languages ? { languages: opts.languages } : {}) },
    openGraph: {
      type: opts.article ? 'article' : 'website',
      locale,
      siteName: site.name,
      url: opts.path,
      title: full,
      description: opts.description,
      images: og,
      ...(opts.article ? { modifiedTime: opts.modified ?? site.lastmod } : {}),
    },
    twitter: { card: 'summary_large_image', title: full, description: opts.description, images: ['/og.jpg'] },
  };
}

export const defaultOg = og;
