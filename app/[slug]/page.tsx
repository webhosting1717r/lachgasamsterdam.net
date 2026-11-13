import type { Metadata } from 'next';
import type { Page } from '@/lib/types';
import { notFound } from 'next/navigation';
import { bySlug, pages } from '@/lib/pages';
import { pageMeta } from '@/lib/meta';
import { graph } from '@/lib/schema';
import { Blocks, BlueprintZoom, Crumbs, FaqList, JsonLd, Related, Toc, trailOf } from '@/components/ui';
import { dateText, site } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = bySlug.get(slug);
  if (!p) return {};
  const twin = p.twin ? bySlug.get(p.twin) : undefined;
  /* x-default wijst altijd naar de Nederlandse versie */
  const languages = twin
    ? { [p.lang === 'en' ? 'en' : 'nl-NL']: `/${p.slug}/`, [twin.lang === 'en' ? 'en' : 'nl-NL']: `/${twin.slug}/`, 'x-default': `/${p.lang === 'en' ? twin.slug : p.slug}/` }
    : undefined;
  return pageMeta({ title: p.title, description: p.desc, path: `/${p.slug}/`, absolute: p.absolute, languages, article: p.kind === 'article', locale: p.lang === 'en' ? 'en_US' : 'nl_NL', modified: p.updated ?? site.contentDate });
}

/* Chips in de hero; de levertijd komt per locatie uit de pagina zelf (p.eta). */
const chipsFor = (p: Page): string[] | null => {
  switch (p.kind) {
    case 'location':
      return ['24/7 bereikbaar', `Binnen ${p.eta ?? site.etaShort}`, 'PIN, Tikkie of contant', `${site.minAge}+`];
    case 'product':
      return ['Verzegeld', 'Geen statiegeld', 'PIN, Tikkie of contant', `${site.minAge}+`];
    case 'service':
      return ['24/7 bereikbaar', 'Prijs vooraf', 'PIN, Tikkie of contant', `${site.minAge}+`];
    default:
      return null;
  }
};

/* FAQ-kop met het onderwerp van de pagina erin, in plaats van dezelfde kop op elke pagina. */
const faqTitle = (p: Page, en: boolean) =>
  en ? 'Frequently asked questions' : p.place ? `Veelgestelde vragen over lachgas in ${p.place}` : p.slug === 'veelgestelde-vragen' ? 'Veelgestelde vragen' : `Veelgestelde vragen: ${p.nav}`;

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = bySlug.get(slug);
  if (!p) notFound();
  const trail = trailOf(p);
  const chip = p.noCta ? null : chipsFor(p);
  const en = p.lang === 'en';
  const updated = p.updated ?? site.contentDate;
  return (
    <div className="pg" lang={p.lang}>
      <JsonLd data={graph(p, trail, p.faq)} />
      <section className="hero sub">
        <div className="wrap">
          <Crumbs trail={trail} />
          <div className={p.img ? 'row two' : 'row'}>
            <div>
              <p className="kicker"><span className="dot" aria-hidden="true" />{p.kicker}</p>
              <h1>{p.h1}</h1>
              <p className="lead">{p.lead}</p>
              {chip && <ul className="chips">{chip.map((c) => <li key={c}>{c}</li>)}</ul>}
            </div>
            {p.img && p.img.src === '/fastgas-blueprint.webp' && <BlueprintZoom priority alt={p.img.alt} />}
            {p.img && p.img.src !== '/fastgas-blueprint.webp' && (
              <img className="shot" src={p.img.src} alt={p.img.alt} width={p.img.w} height={p.img.h} decoding="async" fetchPriority="high" style={{ aspectRatio: `${p.img.w} / ${p.img.h}` }} />
            )}
          </div>
        </div>
      </section>
      <div className="wrap">
        <section className="panel narrow">
          <Toc blocks={p.blocks} title={en ? 'On this page' : undefined} />
          <Blocks blocks={p.blocks} />
          <p className="updated">{en ? 'Last updated' : 'Bijgewerkt'}: <time dateTime={updated}>{dateText(updated, en)}</time></p>
        </section>
        {p.faq && p.faq.length > 0 && (
          <div className="panel narrow"><FaqList faq={p.faq} title={faqTitle(p, en)} /></div>
        )}
        {!p.noCta && (
          <section className="panel final">
            <p className="big">{en ? 'Ready to order?' : 'Klaar om te bestellen?'}</p>
            <p>{en ? 'Send a message with your address and tank size. You hear the price and arrival time straight away.' : 'Stuur een bericht met je adres en formaat. Je hoort direct prijs en aankomsttijd.'}</p>
          </section>
        )}
        <div className="panel"><Related slugs={p.related} title={en ? 'See also' : undefined} /></div>
      </div>
    </div>
  );
}
