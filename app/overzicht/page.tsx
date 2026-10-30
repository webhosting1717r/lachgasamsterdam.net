import type { Metadata } from 'next';
import { pages } from '@/lib/pages';
import { pageMeta } from '@/lib/meta';
import { Crumbs, Cta, JsonLd } from '@/components/ui';
import { graph } from '@/lib/schema';
import type { Group } from '@/lib/types';

export const metadata: Metadata = pageMeta({
  title: 'Alle pagina’s van Lachgas Amsterdam',
  description: 'Overzicht van alle pagina’s van Lachgas Amsterdam: producten, bezorggebied, bestellen, zoekopdrachten, informatie en juridische pagina’s.',
  path: '/overzicht/',
});

const groups: [Group, string, string][] = [
  ['hub', 'Bestellen en contact', 'Hier begin je als je wilt bestellen, wilt weten waar we bezorgen of een vraag hebt. Ook de kennisbank en de pagina over onze werkwijze staan hier.'],
  ['product', 'Producten', 'De Fastgas Wegwerp Tank in drie formaten, met specificaties, advies bij het kiezen en uitleg over slagroompatronen en slagroomspuiten.'],
  ['service', 'Zoekopdrachten en diensten', 'Alles over kopen, bestellen en laten bezorgen: via WhatsApp, overdag of ’s nachts, voor horeca en evenementen, en in het Engels.'],
  ['location', 'Bezorggebied', 'Per stadsdeel en per plaats lees je welke wijken we bezoeken, hoe we er komen en hoe lang de levering doorgaans duurt.'],
  ['info', 'Informatie', 'Betrouwbare uitleg over wat lachgas is, wat de wet zegt, veilig gebruik, rijden na gebruik en het bewaren en vervoeren van een tank.'],
  ['legal', 'Juridisch', 'Onze privacyverklaring en algemene voorwaarden.'],
];

export default function Overzicht() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Alle pagina’s', path: '/overzicht/' }];
  return (
    <>
      <JsonLd data={graph(null, trail, undefined, 'Overzicht van alle pagina’s van Lachgas Amsterdam.')} />
      <section className="hero sub">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>Alle pagina&rsquo;s</h1>
          <p className="lead">Elke pagina van de site op een rij, handig om snel te vinden wat je zoekt.</p>
        </div>
      </section>
      <div className="wrap">
        <section className="panel narrow">
          <p>
            Lachgas Amsterdam bezorgt de originele Fastgas Wegwerp Tank in Amsterdam en omstreken. Naast de homepage staan hier alle {pages.length} pagina&rsquo;s van de site, geordend per onderwerp. Wil je direct bestellen, ga dan naar <a href="/bestellen/">bestellen</a> of stuur een bericht via WhatsApp. Staat je vraag er niet bij, kijk dan bij de <a href="/veelgestelde-vragen/">veelgestelde vragen</a> of neem <a href="/contact/">contact</a> op.
          </p>
          <Cta />
        </section>
        {groups.map(([g, title, intro]) => (
          <section className="panel" key={g}>
            <h2>{title}</h2>
            <p>{intro}</p>
            <ul className="places">
              {pages.filter((p) => p.group === g).map((p) => (
                <li key={p.slug}><a href={`/${p.slug}/`} {...(p.lang ? { lang: p.lang } : {})}>{p.nav}</a></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
