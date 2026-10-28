import type { Metadata } from 'next';
import { pages } from '@/lib/pages';
import { pageMeta } from '@/lib/meta';
import { Crumbs, JsonLd } from '@/components/ui';
import { graph } from '@/lib/schema';
import type { Group } from '@/lib/types';

export const metadata: Metadata = pageMeta({
  title: 'Alle pagina’s van Lachgas Amsterdam',
  description: 'Overzicht van alle pagina’s van Lachgas Amsterdam: producten, bezorggebied, bestellen, zoekopdrachten, informatie en juridische pagina’s.',
  path: '/overzicht/',
});

const groups: [Group, string][] = [
  ['hub', 'Bestellen en contact'],
  ['product', 'Producten'],
  ['service', 'Zoekopdrachten en diensten'],
  ['location', 'Bezorggebied'],
  ['info', 'Informatie'],
  ['legal', 'Juridisch'],
];

export default function Overzicht() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Alle pagina’s', path: '/overzicht/' }];
  return (
    <>
      <JsonLd data={graph(null, trail)} />
      <section className="hero sub">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>Alle pagina&rsquo;s</h1>
          <p className="lead">Elke pagina van de site op een rij, handig om snel te vinden wat je zoekt.</p>
        </div>
      </section>
      <div className="wrap">
        {groups.map(([g, title]) => (
          <section className="panel" key={g}>
            <h2>{title}</h2>
            <ul className="places">
              {pages.filter((p) => p.group === g).map((p) => (
                <li key={p.slug}><a href={`/${p.slug}/`}>{p.nav}</a></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
