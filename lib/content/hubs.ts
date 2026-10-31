import type { Page } from '../types';
import { locationData } from './locations';

const NOTE =
  'Levering uitsluitend aan 18+ en uitsluitend voor toegestane toepassingen, zoals keuken, horeca en technisch gebruik. Lees de [wettelijke status](/is-lachgas-verboden/).';

export const hubs: Page[] = [
  {
    slug: 'bestellen', group: 'hub', kind: 'service', nav: 'Bestellen', parent: 'home',
    title: 'Lachgas bestellen: zo werkt het in 3 stappen',
    desc: 'Bestellen bij Lachgas Amsterdam in drie stappen: stuur een WhatsApp, wij bevestigen prijs en tijd, jij betaalt bij aflevering. 24/7.',
    h1: 'Bestellen bij Lachgas Amsterdam', kicker: 'In drie stappen',
    lead: 'Bij Lachgas Amsterdam bestel je zonder account of formulier: een WhatsApp-bericht is genoeg. Je betaalt de koerier bij aflevering.',
    blocks: [
      { t: 'h2', x: 'Lachgas bestellen in drie stappen' },
      { t: 'steps', x: [
        ['Stuur een WhatsApp-bericht', 'Geef je adres, het gewenste formaat (2KG, 4KG of 10KG) en voor welk gebruik je het nodig hebt.'],
        ['Wij bevestigen prijs en tijd', 'Je hoort vooraf wat het kost en hoe laat de koerier er is, doorgaans binnen 20 tot 30 minuten.'],
        ['Betaal bij aflevering', 'PIN of contant bij de koerier.'],
      ] },
      { t: 'p', x: 'Zo simpel is het. Er is geen webwinkel en geen winkelwagen: je praat direct met ons, dag en nacht. Dat voorkomt dat je een formulier invult en daarna niet weet of de bestelling is aangekomen.' },

      { t: 'h2', x: 'Wat heb je nodig om te bestellen?' },
      { t: 'ul', x: [
        'Je adres met huisnummer, etage en eventuele bel- of toegangscode',
        'Het gewenste formaat en het aantal tanks',
        'Een geldig legitimatiebewijs voor de leeftijdscontrole (18+)',
        'Een PIN-pas of contant geld voor de betaling bij aflevering',
        'Een telefoonnummer waarop de koerier je kan bereiken',
      ] },

      { t: 'h2', x: 'Wat zet je in je bericht?' },
      { t: 'p', x: 'Hoe completer je eerste bericht, hoe sneller de koerier onderweg is. Een locatiepin via WhatsApp is de snelste manier om een adres door te geven, zeker op een lastig vindbare plek.' },
      { t: 'p', x: 'Een voorbeeld: “Hoi, ik wil één Fastgas 4KG bestellen voor ons restaurant in Amsterdam Oost. Adres is …, de bel zit bij de zijdeur. Gebruik: desserts en schuimen in de keuken.” Meer voorbeelden vind je op [lachgas bestellen via WhatsApp](/lachgas-bestellen-whatsapp/).' },

      { t: 'h2', x: 'Kies je tank' },
      { t: 'cards', x: [
        { h: 'Fastgas 2KG', p: '2000 gram, circa 250 patronen.', href: '/fastgas-2kg/' },
        { h: 'Fastgas 4KG', p: '4000 gram, circa 500 patronen.', href: '/fastgas-4kg/' },
        { h: 'Fastgas 10KG', p: '10.000 gram, circa 1250 patronen.', href: '/fastgas-10kg/' },
      ] },
      { t: 'p', x: 'Twijfel je? Op [lachgas tanks](/lachgas-tanks/) staat per formaat voor wie het geschikt is. Je kunt ook gewoon je situatie sturen, dan adviseren we een formaat. Alle tanks zijn verzegeld, hebben een eigen serienummer en een label met inhoud, druk en keuringsgegevens.' },

      { t: 'h2', x: 'Wat gebeurt er na je bericht?' },
      { t: 'p', x: 'Wij antwoorden met de totaalprijs en de verwachte aankomsttijd. Ben je het eens, dan vertrekt de koerier met jouw bestelling. De prijs noemen we per bericht, omdat hij afhangt van het formaat, het aantal en de locatie; zie [lachgas prijs](/lachgas-prijs/).' },
      { t: 'p', x: 'Je kunt onderweg met de koerier contact houden via het nummer waarmee je hebt besteld. Verandert er iets, bijvoorbeeld je ontvangstpunt of het tijdstip, laat het ons dan zo snel mogelijk weten.' },

      { t: 'h2', x: 'Bij de deur: leeftijdscontrole en betaling' },
      { t: 'p', x: 'De koerier overhandigt de verzegelde tank persoonlijk aan de besteller. Hij kan om legitimatie vragen en neemt de betaling aan, met PIN of contant, tegen de vooraf afgesproken prijs. Er komen geen kosten achteraf bij.' },
      { t: 'ul', x: ['Controleer de verzegeling en het label met serienummer', 'Houd je legitimatie klaar', 'Houd je pinpas of contant geld bij de hand', 'Zorg dat je voordeur goed zichtbaar en verlicht is, zeker ’s nachts'] },
      { t: 'p', x: 'Bij een beschadigde verzegeling gebruik je de tank niet en neem je direct contact met ons op.' },

      { t: 'h2', x: 'Wat als er iets misgaat?' },
      { t: 'p', x: 'Staat de koerier voor een dichte deur, werkt je bel niet of klopt het formaat niet? Stuur ons direct een WhatsApp, dan lossen we het op. Zijn de verzegeling of het label niet in orde, gebruik de tank dan niet en neem contact met ons op via de [contactpagina](/contact/). Lees ook de [algemene voorwaarden](/algemene-voorwaarden/) voor wat we afspreken over levering en klachten.' },

      { t: 'h2', x: 'Bestellen op elk moment van de dag' },
      { t: 'p', x: 'We zijn 24 uur per dag bereikbaar, ook in het weekend en op feestdagen. Overdag bezorgen we aan huis, kantoor of horeca, zie [overdag bestellen](/overdag-bestellen/). In de nacht staat er ook een koerier klaar, zie [nachtlevering](/lachgas-nachtlevering/). Meer over de openingstijden staat op [lachgas 24/7](/lachgas-24-7/).' },

      { t: 'h2', x: 'Zakelijk bestellen' },
      { t: 'p', x: 'Bestel je namens een restaurant, bar, hotel of cateringbedrijf, vermeld dan je bedrijfsnaam, het ontvangstpunt en een contactpersoon. Voor een vaste levering en zakelijke administratie zie [lachgas voor horeca](/lachgas-horeca/). Heb je een evenement, lees dan [lachgas voor evenementen](/lachgas-evenementen/).' },

      { t: 'h2', x: 'Wanneer leveren we niet?' },
      { t: 'p', x: 'Soms vertrekt de koerier zonder tank: als je jonger bent dan 18, als je geen legitimatie kunt tonen of als het gebruik waarvoor je bestelt niet duidelijk toegestaan is. De achtergrond is de wet. Sinds 1 januari 2023 staat lachgas op lijst II van de Opiumwet, waardoor bezit en handel voor recreatief gebruik verboden zijn. Voor keuken, horeca, catering en technisch gebruik blijft een uitzondering gelden. Lees de [uitleg over de wet](/is-lachgas-verboden/).' },

      { t: 'h2', x: 'Bestellen in het Engels' },
      { t: 'p', x: 'Je kunt ook in het Engels bestellen, via WhatsApp. Lees de Engelse uitleg op [disposable nitrous oxide tanks](/nitrous-oxide-tanks/) en [laughing gas delivery Amsterdam](/laughing-gas-delivery-amsterdam/).' },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Kan ik ook overdag bestellen?', a: 'Ja, we zijn 24 uur per dag bereikbaar. Zie [overdag bestellen](/overdag-bestellen/).' },
      { q: 'Wat heb ik nodig?', a: 'Je adres, het gewenste formaat, een legitimatiebewijs en een pinpas of contant geld. Een account of vooruitbetaling is niet nodig.' },
      { q: 'Hoe lang duurt het voordat mijn bestelling er is?', a: 'Doorgaans 20 tot 30 minuten in Amsterdam en 25 tot 45 minuten in de regio. Bij je bestelling bevestigen we de verwachte aankomsttijd.' },
      { q: 'Wat kost een bestelling?', a: 'We noemen de totaalprijs per bericht, vooraf, omdat hij afhangt van formaat, aantal en locatie. Je betaalt bij aflevering met PIN of contant.' },
      { q: 'Kan ik meerdere tanks tegelijk bestellen?', a: 'Ja. Geef aantallen en formaten door via WhatsApp en we bevestigen beschikbaarheid, prijs en aankomsttijd.' },
      { q: 'Kan ik een tijdstip afspreken?', a: 'Ja. Geef in je bericht aan wanneer je wilt dat de koerier komt, bijvoorbeeld als je pas later aanwezig bent.' },
      { q: 'Wat als ik niet thuis ben?', a: 'Neem contact met ons op. De tank wordt alleen persoonlijk aan de besteller overhandigd.' },
      { q: 'Wanneer weigeren jullie een levering?', a: 'Bij twijfel over je leeftijd, over de identiteit van de ontvanger of over het beoogde gebruik. Lees [is lachgas verboden](/is-lachgas-verboden/) voor het wettelijke kader.' },
    ],
    related: ['lachgas-tank-bestellen', 'lachgas-bestellen-whatsapp', 'lachgas-tanks', 'contact', 'lachgas-bestellen-amsterdam', 'lachgas-prijs'],
  },
  {
    slug: 'bezorggebied', group: 'hub', kind: 'service', nav: 'Bezorggebied', parent: 'home',
    title: 'Bezorggebied: Amsterdam en 15 plaatsen',
    desc: 'Ons bezorggebied: alle stadsdelen van Amsterdam en 15 plaatsen, van Haarlem tot Almere en van Purmerend tot Amstelveen. Doorgaans binnen 20 tot 30 minuten.',
    h1: 'Bezorggebied', kicker: '23 locaties',
    lead: 'We bezorgen in Amsterdam en een groot deel van de regio. Klik door voor wijken, bereikbaarheid en verwachte levertijd per locatie.',
    blocks: [
      { t: 'h2', x: 'Waar bezorgen wij lachgas?' },
      { t: 'p', x: 'Ons bezorggebied omvat alle stadsdelen van Amsterdam, Weesp en 15 plaatsen eromheen, van Haarlem in het westen tot Almere in het oosten en van Amstelveen in het zuiden tot Purmerend en Volendam in het noorden. We bezorgen dag en nacht, elke dag van het jaar, aan huis en aan horeca, kantoren en evenementenlocaties. Alle producten, [de Fastgas tanks in 2KG, 4KG en 10KG](/lachgas-tanks/), gaan op dezelfde manier mee.' },

      { t: 'h2', x: 'Amsterdam' },
      { t: 'cards', x: locationData.filter((l) => l.kind !== 'plaats').map((l) => ({ h: `Lachgas ${l.name}`, p: l.intro.split('. ')[0] + '.', href: `/${l.slug}/` })) },
      { t: 'h2', x: 'Rondom Amsterdam' },
      { t: 'cards', x: locationData.filter((l) => l.kind === 'plaats').map((l) => ({ h: `Lachgas ${l.name}`, p: l.region + ' · ' + (l.time.match(/\d+ tot \d+ minuten/) || [''])[0], href: `/${l.slug}/` })) },

      { t: 'h2', x: 'Verwachte levertijd per gebied' },
      { t: 'p', x: 'De tijd hangt af van de afstand, het verkeer en het tijdstip. Dit zijn gemiddelden; bij je bestelling bevestigen we de actuele tijd.' },
      { t: 'table', head: ['Gebied', 'Verwachte tijd'], rows: [
        ['[Amsterdam](/lachgas-amsterdam/), [Diemen](/lachgas-diemen/), [Amstelveen](/lachgas-amstelveen/), [Badhoevedorp](/lachgas-badhoevedorp/)', '20 tot 30 minuten'],
        ['[Haarlem](/lachgas-haarlem/), [Hoofddorp](/lachgas-hoofddorp/), [Zaandam](/lachgas-zaandam/), [Weesp](/lachgas-weesp/), [Zwanenburg](/lachgas-zwanenburg/)', '25 tot 35 minuten'],
        ['[Abcoude](/lachgas-abcoude/), [Krommenie](/lachgas-krommenie/), [Landsmeer](/lachgas-landsmeer/), [Purmerend](/lachgas-purmerend/), [Wormerveer](/lachgas-wormerveer/)', '25 tot 40 minuten'],
        ['[Almere](/lachgas-almere/), [Volendam](/lachgas-volendam/)', '30 tot 45 minuten'],
      ] },

      { t: 'h2', x: 'Hoe bepalen we ons bezorggebied?' },
      { t: 'p', x: 'We kijken naar de reistijd vanaf onze standplaats in Amsterdam en naar de bereikbaarheid van de plaats via de snelweg. Een plaats moet binnen een redelijke tijd te bereiken zijn, want we noemen bij je bestelling een aankomsttijd. Daarom staat niet elke plaats in de regio op de lijst.' },
      { t: 'p', x: 'Het gebied is geen vast cirkeltje: bij een bestelling kijken we naar je exacte adres. Soms bezorgen we net buiten de kaart, soms is een adres binnen de kaart lastig bereikbaar. Daarom bevestigen we altijd eerst.' },

      { t: 'h2', x: 'Staat je plaats er niet bij?' },
      { t: 'p', x: 'Stuur je adres via [WhatsApp](/lachgas-bestellen-whatsapp/) of neem contact op via de [contactpagina](/contact/). We laten direct weten of we kunnen komen en wat de verwachte tijd is. Zit je in een plaats vlak naast een van onze locaties, zoals Heemstede bij [Haarlem](/lachgas-haarlem/) of Assendelft bij [Krommenie](/lachgas-krommenie/), dan is de kans groot dat het lukt.' },

      { t: 'h2', x: 'Tips voor een snelle bezorging' },
      { t: 'ul', x: [
        'Deel een locatiepin via WhatsApp, zeker op polderwegen of in nieuwbouw',
        'Noteer huisnummer, etage en bel- of toegangscode',
        'Geef bij een groot terrein of bedrijfspand het gebouw en de ingang door',
        'Zorg dat je telefoon bereikbaar is zodra de koerier onderweg is',
        'Houd je legitimatie klaar voor de leeftijdscontrole',
      ] },
      { t: 'p', x: 'Op een evenemententerrein spreken we een punt buiten de afzetting af; zie [lachgas voor evenementen](/lachgas-evenementen/). Zoek je een plaats in de buurt, kijk dan ook op [lachgas in de buurt](/lachgas-in-de-buurt/). Hoe het bestellen werkt, staat op [bestellen](/bestellen/).' },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Bezorgen jullie in heel Amsterdam?', a: 'Ja, in alle stadsdelen en in Weesp. Zie [lachgas Amsterdam](/lachgas-amsterdam/) voor de wijken per stadsdeel.' },
      { q: 'Hoe lang duurt het buiten Amsterdam?', a: 'Doorgaans 25 tot 45 minuten, afhankelijk van de plaats. Per locatiepagina staat de verwachte tijd.' },
      { q: 'Bezorgen jullie ook ’s nachts in de regio?', a: 'Ja, we bezorgen dag en nacht in het hele gebied. In de nacht is het vaak rustiger op de weg. Zie [nachtlevering](/lachgas-nachtlevering/).' },
      { q: 'Zijn er extra kosten buiten Amsterdam?', a: 'Dat hangt af van de afstand en je bestelling. Je hoort de totaalprijs vooraf per bericht en betaalt bij aflevering.' },
      { q: 'Kan ik afhalen?', a: 'Nee. We bezorgen uitsluitend aan huis of aan je zaak.' },
      { q: 'Bezorgen jullie ook op het terrein van een evenement?', a: 'Ja, als je het exacte punt doorgeeft. Bij afzettingen spreken we een alternatief punt af. Lees meer op [lachgas voor evenementen](/lachgas-evenementen/).' },
      { q: 'Wat als mijn adres niet op de lijst staat?', a: 'Stuur je adres via WhatsApp. We laten direct weten of we kunnen komen en wat de verwachte tijd is.' },
    ],
    related: ['lachgas-amsterdam', 'lachgas-in-de-buurt', 'lachgas-bezorgen', 'bestellen', 'lachgas-24-7', 'contact'],
  },
  {
    slug: 'contact', group: 'hub', kind: 'article', nav: 'Contact', parent: 'home',
    title: 'Contact: WhatsApp Lachgas Amsterdam',
    desc: 'Contact met Lachgas Amsterdam: stuur een WhatsApp naar +44 7441 484283. Dag en nacht bereikbaar, ook in het weekend.',
    h1: 'Contact met Lachgas Amsterdam', kicker: 'Dag en nacht bereikbaar',
    lead: 'Bestellen of een vraag? Stuur Lachgas Amsterdam een WhatsApp-bericht. We reageren dag en nacht.',
    blocks: [
      { t: 'h2', x: 'Zo bereik je ons' },
      { t: 'ul', x: ['WhatsApp: +44 7441 484283', 'Bereikbaar: 24 uur per dag, 7 dagen per week, ook op feestdagen'] },
      { t: 'p', x: 'Er is geen webformulier waarop je een antwoord moet afwachten: je spreekt direct met ons. Dat is de snelste manier om een bestelling te regelen.' },

      { t: 'h2', x: 'Waarom WhatsApp?' },
      { t: 'p', x: 'WhatsApp is handig als je een locatiepin wilt delen of een adres met toegangscode wilt doorgeven, omdat je dan niets hoeft te spellen. Ons antwoord blijft in de chat staan, zodat je prijs en aankomsttijd kunt terugzien.' },

      { t: 'h2', x: 'Wat helpt ons om snel te antwoorden?' },
      { t: 'ul', x: ['Je adres en eventuele toegangscode', 'Het gewenste formaat en aantal', 'Voor welk gebruik je de tank wilt', 'Bij zakelijke bestellingen: bedrijfsnaam en contactpersoon', 'Een locatiepin als je adres lastig te vinden is'] },
      { t: 'p', x: 'Hoe je bestelling verloopt, lees je op [bestellen](/bestellen/). Wil je een bericht in WhatsApp opstellen, kijk dan voor voorbeelden op [lachgas bestellen via WhatsApp](/lachgas-bestellen-whatsapp/).' },

      { t: 'h2', x: 'Zo ziet een goed eerste bericht eruit' },
      { t: 'p', x: '“Hoi, ik wil één Fastgas 2KG bestellen voor mijn café in Amstelveen. Adres is …, bel 2 bij de zijdeur, mijn nummer is …. Gebruik: schuimtoppings in de keuken.” Dat zijn vier regels, en met die informatie kan de koerier meteen aan de slag. Staat er een locatiepin bij, dan is het nog sneller.' },

      { t: 'h2', x: 'Zakelijke aanvragen' },
      { t: 'p', x: 'Voor restaurants, bars, hotels, cateraars en evenementenbedrijven regelen we een vast ontvangstpunt en eventueel een terugkerende levering. Stuur je bedrijfsnaam, adres, contactpersoon en verwachte verbruik, dan stemmen we het af. Lees meer op [lachgas voor horeca](/lachgas-horeca/) en [lachgas voor evenementen](/lachgas-evenementen/).' },

      { t: 'h2', x: 'In welke taal kun je ons bereiken?' },
      { t: 'p', x: 'In het Nederlands en in het Engels. De Engelse uitleg staat op [disposable nitrous oxide tanks](/nitrous-oxide-tanks/) en [laughing gas delivery Amsterdam](/laughing-gas-delivery-amsterdam/).' },

      { t: 'h2', x: 'Hoe snel reageren we?' },
      { t: 'p', x: 'We reageren dag en nacht. Bij drukte, bijvoorbeeld rond evenementen of feestdagen, kan het een paar minuten langer duren voor je een antwoord hebt. Bereik je ons niet meteen, stuur dan gerust nog een bericht.' },

      { t: 'h2', x: 'Vragen over een bestelling, privacy of voorwaarden' },
      { t: 'p', x: 'Heb je een vraag of klacht over een levering, neem dan contact met ons op via hetzelfde nummer. Je vindt onze regels in de [algemene voorwaarden](/algemene-voorwaarden/) en in de [privacyverklaring](/privacy-en-cookies/). Antwoorden op veelgestelde vragen staan op [veelgestelde vragen](/veelgestelde-vragen/).' },

      { t: 'h2', x: 'Wat doen we met je gegevens?' },
      { t: 'p', x: 'We gebruiken je naam, nummer en adres alleen om je bestelling te bevestigen, te bezorgen en te administreren. We plaatsen geen cookies op deze website. Alle details lees je in de [privacyverklaring](/privacy-en-cookies/).' },

      { t: 'h2', x: 'Noodgeval of gaslek' },
      { t: 'p', x: 'Ruik je gas, hoor je een lek of heb je klachten door een tank? Ventileer direct, ga naar buiten en bel bij acuut gevaar 112. Stuur ons daarna gerust een WhatsApp. Meer in onze gids [veilig omgaan met lachgas](/veilig-gebruik-lachgas/).' },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Kan ik Lachgas Amsterdam bellen?', a: 'Nee, we werken uitsluitend via WhatsApp: +44 7441 484283. We reageren dag en nacht, ook in het weekend en op feestdagen.' },
      { q: 'Wat is het WhatsApp-nummer?', a: 'Je bereikt ons via +44 7441 484283. Via de knoppen op deze site open je direct een gesprek.' },
      { q: 'Kan ik jullie ook ’s nachts bereiken?', a: 'Ja, we zijn 24 uur per dag bereikbaar, 7 dagen per week.' },
      { q: 'Is er een winkel of afhaalpunt?', a: 'Nee. We bezorgen uitsluitend aan huis of aan je zaak. Afhalen is niet mogelijk.' },
      { q: 'Spreken jullie Engels?', a: 'Ja, je kunt in het Engels bestellen via WhatsApp.' },
      { q: 'Waar meld ik een klacht?', a: 'Via hetzelfde nummer. We reageren zo snel mogelijk. Je rechten staan in de [algemene voorwaarden](/algemene-voorwaarden/).' },
    ],
    related: ['bestellen', 'lachgas-bestellen-whatsapp', 'veelgestelde-vragen', 'bezorggebied', 'over-ons', 'lachgas-24-7'],
  },
  {
    slug: 'privacy-en-cookies', group: 'legal', kind: 'article', nav: 'Privacy en cookies', parent: 'home', noCta: true,
    title: 'Privacy en cookies',
    desc: 'Privacyverklaring van Lachgas Amsterdam: welke gegevens we verwerken, waarvoor en hoe lang. Deze website gebruikt geen cookies en geen trackers.',
    h1: 'Privacy en cookies', kicker: 'Juridisch',
    lead: 'Deze website gebruikt geen cookies en geen advertentie- of analysetrackers. We verwerken alleen gegevens die je zelf aan ons doorgeeft.',
    blocks: [
      { t: 'h2', x: 'Wie is verantwoordelijk voor je gegevens?' },
      { t: 'p', x: 'Lachgas Amsterdam, de bezorgdienst achter deze website, is verantwoordelijk voor de verwerking van de gegevens die je ons geeft. Heb je een vraag over deze verklaring, neem dan contact met ons op via de [contactpagina](/contact/) of stuur een WhatsApp naar +44 7441 484283.' },

      { t: 'h2', x: 'Welke gegevens verwerken we?' },
      { t: 'p', x: 'Als je een bestelling plaatst via WhatsApp, verwerken we de gegevens die je zelf doorgeeft:' },
      { t: 'ul', x: [
        'je naam, indien opgegeven, en je telefoonnummer',
        'je afleveradres en eventuele toegangscode of locatiepin',
        'de inhoud van je bestelling: formaat, aantal en het beoogde gebruik',
        'het tijdstip van je bestelling en van de levering',
        'bij zakelijke bestellingen: bedrijfsnaam en contactpersoon',
        'berichten die je ons stuurt over een bestelling, vraag of klacht',
      ] },
      { t: 'p', x: 'De koerier kan bij aflevering je legitimatie inzien om je leeftijd te controleren. Die controle dient alleen om vast te stellen dat je 18 jaar of ouder bent.' },

      { t: 'h2', x: 'Waarvoor gebruiken we je gegevens?' },
      { t: 'ul', x: [
        'om je bestelling te bevestigen en te bezorgen',
        'om de betaling bij aflevering af te handelen',
        'om je leeftijd en het beoogde gebruik te controleren, en een levering te weigeren als dat nodig is',
        'om onze administratie te voeren en aan wettelijke verplichtingen te voldoen',
        'om je vragen en klachten te beantwoorden',
        'om misbruik te voorkomen en de veiligheid van onze koeriers en klanten te bewaken',
      ] },

      { t: 'h2', x: 'Op welke grondslag verwerken we gegevens?' },
      { t: 'p', x: 'We verwerken je gegevens omdat dat nodig is voor de uitvoering van de overeenkomst, omdat een wettelijke verplichting dat vraagt, bijvoorbeeld voor administratie, en op grond van een gerechtvaardigd belang, namelijk het voorkomen van misbruik en het bewaken van de veiligheid.' },

      { t: 'h2', x: 'Hoe lang bewaren we gegevens?' },
      { t: 'p', x: 'We bewaren gegevens niet langer dan nodig is voor de doeleinden hierboven en niet langer dan de wet vereist. Gegevens die we wettelijk moeten bewaren, bewaren we voor die periode. Daarna verwijderen of anonimiseren we ze.' },

      { t: 'h2', x: 'Met wie delen we gegevens?' },
      { t: 'ul', x: [
        '**WhatsApp:** berichten verlopen via de diensten van WhatsApp (Meta). Daarop is het privacybeleid van WhatsApp van toepassing.',
        '**Koeriers:** zij krijgen alleen de gegevens die nodig zijn om te bezorgen.',
        '**Betaalverwerker:** bij een PIN-betaling verwerkt de aanbieder van de pinterminal de betaling.',
        '**Hostingpartner:** kan technische logbestanden bijhouden voor beveiliging en beschikbaarheid van de website.',
        '**Overheid:** alleen als de wet ons daartoe verplicht, bijvoorbeeld bij een rechtmatig verzoek.',
      ] },
      { t: 'p', x: 'We verkopen je gegevens niet en gebruiken ze niet voor reclame van anderen.' },

      { t: 'h2', x: 'Gegevens van minderjarigen' },
      { t: 'p', x: 'We leveren uitsluitend aan personen van 18 jaar en ouder en verwerken niet bewust gegevens van minderjarigen. Merken we dat iemand jonger dan 18 jaar een bestelling heeft geplaatst, dan leveren we niet en verwijderen we de gegevens die we daarvoor niet meer nodig hebben.' },

      { t: 'h2', x: 'Doorgifte buiten de EU' },
      { t: 'p', x: 'WhatsApp wordt aangeboden door Meta, dat gegevens ook buiten de Europese Unie kan verwerken. Wij hebben daar geen invloed op. Contact en bestellingen lopen uitsluitend via WhatsApp.' },

      { t: 'h2', x: 'Geautomatiseerde besluiten' },
      { t: 'p', x: 'We nemen geen besluiten die uitsluitend op geautomatiseerde verwerking van je gegevens zijn gebaseerd. Bestellingen worden door mensen beoordeeld.' },

      { t: 'h2', x: 'Cookies en trackers' },
      { t: 'p', x: 'We plaatsen geen cookies en gebruiken geen advertentie- of analysetrackers. Je hoeft daarom geen cookiemelding weg te klikken. Onze hostingpartner kan technische logbestanden bijhouden voor beveiliging en beschikbaarheid.' },

      { t: 'h2', x: 'Beveiliging' },
      { t: 'p', x: 'We nemen redelijke maatregelen om je gegevens te beschermen tegen verlies en onbevoegde toegang en beperken de toegang tot gegevens tot mensen die ze nodig hebben voor hun werk.' },

      { t: 'h2', x: 'Je rechten' },
      { t: 'p', x: 'Je mag je gegevens inzien, laten corrigeren of laten verwijderen. Daarnaast heb je het recht om de verwerking te laten beperken, om bezwaar te maken en om je gegevens in een gangbaar formaat over te laten dragen. Neem daarvoor contact met ons op via de [contactpagina](/contact/). We reageren in principe binnen een maand.' },

      { t: 'h2', x: 'Klachten over privacy' },
      { t: 'p', x: 'Ben je het niet eens met hoe wij omgaan met je gegevens, neem dan eerst contact met ons op. Je kunt ook een klacht indienen bij de [Autoriteit Persoonsgegevens](https://autoriteitpersoonsgegevens.nl/).' },

      { t: 'h2', x: 'Wijzigingen' },
      { t: 'p', x: 'We kunnen deze verklaring aanpassen. De datum onder deze tekst laat zien wanneer ze voor het laatst is bijgewerkt. Lees ook onze [algemene voorwaarden](/algemene-voorwaarden/).' },
    ],
    related: ['algemene-voorwaarden', 'contact', 'bestellen', 'over-ons', 'veelgestelde-vragen', 'is-lachgas-verboden'],
  },
  {
    slug: 'algemene-voorwaarden', group: 'legal', kind: 'article', nav: 'Algemene voorwaarden', parent: 'home', noCta: true,
    title: 'Algemene voorwaarden',
    desc: 'Algemene voorwaarden van Lachgas Amsterdam: leeftijd, toegestaan gebruik, bestellen, betalen, bezorgen en aansprakelijkheid.',
    h1: 'Algemene voorwaarden', kicker: 'Juridisch',
    lead: 'Deze voorwaarden gelden voor alle bestellingen bij Lachgas Amsterdam.',
    blocks: [
      { t: 'h2', x: '1. Definities' },
      { t: 'p', x: '“Wij” is Lachgas Amsterdam, de bezorgdienst achter deze website. “Jij” is de persoon of het bedrijf dat een bestelling plaatst. Een “tank” is de Fastgas Wegwerp Tank in 2KG, 4KG of 10KG. Een “bestelling” is een afspraak tussen jou en ons over de levering van een of meer tanks.' },

      { t: 'h2', x: '2. Leeftijd en toegestaan gebruik' },
      { t: 'p', x: 'We leveren uitsluitend aan personen van 18 jaar en ouder en uitsluitend voor toegestane toepassingen, zoals keuken, horeca, catering en technisch gebruik. De koerier kan om legitimatie vragen. Bij twijfel over leeftijd, identiteit of beoogd gebruik mogen we de levering weigeren.' },
      { t: 'p', x: 'Lachgas staat sinds 1 januari 2023 op lijst II van de Opiumwet. Bezit en handel voor recreatief gebruik zijn verboden. Je mag de tank niet doorleveren aan personen jonger dan 18 jaar of voor niet-toegestaan gebruik. Lees ook onze uitleg op [is lachgas verboden](/is-lachgas-verboden/).' },

      { t: 'h2', x: '3. Aanbod en prijs' },
      { t: 'p', x: 'Ons aanbod bestaat uit de originele Fastgas Wegwerp Tank in 2KG, 4KG en 10KG. We noemen de prijs per bericht, voordat de koerier vertrekt, omdat de prijs afhangt van het formaat, het aantal en de locatie. De bevestigde totaalprijs is de prijs die je betaalt; er komen geen kosten achteraf bij. Kunnen we een bestelling niet leveren, bijvoorbeeld omdat een formaat tijdelijk niet beschikbaar is, dan laten we dat direct weten.' },

      { t: 'h2', x: '4. Totstandkoming van een bestelling' },
      { t: 'p', x: 'Een bestelling komt tot stand zodra we prijs en verwachte aankomsttijd hebben bevestigd. Wil je een bestelling wijzigen of annuleren, neem dan zo snel mogelijk contact met ons op. Of dat nog kan, hangt ervan af of de koerier al onderweg is.' },
      { t: 'p', x: 'Geef bij je bestelling juiste en volledige gegevens door, zoals je adres, telefoonnummer en het beoogde gebruik. Voor de gevolgen van onjuiste of onvolledige gegevens, bijvoorbeeld een mislukte levering, zijn wij niet verantwoordelijk.' },

      { t: 'h2', x: '5. Betaling' },
      { t: 'p', x: 'Je betaalt bij aflevering met PIN of contant. Vooruitbetaling of een account is niet nodig.' },

      { t: 'h2', x: '6. Levering' },
      { t: 'p', x: 'Aankomsttijden zijn verwachtingen, geen garanties. De tank wordt persoonlijk aan de besteller overhandigd. Zorg dat je op het afgesproken adres en tijdstip aanwezig en bereikbaar bent en houd je legitimatie klaar. Is niemand aanwezig, neem dan contact met ons op. Afhalen is niet mogelijk; we bezorgen uitsluitend. Zodra de tank aan jou is overhandigd en betaald, ben je zelf verantwoordelijk voor opslag, gebruik en afvoer.' },

      { t: 'h2', x: '7. Weigering van een levering' },
      { t: 'p', x: 'We mogen een levering weigeren of afbreken als we twijfelen aan je leeftijd of identiteit, als het beoogde gebruik niet toegestaan lijkt, als het adres niet veilig bereikbaar is of als de veiligheid van onze koeriers in het geding is. Er is dan geen recht op levering.' },

      { t: 'h2', x: '8. Controle bij ontvangst' },
      { t: 'p', x: 'Controleer bij ontvangst of de tank verzegeld is en een label met serienummer heeft. Is de verzegeling beschadigd of ontbreekt het label, gebruik de tank dan niet en neem direct contact met ons op. Meld klachten over de staat van de tank zo snel mogelijk.' },

      { t: 'h2', x: '9. Gebruik, opslag en veiligheid' },
      { t: 'p', x: 'Je bent zelf verantwoordelijk voor rechtmatig en veilig gebruik, opslag en afvoer van de tank. Gebruik uitsluitend de daarvoor bestemde, originele adapters en vul een tank nooit bij. Bewaar de tank rechtop, vastgezet, koel en geventileerd en buiten bereik van kinderen. Meer regels staan op [veilig gebruik](/veilig-gebruik-lachgas/) en [opslag en transport](/lachgas-opslag-en-transport/).' },

      { t: 'h2', x: '10. Aansprakelijkheid' },
      { t: 'p', x: 'Onze aansprakelijkheid is beperkt tot het bedrag van de betreffende bestelling, voor zover de wet dat toelaat. Wij zijn niet aansprakelijk voor schade door gebruik dat niet door ons is bedoeld of niet is toegestaan. Je wettelijke consumentenrechten blijven onverlet.' },

      { t: 'h2', x: '11. Overmacht' },
      { t: 'p', x: 'Kunnen wij een bestelling door een omstandigheid buiten onze macht niet op tijd of niet volledig uitvoeren, bijvoorbeeld door extreem weer, afgesloten wegen of een besluit van de overheid, dan melden we dat zo snel mogelijk. Je kunt de bestelling dan laten vervallen of de levering later laten plaatsvinden.' },

      { t: 'h2', x: '12. Klachten' },
      { t: 'p', x: 'Klachten kun je melden via de [contactpagina](/contact/). We reageren zo snel mogelijk en zoeken samen met je naar een oplossing.' },

      { t: 'h2', x: '13. Privacy' },
      { t: 'p', x: 'Hoe wij omgaan met je gegevens, lees je in onze [privacyverklaring](/privacy-en-cookies/).' },

      { t: 'h2', x: '14. Toepasselijk recht en wijzigingen' },
      { t: 'p', x: 'Op deze voorwaarden en op alle bestellingen is Nederlands recht van toepassing. Dwingend consumentenrecht dat jou beschermt, blijft van kracht. We kunnen deze voorwaarden wijzigen. De datum onder deze tekst laat zien wanneer ze voor het laatst is bijgewerkt; op een bestelling zijn de voorwaarden van toepassing die golden toen je bestelde.' },

      { t: 'h2', x: '15. Nietigheid en vragen' },
      { t: 'p', x: 'Is een bepaling in deze voorwaarden niet geldig of niet afdwingbaar, dan blijven de overige bepalingen van kracht. Heb je een vraag over deze voorwaarden, neem dan contact met ons op via de [contactpagina](/contact/) of stuur een WhatsApp naar +44 7441 484283.' },
    ],
    related: ['privacy-en-cookies', 'is-lachgas-verboden', 'contact', 'bestellen', 'veilig-gebruik-lachgas', 'over-ons'],
  },
];
