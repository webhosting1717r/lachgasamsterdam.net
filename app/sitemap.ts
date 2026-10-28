import type { MetadataRoute } from 'next';
import { pages } from '@/lib/pages';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

const prio = (g: string, slug: string) =>
  slug === 'lachgas-amsterdam' || slug === 'lachgas-tanks' || slug === 'bestellen'
    ? 0.9
    : g === 'legal'
      ? 0.2
      : g === 'location'
        ? 0.7
        : g === 'info'
          ? 0.6
          : 0.8;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, lastModified: site.lastmod, changeFrequency: 'weekly', priority: 1 },
    ...pages.map((p) => ({
      url: `${site.url}/${p.slug}/`,
      lastModified: site.lastmod,
      changeFrequency: 'monthly' as const,
      priority: prio(p.group, p.slug),
    })),
    { url: `${site.url}/overzicht/`, lastModified: site.lastmod, changeFrequency: 'monthly', priority: 0.3 },
  ];
}
