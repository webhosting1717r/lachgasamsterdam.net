import type { Page } from '../types';
import { locationData } from './locations';

const NOTE =
  'Levering uitsluitend aan 18+ en uitsluitend voor toegestane toepassingen, zoals keuken, horeca en technisch gebruik. Lees de [wettelijke status](/is-lachgas-verboden/).';

export const hubs: Page[] = [
  {
    slug: 'bestellen', group: 'hub', kind: 'service', nav: 'Bestellen', parent: 'home',
    title: 'Lachgas bestellen: zo werkt het in 3 stappen',
    desc: 'Bestellen bij Lachgas Amsterdam in drie stappen: WhatsApp of bel, wij bevestigen prijs en tijd, jij betaalt bij aflevering. 24/7.',
    h1: 'Bestellen', kicker: 'In drie stappen',
    lead: 'Geen account, geen formulier. Je bestelt met een bericht of telefoontje.',
    blocks: [
      { t: 'steps', x: [
        ['Stuur een WhatsApp of bel', 'Geef je adres, het gewenste formaat (2KG, 4KG of 10KG) en voor welk gebruik je het nodig hebt.'],
        ['Wij bevestigen prijs en tijd', 'Je hoort vooraf wat het kost en hoe laat de koerier er is, doorgaans binnen 20 tot 30 minuten.'],
        ['Betaal bij aflevering', 'PIN of contant bij de koerier.'],
      ] },
      { t: 'h2', x: 'Kies je tank' },
      { t: 'cards', x: [
        { h: 'Fastgas 2KG', p: '2000 gram, circa 250 patronen.', href: '/fastgas-2kg/' },
        { h: 'Fastgas 4KG', p: '4000 gram, circa 500 patronen.', href: '/fastgas-4kg/' },
        { h: 'Fastgas 10KG', p: '10.000 gram, circa 1250 patronen.', href: '/fastgas-10kg/' },
      ] },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Kan ik ook overdag bestellen?', a: 'Ja, we zijn 24 uur per dag bereikbaar. Zie [overdag bestellen](/overdag-bestellen/).' },
      { q: 'Wat heb ik nodig?', a: 'Je adres, het gewenste formaat, een legitimatiebewijs en een pinpas of contant geld.' },
    ],
    related: ['lachgas-bestellen-amsterdam', 'lachgas-bestellen-whatsapp', 'lachgas-tanks', 'contact'],
  },
  {
    slug: 'bezorggebied', group: 'hub', kind: 'service', nav: 'Bezorggebied', parent: 'home',
    title: 'Bezorggebied: Amsterdam en 15 plaatsen eromheen',
    desc: 'Ons bezorggebied: alle stadsdelen van Amsterdam en 15 plaatsen, van Haarlem tot Almere en van Purmerend tot Amstelveen. Doorgaans binnen 20 tot 30 minuten.',
    h1: 'Bezorggebied', kicker: '23 locaties',
    lead: 'We bezorgen in Amsterdam en een groot deel van de regio. Klik door voor wijken, bereikbaarheid en verwachte levertijd per locatie.',
    blocks: [
      { t: 'h2', x: 'Amsterdam' },
      { t: 'cards', x: locationData.filter((l) => l.kind !== 'plaats').map((l) => ({ h: `Lachgas ${l.name}`, p: l.intro.split('. ')[0] + '.', href: `/${l.slug}/` })) },
      { t: 'h2', x: 'Rondom Amsterdam' },
      { t: 'cards', x: locationData.filter((l) => l.kind === 'plaats').map((l) => ({ h: `Lachgas ${l.name}`, p: l.region + ' · ' + (l.time.match(/\d+ tot \d+ minuten/) || [''])[0], href: `/${l.slug}/` })) },
      { t: 'p', x: 'Staat je plaats er niet bij? Stuur je adres via [WhatsApp](/contact/), we laten direct weten of we kunnen komen.' },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Bezorgen jullie in heel Amsterdam?', a: 'Ja, in alle stadsdelen en in Weesp.' },
      { q: 'Hoe lang duurt het buiten Amsterdam?', a: 'Doorgaans 25 tot 45 minuten, afhankelijk van de plaats. Per locatiepagina staat de verwachte tijd.' },
    ],
    related: ['lachgas-amsterdam', 'lachgas-in-de-buurt', 'lachgas-bezorgen', 'bestellen'],
  },
  {
    slug: 'contact', group: 'hub', kind: 'article', nav: 'Contact', parent: 'home',
    title: 'Contact: bel of app Lachgas Amsterdam',
    desc: 'Contact met Lachgas Amsterdam: bel 085 212 8051 of stuur een WhatsApp naar +31 97010270187. Dag en nacht bereikbaar, ook in het weekend.',
    h1: 'Contact', kicker: 'Dag en nacht bereikbaar',
    lead: 'Bestellen of een vraag? Bel ons of stuur een WhatsApp-bericht. We reageren dag en nacht.',
    blocks: [
      { t: 'h2', x: 'Zo bereik je ons' },
      { t: 'ul', x: ['Bel: 085 212 8051', 'WhatsApp: +31 97010270187', 'Bereikbaar: 24 uur per dag, 7 dagen per week'] },
      { t: 'h2', x: 'Wat helpt ons om snel te antwoorden?' },
      { t: 'ul', x: ['Je adres en eventuele toegangscode', 'Het gewenste formaat en aantal', 'Voor welk gebruik je de tank wilt', 'Bij zakelijke bestellingen: bedrijfsnaam en contactpersoon'] },
      { t: 'note', x: NOTE },
    ],
    related: ['bestellen', 'lachgas-bestellen-whatsapp', 'veelgestelde-vragen', 'bezorggebied'],
  },
  {
    slug: 'privacy-en-cookies', group: 'legal', kind: 'article', nav: 'Privacy en cookies', parent: 'home', noCta: true,
    title: 'Privacy en cookies',
    desc: 'Privacyverklaring van Lachgas Amsterdam: welke gegevens we verwerken, waarvoor en hoe lang. Deze website gebruikt geen cookies en geen trackers.',
    h1: 'Privacy en cookies', kicker: 'Juridisch',
    lead: 'Deze website gebruikt geen cookies en geen advertentie- of analysetrackers. We verwerken alleen gegevens die je zelf aan ons doorgeeft.',
    blocks: [
      { t: 'h2', x: 'Welke gegevens verwerken we?' },
      { t: 'p', x: 'Als je een bestelling plaatst via WhatsApp of telefoon, verwerken we je naam (indien opgegeven), telefoonnummer, adres en de inhoud van je bestelling. We gebruiken die gegevens uitsluitend om de bestelling te bevestigen, te bezorgen en te administreren.' },
      { t: 'h2', x: 'Grondslag en bewaartermijn' },
      { t: 'p', x: 'De grondslag is de uitvoering van de overeenkomst en een wettelijke verplichting voor administratie. We bewaren gegevens niet langer dan nodig is en voor zover de wet vereist.' },
      { t: 'h2', x: 'WhatsApp' },
      { t: 'p', x: 'Berichten via WhatsApp verlopen via de diensten van WhatsApp. Daarop is het privacybeleid van WhatsApp van toepassing.' },
      { t: 'h2', x: 'Cookies' },
      { t: 'p', x: 'We plaatsen geen cookies. Onze hostingpartner kan technische logbestanden bijhouden voor beveiliging en beschikbaarheid.' },
      { t: 'h2', x: 'Je rechten' },
      { t: 'p', x: 'Je mag je gegevens inzien, laten corrigeren of laten verwijderen. Neem daarvoor contact met ons op via de [contactpagina](/contact/). Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.' },
    ],
    related: ['algemene-voorwaarden', 'contact', 'bestellen', 'over-ons'],
  },
  {
    slug: 'algemene-voorwaarden', group: 'legal', kind: 'article', nav: 'Algemene voorwaarden', parent: 'home', noCta: true,
    title: 'Algemene voorwaarden',
    desc: 'Algemene voorwaarden van Lachgas Amsterdam: leeftijd, toegestaan gebruik, bestellen, betalen, bezorgen en aansprakelijkheid.',
    h1: 'Algemene voorwaarden', kicker: 'Juridisch',
    lead: 'Deze voorwaarden gelden voor alle bestellingen bij Lachgas Amsterdam.',
    blocks: [
      { t: 'h2', x: '1. Leeftijd en toegestaan gebruik' },
      { t: 'p', x: 'We leveren uitsluitend aan personen van 18 jaar en ouder en uitsluitend voor toegestane toepassingen. De koerier kan om legitimatie vragen. Bij twijfel over leeftijd of beoogd gebruik mogen we de levering weigeren.' },
      { t: 'h2', x: '2. Bestellen en prijs' },
      { t: 'p', x: 'Een bestelling komt tot stand zodra we prijs en verwachte aankomsttijd hebben bevestigd. De bevestigde totaalprijs is de prijs die je betaalt.' },
      { t: 'h2', x: '3. Betaling' },
      { t: 'p', x: 'Je betaalt bij aflevering met PIN of contant.' },
      { t: 'h2', x: '4. Levering' },
      { t: 'p', x: 'Aankomsttijden zijn verwachtingen, geen garanties. De tank wordt persoonlijk aan de besteller overhandigd.' },
      { t: 'h2', x: '5. Gebruik en veiligheid' },
      { t: 'p', x: 'Je bent zelf verantwoordelijk voor rechtmatig en veilig gebruik, opslag en afvoer van de tank. Gebruik uitsluitend de daarvoor bestemde adapters en vul een tank nooit bij.' },
      { t: 'h2', x: '6. Aansprakelijkheid' },
      { t: 'p', x: 'Onze aansprakelijkheid is beperkt tot het bedrag van de betreffende bestelling, voor zover de wet dat toelaat. Je wettelijke consumentenrechten blijven onverlet.' },
      { t: 'h2', x: '7. Klachten' },
      { t: 'p', x: 'Klachten kun je melden via de [contactpagina](/contact/). We reageren zo snel mogelijk.' },
    ],
    related: ['privacy-en-cookies', 'is-lachgas-verboden', 'contact', 'bestellen'],
  },
];
