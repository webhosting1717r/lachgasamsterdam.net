import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { bySlug, pages } from '@/lib/pages';
import { pageMeta } from '@/lib/meta';
import { graph } from '@/lib/schema';
import { Blocks, Cta, Crumbs, FaqList, JsonLd, Related, trailOf } from '@/components/ui';
import { site } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = bySlug.get(slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.desc, path: `/${p.slug}/` });
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
  return (
    <>
      <JsonLd data={graph(p, trail, p.faq)} />
      <section className="hero sub">
        <div className="wrap">
          <Crumbs trail={trail} />
          <div className={p.img ? 'row two' : 'row'}>
            <div>
              <p className="kicker"><span className="dot" aria-hidden="true" />{p.kicker}</p>
              <h1>{p.h1}</h1>
              <p className="lead">{p.lead}</p>
              {!p.noCta && <Cta text={`Hoi, ik wil graag bestellen (${p.nav}).`} />}
              {chip && <ul className="chips">{chip.map((c) => <li key={c}>{c}</li>)}</ul>}
            </div>
            {p.img && (
              <img className="shot" src={p.img.src} alt={p.img.alt} width={p.img.w} height={p.img.h} decoding="async" fetchPriority="high" style={{ aspectRatio: `${p.img.w} / ${p.img.h}` }} />
            )}
          </div>
        </div>
      </section>
      <div className="wrap">
        <section className="panel narrow">
          <Blocks blocks={p.blocks} />
        </section>
        {p.faq && p.faq.length > 0 && (
          <div className="panel narrow"><FaqList faq={p.faq} /></div>
        )}
        {!p.noCta && (
          <section className="panel final">
            <h2>Klaar om te bestellen?</h2>
            <p>Stuur een bericht met je adres en formaat. Je hoort direct prijs en aankomsttijd.</p>
            <Cta />
          </section>
        )}
        <div className="panel"><Related slugs={p.related} /></div>
      </div>
    </>
  );
}
