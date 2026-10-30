import type { Faq, Page } from './types';
import { locationData } from './content/locations';
import { abs, site } from './site';

const strip = (s: string) => s.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const hours = { '@type': 'OpeningHoursSpecification', dayOfWeek: days, opens: '00:00', closes: '23:59' };

/* Netto inhoud in gram, zoals op de productpagina's en het label staat. */
const netto: Record<string, number> = { 'fastgas-2kg': 2000, 'fastgas-4kg': 4000, 'fastgas-10kg': 10000 };

export const business = {
  '@type': 'LocalBusiness',
  '@id': abs('/#business'),
  name: site.name,
  alternateName: 'Lachgaskoerier Amsterdam',
  slogan: 'Fastgas tank bezorgd, 24/7, binnen 20 tot 30 minuten',
  knowsAbout: ['Lachgas (distikstofmonoxide, N2O)', 'Slagroomspuiten en slagroompatronen', 'Veilige opslag en transport van gastanks', 'Opiumwet en lachgas'],
  description:
    'Bezorgdienst voor de originele Fastgas Wegwerp Tank (2KG, 4KG en 10KG) in Amsterdam en omstreken. 24/7 bereikbaar, betalen bij aflevering met PIN of contant. Alleen 18+ en voor toegestaan gebruik.',
  url: abs('/'),
  logo: abs('/icon-512.png'),
  image: abs('/og.png'),
  telephone: site.phone,
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Debit Card',
  address: { '@type': 'PostalAddress', addressLocality: 'Amsterdam', addressRegion: 'Noord-Holland', addressCountry: 'NL' },
  areaServed: locationData.map((l) => ({ '@type': 'City', name: l.name })),
  openingHoursSpecification: hours,
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'customer service', telephone: site.phone, availableLanguage: ['nl', 'en'], hoursAvailable: hours },
    { '@type': 'ContactPoint', contactType: 'sales', name: 'WhatsApp bestellen', telephone: site.whatsapp, url: `https://wa.me/${site.whatsapp.replace(/\D/g, '')}`, availableLanguage: ['nl', 'en'], hoursAvailable: hours },
  ],
};

export const websiteNode = {
  '@type': 'WebSite',
  '@id': abs('/#website'),
  url: abs('/'),
  name: site.name,
  inLanguage: 'nl-NL',
  publisher: { '@id': abs('/#business') },
};

export const faqNode = (faq: Faq[]) => ({
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } })),
});

export function crumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

export function graph(page: Page | null, trail: { name: string; path: string }[], faq?: Faq[], home?: string) {
  const path = page ? `/${page.slug}/` : '/';
  const nodes: unknown[] = [business, websiteNode];
  nodes.push({
    '@type': page?.kind === 'article' ? 'WebPage' : page?.group === 'hub' && page.slug === 'contact' ? 'ContactPage' : 'WebPage',
    '@id': abs(path) + '#webpage',
    url: abs(path),
    name: page ? page.h1 : site.name,
    description: page ? page.desc : (home ?? undefined),
    inLanguage: page?.lang === 'en' ? 'en' : 'nl-NL',
    isPartOf: { '@id': abs('/#website') },
    primaryImageOfPage: { '@type': 'ImageObject', url: abs(page?.img?.src ?? '/og.png') },
    about: { '@id': abs('/#business') },
    dateModified: site.lastmod,
    breadcrumb: { '@id': abs(path) + '#breadcrumb' },
  });
  nodes.push({ ...crumbs(trail), '@id': abs(path) + '#breadcrumb' });

  if (page?.kind === 'location') {
    nodes.push({
      '@type': 'Service',
      '@id': abs(path) + '#service',
      name: `Lachgas bezorgen in ${page.place}`,
      serviceType: 'Bezorging van Fastgas Wegwerp Tank (N2O)',
      provider: { '@id': abs('/#business') },
      termsOfService: abs('/algemene-voorwaarden/'),
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: abs('/bestellen/'), servicePhone: site.phone, availableLanguage: ['nl', 'en'] },
      areaServed: { '@type': 'City', name: page.place },
      url: abs(path),
      description: page.desc,
    });
  } else if (page?.kind === 'service') {
    nodes.push({
      '@type': 'Service',
      '@id': abs(path) + '#service',
      name: page.h1,
      serviceType: 'Bezorging van Fastgas Wegwerp Tank (N2O)',
      provider: { '@id': abs('/#business') },
      termsOfService: abs('/algemene-voorwaarden/'),
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: abs('/bestellen/'), servicePhone: site.phone, availableLanguage: ['nl', 'en'] },
      areaServed: { '@type': 'City', name: 'Amsterdam' },
      url: abs(path),
      description: page.desc,
    });
  } else if (page?.kind === 'product') {
    /* ProductModel i.p.v. Product: zonder prijs zou Product een fout in Search Console geven. */
    nodes.push({
      '@type': 'ProductModel',
      '@id': abs(path) + '#product',
      name: page.h1 === 'Lachgas tanks' ? 'Fastgas Wegwerp Tank' : page.h1,
      brand: { '@type': 'Brand', name: site.brand },
      description: page.desc,
      url: abs(path),
      ...(page.img ? { image: abs(page.img.src) } : {}),
      ...(netto[page.slug] ? { additionalProperty: [{ '@type': 'PropertyValue', name: 'Netto inhoud lachgas (N2O)', value: netto[page.slug], unitCode: 'GRM' }] } : {}),
    });
  } else if (page?.kind === 'article') {
    nodes.push({
      '@type': 'Article',
      '@id': abs(path) + '#article',
      headline: page.h1,
      description: page.desc,
      inLanguage: page.lang === 'en' ? 'en' : 'nl-NL',
      image: abs(page.img?.src ?? '/og.png'),
      dateModified: site.lastmod,
      datePublished: '2026-10-29',
      author: { '@id': abs('/#business') },
      publisher: { '@id': abs('/#business') },
      mainEntityOfPage: { '@id': abs(path) + '#webpage' },
    });
  }
  if (faq && faq.length) nodes.push({ ...faqNode(faq), '@id': abs(path) + '#faq' });
  return { '@context': 'https://schema.org', '@graph': nodes };
}
