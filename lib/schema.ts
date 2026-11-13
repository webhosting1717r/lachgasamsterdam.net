import type { Faq, Page } from './types';
import { locationData } from './content/locations';
import { abs, site } from './site';

/* FAQ-antwoorden: **vet** en [label](/pad/) worden <strong> en absolute <a>; Google staat deze HTML toe in Answer.text. */
const faqHtml = (s: string) =>
  s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t: string, href: string) => `<a href="${/^https?:/.test(href) ? href : abs(href)}">${t}</a>`);
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const hours = { '@type': 'OpeningHoursSpecification', dayOfWeek: days, opens: '00:00', closes: '23:59' };

/* Netto inhoud in gram, zoals op de productpagina's en het label staat. */
const netto: Record<string, number> = { 'fastgas-2kg': 2000, 'fastgas-4kg': 4000, 'fastgas-10kg': 10000 };

/* Stad, stadsdeel of plaats als schema.org-plaats, met de gemeente of regio eromheen. */
function area(slug: string) {
  const l = locationData.find((x) => x.slug === slug)!;
  if (l.kind === 'stad') return { '@type': 'City', name: 'Amsterdam', containedInPlace: { '@type': 'AdministrativeArea', name: 'Noord-Holland' } };
  if (l.kind === 'stadsdeel') return { '@type': 'AdministrativeArea', name: l.name, containedInPlace: { '@type': 'City', name: 'Amsterdam' } };
  return { '@type': 'City', name: l.name, containedInPlace: { '@type': 'AdministrativeArea', name: l.region } };
}

/* Bestelkanaal van elke Service. */
const channel = { '@type': 'ServiceChannel', serviceUrl: abs('/bestellen/'), availableLanguage: ['nl', 'en'] };
const serviceType = (en: boolean) => (en ? 'Delivery of Fastgas disposable nitrous oxide tanks (N2O)' : 'Bezorging van Fastgas Wegwerp Tank (N2O)');

export const business = {
  '@type': 'LocalBusiness',
  '@id': abs('/#business'),
  name: site.name,
  alternateName: ['Lachgaskoerier Amsterdam', 'Lachgas Amsterdam bezorgdienst'],
  slogan: 'Fastgas tank bezorgd, 24/7, binnen 20 tot 30 minuten',
  knowsAbout: ['Lachgas (distikstofmonoxide, N2O)', 'Slagroomspuiten en slagroompatronen', 'Veilige opslag en transport van gastanks', 'Opiumwet en lachgas'],
  description:
    'Bezorgdienst voor de originele Fastgas Wegwerp Tank (2KG, 4KG en 10KG) in Amsterdam en omstreken. 24/7 bereikbaar, betalen bij aflevering met PIN, Tikkie of contant. Alleen 18+ en voor toegestaan gebruik.',
  url: abs('/'),
  logo: abs('/icon-512.png'),
  image: abs('/og.jpg'),
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Debit Card, Tikkie',
  address: { '@type': 'PostalAddress', addressLocality: 'Amsterdam', addressRegion: 'Noord-Holland', addressCountry: 'NL' },
  areaServed: locationData.map((l) => area(l.slug)),
  openingHoursSpecification: hours,
};

export const websiteNode = {
  '@type': 'WebSite',
  '@id': abs('/#website'),
  url: abs('/'),
  name: site.name,
  inLanguage: 'nl-NL',
  publisher: { '@id': abs('/#business') },
};

export const faqNode = (faq: Faq[], en = false) => ({
  '@type': 'FAQPage',
  inLanguage: en ? 'en' : 'nl-NL',
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: faqHtml(f.a) } })),
});

export function crumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

export function graph(page: Page | null, trail: { name: string; path: string }[], faq?: Faq[], home?: string) {
  const path = page ? `/${page.slug}/` : '/';
  const en = page?.lang === 'en';
  const updated = page ? (page.updated ?? site.contentDate) : site.lastmod;
  const published = page?.published ?? site.published;
  const webType = page?.slug === 'contact' ? 'ContactPage' : page?.slug === 'over-ons' ? 'AboutPage' : 'WebPage';
  const nodes: unknown[] = [business, websiteNode];
  nodes.push({
    '@type': webType,
    '@id': abs(path) + '#webpage',
    url: abs(path),
    name: page ? page.h1 : site.name,
    description: page ? page.desc : (home ?? undefined),
    inLanguage: en ? 'en' : 'nl-NL',
    isPartOf: { '@id': abs('/#website') },
    primaryImageOfPage: { '@type': 'ImageObject', url: abs(page?.img?.src ?? '/og.jpg') },
    about: { '@id': abs('/#business') },
    ...(webType === 'ContactPage' ? { mainEntity: { '@id': abs('/#business') } } : {}),
    datePublished: published,
    dateModified: updated,
    ...(trail.length > 1 ? { breadcrumb: { '@id': abs(path) + '#breadcrumb' } } : {}),
  });
  if (trail.length > 1) nodes.push({ ...crumbs(trail), '@id': abs(path) + '#breadcrumb' });

  if (page?.kind === 'location') {
    nodes.push({
      '@type': 'Service',
      '@id': abs(path) + '#service',
      name: `Lachgas bezorgen in ${page.place}`,
      serviceType: serviceType(false),
      provider: { '@id': abs('/#business') },
      termsOfService: abs('/algemene-voorwaarden/'),
      availableChannel: channel,
      areaServed: area(page.slug),
      url: abs(path),
      description: page.desc,
    });
  } else if (page?.kind === 'service') {
    nodes.push({
      '@type': 'Service',
      '@id': abs(path) + '#service',
      name: page.h1,
      serviceType: serviceType(en),
      provider: { '@id': abs('/#business') },
      termsOfService: abs('/algemene-voorwaarden/'),
      availableChannel: channel,
      areaServed: area('lachgas-amsterdam'),
      url: abs(path),
      description: page.desc,
    });
  } else if (page?.kind === 'product') {
    /* ProductModel i.p.v. Product: zonder prijs zou Product een fout in Search Console geven. */
    const hub = page.slug === 'lachgas-tanks';
    nodes.push({
      '@type': 'ProductModel',
      '@id': abs(path) + '#product',
      name: hub ? 'Fastgas Wegwerp Tank' : page.h1,
      brand: { '@type': 'Brand', name: site.brand },
      description: page.desc,
      url: abs(path),
      audience: { '@type': 'PeopleAudience', requiredMinAge: site.minAge },
      ...(page.img ? { image: abs(page.img.src) } : {}),
      ...(netto[page.slug]
        ? {
            isVariantOf: { '@type': 'ProductModel', '@id': abs('/lachgas-tanks/#product'), name: 'Fastgas Wegwerp Tank', url: abs('/lachgas-tanks/') },
            additionalProperty: [{ '@type': 'PropertyValue', name: 'Netto inhoud lachgas (N2O)', value: netto[page.slug], unitCode: 'GRM' }],
          }
        : {}),
      ...(hub ? { model: Object.keys(netto).map((slug) => ({ '@type': 'ProductModel', '@id': abs(`/${slug}/#product`) })) } : {}),
    });
  } else if (page?.kind === 'article') {
    nodes.push({
      '@type': 'Article',
      '@id': abs(path) + '#article',
      headline: page.h1,
      description: page.desc,
      inLanguage: en ? 'en' : 'nl-NL',
      image: abs(page.img?.src ?? '/og.jpg'),
      dateModified: updated,
      datePublished: published,
      author: { '@id': abs('/#business') },
      publisher: { '@id': abs('/#business') },
      mainEntityOfPage: { '@id': abs(path) + '#webpage' },
    });
  }
  if (faq && faq.length) nodes.push({ ...faqNode(faq, en), '@id': abs(path) + '#faq' });
  return { '@context': 'https://schema.org', '@graph': nodes };
}
