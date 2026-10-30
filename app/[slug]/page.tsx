import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { bySlug, pages } from '@/lib/pages';
import { pageMeta } from '@/lib/meta';
import { graph } from '@/lib/schema';
import { Blocks, BlueprintZoom, Cta, Crumbs, FaqList, JsonLd, Related, Toc, trailOf } from '@/components/ui';
import { site } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = bySlug.get(slug);
  if (!p) return {};
  const twin = p.twin ? bySlug.get(p.twin) : undefined;
  const languages = twin
    ? { [p.lang === 'en' ? 'en' : 'nl-NL']: `/${p.slug}/`, [twin.lang === 'en' ? 'en' : 'nl-NL']: `/${twin.slug}/` }
    : undefined;
  return pageMeta({ title: p.title, description: p.desc, path: `/${p.slug}/`, languages, article: p.kind === 'article', locale: p.lang === 'en' ? 'en_US' : 'nl_NL' });
}

const chips: Record<string, string[]> = {
  location: ['24/7 bereikbaar', `Binnen ${site.etaShort}`, 'PIN of contant', `${site.minAge}+`],
  product: ['Verzegeld', 'Geen statiegeld', 'PIN of contant', `${site.minAge}+`],
  service: ['24/7 bereikbaar', 'Prijs vooraf', 'PIN of contant', `${site.minAge}+`],
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = bySlug.get(slug);
  if (!p) notFound();
  const trail = trailOf(p);
  const chip = p.noCta ? null : chips[p.kind ?? ''];
  const en = p.lang === 'en';
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
              {!p.noCta && <Cta en={en} text={en ? `Hi, I would like to order (${p.nav}).` : `Hoi, ik wil graag bestellen (${p.nav}).`} />}
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
          <p className="updated">{en ? 'Last updated' : 'Bijgewerkt'}: <time dateTime={site.lastmod}>{en ? site.lastmodTextEn : site.lastmodText}</time></p>
        </section>
        {p.faq && p.faq.length > 0 && (
          <div className="panel narrow"><FaqList faq={p.faq} title={en ? 'Frequently asked questions' : undefined} /></div>
        )}
        {!p.noCta && (
          <section className="panel final">
            <h2>{en ? 'Ready to order?' : 'Klaar om te bestellen?'}</h2>
            <p>{en ? 'Send a message with your address and tank size. You hear the price and arrival time straight away.' : 'Stuur een bericht met je adres en formaat. Je hoort direct prijs en aankomsttijd.'}</p>
            <Cta en={en} />
          </section>
        )}
        <div className="panel"><Related slugs={p.related} title={en ? 'See also' : undefined} /></div>
      </div>
    </div>
  );
}
