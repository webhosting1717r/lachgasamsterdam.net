import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { graph } from '@/lib/schema';
import { Cta, FaqList, JsonLd, Rich } from '@/components/ui';
import { locationData } from '@/lib/content/locations';
import { site } from '@/lib/site';
import type { Faq } from '@/lib/types';

export const metadata: Metadata = pageMeta({
  title: 'Lachgas Amsterdam | Fastgas tank bezorgd, 24/7',
  description:
    'Lachgas Amsterdam bezorgt de Fastgas tank (2KG, 4KG, 10KG) 24/7 in Amsterdam en omstreken, doorgaans binnen 20 tot 30 minuten. Betaal bij aflevering.',
  path: '/',
  absolute: true,
});

const faq: Faq[] = [
  { q: 'Hoe snel bezorgen jullie in Amsterdam?', a: 'Gemiddeld staat onze koerier binnen 20 tot 30 minuten voor de deur, dag en nacht. Bij je bestelling bevestigen we de verwachte aankomsttijd.' },
  { q: 'Kan ik bij aflevering betalen?', a: 'Ja. Je betaalt de koerier bij aflevering met PIN of contant. Vooraf betalen of een account aanmaken is niet nodig.' },
  { q: 'Welke tanks leveren jullie?', a: 'De originele Fastgas Wegwerp Tank in 2KG, 4KG en 10KG. Elke tank is verzegeld en voorzien van een label met inhoud en keuringsgegevens. Zie [alle lachgas tanks](/lachgas-tanks/).' },
  { q: 'Bezorgen jullie ook buiten Amsterdam?', a: 'Ja, in een groot deel van de regio: van Haarlem en Hoofddorp tot Almere en Purmerend. Zie het [bezorggebied](/bezorggebied/).' },
  { q: 'Is er een minimumleeftijd?', a: 'Ja, we leveren uitsluitend aan klanten van 18 jaar en ouder en uitsluitend voor toegestaan gebruik. De koerier kan om legitimatie vragen.' },
  { q: 'Is lachgas verboden?', a: 'Sinds 1 januari 2023 valt lachgas onder de Opiumwet. Toepassingen zoals keuken en techniek blijven toegestaan. Lees [de uitleg](/is-lachgas-verboden/).' },
  { q: 'Zijn jullie echt 24/7 open?', a: 'Ja. We zijn elke dag van het jaar bereikbaar, doordeweeks, in het weekend en op feestdagen.' },
];

const sizes = [
  { slug: 'fastgas-2kg', img: '/fastgas-2kg-tile.webp', w: 340, h: 340, t: 'Fastgas 2KG', d: '2000 gram, circa 250 patronen', alt: 'Fastgas 2KG wegwerp tank' },
  { slug: 'fastgas-4kg', img: '/fastgas-4kg-tile.webp', w: 426, h: 340, t: 'Fastgas 4KG', d: '4000 gram, circa 500 patronen', alt: 'Fastgas 4KG wegwerp tank' },
  { slug: 'fastgas-10kg', img: '/fastgas-10kg-tile.webp', w: 510, h: 340, t: 'Fastgas 10KG', d: '10.000 gram, circa 1250 patronen', alt: 'Fastgas 10KG wegwerp tank' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={graph(null, [{ name: 'Home', path: '/' }], faq)} />
      <section className="hero home">
        <div className="wrap">
          <p className="kicker"><span className="dot" aria-hidden="true" />De lachgaskoerier van Amsterdam</p>
          <h1>Lachgas Amsterdam.<br />Binnen {site.etaShort}.</h1>
          <p className="lead">
            De Fastgas Wegwerp Tank, verzegeld en 24/7 bezorgd in Amsterdam en omstreken. Bestel via WhatsApp of telefoon en betaal bij aflevering.
          </p>
          <Cta />
          <ul className="chips">
            <li>24/7 bereikbaar</li>
            <li>PIN of contant</li>
            <li>Prijs vooraf</li>
            <li>{site.minAge}+ en toegestaan gebruik</li>
          </ul>
        </div>
      </section>

      <div className="wrap">
        <section className="panel" aria-labelledby="prod-h">
          <h2 id="prod-h">Eén tank, drie formaten</h2>
          <p>Wij leveren uitsluitend de originele <a href="/fastgas/">Fastgas</a> Wegwerp Tank. Geen statiegeld, geen lege fles om in te leveren.</p>
          <div className="tiles">
            {sizes.map((s) => (
              <a key={s.slug} className="tile" href={`/${s.slug}/`}>
                <img src={s.img} alt={s.alt} width={s.w} height={s.h} loading="lazy" decoding="async" />
                <strong>{s.t}</strong>
                <span>{s.d}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="panel narrow" aria-labelledby="how-h">
          <h2 id="how-h">Bestellen in drie stappen</h2>
          <ol className="steps">
            <li><strong>Stuur een WhatsApp of bel</strong><span>Geef je adres, het gewenste formaat en voor welk gebruik je het nodig hebt.</span></li>
            <li><strong>Wij bevestigen prijs en tijd</strong><span>Je hoort vooraf wat het kost en hoe laat de koerier er is.</span></li>
            <li><strong>Betaal bij aflevering</strong><span>PIN of contant, zonder account en zonder vooruitbetaling.</span></li>
          </ol>
        </section>

        <section className="panel" aria-labelledby="why-h">
          <h2 id="why-h">Waarom klanten voor ons kiezen</h2>
          <div className="split">
            <ul className="ticks">
              <li><strong>Dag en nacht bereikbaar</strong>, ook in het weekend en op feestdagen</li>
              <li><strong>Verzegelde originele tanks</strong> met serienummer en label</li>
              <li><strong>Duidelijke prijs vooraf</strong>, geen verrassingen achteraf</li>
            </ul>
            <ul className="ticks">
              <li><strong>Bestellen via WhatsApp of telefoon</strong>, geen account nodig</li>
              <li><strong>Groot bezorggebied</strong> in en rond Amsterdam</li>
              <li><strong>Leeftijdscontrole</strong> en alleen voor toegestaan gebruik</li>
            </ul>
          </div>
          <p>Voor horeca en cateraars is er een aparte pagina: <a href="/lachgas-horeca/">lachgas voor horeca</a>. Evenement? Zie <a href="/lachgas-evenementen/">lachgas voor evenementen</a>.</p>
        </section>

        <section className="panel" aria-labelledby="area-h">
          <h2 id="area-h">Waar wij bezorgen</h2>
          <p>Alle stadsdelen van Amsterdam en 15 plaatsen eromheen. Kies je locatie voor wijken, bereikbaarheid en de verwachte levertijd.</p>
          <ul className="places">
            {locationData.map((l) => (
              <li key={l.slug}><a href={`/${l.slug}/`}>{l.name}</a></li>
            ))}
          </ul>
        </section>

        <section className="panel narrow" aria-labelledby="law-h">
          <h2 id="law-h">Eerlijk over wetgeving en veiligheid</h2>
          <p>
            <Rich text="Sinds 1 januari 2023 valt lachgas onder de **Opiumwet**. Wij leveren daarom uitsluitend aan klanten van 18 jaar en ouder en uitsluitend voor toegestane toepassingen, zoals keuken, horeca en technisch gebruik. Bij twijfel over het beoogde gebruik leveren we niet." />
          </p>
          <ul className="ticks">
            <li>Gebruik alleen in een goed geventileerde ruimte en met de juiste adapters</li>
            <li>Combineer lachgas nooit met alcohol of andere middelen en rijd er niet mee</li>
            <li>Bewaar tanks rechtop en buiten bereik van kinderen</li>
          </ul>
          <p><a href="/is-lachgas-verboden/">Lees de wettelijke status</a> &middot; <a href="/veilig-gebruik-lachgas/">Veilig gebruik</a> &middot; <a href="/lachgas-informatie/">Alle informatie</a></p>
        </section>

        <div className="panel narrow"><FaqList faq={faq} /></div>

        <section className="panel final">
          <p className="big">Bestel nu. Wij komen.</p>
          <p>Stuur een bericht met je adres en formaat. Je hoort direct prijs en aankomsttijd.</p>
          <Cta />
        </section>
      </div>
    </>
  );
}
