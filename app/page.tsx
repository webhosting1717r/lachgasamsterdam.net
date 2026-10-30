import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { graph } from '@/lib/schema';
import { Blocks, BlueprintZoom, Cta, FaqList, JsonLd, Rich } from '@/components/ui';
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
  { q: 'Hoe snel bezorgen jullie lachgas in Amsterdam?', a: 'Gemiddeld staat onze koerier binnen 20 tot 30 minuten voor de deur, dag en nacht. Buiten Amsterdam hoor je op de pagina van je plaats wat de verwachte tijd is. Bij je bestelling bevestigen we altijd de aankomsttijd.' },
  { q: 'Kan ik bij aflevering betalen?', a: 'Ja. Je betaalt de koerier bij aflevering met PIN of contant. Vooraf betalen of een account aanmaken is niet nodig, en de totaalprijs hoor je al voordat de koerier vertrekt.' },
  { q: 'Wat kost een Fastgas tank?', a: 'De prijs hangt af van het formaat, het aantal tanks en je locatie. Daarom noemen we hem per bericht en altijd vooraf. Stuur je adres en formaat via [WhatsApp](/lachgas-bestellen-whatsapp/) en je hoort meestal binnen enkele minuten het totaalbedrag. Meer uitleg staat op [lachgas prijs](/lachgas-prijs/).' },
  { q: 'Welke tanks leveren jullie?', a: 'De originele Fastgas Wegwerp Tank in 2KG, 4KG en 10KG. Elke tank is verzegeld en voorzien van een label met inhoud en keuringsgegevens. Zie [alle lachgas tanks](/lachgas-tanks/).' },
  { q: 'Welk formaat tank moet ik kiezen?', a: 'Kies naar verbruik. De 2KG past bij kleine keukens, de 4KG bij een drukke keuken of catering, de 10KG bij professioneel gebruik met veel verbruik. Twijfel je, stuur dan je situatie door; we denken mee. Zie ook [Fastgas 4KG](/fastgas-4kg/) en [Fastgas 10KG](/fastgas-10kg/).' },
  { q: 'Bezorgen jullie ook buiten Amsterdam?', a: 'Ja, in een groot deel van de regio: van Haarlem en Hoofddorp tot Almere en Purmerend. Zie het [bezorggebied](/bezorggebied/) voor alle plaatsen en de verwachte levertijd per locatie.' },
  { q: 'Kunnen bedrijven en horeca ook bestellen?', a: 'Ja. Restaurants, bars en cateraars bestellen regelmatig bij ons, ook midden in de dienst. Geef bedrijfsnaam, ontvangstpunt en contactpersoon door. Lees meer op [lachgas voor horeca](/lachgas-horeca/).' },
  { q: 'Is er een minimumleeftijd?', a: 'Ja, we leveren uitsluitend aan klanten van 18 jaar en ouder en uitsluitend voor toegestaan gebruik. De koerier kan om legitimatie vragen en levert niet bij twijfel over leeftijd of beoogd gebruik.' },
  { q: 'Is lachgas verboden?', a: 'Sinds 1 januari 2023 valt lachgas onder de Opiumwet. Recreatief gebruik en bezit daarvoor zijn verboden; toepassingen zoals keuken, techniek en zorg blijven toegestaan. Lees [de uitleg](/is-lachgas-verboden/).' },
  { q: 'Zijn jullie echt 24/7 open?', a: 'Ja. We zijn elke dag van het jaar bereikbaar, doordeweeks, in het weekend en op feestdagen. Zie [lachgas 24/7](/lachgas-24-7/) voor hoe nachtelijke orders verlopen.' },
  { q: 'Wat doe ik met een lege tank?', a: 'Het is een wegwerptank zonder statiegeld, dus je hoeft hem niet terug te brengen. Laat hem volledig leeglopen op een geventileerde plek en voer hem af volgens de lokale regels voor gasflessen of metaal. Meer in [wegwerp lachgas tanks](/wegwerp-lachgas-tanks/).' },
  { q: 'Kan ik in het Engels bestellen?', a: 'Ja, je kunt ons in het Engels appen of bellen. Zie [laughing gas delivery Amsterdam](/laughing-gas-delivery-amsterdam/) voor de Engelstalige uitleg.' },
];

const sizes = [
  { slug: 'fastgas-2kg', img: '/fastgas-2kg-tile.webp', w: 340, h: 340, t: 'Fastgas 2KG', d: '2000 gram, circa 250 patronen', alt: 'Fastgas 2KG wegwerp tank' },
  { slug: 'fastgas-4kg', img: '/fastgas-4kg-tile.webp', w: 426, h: 340, t: 'Fastgas 4KG', d: '4000 gram, circa 500 patronen', alt: 'Fastgas 4KG wegwerp tank' },
  { slug: 'fastgas-10kg', img: '/fastgas-10kg-tile.webp', w: 510, h: 340, t: 'Fastgas 10KG', d: '10.000 gram, circa 1250 patronen', alt: 'Fastgas 10KG wegwerp tank' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={graph(null, [{ name: 'Home', path: '/' }], faq, 'Bezorgdienst voor de originele Fastgas Wegwerp Tank (2KG, 4KG en 10KG) in Amsterdam en omstreken. 24/7 bereikbaar, betalen bij aflevering met PIN of contant. Alleen 18+ en voor toegestaan gebruik.')} />
      <section className="hero home">
        <div className="wrap">
          <div className="row two">
            <div>
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
            <BlueprintZoom priority alt="Technisch overzicht van de Fastgas 2KG tank: streepcode, serienummer, inhoud 2000 gram, maximale druk 180 bar, keuringslichaam en afmetingen" />
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="panel narrow" aria-labelledby="intro-h">
          <h2 id="intro-h">Lachgas bestellen en laten bezorgen in Amsterdam</h2>
          <p>
            <Rich text="**Lachgas Amsterdam** is een bezorgdienst voor één product: de originele Fastgas Wegwerp Tank. Je bestelt via WhatsApp of telefoon, wij bevestigen prijs en aankomsttijd, en de koerier brengt de verzegelde tank naar je adres in Amsterdam of de regio. Je betaalt pas bij aflevering." />
          </p>
          <p>
            <Rich text="Onze klanten zijn restaurants, bars en cateraars die [slagroom, schuimen en mousses](/slagroomspuiten/) maken, evenementenbedrijven die op locatie werken en particulieren met een toegestane keukentoepassing. Omdat we één product leveren, kunnen we snel, duidelijk en zonder omwegen werken: geen webshop met winkelwagen, geen account, geen wachtmuziek." />
          </p>
          <p>
            <Rich text="Lachgas valt sinds 1 januari 2023 onder de Opiumwet. We leveren daarom alleen aan 18+ en alleen voor toegestaan gebruik. Hoe dat precies zit, lees je onder [is lachgas verboden](/is-lachgas-verboden/)." />
          </p>
        </section>

        <section className="panel" aria-labelledby="prod-h">
          <h2 id="prod-h">Alle formaten beschikbaar</h2>
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

        <section className="panel narrow" aria-labelledby="size-h">
          <h2 id="size-h">Welk formaat past bij jouw gebruik?</h2>
          <p>
            <Rich text="Het formaat kies je op basis van hoeveel je gebruikt. Een patroon van 8 gram is genoeg voor ongeveer een halve liter room, dus de inhoud van een tank is goed om te rekenen in porties. Staat je situatie er niet bij, stuur dan een bericht; we adviseren graag." />
          </p>
          <Blocks
            blocks={[
              {
                t: 'table',
                head: ['Formaat', 'Inhoud', 'Past bij'],
                rows: [
                  ['[Fastgas 2KG](/fastgas-2kg/)', '2000 gram, circa 250 patronen', 'Kleine keuken, kleine catering, af en toe gebruik'],
                  ['[Fastgas 4KG](/fastgas-4kg/)', '4000 gram, circa 500 patronen', 'Drukke keuken, catering, middelgroot evenement'],
                  ['[Fastgas 10KG](/fastgas-10kg/)', '10.000 gram, circa 1250 patronen', 'Grote keuken, cateraar of evenementenbedrijf met hoog verbruik'],
                ],
              },
            ]}
          />
          <p>
            <Rich text="Elke tank heeft een eigen serienummer en een label met inhoud, maximale druk (180 bar) en keuringsgegevens. Op de pagina [Fastgas uitgelegd](/fastgas/) lees je wat er op dat label staat en hoe je de echtheid controleert." />
          </p>
        </section>

        <section className="panel narrow" aria-labelledby="how-h">
          <h2 id="how-h">Bestellen in drie stappen</h2>
          <ol className="steps">
            <li><strong>Stuur een WhatsApp of bel</strong><span>Geef je adres, het gewenste formaat en voor welk gebruik je het nodig hebt.</span></li>
            <li><strong>Wij bevestigen prijs en tijd</strong><span>Je hoort vooraf wat het kost en hoe laat de koerier er is.</span></li>
            <li><strong>Betaal bij aflevering</strong><span>PIN of contant, zonder account en zonder vooruitbetaling.</span></li>
          </ol>
          <p>
            <Rich text="Voeg bij voorkeur een locatiepin toe en noteer bel- of toegangscode en etage; dan hoeft de koerier niet te zoeken. Bij [bestellen via WhatsApp](/lachgas-bestellen-whatsapp/) staat een voorbeeldbericht, en alles over de route vind je op [bestellen](/bestellen/)." />
          </p>
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
          <p>
            <Rich text="Meer over hoe we werken lees je op [over ons](/over-ons/), bij [de lachgaskoerier](/lachgas-koerier/) en op de pagina over onze [bezorgdienst](/lachgas-bezorgdienst/)." />
          </p>
        </section>

        <section className="panel" aria-labelledby="who-h">
          <h2 id="who-h">Voor wie bezorgen we?</h2>
          <p>We leveren aan klanten met een toegestane toepassing. Dit zijn de groepen die we het vaakst helpen:</p>
          <div className="cards">
            <a className="card" href="/lachgas-horeca/">
              <strong>Horeca</strong>
              <span>Restaurants, bars en hotels die slagroom, schuimen en mousses maken. Levering ook midden in de dienst.</span>
            </a>
            <a className="card" href="/lachgas-evenementen/">
              <strong>Catering en evenementen</strong>
              <span>Een tank op het juiste punt van het terrein, op het juiste moment, met een reservetank achter de hand.</span>
            </a>
            <a className="card" href="/slagroomspuiten/">
              <strong>Keuken thuis</strong>
              <span>Particulieren met een slagroomspuit en een toegestane keukentoepassing, 18 jaar of ouder.</span>
            </a>
            <a className="card" href="/overdag-bestellen/">
              <strong>Kantoren en bedrijven</strong>
              <span>Levering aan receptie of een afgesproken ontvangstpunt, ook tijdens kantooruren.</span>
            </a>
          </div>
          <p>
            <Rich text="Weet je nog niet wat je nodig hebt? Op [lachgas kopen in Amsterdam](/lachgas-kopen-amsterdam/) en [lachgas tank bestellen](/lachgas-tank-bestellen/) staat wat je moet weten voordat je bestelt." />
          </p>
        </section>

        <section className="panel" aria-labelledby="area-h">
          <h2 id="area-h">Waar wij bezorgen</h2>
          <p>
            <Rich text="Alle stadsdelen van Amsterdam en 15 plaatsen eromheen. Kies je locatie voor wijken, bereikbaarheid en de verwachte levertijd. Staat je plaats er niet bij, vraag het via [WhatsApp](/contact/); soms kunnen we er toch komen." />
          </p>
          <Blocks
            blocks={[
              {
                t: 'table',
                head: ['Gebied', 'Verwachte levertijd'],
                rows: [
                  ['Amsterdam (alle stadsdelen), Diemen, Amstelveen, Badhoevedorp', '20 tot 30 minuten'],
                  ['Haarlem, Hoofddorp, Zaandam, Weesp, Zwanenburg', '25 tot 35 minuten'],
                  ['Abcoude, Krommenie, Landsmeer, Wormerveer', '25 tot 40 minuten'],
                  ['Purmerend, Almere, Volendam', '30 tot 45 minuten'],
                ],
              },
            ]}
          />
          <p>Dit zijn gemiddelden. In de spits en bij evenementen kan het langer duren; de actuele tijd hoor je bij je bestelling.</p>
          <ul className="places">
            {locationData.map((l) => (
              <li key={l.slug}><a href={`/${l.slug}/`}>{l.name}</a></li>
            ))}
          </ul>
        </section>

        <section className="panel narrow" aria-labelledby="law-h">
          <h2 id="law-h">Eerlijk over wetgeving en veiligheid</h2>
          <p>
            <Rich text="Sinds 1 januari 2023 staat lachgas op lijst II van de **Opiumwet**. Vervoeren, verkopen en bezitten voor recreatief gebruik is verboden; toepassingen in de keuken, de techniek en de zorg blijven toegestaan. Wij leveren daarom uitsluitend aan klanten van 18 jaar en ouder en uitsluitend voor toegestane toepassingen. Bij twijfel over het beoogde gebruik leveren we niet." />
          </p>
          <h3>Zo ga je veilig met een tank om</h3>
          <ul className="ticks">
            <li>Gebruik alleen in een goed geventileerde ruimte en met de juiste adapters</li>
            <li>Bewaar tanks rechtop, vastgezet, koel en buiten bereik van kinderen</li>
            <li>Vul een wegwerptank nooit bij en open of verhit hem nooit</li>
            <li>Combineer lachgas nooit met alcohol of andere middelen en rijd er niet mee</li>
          </ul>
          <p>
            <Rich text="Lees de volledige uitleg over [opslag en transport](/lachgas-opslag-en-transport/), [lachgas in het verkeer](/lachgas-in-het-verkeer/) en [veilig gebruik](/veilig-gebruik-lachgas/)." />
          </p>
        </section>

        <section className="panel" aria-labelledby="kb-h">
          <h2 id="kb-h">Meer weten over lachgas?</h2>
          <p>In onze kennisbank leggen we uit wat lachgas is, wat de wet zegt en hoe een slagroomspuit werkt.</p>
          <div className="cards">
            <a className="card" href="/wat-is-lachgas/"><strong>Wat is lachgas?</strong><span>Eigenschappen, gebruik en risico’s.</span></a>
            <a className="card" href="/is-lachgas-verboden/"><strong>Is lachgas verboden?</strong><span>Wat de Opiumwet zegt en wat toegestaan blijft.</span></a>
            <a className="card" href="/hoe-werkt-een-slagroomspuit/"><strong>Hoe werkt een slagroomspuit?</strong><span>Stap voor stap uitleg voor de keuken.</span></a>
            <a className="card" href="/veelgestelde-vragen/"><strong>Veelgestelde vragen</strong><span>Antwoorden over bestellen, bezorgen en betalen.</span></a>
          </div>
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
