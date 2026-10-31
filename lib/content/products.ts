import type { Page } from '../types';

const NOTE =
  'Levering uitsluitend aan 18+ en uitsluitend voor toegestane toepassingen, zoals keuken, horeca en technisch gebruik. Lees de [wettelijke status](/is-lachgas-verboden/).';

const ORDER_STEPS: [string, string][] = [
  ['Stuur een WhatsApp-bericht', 'Geef je adres, het gewenste formaat en voor welk gebruik je de tank nodig hebt.'],
  ['Wij bevestigen prijs en tijd', 'Je hoort vooraf wat het kost en hoe laat de koerier er is, doorgaans binnen 20 tot 30 minuten.'],
  ['Betaal bij aflevering', 'PIN of contant bij de koerier. Een account of vooruitbetaling is niet nodig.'],
];

export const products: Page[] = [
  {
    slug: 'lachgas-tanks', group: 'product', kind: 'product', nav: 'Lachgas tanks', parent: 'home', twin: 'nitrous-oxide-tanks',
    title: 'Lachgas tanks: Fastgas 2KG, 4KG en 10KG',
    desc: 'Lachgas tank bestellen in Amsterdam: de verzegelde Fastgas Wegwerp Tank in 2KG, 4KG en 10KG. Bezorgd binnen 20 tot 30 minuten, PIN of contant.',
    h1: 'Lachgas tanks in Amsterdam', kicker: 'Fastgas Wegwerp Tank',
    lead: 'De Fastgas Wegwerp Tank is verzegeld, heeft een label met serienummer en keuringsgegevens en is direct klaar voor gebruik. Drie formaten, bezorgd in en rond Amsterdam.',
    img: { src: '/fastgas-4kg.webp', alt: 'Fastgas lachgas tanks 2KG en 4KG, navy met gele band', w: 640, h: 512 },
    blocks: [
      { t: 'h2', x: 'Lachgas tanks in drie formaten' },
      { t: 'p', x: 'Een lachgas tank is een gasfles waarin N₂O onder druk zit. Wij bezorgen één product: de originele **Fastgas Wegwerp Tank** in 2KG, 4KG en 10KG. Alle drie zijn verzegeld, hebben een eigen serienummer en gaan na gebruik niet terug naar de leverancier.' },
      { t: 'table', head: ['Formaat', 'Inhoud', 'Gelijk aan', 'Past bij'], rows: [
        ['[Fastgas 2KG](/fastgas-2kg/)', '2000 gram N₂O', 'circa 250 slagroompatronen', 'kleine keuken, proefopstelling'],
        ['[Fastgas 4KG](/fastgas-4kg/)', '4000 gram N₂O', 'circa 500 slagroompatronen', 'drukke keuken, catering'],
        ['[Fastgas 10KG](/fastgas-10kg/)', '10.000 gram N₂O', 'circa 1250 slagroompatronen', 'groot verbruik, evenementen'],
      ] },
      { t: 'p', x: 'De vergelijking met slagroompatronen is een rekenhulp. Een patroon bevat 8 gram, dus 2000 gram komt op circa 250 patronen uit. Het werkelijke verbruik hangt af van je opstelling, dus zie het als richtgetal. Over de kleine variant lees je meer op [slagroompatronen](/slagroompatronen/).' },

      { t: 'h2', x: 'Wat is de Fastgas Wegwerp Tank?' },
      { t: 'p', x: 'Fastgas is de naam van de wegwerptank die wij leveren. Hij is af fabriek gevuld en afgesloten, zodat je kunt zien dat er niemand aan heeft gezeten. Op de tank zit een label met de inhoud, de maximale druk (bij de 2KG is dat 180 bar), een serienummer, een streepcode en keuringsgegevens.' },
      { t: 'p', x: 'Via een verificatielink op het label controleer je de echtheid. Wat er precies op het label staat, lees je op [Fastgas uitgelegd](/fastgas/). Hoe het wegwerpprincipe werkt, staat op [wegwerp lachgas tanks](/wegwerp-lachgas-tanks/).' },

      { t: 'h2', x: 'Welk formaat tank past bij jouw gebruik?' },
      { t: 'p', x: 'Kies op basis van wat je echt verbruikt, niet op basis van wat het grootst is. Een tank die maanden blijft staan, moet je veilig opslaan. Een tank die te klein is, betekent dat je midden in een dienst opnieuw moet bestellen.' },
      { t: 'h3', x: '2KG voor kleine hoeveelheden' },
      { t: 'p', x: 'De 2KG is compact en makkelijk te verplaatsen. Hij past bij een kleine keuken, een bakkerij met een paar bereidingen per dag of een proefopstelling waarbij je eerst wilt zien hoeveel je nodig hebt.' },
      { t: 'h3', x: '4KG als middenmaat' },
      { t: 'p', x: 'De 4KG is het formaat voor keukens die dagelijks slagroom, schuimen of mousses maken en voor cateraars die op locatie werken. Je hebt genoeg voor een drukke periode, zonder dat de tank onhandig groot wordt.' },
      { t: 'h3', x: '10KG voor hoog verbruik' },
      { t: 'p', x: 'De 10KG is bedoeld voor grote keukens, hotelgroepen en cateraars die per week veel verbruiken. Reken op een vlakke, stevige opslagplek en een steekwagen of twee paar handen bij het verplaatsen.' },
      { t: 'p', x: 'Twijfel je tussen twee formaten? Stuur ons je situatie via [WhatsApp](/lachgas-bestellen-whatsapp/). We denken mee, ook over twee kleinere tanks in plaats van één grote.' },

      { t: 'h2', x: 'Voor wie leveren we een lachgas tank?' },
      { t: 'ul', x: [
        '**Horeca:** restaurants, bars en hotels die slagroom, schuimen en mousses bereiden, zie [lachgas voor horeca](/lachgas-horeca/)',
        '**Catering en evenementen:** cateraars die op locatie desserts afwerken, zie [lachgas voor evenementen](/lachgas-evenementen/)',
        '**Technisch gebruik:** toepassingen waarbij N₂O als gas nodig is, bijvoorbeeld in een proefopstelling',
        '**Thuiskoks:** particulieren met een serieuze keukentoepassing',
      ] },
      { t: 'p', x: 'We leveren uitsluitend aan klanten van 18 jaar en ouder en uitsluitend voor toegestaan gebruik. Sinds 1 januari 2023 staat lachgas op lijst II van de Opiumwet. Vervoeren, verkopen en bezitten voor recreatief gebruik is verboden. Voor technische doeleinden en gebruik als voedingsadditief, zoals bij slagroom, geldt een uitzondering. Lees de [uitleg over de wettelijke status](/is-lachgas-verboden/). Bij twijfel over het beoogde gebruik leveren we niet.' },

      { t: 'h2', x: 'Veilig bewaren, vervoeren en aansluiten' },
      { t: 'p', x: 'Een gevulde tank staat onder druk en vraagt om rustig, voorspelbaar gedrag. Deze regels gelden voor elk formaat:' },
      { t: 'ul', x: [
        'Zet de tank rechtop en maak hem vast tegen omvallen',
        'Bewaar hem koel, droog en geventileerd, uit de zon en weg van warmtebronnen',
        'Sluit hem alleen aan met originele, passende adapters',
        'Open, beschadig of verhit de tank nooit en vul hem niet bij',
        'Houd tanks buiten bereik van kinderen',
      ] },
      { t: 'p', x: 'Uitgebreider staat het in onze gidsen over [opslag en transport](/lachgas-opslag-en-transport/) en [veilig gebruik](/veilig-gebruik-lachgas/).' },

      { t: 'h2', x: 'Waarom een wegwerptank?' },
      { t: 'ul', x: ['Geen statiegeld en geen lege fles om in te leveren', 'Verzegeld, dus je weet dat de inhoud onaangeroerd is', 'Duidelijk label met inhoud, druk en keuringsgegevens', 'Eén prijs, vooraf bevestigd, zonder borg of huurkosten'] },
      { t: 'p', x: 'Het nadeel is eerlijk gezegd dat je de lege tank zelf moet afvoeren. Hoe je dat doet, staat bij [wegwerp lachgas tanks](/wegwerp-lachgas-tanks/).' },

      { t: 'h2', x: 'Wat controleer je bij ontvangst?' },
      { t: 'p', x: 'Neem de tank pas aan als je hem even hebt bekeken. Een goede controle kost een halve minuut en voorkomt gedoe achteraf.' },
      { t: 'ul', x: [
        'De verzegeling is intact en niet losgemaakt',
        'Het label zit erop en het serienummer is leesbaar',
        'De tank heeft geen deuken, roest of beschadigde afsluiting',
        'Het formaat en het aantal komen overeen met je bestelling',
      ] },
      { t: 'p', x: 'Klopt er iets niet, gebruik de tank dan niet en neem direct contact met ons op via de [contactpagina](/contact/).' },

      { t: 'h2', x: 'Wat kost een lachgas tank?' },
      { t: 'p', x: 'De prijs hangt af van het formaat, het aantal tanks en je locatie, en we noemen hem per bericht, voordat de koerier vertrekt. Zo klopt het bedrag altijd en hoef je niet te zoeken naar een verouderde prijslijst. Er zijn geen kosten achteraf en geen borg, omdat het om een wegwerptank gaat.' },
      { t: 'p', x: 'Wil je vooraf weten waar de prijs van afhangt, lees dan [lachgas prijs](/lachgas-prijs/). Voor een vaste zakelijke behoefte stemmen we de levering en de administratie met je af.' },

      { t: 'h2', x: 'Zo bestel je een lachgas tank' },
      { t: 'steps', x: ORDER_STEPS },
      { t: 'p', x: 'De prijs noemen we per bericht, vooraf, omdat hij afhangt van formaat, aantal en locatie. Hoe dat werkt, lees je op [lachgas prijs](/lachgas-prijs/). We bezorgen dag en nacht in [Amsterdam](/lachgas-amsterdam/) en in 15 plaatsen eromheen, zie het [bezorggebied](/bezorggebied/). Een complete uitleg van de bestelling staat op [lachgas tank bestellen](/lachgas-tank-bestellen/).' },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Welk formaat tank moet ik kiezen?', a: 'Kies naar verbruik: 2KG voor kleinere hoeveelheden, 4KG voor een drukke keuken of catering, 10KG voor intensief professioneel gebruik. Twijfel je, stuur ons je situatie via [WhatsApp](/lachgas-bestellen-whatsapp/), dan adviseren we een formaat.' },
      { q: 'Zijn de tanks origineel?', a: 'Ja, we leveren uitsluitend de originele Fastgas Wegwerp Tank, verzegeld en met label. Via de verificatielink op het label kun je de echtheid controleren.' },
      { q: 'Kan ik meerdere tanks tegelijk bestellen?', a: 'Ja. Geef de aantallen en formaten door via WhatsApp en we bevestigen beschikbaarheid, prijs en aankomsttijd. Voor terugkerende zakelijke leveringen zie [lachgas voor horeca](/lachgas-horeca/).' },
      { q: 'Hoe zie ik of een tank onaangeroerd is?', a: 'De tank is verzegeld en heeft een label met serienummer. Is de verzegeling beschadigd of ontbreekt het label, gebruik de tank dan niet en neem direct contact met ons op.' },
      { q: 'Wat is het verschil tussen een tank en slagroompatronen?', a: 'Een patroon bevat 8 gram en is voor één spuit van een halve liter. Een tank bevat 2000 tot 10.000 gram en is bedoeld voor een professionele opstelling. Wij bezorgen alleen tanks, geen losse [patronen](/slagroompatronen/).' },
      { q: 'Moet ik een lege tank terugbrengen?', a: 'Nee. Het zijn wegwerptanks zonder statiegeld. Voer de lege tank af volgens de lokale regels voor gasflessen, zie [wegwerp lachgas tanks](/wegwerp-lachgas-tanks/).' },
      { q: 'Mag ik zomaar een tank kopen?', a: 'Nee. Je moet 18 jaar of ouder zijn en de tank moet voor een toegestaan doel zijn, zoals keuken, horeca, catering of technisch gebruik. De koerier kan om legitimatie vragen. Lees [is lachgas verboden](/is-lachgas-verboden/).' },
      { q: 'Hoe snel is een tank bij mij?', a: 'Doorgaans binnen 20 tot 30 minuten in Amsterdam en 25 tot 45 minuten in de regio, dag en nacht. Bij je bestelling bevestigen we de verwachte aankomsttijd.' },
    ],
    related: ['fastgas-2kg', 'fastgas-4kg', 'fastgas-10kg', 'bestellen', 'wegwerp-lachgas-tanks', 'lachgas-prijs'],
  },
  {
    slug: 'fastgas-2kg', group: 'product', kind: 'product', nav: 'Fastgas 2KG', parent: 'lachgas-tanks',
    title: 'Fastgas 2KG lachgas tank bestellen',
    desc: 'Fastgas 2KG: verzegelde wegwerp lachgas tank met 2000 gram N₂O, circa 250 slagroompatronen. Bezorgd in Amsterdam binnen 20 tot 30 minuten.',
    h1: 'Fastgas 2KG', kicker: '2000 gram · circa 250 patronen',
    lead: 'De 2KG is het compacte formaat van de Fastgas Wegwerp Tank: 2000 gram N₂O in een verzegelde tank van ongeveer 31 cm hoog.',
    img: { src: '/fastgas-2kg.webp', alt: 'Fastgas 2KG wegwerp lachgas tank, navy met gele band en zwarte dop', w: 440, h: 440 },
    blocks: [
      { t: 'h2', x: 'Specificaties van de Fastgas 2KG' },
      { t: 'table', head: ['Eigenschap', 'Waarde'], rows: [
        ['Inhoud', '2000 gram N₂O (netto)'],
        ['Gelijk aan', 'circa 250 slagroompatronen van 8 gram'],
        ['Maximale druk', '180 bar'],
        ['Afmetingen', 'diameter circa 114 mm, hoogte circa 310 mm'],
        ['Uitvoering', 'wegwerp, verzegeld, niet bijvullen'],
        ['Label', 'inhoud, druk, serienummer, streepcode en keuringsgegevens'],
      ] },
      { t: 'p', x: 'De 2KG is het kleinste formaat in ons assortiment. Met een doorsnede van ruim 11 centimeter en een hoogte van ongeveer 31 centimeter past hij op een werkblad of in een stevige kast met genoeg ruimte. Hij moet daar wel rechtop en vastgezet staan.' },

      { t: 'h2', x: 'Wat kun je met 2000 gram?' },
      { t: 'p', x: 'Een rekenvoorbeeld helpt bij de keuze. Eén patroon van 8 gram is genoeg voor een spuit van een halve liter room. Op papier staat 2000 gram dus gelijk aan zo’n 250 van die vullingen, ruim 100 liter room. Zie dit als richtgetal: verlies bij het aansluiten en je eigen opstelling maken het werkelijke verbruik wat lager.' },
      { t: 'p', x: 'Voor een keuken die drie keer per week een paar liter slagroom of schuim maakt, is dat een voorraad voor maanden. Dat is precies waarom de 2KG vooral past bij kleine hoeveelheden.' },

      { t: 'h2', x: 'Voor wie is de 2KG bedoeld?' },
      { t: 'ul', x: [
        'Kleine restaurants en lunchrooms met een beperkte dessertkaart',
        'Banketbakkers en patissiers die incidenteel mousses en schuimen spuiten',
        'Cateraars die een kleine opdracht doen en niet veel voorraad willen',
        'Proefopstellingen en technisch gebruik waarbij je eerst wilt meten wat je nodig hebt',
        'Thuiskoks met een serieuze keukentoepassing',
      ] },
      { t: 'p', x: 'Maak je meer dan een paar liter per dag, dan loop je met de 2KG sneller leeg dan je zou willen. Kijk dan naar de [4KG](/fastgas-4kg/) of, bij echt hoog verbruik, de [10KG](/fastgas-10kg/).' },

      { t: 'h2', x: 'Aansluiten en gebruiken' },
      { t: 'p', x: 'Een tank sluit je aan op een passend systeem met een originele adapter. Gebruik nooit een zelfgemaakte of onbekende koppeling, want de tank staat onder druk. Lees de gebruiksaanwijzing van je apparatuur en draai de afsluiting rustig open en dicht.' },
      { t: 'ul', x: ['Gebruik alleen originele, daarvoor bestemde adapters', 'Controleer afdichtingen op scheuren voordat je aansluit', 'Werk in een geventileerde ruimte', 'Zet de afsluiting dicht als je klaar bent', 'Nooit bijvullen, beschadigen of verhitten'] },
      { t: 'p', x: 'De volledige regels staan op [veilig omgaan met lachgas](/veilig-gebruik-lachgas/). Wil je weten hoe een spuit het gas gebruikt, kijk dan bij [hoe werkt een slagroomspuit](/hoe-werkt-een-slagroomspuit/).' },

      { t: 'h2', x: 'Opslag en transport van de 2KG' },
      { t: 'p', x: 'Bewaar de tank koel, droog en geventileerd, uit de zon en weg van fornuizen, ovens en andere warmtebronnen. Laat hem niet achter in een warme auto: de druk loopt dan op. Vervoer de tank rechtop en vastgezet, zodat hij niet kan rollen. Meer praktische punten staan in onze gids [lachgas tank opslaan en vervoeren](/lachgas-opslag-en-transport/).' },

      { t: 'h2', x: 'Voorbeeld: een lunchroom met een kleine dessertkaart' },
      { t: 'p', x: 'Stel, een lunchroom serveert drie dagen per week taart met slagroom en maakt een keer per week een mousse. Dat is een paar liter per week. Met 2000 gram heb je dan een voorraad voor meer dan een kwartaal, zonder dat je telkens patronen hoeft te vervangen. De tank staat in de bergruimte, rechtop en vastgezet, en wordt alleen gebruikt door de keukenmedewerkers die hem mogen aansluiten.' },
      { t: 'p', x: 'Is de lunchroom aan het groeien en komen er dagelijks desserts bij, dan stap je gewoon over op de 4KG bij je volgende bestelling.' },

      { t: 'h2', x: '2KG of toch een groter formaat?' },
      { t: 'p', x: 'Een goede vuistregel: bestel het formaat dat je binnen een paar weken gebruikt, niet het formaat dat het meest voordelig lijkt. Zie je dat je elke maand opnieuw bestelt, dan is dat geen probleem: we bezorgen dag en nacht en je hoeft geen voorraad aan te houden. Zie je dat je elke week bestelt, ga dan naar de 4KG.' },

      { t: 'h2', x: 'Een Fastgas 2KG bestellen' },
      { t: 'p', x: 'Stuur een bericht met je adres, het formaat en het gebruik. Bijvoorbeeld: “Hoi, ik wil één Fastgas 2KG bestellen voor mijn restaurant in Amsterdam Zuid. Adres is …, belletje bij de zijdeur. Gebruik: slagroom en schuimen in de keuken.” Wij antwoorden met de prijs en de verwachte aankomsttijd.' },
      { t: 'steps', x: ORDER_STEPS },
      { t: 'p', x: 'Meer over de procedure staat op [bestellen](/bestellen/). Bezorgd wordt er in heel [Amsterdam](/lachgas-amsterdam/) en in de regio, bekijk het [bezorggebied](/bezorggebied/).' },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Hoeveel lachgas zit er in de Fastgas 2KG?', a: 'De Fastgas 2KG bevat 2000 gram lachgas (N₂O), vergelijkbaar met circa 250 slagroompatronen van 8 gram. De maximale druk is 180 bar.' },
      { q: 'Hoe groot is de Fastgas 2KG?', a: 'De tank heeft een diameter van circa 114 mm en is circa 310 mm hoog. Je kunt hem dus op een werkblad of in een stevige kast kwijt, zolang hij rechtop en vastgezet staat.' },
      { q: 'Hoeveel slagroom kan ik ermee maken?', a: 'Als richtgetal: één patroon van 8 gram is genoeg voor een halve liter room, dus 2000 gram komt op ruim 100 liter. Het echte verbruik hangt af van je opstelling en het verlies bij aansluiten.' },
      { q: 'Kan ik de tank bijvullen of terugbrengen?', a: 'Nee. Het is een wegwerptank: niet bijvullen, geen statiegeld en geen inleverafspraak. Na gebruik voer je de lege tank af volgens de lokale regels.' },
      { q: 'Hoe snel is de 2KG bij mij?', a: 'Doorgaans binnen 20 tot 30 minuten in Amsterdam en omstreken, dag en nacht. Bij je bestelling bevestigen we de verwachte aankomsttijd.' },
      { q: 'Wat kost de Fastgas 2KG?', a: 'We noemen de actuele prijs per bericht, vooraf, en er komen geen kosten achteraf bij. Betalen kan bij aflevering met PIN of contant. Zie ook [lachgas prijs](/lachgas-prijs/).' },
      { q: 'Is de 2KG geschikt voor thuisgebruik?', a: 'Voor een serieuze keukentoepassing wel. Je moet 18 jaar of ouder zijn en het gebruik moet toegestaan zijn. Houd de tank rechtop, vastgezet en buiten bereik van kinderen.' },
    ],
    related: ['fastgas-4kg', 'fastgas-10kg', 'lachgas-tank-bestellen', 'lachgas-tanks', 'slagroompatronen', 'lachgas-opslag-en-transport'],
  },
  {
    slug: 'fastgas-4kg', group: 'product', kind: 'product', nav: 'Fastgas 4KG', parent: 'lachgas-tanks',
    title: 'Fastgas 4KG lachgas tank bestellen',
    desc: 'Fastgas 4KG: verzegelde wegwerp lachgas tank met 4000 gram N₂O, circa 500 slagroompatronen. Bezorgd in Amsterdam binnen 20 tot 30 minuten.',
    h1: 'Fastgas 4KG', kicker: '4000 gram · circa 500 patronen',
    lead: 'De 4KG is het middenformaat: genoeg voor een drukke keuken of een catering-opdracht, zonder de omvang van de 10KG.',
    img: { src: '/fastgas-4kg.webp', alt: 'Twee Fastgas 4KG wegwerp lachgas tanks naast elkaar', w: 640, h: 512 },
    blocks: [
      { t: 'h2', x: 'Specificaties van de Fastgas 4KG' },
      { t: 'table', head: ['Eigenschap', 'Waarde'], rows: [
        ['Inhoud', '4000 gram N₂O (netto)'],
        ['Gelijk aan', 'circa 500 slagroompatronen van 8 gram'],
        ['Uitvoering', 'wegwerp, verzegeld, niet bijvullen'],
        ['Label', 'inhoud, druk, serienummer en keuringsgegevens'],
      ] },
      { t: 'p', x: 'De 4KG bevat twee keer zoveel als de [2KG](/fastgas-2kg/) en 40 procent van de [10KG](/fastgas-10kg/). Het is het formaat met de beste balans tussen voorraad en hanteerbaarheid voor keukens die regelmatig gebruiken.' },

      { t: 'h2', x: 'Wanneer kies je de 4KG?' },
      { t: 'p', x: 'Kies de 4KG als je regelmatig gebruikt en je de tank niet na een paar weken leeg wilt hebben. Voor veel horecakeukens is dit de praktische middenmaat: genoeg voor een week of langer, maar nog steeds goed te verplaatsen en op te slaan.' },
      { t: 'ul', x: [
        'Restaurants met dagelijkse desserts, gespoten mousses of schuimen',
        'Bars die regelmatig schuimtoppings maken',
        'Cateraars die meerdere opdrachten per week doen',
        'Hotels met een eigen patisserie of ontbijtbuffet',
        'Bedrijven met een technische toepassing die regelmatig gas nodig heeft',
      ] },

      { t: 'h2', x: 'Rekenvoorbeeld: hoe lang gaat 4000 gram mee?' },
      { t: 'p', x: 'Op papier is 4000 gram gelijk aan circa 500 patronen, ofwel 250 liter room bij één patroon per halve liter. Hieronder zie je wat dat per situatie betekent. Het zijn rekenvoorbeelden en geen garanties, want je eigen opstelling bepaalt het werkelijke verbruik.' },
      { t: 'table', head: ['Situatie', 'Verbruik per dag of week', 'Op papier genoeg voor'], rows: [
        ['Restaurant met dagelijkse desserts', '5 liter per dag', 'circa 7 weken'],
        ['Cateraar met twee opdrachten per week', '20 liter per week', 'circa 12 weken'],
        ['Patisserie van een groot hotel', '15 liter per dag', 'circa 2,5 week, daarna de [10KG](/fastgas-10kg/) overwegen'],
      ] },
      { t: 'p', x: 'Meet de eerste weken hoe snel je tank leegloopt en kies daarna je vaste formaat. Een eenvoudige tip: noteer de datum waarop je een tank in gebruik neemt, dan weet je precies hoe lang je erover doet.' },

      { t: 'h2', x: 'Een tweede tank als reserve' },
      { t: 'p', x: 'Werk je in de horeca of bij catering, dan is een tank die leegraakt tijdens de dienst vervelend. Bestel daarom op tijd een reservetank, zodat je nooit midden in de service zit. Wij bezorgen dag en nacht, dus je hoeft niet te plannen tot op de dag, maar een reserve in huis geeft rust. Hoe je dat voor een zaak regelt, lees je op [lachgas voor horeca](/lachgas-horeca/).' },

      { t: 'h2', x: 'Opslag en transport van de 4KG' },
      { t: 'p', x: 'De 4KG is zwaarder dan de 2KG en heeft een stevige, vlakke ondergrond nodig. Zet hem rechtop en maak hem vast met een band of beugel. Bewaar hem koel en droog, uit de zon en weg van warmtebronnen zoals ovens. Vervoer de tank in een auto rechtopstaand en vastgesjord, niet los in de kofferbak.' },
      { t: 'p', x: 'Meer in onze gids [opslag en transport](/lachgas-opslag-en-transport/). Til de tank met twee handen of gebruik een steekwagen.' },

      { t: 'h2', x: 'Veilig werken met een middelgrote tank' },
      { t: 'ul', x: ['Gebruik alleen originele adapters en een passend systeem', 'Draai de afsluiting rustig open en dicht', 'Werk in een geventileerde keuken', 'Controleer slangen en afdichtingen voor je begint', 'Open of beschadig de tank nooit', 'Laat de tank niet in de buurt van een warmtebron staan'] },
      { t: 'p', x: 'Lees ook [veilig omgaan met lachgas](/veilig-gebruik-lachgas/). Voor het wettelijke kader, met de toegestane toepassingen, zie [is lachgas verboden](/is-lachgas-verboden/).' },

      { t: 'h2', x: 'Lege tank en volgende bestelling' },
      { t: 'p', x: 'Merk je dat de druk daalt of komt er minder gas uit, dan is de tank bijna leeg. Plan dan je volgende bestelling, zodat je niet zonder zit. De lege tank hoef je niet terug te brengen: voer hem af volgens de lokale regels, zoals uitgelegd op [wegwerp lachgas tanks](/wegwerp-lachgas-tanks/). Bewaar het serienummer van je vorige tank als je dat in je administratie wilt bijhouden.' },

      { t: 'h2', x: '2KG, 4KG of 10KG: de keuze op een rij' },
      { t: 'table', head: ['Formaat', 'Inhoud', 'Past bij'], rows: [
        ['[Fastgas 2KG](/fastgas-2kg/)', '2000 gram', 'kleine hoeveelheden'],
        ['Fastgas 4KG', '4000 gram', 'regelmatig gebruik, catering'],
        ['[Fastgas 10KG](/fastgas-10kg/)', '10.000 gram', 'zeer hoog verbruik'],
      ] },
      { t: 'p', x: 'Een overzicht van alle formaten staat op [lachgas tanks](/lachgas-tanks/).' },

      { t: 'h2', x: 'Een Fastgas 4KG bestellen' },
      { t: 'p', x: 'Stuur ons je adres, het aantal tanks en het gebruik. Bijvoorbeeld: “Hoi, twee Fastgas 4KG graag voor onze catering in Amsterdam Noord, ontvangstpunt is de laaddeur aan de achterzijde, contactpersoon is …” Wij antwoorden met prijs en aankomsttijd en je betaalt de koerier bij aflevering.' },
      { t: 'steps', x: ORDER_STEPS },
      { t: 'p', x: 'Meer over de procedure op [bestellen](/bestellen/). We bezorgen ook buiten de stad, bijvoorbeeld in [Amstelveen](/lachgas-amstelveen/) en [Zaandam](/lachgas-zaandam/).' },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Hoeveel lachgas zit er in de Fastgas 4KG?', a: 'De Fastgas 4KG bevat 4000 gram lachgas (N₂O), vergelijkbaar met circa 500 slagroompatronen van 8 gram. Elke tank is verzegeld en heeft een eigen serienummer.' },
      { q: 'Is de 4KG geschikt voor een restaurantkeuken?', a: 'Ja, de 4KG is gemaakt voor keukens die regelmatig room, schuimen of mousses spuiten. Gebruik hem alleen met originele adapters, rechtop en vastgezet in een geventileerde ruimte.' },
      { q: 'Hoe vaak moet ik een nieuwe tank bestellen?', a: 'Dat hangt van je verbruik af. Houd bij hoe snel je eerste tank leegloopt en bestel daarna op tijd een reserve. Wij bezorgen dag en nacht, dus een aanvulling is snel geregeld.' },
      { q: 'Kan ik twee 4KG tanks tegelijk bestellen?', a: 'Ja. Geef het aantal en je ontvangstpunt door via WhatsApp en we bevestigen beschikbaarheid, prijs en aankomsttijd. Zie ook [lachgas voor evenementen](/lachgas-evenementen/).' },
      { q: 'Kan ik de 4KG terugbrengen of bijvullen?', a: 'Nee. Het is een wegwerptank: niet bijvullen en geen statiegeld. Voer de lege tank af volgens de lokale regels, zie [wegwerp lachgas tanks](/wegwerp-lachgas-tanks/).' },
      { q: 'Wat kost de Fastgas 4KG?', a: 'De prijs noemen we vooraf per bericht en hangt af van het aantal tanks en je locatie. Je betaalt de koerier bij aflevering met PIN of contant. Zie [lachgas prijs](/lachgas-prijs/).' },
      { q: 'Bezorgen jullie de 4KG ook ’s nachts?', a: 'Ja, we zijn 24 uur per dag bereikbaar en bezorgen dag en nacht. Lees meer over [nachtlevering](/lachgas-nachtlevering/) en [lachgas 24/7](/lachgas-24-7/).' },
    ],
    related: ['fastgas-2kg', 'fastgas-10kg', 'lachgas-horeca', 'lachgas-tanks', 'lachgas-evenementen', 'lachgas-tank-bestellen'],
  },
  {
    slug: 'fastgas-10kg', group: 'product', kind: 'product', nav: 'Fastgas 10KG', parent: 'lachgas-tanks',
    title: 'Fastgas 10KG lachgas tank bestellen',
    desc: 'Fastgas 10KG: verzegelde wegwerp lachgas tank met 10.000 gram N₂O, circa 1250 slagroompatronen. Bezorgd in Amsterdam binnen 20 tot 30 minuten.',
    h1: 'Fastgas 10KG', kicker: '10.000 gram · circa 1250 patronen',
    lead: 'De 10KG is het grootste formaat, bedoeld voor professioneel gebruik met een hoog verbruik en een vaste opslagplek.',
    img: { src: '/fastgas-10kg.webp', alt: 'Vijf Fastgas wegwerp lachgas tanks op een rij', w: 640, h: 427 },
    blocks: [
      { t: 'h2', x: 'Specificaties van de Fastgas 10KG' },
      { t: 'table', head: ['Eigenschap', 'Waarde'], rows: [
        ['Inhoud', '10.000 gram N₂O (netto)'],
        ['Gelijk aan', 'circa 1250 slagroompatronen van 8 gram'],
        ['Uitvoering', 'wegwerp, verzegeld, niet bijvullen'],
        ['Administratie', 'eigen serienummer en label per tank'],
      ] },
      { t: 'p', x: 'De 10KG bevat 10 kilo gas, alleen de inhoud al. Dat maakt hem tot de zwaarste tank in het assortiment, en dat merk je bij het tillen, bewaren en vervoeren. Het is een tank voor locaties waar het gebruik hoog ligt en de opslag goed geregeld is.' },

      { t: 'h2', x: 'Voor welke locaties is de 10KG bedoeld?' },
      { t: 'ul', x: [
        'Grote keukens van hotels, congrescentra en ziekenhuiskeukens',
        'Cateraars en evenementenbedrijven met veel opdrachten per week',
        'Productiekeukens die schuimen en mousses in volume bereiden',
        'Bedrijven met een technische toepassing waarbij veel gas nodig is',
      ] },
      { t: 'p', x: 'Heb je maar een paar liter per dag nodig, dan is de 10KG te groot: je moet de tank dan lang opslaan. Kijk in dat geval bij de [4KG](/fastgas-4kg/) of de [2KG](/fastgas-2kg/).' },

      { t: 'h2', x: 'Wat betekent 10.000 gram in de praktijk?' },
      { t: 'p', x: 'Op papier staat 10.000 gram gelijk aan circa 1250 slagroompatronen van 8 gram. Rekent een keuken één patroon per halve liter room, dan komt dat neer op ruim 600 liter. Dat is een richtgetal: je opstelling bepaalt het werkelijke verbruik.' },
      { t: 'p', x: 'Zo’n voorraad heeft pas zin als je hem binnen een redelijke tijd gebruikt. Een tank die jarenlang achter in een magazijn staat, vraagt toezicht en ruimte. Reken daarom eerst uit wat je per maand echt verbruikt.' },

      { t: 'h2', x: 'Een goede opslagplek voor een zware tank' },
      { t: 'p', x: 'Bij de 10KG telt de plek net zo zwaar als de tank. Zet hem op een vlakke, stevige ondergrond, rechtop en vastgezet met een band of beugel, zodat hij niet kan omvallen. Kies een koele, droge en goed geventileerde ruimte, uit de zon en weg van warmtebronnen.' },
      { t: 'ul', x: [
        'Verplaats de tank met een steekwagen of met twee personen',
        'Til nooit alleen via de dop of de afsluiting',
        'Bewaar de tank niet op een trap of in een krappe, ongeventileerde kast',
        'Houd de ruimte vrij van brandbare stoffen en open vuur',
        'Zorg dat alleen bevoegde medewerkers erbij kunnen',
      ] },
      { t: 'p', x: 'Meer regels voor opslag en vervoer staan in onze gids [lachgas tank opslaan en vervoeren](/lachgas-opslag-en-transport/).' },

      { t: 'h2', x: 'Zakelijk bestellen en terugkerende levering' },
      { t: 'p', x: 'Heb je een vaste behoefte, stuur ons dan je bedrijfsnaam, adres, ontvangstpunt en verwachte verbruik. Dan kijken we samen naar het juiste formaat en naar een terugkerende levering. Voor elke levering bevestigen we vooraf de prijs en de aankomsttijd.' },
      { t: 'p', x: 'Elke tank heeft een eigen serienummer. Dat helpt bij je interne administratie en bij het terugvinden van een tank als je er iets over wilt navragen. Vraag bij je eerste bestelling naar zakelijke administratie. Meer voor bedrijven op [lachgas voor horeca](/lachgas-horeca/).' },

      { t: 'h2', x: 'Ontvangst: laden, lossen en doorgeven' },
      { t: 'p', x: 'Bij een zware tank loont het om de ontvangst vooraf te regelen. Noem in je bericht het ontvangstpunt, bijvoorbeeld de goederenontvangst of de laaddeur aan de achterzijde, en wie de tank aanneemt. De koerier overhandigt de tank persoonlijk, controleert desgewenst de leeftijd en neemt de betaling aan.' },
      { t: 'ul', x: ['Zorg dat de route naar de opslagplek vrij is van drempels en trappen', 'Houd een steekwagen of een tweede persoon paraat', 'Controleer verzegeling, label en serienummer meteen bij ontvangst', 'Zet de tank direct op zijn plek, rechtop en vastgezet'] },

      { t: 'h2', x: 'Twee 4KG-tanks in plaats van één 10KG' },
      { t: 'p', x: 'Past een 10KG niet op je opslagplek, of wil je de tank makkelijker kunnen verplaatsen? Dan zijn twee [4KG-tanks](/fastgas-4kg/) een alternatief. Je hebt dan 8000 gram, met lichtere tanks en een reserve achter de hand. Wat het beste werkt, hangt af van je ruimte en je personeel. Stuur ons je situatie, dan denken we mee.' },

      { t: 'h2', x: 'Een Fastgas 10KG bestellen' },
      { t: 'p', x: 'Zet in je bericht het adres, het aantal tanks, het ontvangstpunt en of er een steekwagen of lift beschikbaar is. Bijvoorbeeld: “Goedemiddag, één Fastgas 10KG voor ons hotel in Amsterdam Zuidoost. Ontvangst bij de goederenontvangst, contactpersoon …” We antwoorden met prijs en aankomsttijd en je betaalt bij aflevering met PIN of contant.' },
      { t: 'steps', x: ORDER_STEPS },
      { t: 'p', x: 'We bezorgen in [Amsterdam Zuidoost](/lachgas-amsterdam-zuidoost/) rond de ArenA, maar ook in [Haarlem](/lachgas-haarlem/) en [Almere](/lachgas-almere/). Heb je een evenement, lees dan [lachgas voor evenementen](/lachgas-evenementen/).' },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Hoeveel lachgas zit er in de Fastgas 10KG?', a: 'De Fastgas 10KG bevat 10.000 gram lachgas (N₂O), vergelijkbaar met circa 1250 slagroompatronen van 8 gram. De tank is verzegeld en heeft een eigen serienummer.' },
      { q: 'Voor wie is de 10KG geschikt?', a: 'Voor grote keukens, hotels, cateraars en evenementenbedrijven met een hoog verbruik en een goede opslagplek. Voor lage hoeveelheden is de [2KG](/fastgas-2kg/) of [4KG](/fastgas-4kg/) praktischer.' },
      { q: 'Hoe verplaats ik een 10KG veilig?', a: 'Gebruik een steekwagen of verplaats hem met twee personen, rechtop en vastgezet. Til hem niet via de dop of de afsluiting en vervoer hem nooit los in een warme auto.' },
      { q: 'Kan ik de 10KG op een evenemententerrein laten bezorgen?', a: 'Ja, als je het exacte ontvangstpunt doorgeeft. Bij afzettingen spreken we een alternatief punt af. Lees meer op [lachgas voor evenementen](/lachgas-evenementen/).' },
      { q: 'Krijg ik een factuur voor mijn bedrijf?', a: 'Vraag naar zakelijke administratie bij je eerste bestelling via WhatsApp. We stemmen de details dan met je af.' },
      { q: 'Kan ik een 10KG bijvullen of terugbrengen?', a: 'Nee, het is een wegwerptank: niet bijvullen en geen statiegeld. Voer de lege tank af volgens de lokale regels voor gasflessen.' },
      { q: 'Wat kost de Fastgas 10KG?', a: 'De prijs noemen we vooraf per bericht, afhankelijk van aantal en locatie. Je betaalt bij aflevering met PIN of contant. Zie [lachgas prijs](/lachgas-prijs/).' },
    ],
    related: ['fastgas-4kg', 'fastgas-2kg', 'lachgas-horeca', 'lachgas-evenementen', 'lachgas-tanks', 'lachgas-opslag-en-transport'],
  },
  {
    slug: 'wegwerp-lachgas-tanks', group: 'product', kind: 'product', nav: 'Wegwerp lachgas tanks', parent: 'lachgas-tanks',
    title: 'Wegwerp lachgas tanks: voordelen en gebruik',
    desc: 'Wegwerp lachgas tank kopen: geen statiegeld, verzegeld en direct klaar. Alles over de Fastgas wegwerptank en hoe je hem veilig afvoert.',
    h1: 'Wegwerp lachgas tanks', kicker: 'Zonder statiegeld',
    lead: 'Een wegwerp lachgas tank is een eenmalig gebruikte, verzegelde tank. Je hoeft hem niet terug te brengen of bij te vullen.',
    img: { src: '/fastgas-close-up.webp', alt: 'Close-up van de bovenkant van een Fastgas wegwerp tank met gele band', w: 768, h: 512 },
    blocks: [
      { t: 'h2', x: 'Wat is een wegwerp lachgas tank?' },
      { t: 'p', x: 'Een wegwerp lachgas tank is een gasfles die één keer wordt gevuld en na gebruik als afval wordt afgevoerd. Je krijgt hem verzegeld af fabriek, gebruikt hem tot hij leeg is en brengt hem niet terug naar de leverancier. De Fastgas Wegwerp Tank die wij bezorgen, werkt precies zo.' },
      { t: 'h2', x: 'Wat maakt een wegwerptank anders?' },
      { t: 'p', x: 'Een traditionele gasfles is eigendom van de leverancier en gaat na gebruik terug om opnieuw gevuld te worden. Daar hoort statiegeld, huur en een inleverafspraak bij. Een wegwerptank is een afgesloten verpakking die na gebruik als afval wordt afgevoerd. Dat spaart ritjes, administratie en vulfouten.' },
      { t: 'table', head: ['', 'Hervulbare fles', 'Wegwerptank'], rows: [
        ['Eigendom', 'leverancier', 'jij'],
        ['Statiegeld of huur', 'ja', 'nee'],
        ['Na gebruik', 'terugbrengen en opnieuw vullen', 'afvoeren'],
        ['Bijvullen', 'door de leverancier', 'nooit'],
        ['Afhandeling', 'inleverafspraak nodig', 'geen retour'],
      ] },

      { t: 'h2', x: 'Voordelen van een wegwerp lachgas tank' },
      { t: 'ul', x: [
        '**Verzegeld af fabriek,** met serienummer en label, zodat je weet dat de inhoud onaangeroerd is',
        '**Geen statiegeld** en geen inleverafspraak, dus geen extra kosten of ritten',
        '**Drie formaten:** [2KG](/fastgas-2kg/), [4KG](/fastgas-4kg/) en [10KG](/fastgas-10kg/)',
        '**Duidelijke gegevens** op het label: inhoud, druk en keuringsgegevens',
        '**Eén prijs,** vooraf bevestigd in je bericht',
      ] },
      { t: 'p', x: 'Eerlijk gezegd: een wegwerptank heeft ook een nadeel. Je moet de lege tank zelf afvoeren en daar hoort enig gedoe bij. Hoe je dat regelt, lees je hieronder.' },

      { t: 'h2', x: 'Hoe voer je een lege tank af?' },
      { t: 'p', x: 'Een tank is pas leeg als hij geen druk meer heeft. Gebruik hem daarom via je eigen opstelling tot er geen gas meer uitkomt. Heb je twijfel of er nog druk op staat, gooi hem dan niet bij het gewone afval. Een tank die nog druk heeft, hoort daar niet.' },
      { t: 'ul', x: [
        'Lever de lege tank in bij het afvalpunt van je gemeente, volgens de lokale regels voor gasflessen of metaalafval',
        'Verhit of doorboor een tank nooit, ook niet als hij leeg lijkt',
        'Laat gas niet onnodig ontsnappen: lachgas is een broeikasgas en in een afgesloten ruimte ook gevaarlijk',
        'Bewaar lege tanks niet in een warme auto of in de zon',
      ] },
      { t: 'p', x: 'Weet je niet zeker waar je terechtkunt, vraag het dan aan het afvalpunt van je gemeente. Algemene veiligheidsregels staan op [veilig omgaan met lachgas](/veilig-gebruik-lachgas/).' },

      { t: 'h2', x: 'Voor wie is een wegwerptank handig?' },
      { t: 'p', x: 'Een wegwerptank past bij iedereen die geen zin heeft in fles- en statiegeldadministratie: een restaurant dat af en toe een tank nodig heeft, een cateraar die op locatie werkt of een bedrijf met een technische toepassing. Wie flexibel wil blijven en per levering wil afrekenen, zonder fles te huren of terug te brengen, is met een wegwerptank het beste af.' },

      { t: 'h2', x: 'Afval en milieu' },
      { t: 'p', x: 'Een lege tank is metaalafval, maar mag niet bij het gewone afval als er nog druk op staat. Gebruik de tank dus volledig en breng hem naar het afvalpunt van je gemeente. Lachgas is een broeikasgas, dus laat gas niet onnodig ontsnappen. Wie een tank laat leeglopen in een afgesloten ruimte, loopt bovendien veiligheidsrisico’s.' },

      { t: 'h2', x: 'Zo herken je een originele Fastgas tank' },
      { t: 'p', x: 'Een originele tank heeft een verzegeld label met een serienummer, een streepcode, de inhoud, de maximale druk en keuringsgegevens. Daarnaast staat er een verificatielink op, waarmee je de echtheid controleert. Meer over het label staat op [Fastgas uitgelegd](/fastgas/).' },
      { t: 'p', x: 'Is de verzegeling beschadigd, ontbreekt het label of klopt het serienummer niet, gebruik de tank dan niet en neem direct contact met ons op via de [contactpagina](/contact/). Wij leveren uitsluitend originele tanks.' },

      { t: 'h2', x: 'Opslag voor je een tank gebruikt' },
      { t: 'p', x: 'Ook een nog ongebruikte wegwerptank staat onder druk. Bewaar hem rechtop, vastgezet, koel, droog en geventileerd, uit de zon en weg van warmtebronnen. Houd hem buiten bereik van kinderen. De volledige uitleg vind je in onze gids [lachgas tank opslaan en vervoeren](/lachgas-opslag-en-transport/).' },

      { t: 'h2', x: 'Een wegwerp lachgas tank bestellen in Amsterdam' },
      { t: 'p', x: 'Bekijk de formaten op [lachgas tanks](/lachgas-tanks/) en bestel via WhatsApp. We bevestigen prijs en aankomsttijd en je betaalt bij aflevering. Hoe dat precies werkt, staat op [bestellen](/bestellen/). Levering uitsluitend aan 18+ en voor toegestaan gebruik; lees de [uitleg over de wet](/is-lachgas-verboden/).' },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Moet ik een lege wegwerptank terugbrengen?', a: 'Nee, er is geen statiegeld en geen retour. Voer de lege tank af volgens de lokale regels voor gasflessen of metaalafval en laat hem niet in de zon of in een warme auto staan.' },
      { q: 'Kan ik een wegwerptank hervullen?', a: 'Nee. Hervullen is gevaarlijk en niet toegestaan. Gebruik de tank één keer en voer hem daarna af.' },
      { q: 'Hoe herken ik een originele Fastgas tank?', a: 'Aan het verzegelde label met serienummer, streepcode, inhoud, druk en keuringsgegevens, plus de verificatielink. We leveren uitsluitend originele tanks.' },
      { q: 'Wat doe ik als de verzegeling beschadigd is?', a: 'Gebruik de tank niet en neem direct contact met ons op. Noem het serienummer, dan zoeken we uit wat er aan de hand is.' },
      { q: 'Waar lever ik een lege tank in?', a: 'Bij het afvalpunt van je gemeente, volgens de regels voor gasflessen of metaalafval. Weet je niet of er nog druk op staat, gooi hem dan niet bij het gewone afval en vraag het bij het afvalpunt.' },
      { q: 'Wat is het verschil met een gasfles met statiegeld?', a: 'Bij statiegeld hoort een fles die je terugbrengt en laat vullen. Een wegwerptank blijft van jou en wordt na gebruik afgevoerd. Er is geen borg en geen inleverafspraak.' },
      { q: 'Welke formaten wegwerptanks leveren jullie?', a: 'De Fastgas Wegwerp Tank in 2KG, 4KG en 10KG. Een overzicht staat op [lachgas tanks](/lachgas-tanks/).' },
    ],
    related: ['lachgas-tanks', 'lachgas-opslag-en-transport', 'nitrous-oxide-tanks', 'veilig-gebruik-lachgas', 'fastgas', 'fastgas-4kg'],
  },
  {
    slug: 'lachgas-tank-bestellen', group: 'product', kind: 'service', nav: 'Lachgas tank bestellen', parent: 'lachgas-tanks',
    title: 'Lachgas tank bestellen in Amsterdam',
    desc: 'Lachgas tank bestellen: kies 2KG, 4KG of 10KG en bestel via WhatsApp. 24/7 bezorgd in Amsterdam, betalen bij aflevering.',
    h1: 'Lachgas tank bestellen', kicker: 'Bestellen in drie stappen',
    lead: 'Een lachgas tank bestel je bij ons zonder account en zonder formulier: een bericht of een telefoontje is genoeg.',
    blocks: [
      { t: 'h2', x: 'Zo bestel je een lachgas tank' },
      { t: 'p', x: 'Je bestelt via WhatsApp en betaalt bij aflevering. Er is geen webwinkel, geen winkelwagen en geen account. Dat scheelt tijd, en je krijgt direct antwoord van iemand die je kunt bereiken.' },
      { t: 'steps', x: ORDER_STEPS },

      { t: 'h2', x: 'Wat heb je nodig?' },
      { t: 'ul', x: ['Je adres met huisnummer, etage en eventuele toegangscode', 'Het gewenste formaat: 2KG, 4KG of 10KG', 'Een geldig legitimatiebewijs voor de leeftijdscontrole (18+)', 'PIN-pas of contant geld voor de betaling'] },

      { t: 'h2', x: 'Wat zet je in je bericht?' },
      { t: 'p', x: 'Hoe completer je eerste bericht, hoe sneller de koerier onderweg is. Dit hoort erin:' },
      { t: 'ul', x: ['Adres, huisnummer en een eventuele bel- of toegangscode', 'Formaat en aantal tanks', 'Het gebruik: keuken, horeca, catering of technisch', 'Een telefoonnummer waarop de koerier je kan bereiken', 'Bij voorkeur een locatiepin, zeker bij een lastig vindbaar adres'] },
      { t: 'p', x: 'Een voorbeeld: “Hoi, ik wil één Fastgas 4KG bestellen voor ons restaurant in Amsterdam West. Adres is …, belletje bij de zijdeur. Gebruik: desserts en schuimen.” Meer voorbeelden vind je op [lachgas bestellen via WhatsApp](/lachgas-bestellen-whatsapp/).' },

      { t: 'h2', x: 'Veelgemaakte fouten bij het bestellen' },
      { t: 'ul', x: [
        'Een adres zonder etage of toegangscode, waardoor de koerier voor een dichte deur staat',
        'Een telefoonnummer dat niet bereikbaar is op het moment van aflevering',
        'Geen legitimatie bij de hand voor de leeftijdscontrole',
        'Een formaat kiezen op gevoel in plaats van op verbruik',
        'Pas bestellen als de tank al leeg is, zodat je zonder zit',
      ] },
      { t: 'p', x: 'Loop je dit rijtje door voordat je een bericht stuurt, dan gaat de bestelling bijna altijd in één keer goed.' },

      { t: 'h2', x: 'Kies je tank' },
      { t: 'cards', x: [
        { h: 'Fastgas 2KG', p: '2000 gram, circa 250 patronen.', href: '/fastgas-2kg/' },
        { h: 'Fastgas 4KG', p: '4000 gram, circa 500 patronen.', href: '/fastgas-4kg/' },
        { h: 'Fastgas 10KG', p: '10.000 gram, circa 1250 patronen.', href: '/fastgas-10kg/' },
      ] },
      { t: 'p', x: 'Weet je niet welk formaat je nodig hebt? Op [lachgas tanks](/lachgas-tanks/) staat per formaat voor wie het geschikt is. Je kunt ook gewoon je situatie sturen, dan adviseren we.' },

      { t: 'h2', x: 'Wat gebeurt er na je bericht?' },
      { t: 'p', x: 'Wij antwoorden met de totaalprijs en de verwachte aankomsttijd, doorgaans binnen 20 tot 30 minuten in Amsterdam. Ben je het eens, dan vertrekt de koerier. Je kunt onderweg met hem contact houden. Meer over hoe de levering verloopt, lees je op [lachgas bezorgen](/lachgas-bezorgen/) en [de lachgaskoerier](/lachgas-koerier/).' },
      { t: 'p', x: 'Bij de deur controleert de koerier desgewenst je leeftijd, overhandigt hij de verzegelde tank persoonlijk en neemt hij de betaling aan. Let zelf even op dat de verzegeling intact is en dat het label met serienummer erop zit.' },

      { t: 'h2', x: 'Hoeveel tanks bestel je?' },
      { t: 'p', x: 'Begin met het aantal dat je binnen een redelijke tijd gebruikt. Eén tank is voor de meeste bestellingen genoeg. Gebruik je een tank regelmatig, bestel dan meteen een tweede als reserve, zodat je niet midden in een dienst zonder zit. Heb je een evenement of een groot project, geef dan het totaal op en de gewenste tijd, zodat we de levering kunnen plannen. Meer hierover vind je op [lachgas voor evenementen](/lachgas-evenementen/).' },

      { t: 'h2', x: 'Betalen en prijs' },
      { t: 'p', x: 'Je betaalt bij aflevering met PIN of contant. De prijs noemen we per bericht vooraf, omdat hij afhangt van het formaat, het aantal en de locatie. Wat je afspreekt, betaal je, zonder kosten achteraf. Zie [lachgas prijs](/lachgas-prijs/) voor de uitleg.' },

      { t: 'h2', x: 'Wanneer leveren we niet?' },
      { t: 'p', x: 'We leveren uitsluitend aan klanten van 18 jaar en ouder en uitsluitend voor toegestaan gebruik. Sinds 1 januari 2023 staat lachgas op lijst II van de Opiumwet en is bezit en handel voor recreatief gebruik verboden. Lijkt het beoogde gebruik niet toegestaan, of twijfelen we aan je leeftijd, dan leveren we niet. Lees de [uitleg over de wet](/is-lachgas-verboden/).' },

      { t: 'h2', x: 'Bestellen als bedrijf of particulier' },
      { t: 'p', x: 'Bestel je namens een zaak, vermeld dan bedrijfsnaam, contactpersoon en ontvangstpunt. Voor terugkerende levering en administratie zie [lachgas voor horeca](/lachgas-horeca/). Particulieren bestellen op dezelfde manier, met een serieuze keukentoepassing.' },
      { t: 'p', x: 'Overdag, in de avond of midden in de nacht: bestellen kan altijd. Zie [lachgas 24/7](/lachgas-24-7/). Uitgebreide uitleg van de procedure staat ook op [bestellen](/bestellen/).' },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Moet ik een account aanmaken?', a: 'Nee. Je bestelt via WhatsApp en betaalt bij aflevering. Een account of vooruitbetaling is niet nodig.' },
      { q: 'Kan ik ook overdag bestellen?', a: 'Ja, we zijn 24 uur per dag bereikbaar. Zie [overdag bestellen](/overdag-bestellen/).' },
      { q: 'Welke betaalmethoden zijn er?', a: 'PIN of contant bij de koerier, op het moment van aflevering.' },
      { q: 'Hoe lang duurt het voor de tank er is?', a: 'Doorgaans 20 tot 30 minuten in Amsterdam en 25 tot 45 minuten in de regio. Bij je bestelling bevestigen we de verwachte aankomsttijd.' },
      { q: 'Kan ik een tijdstip afspreken?', a: 'Ja. Geef in je bericht aan wanneer je wilt dat de koerier komt, bijvoorbeeld als je pas later aanwezig bent.' },
      { q: 'Moet ik mijn legitimatie laten zien?', a: 'De koerier kan om legitimatie vragen om je leeftijd te controleren. Je moet 18 jaar of ouder zijn.' },
      { q: 'Wat als mijn adres lastig te vinden is?', a: 'Stuur een locatiepin via WhatsApp en noteer een toegangscode of een korte aanwijzing. Dan vindt de koerier je snel.' },
    ],
    related: ['bestellen', 'lachgas-tanks', 'lachgas-bestellen-whatsapp', 'lachgas-prijs', 'lachgas-bestellen-amsterdam', 'contact'],
  },
  {
    slug: 'nitrous-oxide-tanks', group: 'product', kind: 'product', nav: 'Disposable nitrous oxide tanks', parent: 'lachgas-tanks', lang: 'en', twin: 'lachgas-tanks',
    title: 'Disposable nitrous oxide tanks (N2O)',
    desc: 'Disposable nitrous oxide tanks in Amsterdam: Fastgas 2KG, 4KG and 10KG, sealed and certified. Delivery in 20 to 30 minutes, 18+ only.',
    h1: 'Disposable nitrous oxide tanks', kicker: 'English',
    lead: 'We deliver the original Fastgas disposable tank in Amsterdam and the surrounding region. Each tank is sealed, labelled and ready to use for permitted purposes.',
    img: { src: '/fastgas-blueprint.webp', alt: 'Technical sheet of the Fastgas 2KG tank with specifications', w: 768, h: 512 },
    blocks: [
      { t: 'h2', x: 'Fastgas disposable nitrous oxide tanks' },
      { t: 'p', x: 'A disposable nitrous oxide tank is a sealed steel cylinder that you use once and then dispose of. It is not refilled and it does not go back to the supplier. We deliver one product only: the original **Fastgas Disposable Tank**, in three sizes, to addresses in Amsterdam and the surrounding region.' },
      { t: 'table', head: ['Size', 'Content', 'Roughly equal to', 'Suits'], rows: [
        ['Fastgas 2KG', '2000 g N₂O', '250 cream chargers', 'small kitchens, test setups'],
        ['Fastgas 4KG', '4000 g N₂O', '500 cream chargers', 'busy kitchens, catering'],
        ['Fastgas 10KG', '10,000 g N₂O', '1250 cream chargers', 'high volume, large venues'],
      ] },
      { t: 'p', x: 'A cream charger holds 8 grams of gas, so the comparison is a rule of thumb. Real consumption depends on your equipment. Details per size are on the Dutch pages for [Fastgas 2KG](/fastgas-2kg/), [4KG](/fastgas-4kg/) and [10KG](/fastgas-10kg/).' },

      { t: 'h2', x: 'What is on the label?' },
      { t: 'p', x: 'Every tank is sealed at the factory and carries a label with the content, the maximum pressure (180 bar on the 2KG), a serial number, a barcode and inspection details. A verification link on the label lets you check that the tank is genuine. If the seal is broken or the label is missing, do not use the tank and contact us. The Dutch page [Fastgas uitgelegd](/fastgas/) explains the label in more detail.' },

      { t: 'h2', x: 'Who do we deliver to?' },
      { t: 'p', x: 'We deliver to customers aged 18 and over, and only for permitted uses: catering, hospitality, kitchen use and technical applications. Typical customers are restaurants, bars, hotels, caterers and event companies.' },
      { t: 'ul', x: [
        '**Hospitality:** whipped cream, foams and mousses in a professional kitchen',
        '**Catering:** desserts finished on location, see [lachgas voor evenementen](/lachgas-evenementen/) (Dutch)',
        '**Technical use:** applications that need N₂O as a gas, for example in a test setup',
      ] },
      { t: 'p', x: 'If we doubt the intended use, we do not deliver.' },

      { t: 'h2', x: 'Is nitrous oxide legal in the Netherlands?' },
      { t: 'p', x: 'Since 1 January 2023 nitrous oxide is on List II of the Dutch Opium Act. Transporting, selling, producing or possessing it for recreational use is prohibited. Use for technical purposes and as a food additive, for example in whipped cream, remains permitted. Medical use also remains permitted.' },
      { t: 'p', x: 'Local mayors can also close premises where nitrous oxide is sold or delivered for non-permitted use. Read our Dutch summary on [is lachgas verboden](/is-lachgas-verboden/) and check the current rules with the Dutch government before you order. This is general information, not legal advice.' },

      { t: 'h2', x: 'How do I order?' },
      { t: 'steps', x: [
        ['Send a message', 'Send us your address, the tank size and what you will use it for. English is fine on WhatsApp.'],
        ['We confirm price and time', 'You hear the total price and the expected arrival, usually 20 to 30 minutes in Amsterdam.'],
        ['Pay on delivery', 'Card (PIN) or cash to the courier. No account and no payment in advance.'],
      ] },
      { t: 'p', x: 'A good first message includes the address with house number and floor, an entry code if there is one, the size and number of tanks, and a phone number. A location pin helps the courier find you faster. More about the process is on the Dutch page [bestellen](/bestellen/).' },

      { t: 'h2', x: 'Where do we deliver?' },
      { t: 'p', x: 'We deliver 24 hours a day, every day, in all districts of Amsterdam and in 15 towns around it, from Haarlem to Almere and from Purmerend to Amstelveen. The expected time is 20 to 30 minutes in the city and 25 to 45 minutes in the region. See the full [delivery area](/bezorggebied/) and our page on [laughing gas delivery in Amsterdam](/laughing-gas-delivery-amsterdam/).' },

      { t: 'h2', x: 'Safe storage and handling' },
      { t: 'ul', x: [
        'Keep the tank upright, secured and away from heat and sunlight',
        'Use only original, suitable adapters and never refill or open a tank',
        'Work in a well ventilated room and keep tanks away from children',
        'Do not leave a tank in a warm car',
      ] },
      { t: 'p', x: 'Read the Dutch guides on [storage and transport](/lachgas-opslag-en-transport/) and [safe use](/veilig-gebruik-lachgas/) for the full rules.' },
      { t: 'note', x: 'We deliver to customers aged 18 and over and only for permitted uses such as catering, hospitality and technical applications. In the Netherlands nitrous oxide falls under the Opium Act; see [is lachgas verboden](/is-lachgas-verboden/) (in Dutch).' },
    ],
    faq: [
      { q: 'Do you deliver in English?', a: 'Yes, you can order and chat in English on WhatsApp. Most of this website is in Dutch, but the courier and the order process work in English too.' },
      { q: 'How fast is delivery?', a: 'Usually within 20 to 30 minutes in Amsterdam and 25 to 45 minutes in the surrounding towns, 24 hours a day. We confirm the arrival time when you order.' },
      { q: 'Which tank sizes do you deliver?', a: 'The original Fastgas Disposable Tank in 2KG, 4KG and 10KG, sealed and labelled. We do not deliver loose cream chargers.' },
      { q: 'Can I pay by card?', a: 'Yes, by card (PIN) or cash to the courier on delivery. You do not pay in advance and you do not need an account.' },
      { q: 'Do I need ID?', a: 'You must be 18 or older. The courier may ask for a valid ID to check your age, and may refuse delivery if the intended use does not look permitted.' },
      { q: 'Can I refill or return the tank?', a: 'No. It is a disposable tank: no refill, no deposit and no return. Dispose of an empty tank according to local rules for gas cylinders.' },
      { q: 'What does a tank cost?', a: 'The price depends on the size, the number of tanks and your location. We tell you the total price by message before the courier leaves.' },
    ],
    related: ['laughing-gas-delivery-amsterdam', 'lachgas-tanks', 'bestellen', 'contact', 'bezorggebied', 'wegwerp-lachgas-tanks'],
  },
  {
    slug: 'slagroompatronen', group: 'product', kind: 'service', nav: 'Slagroompatronen', parent: 'lachgas-tanks',
    title: 'Slagroompatronen: 8 gram N2O voor de keuken',
    desc: 'Slagroompatronen voor slagroomspuiten: wat er in zit, hoeveel je nodig hebt en wanneer een tank slimmer is. Advies voor horeca en thuis.',
    h1: 'Slagroompatronen', kicker: 'Voor slagroomspuiten',
    lead: 'Een slagroompatroon is een klein stalen cilindertje met 8 gram lachgas, bedoeld om slagroom en schuimen te maken in een slagroomspuit.',
    blocks: [
      { t: 'h2', x: 'Wat is een slagroompatroon?' },
      { t: 'p', x: 'Een slagroompatroon bevat 8 gram lachgas (N₂O) en past in de houder van een slagroomspuit. Het gas lost op in de room en zorgt dat de room luchtig wordt en onder druk uit de spuit komt. Een patroon is voor eenmalig gebruik: na gebruik is hij leeg en voer je hem af.' },
      { t: 'p', x: 'Wij bezorgen geen losse patronen. Wij leveren uitsluitend de verzegelde Fastgas Wegwerp Tank in [2KG, 4KG en 10KG](/lachgas-tanks/). Deze pagina legt uit hoe patronen werken, zodat je kunt bepalen of een tank voor jouw keuken slimmer is.' },

      { t: 'h2', x: 'Hoe werkt een patroon in de spuit?' },
      { t: 'p', x: 'Je vult de spuit met koude room, schroeft de kop erop en plaatst het patroon in de houder. Zodra je de houder aandraait, prikt een pin het patroon aan en stroomt het gas in de spuit. Door de spuit te schudden, lost het gas op in het vet van de room. Druk je daarna op de hendel, dan duwt het gas de room naar buiten en ontstaat de luchtige structuur.' },
      { t: 'p', x: 'Elke stap staat uitgelegd bij [hoe werkt een slagroomspuit](/hoe-werkt-een-slagroomspuit/). Over de spuit zelf lees je meer op [slagroomspuiten](/slagroomspuiten/).' },

      { t: 'h2', x: 'Hoeveel patronen heb je nodig?' },
      { t: 'p', x: 'Voor een halve liter room is gewoonlijk één patroon genoeg; voor een liter gebruik je er twee. In een professionele keuken loopt dat snel op, en dan is een tank met een passend systeem handiger.' },
      { t: 'table', head: ['Hoeveelheid room', 'Patronen', 'Opmerking'], rows: [
        ['0,25 liter', '1', 'kleine spuit, thuis'],
        ['0,5 liter', '1', 'standaard halve-liter spuit'],
        ['1 liter', '2', 'grote spuit, horeca'],
        ['5 liter', 'circa 10', 'dagelijks gebruik in een keuken'],
      ] },
      { t: 'p', x: 'Gebruik de tabel als richtgetal. Merk en vetgehalte van de room, de temperatuur en de spuit beïnvloeden het resultaat. Volg altijd de gebruiksaanwijzing van je spuit.' },

      { t: 'h2', x: 'Patronen of tank: wat is slimmer?' },
      { t: 'p', x: 'Patronen zijn handig voor weinig gebruik en losse bereidingen. Heb je veel nodig, dan moet je steeds patronen vervangen, afvoeren en bijkopen. Een tank bevat ineens duizenden grammen en sluit je aan op een geschikt systeem met een originele adapter.' },
      { t: 'table', head: ['Tank', 'Gelijk aan'], rows: [['[Fastgas 2KG](/fastgas-2kg/)', 'circa 250 patronen'], ['[Fastgas 4KG](/fastgas-4kg/)', 'circa 500 patronen'], ['[Fastgas 10KG](/fastgas-10kg/)', 'circa 1250 patronen']] },
      { t: 'p', x: 'Maak je dagelijks meerdere liters room of schuim, dan is een tank voor een horecakeuken vaak praktischer. Zie [lachgas voor horeca](/lachgas-horeca/).' },

      { t: 'h2', x: 'Hoe bewaar je patronen?' },
      { t: 'p', x: 'Bewaar patronen in de originele verpakking, droog en koel, uit de zon en weg van warmtebronnen zoals het fornuis. Leg ze niet in een auto die in de zon staat. Houd ze buiten bereik van kinderen en bewaar ze apart van de spuit, zodat niemand een patroon per ongeluk plaatst.' },

      { t: 'h2', x: 'Voor wie zijn patronen genoeg?' },
      { t: 'p', x: 'Patronen passen bij thuiskoks, kleine cafés en bakkerijen die een paar keer per week een spuit vullen. Zodra je een spuit meerdere keren per dag moet herladen, kost dat tijd en levert het veel afval op. Dan is een [tank](/lachgas-tanks/) met passend systeem beter, en voor een kleinere zaak is de [2KG](/fastgas-2kg/) het logische formaat.' },

      { t: 'h2', x: 'Tips voor betere slagroom uit de spuit' },
      { t: 'ul', x: [
        'Gebruik room met minstens 30% vet, bij minder wordt de structuur minder stevig',
        'Houd room en spuit koud, liefst een uur in de koelkast',
        'Voeg suiker of vanille vooraf toe, zodat alles goed oplost',
        'Schud de spuit na het plaatsen van het patroon even op en neer',
        'Spuit met de tuit naar beneden',
        'Reinig de spuit direct na gebruik',
      ] },

      { t: 'h2', x: 'Veilig omgaan met patronen' },
      { t: 'p', x: 'Een patroon staat onder druk, ook als de verpakking klein is. Verwarm hem niet, beschadig hem niet en laat hem niet achter in de zon. Bewaar patronen droog en koel, buiten bereik van kinderen. Gebruik een patroon alleen in een spuit die daarvoor bedoeld is en schroef de houder pas los als de spuit helemaal leeg is.' },
      { t: 'p', x: 'Lege patronen voer je af bij het metaalafval of volgens de regels van je gemeente. Lees ook [veilig omgaan met lachgas](/veilig-gebruik-lachgas/). Gebruik van lachgas als roesmiddel is niet toegestaan en brengt gezondheidsrisico’s met zich mee; meer daarover staat op [is lachgas verboden](/is-lachgas-verboden/).' },

      { t: 'h2', x: 'Past elk patroon in elke spuit?' },
      { t: 'p', x: 'Nee. Een standaardspuit gebruikt patronen van 8 gram met een vaste schroefdraad, maar de houder en de kop van verschillende merken verschillen. Controleer in de handleiding van je spuit welk patroon erbij hoort en gebruik niets anders. Een patroon dat net niet past, kan lekken of de spuit beschadigen.' },
      { t: 'p', x: 'Let daarnaast op het gas. Een patroon voor slagroom bevat lachgas. Patronen voor bruiswatermakers bevatten koolzuur (CO₂) en zijn niet uitwisselbaar. Gebruik nooit het ene gas in een apparaat dat voor het andere is gemaakt.' },

      { t: 'h2', x: 'Hoe lang blijft slagroom uit de spuit goed?' },
      { t: 'p', x: 'Dat hangt af van de room. Bewaar een gevulde spuit in de koelkast en houd de houdbaarheid van de room aan. Spuit je maar een deel leeg, dan blijft de rest in de spuit op druk staan en kun je hem in de koelkast bewaren. Schud de spuit voor gebruik opnieuw even.' },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Wat zit er in een slagroompatroon?', a: 'Alleen lachgas (N₂O), 8 gram per patroon, in een stalen cilinder. Het gas lost op in de room en zorgt voor druk en luchtigheid.' },
      { q: 'Kan ik elk patroon in elke spuit gebruiken?', a: 'Gebruik alleen patronen van de maat die bij je slagroomspuit past en volg de gebruiksaanwijzing. Een verkeerde combinatie kan lekken of gevaarlijk zijn.' },
      { q: 'Hoeveel patronen per liter room?', a: 'Gewoonlijk één patroon per halve liter room, dus twee per liter. Volg altijd de aanwijzing van je spuit.' },
      { q: 'Verkopen jullie losse slagroompatronen?', a: 'Nee. Wij bezorgen uitsluitend de verzegelde Fastgas Wegwerp Tank in 2KG, 4KG en 10KG. Zie [lachgas tanks](/lachgas-tanks/).' },
      { q: 'Wat doe ik met een leeg patroon?', a: 'Voer het af volgens de regels van je gemeente, bijvoorbeeld bij het metaalafval. Doorboor of verhit een patroon nooit.' },
      { q: 'Waarom komt er geen room uit mijn spuit?', a: 'Controleer of het patroon goed is aangeschroefd, of de ring intact is en of de tuit niet verstopt zit. Een te warme of te magere room kan ook de oorzaak zijn.' },
      { q: 'Is een tank goedkoper per portie dan patronen?', a: 'Bij veel gebruik meestal wel, omdat je minder afval en minder vervangingen hebt. We noemen de prijs van een tank per bericht, zie [lachgas prijs](/lachgas-prijs/).' },
    ],
    related: ['slagroomspuiten', 'hoe-werkt-een-slagroomspuit', 'lachgas-horeca', 'lachgas-tanks', 'wat-is-lachgas', 'veilig-gebruik-lachgas'],
  },
  {
    slug: 'slagroomspuiten', group: 'product', kind: 'service', nav: 'Slagroomspuiten', parent: 'lachgas-tanks',
    title: 'Slagroomspuiten: kiezen en gebruiken',
    desc: 'Slagroomspuit kiezen: aluminium of roestvrij staal, 0,5 of 1 liter, en welke patronen erbij horen. Tips voor horeca en thuis.',
    h1: 'Slagroomspuiten', kicker: 'Keukenmateriaal',
    lead: 'Een slagroomspuit maakt slagroom, mousses en schuimen met lachgas. De juiste keuze hangt af van hoe vaak en hoeveel je spuit.',
    blocks: [
      { t: 'h2', x: 'Wat doet een slagroomspuit?' },
      { t: 'p', x: 'Een slagroomspuit is een afsluitbare fles die je met vloeistof vult en onder druk zet met lachgas uit een patroon. Het gas lost op in de vloeistof. Open je de hendel, dan duwt het gas de massa naar buiten en ontstaat een luchtige structuur. Voor slagroom is dat het bekendste gebruik, maar een spuit kan ook mousses, schuimen en gespoten sauzen maken.' },
      { t: 'p', x: 'Hoe dit stap voor stap gaat, lees je bij [hoe werkt een slagroomspuit](/hoe-werkt-een-slagroomspuit/). Over de gasbron zelf, de [slagroompatronen](/slagroompatronen/), hebben we een eigen pagina.' },

      { t: 'h2', x: 'Waar let je op bij het kiezen?' },
      { t: 'ul', x: [
        '**Materiaal:** roestvrij staal is duurzamer en makkelijker schoon te houden, aluminium is lichter en goedkoper',
        '**Inhoud:** 0,5 liter voor thuis, 1 liter voor horeca; een grotere spuit bespaart handelingen bij veel gebruik',
        '**Onderdelen:** afdichtingsringen, tuiten en kop moeten te vervangen zijn',
        '**Compatibiliteit:** controleer of de spuit geschikt is voor standaardpatronen van 8 gram',
        '**Temperatuur:** sommige spuiten zijn ook geschikt voor warme bereidingen; volg de grenzen van de fabrikant',
      ] },
      { t: 'p', x: 'Koop liever een spuit met losse, vervangbare onderdelen dan een goedkoop model dat je bij een kapotte ring moet weggooien. Zeker in een professionele keuken heb je snel een nieuwe ring of tuit nodig.' },

      { t: 'h2', x: 'Soorten spuiten en toepassingen' },
      { t: 'h3', x: 'De klassieke 0,5-literspuit' },
      { t: 'p', x: 'Handig voor thuis of een kleine zaak. Eén patroon is genoeg voor een vulling. Je kunt er slagroom, een lichte mousse of een eenvoudig schuim mee maken.' },
      { t: 'h3', x: 'De 1-literspuit voor horeca' },
      { t: 'p', x: 'Groter, steviger en vaak van roestvrij staal. Je gebruikt twee patronen per vulling. Daardoor heb je minder wisselingen, wat in een druk keukenritme scheelt.' },
      { t: 'h3', x: 'Spuiten met warme toepassing' },
      { t: 'p', x: 'Sommige modellen zijn gemaakt voor warme schuimen en sauzen. Gebruik ze nooit buiten de aangegeven temperatuur en vul ze nooit voorbij de maximaalstreep.' },

      { t: 'h2', x: 'Recepten: slagroom, mousse en schuim' },
      { t: 'p', x: 'Het principe is steeds hetzelfde: een vloeistof met genoeg vet of een bindmiddel, koud en goed gemengd, in de spuit en onder druk gezet. Wat verschilt is de basis.' },
      { t: 'ul', x: [
        '**Slagroom:** koude room met minstens 30% vet, naar smaak suiker of vanille',
        '**Mousse:** een vetrijke basis zoals room met chocolade of fruitpuree, goed afgekoeld',
        '**Schuim (espuma):** een smaakvolle vloeistof, zoals fruitsap of bouillon, met een bindmiddel zoals gelatine of lecithine, zodat het schuim stevig blijft',
      ] },
      { t: 'p', x: 'Zeef de massa voor je hem in de spuit giet, zodat stukjes de tuit niet verstoppen. Houd de spuit koud, schud hem na het plaatsen van het patroon en spuit met de tuit naar beneden. Meer tips staan op [slagroompatronen](/slagroompatronen/).' },

      { t: 'h2', x: 'Welke vloeistoffen werken wel en niet?' },
      { t: 'p', x: 'Een spuit werkt het best met een gladde, vloeibare massa. Stukjes, vezels en pulp verstoppen de tuit, dus zeef je basis altijd voor je hem in de spuit giet.' },
      { t: 'ul', x: [
        '**Werkt goed:** room met voldoende vet, mousse-bases, fruitpuree met een bindmiddel, sauzen zonder stukjes',
        '**Werkt minder goed:** magere melk of een dunne vloeistof zonder bindmiddel, omdat het schuim snel inzakt',
        '**Niet doen:** koolzuurhoudende dranken in de spuit, of een vloeistof die zo dik is dat de tuit verstopt raakt',
      ] },
      { t: 'p', x: 'Proef en test eerst een kleine hoeveelheid voordat je een grote bereiding maakt. Zo weet je of de basis het schuim goed vasthoudt.' },

      { t: 'h2', x: 'Veelvoorkomende problemen oplossen' },
      { t: 'ul', x: [
        '**Er komt gas, geen room:** de room is te warm, of de spuit staat niet met de tuit naar beneden',
        '**De spuit lekt bij de kop:** de afdichtingsring is versleten of ligt scheef; vervang of herplaats hem',
        '**De room is te los:** te weinig vet of te weinig schudden na het plaatsen van het patroon',
        '**De tuit is verstopt:** zeef de massa voortaan en reinig de tuit apart',
      ] },

      { t: 'h2', x: 'Onderhoud en schoonmaken' },
      { t: 'p', x: 'Spoel de spuit na elk gebruik met warm water en laat hem drogen. Haal de onderdelen uit elkaar zodra de spuit helemaal leeg en drukvrij is. Reinig tuit, kop en afdichtingsring afzonderlijk, want daar blijft room achter.' },
      { t: 'ul', x: [
        'Vervang rubberen ringen zodra ze scheuren of uitrekken; een lekke ring geeft druk- en kwaliteitsverlies',
        'Gebruik een tuitborsteltje voor de opening',
        'Bewaar de spuit zonder patroon, droog en stofvrij',
        'Controleer het schroefdraad op beschadiging',
      ] },
      { t: 'p', x: 'Maak de spuit nooit open zolang hij onder druk staat. Laat hem eerst helemaal leeglopen via de hendel.' },

      { t: 'h2', x: 'Patronen of tank?' },
      { t: 'p', x: 'Voor losse bereidingen gebruik je [slagroompatronen](/slagroompatronen/). Voor veel verbruik in een professionele keuken kan een [tank](/lachgas-tanks/) met passend systeem handiger zijn, in 2KG, 4KG of 10KG. Zie [lachgas voor horeca](/lachgas-horeca/) voor zakelijke bestellingen. Een tank sluit je alleen aan met een originele adapter; gebruik nooit zelfgemaakte koppelingen.' },

      { t: 'h2', x: 'Veiligheid in de keuken' },
      { t: 'p', x: 'Een spuit staat onder druk. Gebruik alleen lachgas in een spuit die daarvoor bedoeld is, geen andere gassen, en nooit meer dan de aangegeven vulling. Ventileer de ruimte, houd spuiten buiten bereik van kinderen en gebruik ze alleen voor eten en drinken. Meer in [veilig omgaan met lachgas](/veilig-gebruik-lachgas/).' },
      { t: 'note', x: NOTE },
    ],
    faq: [
      { q: 'Hoe lang blijft slagroom uit de spuit goed?', a: 'Gekoeld doorgaans enkele dagen, afhankelijk van de room. Volg altijd de houdbaarheid van de gebruikte room en bewaar de spuit in de koelkast.' },
      { q: 'Kan ik schuimen en mousses maken?', a: 'Ja, met de juiste vloeistoffen en een spuit die daarvoor geschikt is. Voor schuimen gebruik je vaak een bindmiddel zoals gelatine, zodat het schuim stevig blijft.' },
      { q: 'Is roestvrij staal beter dan aluminium?', a: 'Roestvrij staal is duurzamer en makkelijker schoon te houden. Aluminium is lichter en goedkoper. Voor professioneel gebruik kiezen de meeste keukens roestvrij staal.' },
      { q: 'Hoeveel patronen heb ik nodig voor mijn spuit?', a: 'Gewoonlijk één patroon voor een spuit van een halve liter en twee voor een liter. Lees de gebruiksaanwijzing van je model.' },
      { q: 'Hoe maak ik mijn spuit schoon?', a: 'Spoel hem na gebruik met warm water, haal de onderdelen uit elkaar zodra hij leeg en drukvrij is, reinig de tuit en kop apart en laat alles drogen.' },
      { q: 'Waarom schiet mijn spuit lucht en geen room?', a: 'Vaak is de room te warm, of is er te weinig vloeistof in de spuit gegoten. Controleer ook of de ring intact is en de tuit niet verstopt zit.' },
      { q: 'Verkopen jullie slagroomspuiten?', a: 'Nee. Wij bezorgen uitsluitend de verzegelde Fastgas Wegwerp Tank in 2KG, 4KG en 10KG. Op deze pagina geven we alleen keukenadvies.' },
    ],
    related: ['slagroompatronen', 'hoe-werkt-een-slagroomspuit', 'lachgas-horeca', 'lachgas-tanks', 'lachgas-evenementen', 'veilig-gebruik-lachgas'],
  },
];
