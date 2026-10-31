import type { ReactNode } from 'react';
import type { Block, Faq, Page } from '@/lib/types';
import { bySlug } from '@/lib/pages';
import { locationData } from '@/lib/content/locations';
import { site, waHref } from '@/lib/site';

/* **vet** en [label](/pad/) worden <strong> en <a>. Gewone <a>: statische site, geen client-routing nodig. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>;
        const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (m) return /^https?:/.test(m[2]) ? <a key={i} href={m[2]} rel="noopener">{m[1]}</a> : <a key={i} href={m[2]}>{m[1]}</a>;
        return p;
      })}
    </>
  );
}

const IconWa = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20l1.2-4.1A8.5 8.5 0 1 1 8.300 19L4 20Z" />
    <path d="M9 8.500c.3 2.600 2.800 5.200 6 6l1.200-1.300-2-1-.9.800c-.9-.4-1.900-1.400-2.300-2.300l.8-.9-1-2L9 8.500Z" fill="currentColor" stroke="none" />
  </svg>
);

export function Cta({ text, en }: { text?: string; en?: boolean }) {
  return (
    <div className="cta">
      <a className="btn pri" href={waHref(text)} rel="noopener">
        <IconWa /> {en ? 'Order via WhatsApp' : 'Bestel via WhatsApp'}
      </a>
    </div>
  );
}

/* Ankers voor de inhoudsopgave: "Wat kost een tank?" wordt "wat-kost-een-tank". */
export const anchor = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/* Inhoudsopgave van een lange pagina: gewone ankerlinks, dus zonder JavaScript. */
export function Toc({ blocks, title = 'Op deze pagina' }: { blocks: Block[]; title?: string }) {
  const heads = blocks.filter((b): b is Extract<Block, { t: 'h2' }> => b.t === 'h2');
  if (heads.length < 4) return null;
  return (
    <nav className="toc" aria-label={title}>
      <strong>{title}</strong>
      <ol>
        {heads.map((h) => <li key={h.x}><a href={`#${anchor(h.x)}`}>{h.x}</a></li>)}
      </ol>
    </nav>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'h2':
            return <h2 key={i} id={anchor(b.x)}>{b.x}</h2>;
          case 'h3':
            return <h3 key={i}>{b.x}</h3>;
          case 'p':
            return <p key={i}><Rich text={b.x} /></p>;
          case 'ul':
            return <ul key={i} className="ticks">{b.x.map((x, j) => <li key={j}><Rich text={x} /></li>)}</ul>;
          case 'steps':
            return (
              <ol key={i} className="steps">
                {b.x.map(([h, p], j) => (
                  <li key={j}><strong>{h}</strong><span><Rich text={p} /></span></li>
                ))}
              </ol>
            );
          case 'cards':
            return (
              <div key={i} className="cards">
                {b.x.map((c) => (
                  <a key={c.href} className="card" href={c.href}>
                    <strong>{c.h}</strong>
                    <span>{c.p}</span>
                  </a>
                ))}
              </div>
            );
          case 'table':
            return (
              <div key={i} className="tw">
                <table>
                  <thead><tr>{b.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
                  <tbody>{b.rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k}><Rich text={c} /></td>)}</tr>)}</tbody>
                </table>
              </div>
            );
          case 'note':
            return <p key={i} className="note"><Rich text={b.x} /></p>;
        }
      })}
    </>
  );
}

export function FaqList({ faq, title = 'Veelgestelde vragen' }: { faq: Faq[]; title?: string }) {
  return (
    <section className="faq" aria-labelledby="faq-h">
      <h2 id="faq-h">{title}</h2>
      {faq.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p><Rich text={f.a} /></p>
        </details>
      ))}
    </section>
  );
}

export function Related({ slugs, title = 'Bekijk ook' }: { slugs: string[]; title?: string }) {
  return (
    <section aria-labelledby="rel-h">
      <h2 id="rel-h">{title}</h2>
      <div className="cards">
        {slugs.map((s) => {
          const p = bySlug.get(s)!;
          return (
            <a key={s} className="card" href={`/${s}/`}>
              <strong>{p.nav}</strong>
              <span>{p.kicker}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export function trailOf(p: Page): { name: string; path: string }[] {
  const t: { name: string; path: string }[] = [{ name: 'Home', path: '/' }];
  const chain: Page[] = [];
  let cur: Page | undefined = p;
  while (cur) {
    chain.unshift(cur);
    cur = cur.parent && cur.parent !== 'home' ? bySlug.get(cur.parent) : undefined;
  }
  for (const c of chain) t.push({ name: c.nav, path: `/${c.slug}/` });
  return t;
}

export function Crumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Kruimelpad">
      <ol>
        {trail.map((t, i) => (
          <li key={t.path}>
            {i < trail.length - 1 ? <a href={t.path}>{t.name}</a> : <span aria-current="page">{t.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

const navItems = [
  ['Tanks', '/lachgas-tanks/'],
  ['Bezorggebied', '/bezorggebied/'],
  ['Bestellen', '/bestellen/'],
  ['Horeca', '/lachgas-horeca/'],
  ['Info', '/lachgas-informatie/'],
  ['Contact', '/contact/'],
] as const;

export function Header() {
  return (
    <header className="nav">
      <div className="wrap navin">
        <a className="brand" href="/" aria-label="Lachgas Amsterdam, naar de homepage">
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
            <rect x="8" y="4" width="8" height="17" rx="2.5" fill="#0b1b4a" stroke="#fff" strokeWidth="1.2" />
            <rect x="8" y="8" width="8" height="2.2" fill="#ffd60a" />
            <rect x="10.5" y="1.5" width="3" height="3" rx="1" fill="#fff" />
          </svg>
          <span>Lachgas Amsterdam</span>
        </a>
        <nav className="links" aria-label="Hoofdmenu">
          {navItems.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
        </nav>
        <a className="btn pri sm hide-s" href={waHref()} rel="noopener">Bestel</a>
        <details className="menu">
          <summary aria-label="Menu"><span /><span /></summary>
          <div className="sheet">
            {navItems.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
            <a href="/lachgas-24-7/">Lachgas 24/7</a>
            <a href={waHref()} rel="noopener">WhatsApp {site.whatsappText}</a>
          </div>
        </details>
      </div>
    </header>
  );
}

const col = (slugs: string[]) =>
  slugs.map((s) => <li key={s}><a href={`/${s}/`}>{bySlug.get(s)!.nav}</a></li>);

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap fgrid">
        <div>
          <strong className="fh">Lachgas Amsterdam</strong>
          <p className="fp">Bezorgdienst voor de originele Fastgas Wegwerp Tank in Amsterdam en omstreken. Dag en nacht bereikbaar.</p>
          <p className="fp"><a href={waHref()} rel="noopener">WhatsApp {site.whatsappText}</a></p>
        </div>
        <div>
          <strong className="fh">Producten</strong>
          <ul>{col(['lachgas-tanks', 'fastgas-2kg', 'fastgas-4kg', 'fastgas-10kg', 'wegwerp-lachgas-tanks', 'slagroompatronen', 'slagroomspuiten', 'nitrous-oxide-tanks'])}</ul>
        </div>
        <div>
          <strong className="fh">Bestellen</strong>
          <ul>{col(['lachgas-kopen-amsterdam', 'lachgas-bestellen-amsterdam', 'lachgas-bezorgen', 'lachgas-bezorgdienst', 'lachgas-koerier', 'lachgas-24-7', 'lachgas-nachtlevering', 'overdag-bestellen', 'lachgas-prijs', 'lachgas-horeca', 'lachgas-evenementen', 'laughing-gas-delivery-amsterdam'])}</ul>
        </div>
        <div className="f2">
          <strong className="fh">Bezorggebied</strong>
          <ul className="two">{locationData.map((l) => <li key={l.slug}><a href={`/${l.slug}/`}>{l.kind === 'stad' ? 'Lachgas Amsterdam' : l.name}</a></li>)}</ul>
        </div>
        <div>
          <strong className="fh">Informatie</strong>
          <ul>
            {col(['wat-is-lachgas', 'is-lachgas-verboden', 'lachgas-in-het-verkeer', 'veilig-gebruik-lachgas', 'hoe-werkt-een-slagroomspuit', 'lachgas-opslag-en-transport', 'veelgestelde-vragen', 'over-ons', 'contact'])}
            <li><a href="/overzicht/">Alle pagina&rsquo;s</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap fbot">
        <p>Levering uitsluitend aan 18+ en uitsluitend voor toegestaan gebruik. Lachgas valt onder de Opiumwet; zie de <a href="/is-lachgas-verboden/">wettelijke status</a>.</p>
        <p>&copy; 2026 {site.name} &middot; <a href="/privacy-en-cookies/">Privacy en cookies</a> &middot; <a href="/algemene-voorwaarden/">Algemene voorwaarden</a></p>
      </div>
    </footer>
  );
}

/* Zwevende WhatsApp-knop: altijd zichtbaar, rechtsonder. Op mobiel boven de vaste knoppenbalk. Zonder JavaScript. */
export function WaFloat() {
  return (
    <a className="wa-float" href={waHref()} rel="noopener" aria-label="Bestel via WhatsApp" title="Bestel via WhatsApp">
      <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}

export function StickyCta() {
  return (
    <div className="sticky" role="group" aria-label="Snel bestellen">
      <a className="btn pri" href={waHref()} rel="noopener"><IconWa /> WhatsApp</a>
    </div>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

/* Poster is het eerste beeld (LCP); de twee gespiegelde video's (zelfde bestand) faden er na load overheen. */
export function Bg(): ReactNode {
  const html = `<img class="poster" src="/bg-poster-v1.webp" alt="" width="960" height="540" decoding="async" fetchpriority="high"><video class="v1" muted loop playsinline preload="none" disablepictureinpicture aria-hidden="true" tabindex="-1" data-src="/bg-v1.mp4"></video><video class="v2" muted loop playsinline preload="none" disablepictureinpicture aria-hidden="true" tabindex="-1" data-src="/bg-v1.mp4"></video>`;
  return <div className="bg" aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />;
}

/* Blueprint met inzoomknop. Zonder JavaScript: de knop is een link naar #bp-zoom (:target opent het
   scherm), "Inzoomen" is een checkbox-label. Het grote bestand (lazy, in een verborgen blok) wordt pas
   opgehaald als het scherm opengaat. */
export function BlueprintZoom({ alt, priority }: { alt: string; priority?: boolean }) {
  return (
    <div className="bp">
      <img
        className="blueprint"
        src="/fastgas-blueprint.webp"
        srcSet="/fastgas-blueprint.webp 768w, /fastgas-blueprint-1200.webp 1200w"
        sizes="(min-width: 900px) 540px, 92vw"
        alt={alt}
        width={768}
        height={512}
        decoding="async"
        {...(priority ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
      />
      <a className="zoom" href="#bp-zoom" aria-label="Blueprint vergroten">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M20 20l-4.8-4.8M10.5 7.5v6M7.5 10.5h6" />
        </svg>
        Inzoomen
      </a>
      <div id="bp-zoom" className="lb" role="dialog" aria-label="Blueprint vergroot">
        <input type="checkbox" id="bp-full" className="lbchk" aria-label="Volledige grootte" />
        <div className="lbbar">
          <label htmlFor="bp-full" className="btn sec sm lbz"><span className="zin">Inzoomen</span><span className="zout">Uitzoomen</span></label>
          <a className="btn pri sm" href="#top-bp" aria-label="Sluiten">Sluiten</a>
        </div>
        <div className="lbscroll">
          <img src="/fastgas-blueprint-full.webp" alt={alt} width={1536} height={1024} loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  );
}
