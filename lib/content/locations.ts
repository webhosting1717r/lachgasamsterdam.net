import type { Page, Faq } from '../types';
import { site } from '../site';

type Loc = {
  slug: string;
  name: string;
  kind: 'stad' | 'stadsdeel' | 'plaats';
  /** gemeente / regio, voor schema en tekst */
  region: string;
  hoods: string[];
  spots: string[];
  intro: string;
  detail: string;
  access: string;
  time: string;
  near: string[];
  q: Faq;
};

const L: Loc[] = [
  {
    slug: 'lachgas-amsterdam', name: 'Amsterdam', kind: 'stad', region: 'Noord-Holland',
    hoods: ['Centrum', 'Zuid', 'West', 'Oost', 'Noord', 'Zuidoost', 'Nieuw-West', 'Weesp'],
    spots: ['Centraal Station', 'Museumplein', 'NDSM-werf', 'Johan Cruijff ArenA'],
    intro: 'Amsterdam is ons kerngebied. De stad bestaat uit zeven stadsdelen en sinds 2022 hoort ook Weesp bij de gemeente, en we bezorgen in alle acht.',
    detail: 'Van de grachtengordel tot de Bijlmer en van IJburg tot Osdorp: onze koeriers rijden elke dag en nacht door de hele stad, dus een adres in een smalle binnenstadsstraat is voor ons even gewoon als een nieuwbouwwijk aan de rand.',
    access: 'In de binnenstad leggen we de laatste meters vaak te voet af, buiten de ring rijden we tot voor de deur. Geef bij het bestellen je huisnummer, etage en eventuele bel- of toegangscode door, dan hoeft de koerier niet te zoeken.',
    time: 'Gemiddeld 20 tot 30 minuten, 24 uur per dag. In de spits en bij evenementen kan het een paar minuten meer zijn; de verwachte aankomsttijd bevestigen we bij je bestelling.',
    near: ['lachgas-amsterdam-centrum', 'lachgas-amsterdam-zuid', 'lachgas-amsterdam-west', 'lachgas-amsterdam-oost'],
    q: { q: 'Bezorgen jullie in heel Amsterdam?', a: 'Ja. Alle stadsdelen (Centrum, Zuid, West, Oost, Noord, Zuidoost en Nieuw-West) en Weesp vallen binnen ons bezorggebied. Op de pagina van het stadsdeel zie je welke wijken we kennen.' },
  },
  {
    slug: 'lachgas-amsterdam-centrum', name: 'Amsterdam Centrum', kind: 'stadsdeel', region: 'Amsterdam',
    hoods: ['Grachtengordel', 'Jordaan', 'Nieuwmarkt', 'Plantage', 'Rembrandtplein', 'Leidseplein'],
    spots: ['Centraal Station', 'de Dam', 'Waterlooplein'],
    intro: 'Het Centrum is het drukste en best bereikbare deel van de stad, maar ook het deel waar bezorgen het meeste kennis van de route vraagt.',
    detail: 'Rond de grachten zijn veel straten smal, eenrichting of autoluw, en bij horeca langs het Leidseplein en Rembrandtplein staat het in het weekend vol. Onze koeriers kennen de laad- en loszones en gebruiken waar het sneller is een bakfiets of lopen.',
    access: 'Grachtenpanden hebben vaak steile trappen en een bel zonder naamplaatje. Noteer daarom de bel of toegangscode en het verdiepingsnummer, dan staat de koerier meteen bij de juiste deur.',
    time: 'Vaak 20 tot 25 minuten; in het Centrum zijn de afstanden kort, de wachttijd zit meestal in verkeer en drukte op straat.',
    near: ['lachgas-amsterdam-oost', 'lachgas-amsterdam-west', 'lachgas-amsterdam-noord', 'lachgas-amsterdam-zuid'],
    q: { q: 'Kan een bezorging aan een gracht of bij een pand zonder parkeerplek?', a: 'Ja. De koerier levert aan de voordeur en parkeert in een laad- en loszone of komt lopend of met de fiets. Geef een bijzonderheid van je adres door, zoals een gedeelde toegangsdeur.' },
  },
  {
    slug: 'lachgas-amsterdam-zuid', name: 'Amsterdam Zuid', kind: 'stadsdeel', region: 'Amsterdam',
    hoods: ['Oud-Zuid', 'De Pijp', 'Rivierenbuurt', 'Zuidas', 'Buitenveldert', 'Apollobuurt'],
    spots: ['Museumplein', 'Vondelpark', 'RAI'],
    intro: 'Amsterdam Zuid loopt van de Pijp en het Museumkwartier tot de kantoren van de Zuidas en de rustige woonwijken van Buitenveldert.',
    detail: 'Veel bestellingen komen hier uit horeca rond de Albert Cuypmarkt en uit appartementen langs de Amstel. Omdat Zuid direct aan de ring A10 ligt, zijn de routes naar Buitenveldert en de Zuidas snel.',
    access: 'Rond Museumplein en Vondelpark zijn straten in het weekend afgesloten of druk; wij kiezen dan de achterzijde van het blok. Op de Zuidas bezorgen we aan kantoren alleen aan de receptie of een afgesproken punt.',
    time: 'Doorgaans 20 tot 30 minuten, in de Pijp en Oud-Zuid vaak aan de korte kant.',
    near: ['lachgas-amsterdam-centrum', 'lachgas-amstelveen', 'lachgas-amsterdam-west', 'lachgas-amsterdam-nieuw-west'],
    q: { q: 'Bezorgen jullie ook op de Zuidas of bij een kantoor?', a: 'Ja, voor zakelijke bestellingen. We leveren aan een afgesproken punt of de receptie; stuur de bedrijfsnaam en een contactpersoon mee via WhatsApp.' },
  },
  {
    slug: 'lachgas-amsterdam-west', name: 'Amsterdam West', kind: 'stadsdeel', region: 'Amsterdam',
    hoods: ['Oud-West', 'De Baarsjes', 'Bos en Lommer', 'Westerpark', 'Helmersbuurt', 'Houthavens'],
    spots: ['Foodhallen', 'Westergasfabriek', 'Mercatorplein'],
    intro: 'In Amsterdam West wonen en werken veel jonge ondernemers, restaurants en cateraars, vooral in Oud-West en rond het Westerpark.',
    detail: 'De wijken zijn dicht bebouwd met veel portieken en etagewoningen. We zijn er vertrouwd met de ligging van de Kinkerstraat, de Jan Evertsenstraat en de Admiraal de Ruyterweg, en met de nachtelijke werkpieken rond de Foodhallen.',
    access: 'In Oud-West en de Baarsjes zijn parkeerplekken schaars; daarom stappen onze koeriers snel uit en komen naar je toe. Bij gedeelde portieken is een bel- of toegangscode handig.',
    time: 'Meestal 20 tot 30 minuten, in de nacht vaak sneller doordat de straten leger zijn.',
    near: ['lachgas-amsterdam-centrum', 'lachgas-amsterdam-nieuw-west', 'lachgas-amsterdam-noord', 'lachgas-zaandam'],
    q: { q: 'Bezorgen jullie ook bij horeca in Oud-West en Bos en Lommer?', a: 'Ja. Horeca en catering kunnen dag en nacht bestellen. Zie ook onze pagina [lachgas voor horeca](/lachgas-horeca/).' },
  },
  {
    slug: 'lachgas-amsterdam-oost', name: 'Amsterdam Oost', kind: 'stadsdeel', region: 'Amsterdam',
    hoods: ['Indische Buurt', 'Dapperbuurt', 'Oosterparkbuurt', 'Watergraafsmeer', 'IJburg', 'Zeeburgereiland'],
    spots: ['Oosterpark', 'Science Park', 'Flevopark'],
    intro: 'Oost combineert oude stadswijken rond het Oosterpark met nieuwbouw op de eilanden van IJburg.',
    detail: 'De afstand tussen de Dapperbuurt en IJburg is groter dan hij op de kaart lijkt, omdat je over bruggen en de Zuiderzeeweg moet. Onze koeriers houden daar rekening mee, dus we geven bij IJburg altijd een eerlijke aankomsttijd.',
    access: 'IJburg bereik je via de IJburglaan en de Piet Heintunnel; op drukke momenten kan dat een paar minuten extra kosten. Bij nieuwbouw met een ondergrondse garage is een adres zonder doorlopende straat lastig: noteer de juiste ingang.',
    time: '20 tot 30 minuten in Oost-binnen; richting IJburg en Watergraafsmeer reken je op iets langer.',
    near: ['lachgas-amsterdam-centrum', 'lachgas-diemen', 'lachgas-amsterdam-zuidoost', 'lachgas-amsterdam-noord'],
    q: { q: 'Duurt bezorgen op IJburg langer?', a: 'Vaak iets langer dan in de oude wijken, door de ligging op eilanden. We geven bij je bestelling de actuele verwachte aankomsttijd door.' },
  },
  {
    slug: 'lachgas-amsterdam-noord', name: 'Amsterdam Noord', kind: 'stadsdeel', region: 'Amsterdam',
    hoods: ['NDSM-werf', 'Buiksloterham', 'Overhoeks', 'Nieuwendam', 'Tuindorp Oostzaan', 'Banne Buiksloot'],
    spots: ['EYE Filmmuseum', 'A’DAM Toren', 'NDSM'],
    intro: 'Amsterdam Noord ligt aan de overkant van het IJ en is de laatste jaren uitgegroeid tot een creatief en horeca-rijk stadsdeel.',
    detail: 'Rond NDSM en Overhoeks zitten evenementenlocaties, ateliers en restaurants die op onregelmatige tijden bestellen. Onze koeriers rijden via de IJtunnel of nemen de pont als dat sneller is voor de laatste kilometer.',
    access: 'Op NDSM-werf zijn terreinen groot en slecht aangegeven; geef het hal- of containernummer door of spreek een ontmoetingspunt af. In Tuindorp Oostzaan en Nieuwendam leveren we gewoon aan de straatkant.',
    time: 'Doorgaans 25 tot 35 minuten, afhankelijk van de IJtunnel en de ligging in Noord.',
    near: ['lachgas-amsterdam-centrum', 'lachgas-landsmeer', 'lachgas-purmerend', 'lachgas-zaandam'],
    q: { q: 'Kunnen jullie op de NDSM-werf bezorgen als er een evenement is?', a: 'Ja, als je het exacte punt op het terrein doorgeeft. Voor evenementen lees je meer op [lachgas voor evenementen](/lachgas-evenementen/).' },
  },
  {
    slug: 'lachgas-amsterdam-zuidoost', name: 'Amsterdam Zuidoost', kind: 'stadsdeel', region: 'Amsterdam',
    hoods: ['Bijlmer', 'Ganzenhoef', 'Gaasperdam', 'Holendrecht', 'Reigersbos', 'Amsterdamse Poort'],
    spots: ['Johan Cruijff ArenA', 'Ziggo Dome', 'AFAS Live', 'Amsterdam UMC'],
    intro: 'Zuidoost is een ruim opgezet stadsdeel met hoogbouw, groen en het grootste evenementengebied van de stad.',
    detail: 'Rond de ArenA, Ziggo Dome en AFAS Live is het op eventavonden druk, maar de A2, A9 en de metrolijnen maken de rest van Zuidoost snel bereikbaar. Omdat de Bijlmer uit grote flats met doorlopende galerijen bestaat, vragen we altijd naar blok en galerij.',
    access: 'Noteer bij flats het flatnummer, de galerij en de deurcode. Bij evenementen in de ArenA-zone zijn straten tijdelijk afgesloten; dan spreken we een punt net buiten de afzetting af.',
    time: 'Meestal 20 tot 30 minuten; bij grote evenementen kan het langer duren.',
    near: ['lachgas-amsterdam-oost', 'lachgas-diemen', 'lachgas-abcoude', 'lachgas-amstelveen'],
    q: { q: 'Bezorgen jullie in de flats van de Bijlmer?', a: 'Ja. Geef flatnummer, galerij en eventuele toegangscode door, dan weet de koerier precies waar hij naartoe moet.' },
  },
  {
    slug: 'lachgas-amsterdam-nieuw-west', name: 'Amsterdam Nieuw-West', kind: 'stadsdeel', region: 'Amsterdam',
    hoods: ['Slotervaart', 'Osdorp', 'Geuzenveld', 'Slotermeer', 'Sloten', 'Nieuw Sloten'],
    spots: ['Sloterplas', 'station Lelylaan', 'Eendrachtspark'],
    intro: 'Nieuw-West is het westelijke woongebied van de stad, met ruime wijken rond de Sloterplas en winkelcentra in Osdorp en Slotermeer.',
    detail: 'De brede lanen, zoals de Cornelis Lelylaan en de Burgemeester Röellstraat, maken doorrijden makkelijk. Vanuit Nieuw-West bereiken we via de A10 snel Badhoevedorp, Zwanenburg en Hoofddorp.',
    access: 'Veel woonblokken hebben een afgesloten binnenhof; noteer in welke straat de ingang zit. Rond de Sloterplas leveren we aan de straatkant of bij de afgesproken zijde van het park.',
    time: 'Gemiddeld 20 tot 30 minuten.',
    near: ['lachgas-amsterdam-west', 'lachgas-amsterdam-zuid', 'lachgas-badhoevedorp', 'lachgas-hoofddorp'],
    q: { q: 'Bezorgen jullie ook in Osdorp en Slotervaart?', a: 'Ja, in alle wijken van Nieuw-West. Geef bij bestellen je straat en huisnummer door, wij bevestigen de verwachte aankomsttijd.' },
  },
  {
    slug: 'lachgas-abcoude', name: 'Abcoude', kind: 'plaats', region: 'De Ronde Venen',
    hoods: ['dorpskern', 'Baambrugge', 'Abcoude-Station'],
    spots: ['station Abcoude', 'de Angstel', 'het Gein'],
    intro: 'Abcoude ligt in de provincie Utrecht, direct ten zuiden van Amsterdam Zuidoost, aan de Angstel en het Gein.',
    detail: 'Het dorp is vanuit Amsterdam snel bereikbaar via de A2 en de provinciale weg langs de Angstel. Veel adressen liggen aan smalle dijkwegen en polderwegen waar een nummer lastig te vinden is.',
    access: 'Op de dijkwegen rond Abcoude en Baambrugge is het huisnummer soms slecht zichtbaar. Stuur daarom naast het adres een korte aanwijzing mee, zoals een opvallende oprit.',
    time: 'Doorgaans 25 tot 40 minuten vanaf onze standplaats in Amsterdam; de actuele tijd geven we bij het bestellen door.',
    near: ['lachgas-amsterdam-zuidoost', 'lachgas-weesp', 'lachgas-diemen', 'lachgas-amstelveen'],
    q: { q: 'Bezorgen jullie ook in Baambrugge?', a: 'Ja, Baambrugge valt binnen het gebied rond Abcoude. Geef een duidelijke aanwijzing voor het adres door, dan vinden we het snel.' },
  },
  {
    slug: 'lachgas-almere', name: 'Almere', kind: 'plaats', region: 'Flevoland',
    hoods: ['Almere Stad', 'Almere Haven', 'Almere Buiten', 'Almere Poort', 'Almere Hout'],
    spots: ['station Almere Centrum', 'het Weerwater', 'de Hollandse Brug'],
    intro: 'Almere is de grootste stad van Flevoland en bestaat uit meerdere kernen, die allemaal een eigen bereikbaarheid hebben.',
    detail: 'Via de A6 en de Hollandse Brug is Almere vanuit Amsterdam in een kwartier tot half uur te bereiken, afhankelijk van het verkeer. Omdat de kernen ver uit elkaar liggen, vragen we altijd in welk deel van Almere je zit.',
    access: 'Noteer de wijk (bijvoorbeeld Almere Buiten of Almere Haven) en de straatnaam; veel straatnamen komen in meerdere kernen terug.',
    time: 'Vaak 30 tot 45 minuten. De exacte tijd hangt af van de A6 en je kern, en die geven we direct door.',
    near: ['lachgas-weesp', 'lachgas-amsterdam-oost', 'lachgas-amsterdam-zuidoost', 'lachgas-diemen'],
    q: { q: 'Is bezorgen in Almere duurder of langzamer?', a: 'Het duurt meestal iets langer dan in Amsterdam door de afstand. Over de totaalprijs en tijd laten we je vooraf per bericht weten wat het wordt.' },
  },
  {
    slug: 'lachgas-amstelveen', name: 'Amstelveen', kind: 'plaats', region: 'Amstelveen',
    hoods: ['Stadshart', 'Westwijk', 'Randwyck', 'Bovenkerk', 'Elsrijk', 'Waardhuizen'],
    spots: ['Stadshart Amstelveen', 'Amsterdamse Bos', 'Cobra Museum'],
    intro: 'Amstelveen grenst direct aan Amsterdam Zuid en voelt voor onze koeriers als een verlengstuk van de stad.',
    detail: 'Via de A9, de Beneluxbaan en de Amstelveenseweg zijn de meeste wijken snel te bereiken. Veel bestellingen komen van gezinnen, bedrijven rond Randwyck en horeca in het Stadshart.',
    access: 'In het Stadshart leveren we aan de straatzijde of bij de afgesproken ingang. In Bovenkerk en Westwijk gaat het vooral om woningen, waar de straatnaam en het nummer genoeg zijn.',
    time: 'Meestal 20 tot 30 minuten.',
    near: ['lachgas-amsterdam-zuid', 'lachgas-badhoevedorp', 'lachgas-hoofddorp', 'lachgas-amsterdam-zuidoost'],
    q: { q: 'Bezorgen jullie ook bij bedrijven in Amstelveen?', a: 'Ja. Voor zakelijke adressen bezorgen we aan de receptie of een afgesproken punt; vermeld de bedrijfsnaam bij je bestelling.' },
  },
  {
    slug: 'lachgas-badhoevedorp', name: 'Badhoevedorp', kind: 'plaats', region: 'Haarlemmermeer',
    hoods: ['dorpskern', 'Lijnden'],
    spots: ['het Schiphol-gebied', 'de A4', 'de A9'],
    intro: 'Badhoevedorp ligt tussen Amsterdam Nieuw-West en Schiphol, in de gemeente Haarlemmermeer.',
    detail: 'Het dorp ligt dicht bij de A4 en A9, waardoor onze koeriers het vanuit Amsterdam in korte tijd bereiken. Veel bestellingen komen van horeca, hotels en bedrijven rond Schiphol.',
    access: 'Rond Schiphol zijn veel adressen in bedrijfsparken met meerdere ingangen. Geef daarom bij bedrijfsadressen het gebouw en de ingang door.',
    time: 'Vaak 20 tot 30 minuten.',
    near: ['lachgas-amsterdam-nieuw-west', 'lachgas-hoofddorp', 'lachgas-zwanenburg', 'lachgas-amstelveen'],
    q: { q: 'Bezorgen jullie ook in bedrijfsparken bij Schiphol?', a: 'Ja, als je gebouw, ingang en een contactpersoon doorgeeft. Aan het terrein van de luchthaven zelf leveren we niet.' },
  },
  {
    slug: 'lachgas-diemen', name: 'Diemen', kind: 'plaats', region: 'Diemen',
    hoods: ['Diemen-Noord', 'Diemen-Zuid', 'Nieuw-Diemen', 'Bergwijkpark', 'Sniep'],
    spots: ['station Diemen', 'de Weespertrekvaart', 'de A1'],
    intro: 'Diemen is een kleine gemeente tussen Amsterdam Oost en Zuidoost en ligt direct aan de A1 en A9.',
    detail: 'Voor onze koeriers is Diemen vooral een kwestie van minuten: de grens met Amsterdam is nauwelijks voelbaar. Veel adressen liggen in rustige woonwijken met een duidelijke straat- en nummerindeling.',
    access: 'Je kunt zonder omwegen rijden: de meeste adressen zijn aan de voordeur te bezorgen. Bij appartementencomplexen rond het station vragen we een toegangscode.',
    time: 'Vaak 20 tot 25 minuten.',
    near: ['lachgas-amsterdam-oost', 'lachgas-amsterdam-zuidoost', 'lachgas-weesp', 'lachgas-abcoude'],
    q: { q: 'Is bezorgen in Diemen net zo snel als in Amsterdam?', a: 'Ja, Diemen ligt zo dicht bij de stad dat de levertijd vergelijkbaar is: meestal 20 tot 25 minuten.' },
  },
  {
    slug: 'lachgas-haarlem', name: 'Haarlem', kind: 'plaats', region: 'Noord-Holland',
    hoods: ['Haarlem Centrum', 'Schalkwijk', 'Haarlem-Noord', 'Ter Kleefkwartier', 'Parkwijk', 'Delftwijk'],
    spots: ['Grote Markt', 'het Spaarne', 'station Haarlem'],
    intro: 'Haarlem ligt ruim twintig kilometer ten westen van Amsterdam, aan het Spaarne en vlak bij de duinen.',
    detail: 'Via de A200 en de N205 zijn de wijken goed bereikbaar. Het centrum rond de Grote Markt is voetgangersgebied, dus de laatste meters leggen we daar lopend af; in Schalkwijk en Haarlem-Noord rijden we tot de deur.',
    access: 'Rondom de Grote Markt gelden venstertijden voor autoverkeer. Wij plannen daarop en spreken zo nodig een punt aan de rand van het voetgangersgebied af.',
    time: 'Doorgaans 25 tot 35 minuten, afhankelijk van het verkeer op de A200 en de N200.',
    near: ['lachgas-zwanenburg', 'lachgas-badhoevedorp', 'lachgas-hoofddorp', 'lachgas-amsterdam-west'],
    q: { q: 'Bezorgen jullie ook in Heemstede en Bloemendaal?', a: 'Adressen rond Haarlem, zoals Heemstede en Bloemendaal, kunnen we meestal meenemen. Vraag het even na via WhatsApp met je adres.' },
  },
  {
    slug: 'lachgas-hoofddorp', name: 'Hoofddorp', kind: 'plaats', region: 'Haarlemmermeer',
    hoods: ['Floriande', 'Toolenburg', 'Overbos', 'Graan voor Visch', 'Hoofddorp Centrum'],
    spots: ['station Hoofddorp', 'Haarlemmermeerse Bos', 'Schiphol-Rijk'],
    intro: 'Hoofddorp is de hoofdplaats van de gemeente Haarlemmermeer en ligt tegen Schiphol aan.',
    detail: 'De stad is ruim opgezet, met grote wijken als Floriande en Toolenburg. Via de A4, de A5 en de N201 bereiken we alle delen snel; rond het station zitten horeca en kantoren.',
    access: 'Veel straten zijn nieuwbouw met meerdere dezelfde straatnamen; noteer de wijk bij je adres. Bij hotels en bedrijven rond Schiphol-Rijk geef je gebouw en ingang door.',
    time: 'Meestal 25 tot 35 minuten.',
    near: ['lachgas-badhoevedorp', 'lachgas-zwanenburg', 'lachgas-haarlem', 'lachgas-amstelveen'],
    q: { q: 'Bezorgen jullie ook bij hotels in Hoofddorp?', a: 'Ja, bij hotels en horeca. We bezorgen aan de afgesproken ingang of keukendeur; geef een contactpersoon door.' },
  },
  {
    slug: 'lachgas-krommenie', name: 'Krommenie', kind: 'plaats', region: 'Zaanstad',
    hoods: ['Krommenie-Noord', 'Krommenie-Zuid', 'Nauerna', 'Assendelft'],
    spots: ['station Krommenie-Assendelft', 'de Krommenieer Woudpolder', 'de N203'],
    intro: 'Krommenie is een dorp in de noordelijke Zaanstreek, gemeente Zaanstad, en grenst aan Assendelft en Wormerveer.',
    detail: 'Vanuit Amsterdam rijden we via de A8 en de N203 naar Krommenie. In het dorp zelf zijn de afstanden kort, en veel adressen liggen aan een doorlopende hoofdstraat of in rustige woonbuurten.',
    access: 'Rond de hoofdstraat is het stil in de nacht, waardoor bezorgen snel gaat. Geef bij een achterom-adres een duidelijke aanwijzing mee.',
    time: 'Gemiddeld 30 tot 40 minuten.',
    near: ['lachgas-wormerveer', 'lachgas-zaandam', 'lachgas-purmerend', 'lachgas-landsmeer'],
    q: { q: 'Bezorgen jullie ook in Assendelft?', a: 'Ja, Assendelft ligt tegen Krommenie aan en valt binnen hetzelfde gebied.' },
  },
  {
    slug: 'lachgas-landsmeer', name: 'Landsmeer', kind: 'plaats', region: 'Waterland',
    hoods: ['Landsmeer-dorp', 'Den Ilp', 'Purmerweg', 'Gouw'],
    spots: ['Landsmeer-dorp', 'Den Ilp', 'het Waterlandse polderlandschap'],
    intro: 'Landsmeer ligt in Waterland, tussen Amsterdam Noord en Purmerend.',
    detail: 'Het landschap is open en polderachtig, met lintbebouwing langs dijken. We vinden adressen hier het snelst als we de straatnaam, het nummer en een korte omschrijving van de oprit hebben.',
    access: 'Op polderwegen heeft een adres vaak geen opvallende naamplaat. Stuur een locatiepin via WhatsApp mee als je op een afgelegen adres woont.',
    time: 'Vaak 30 tot 40 minuten vanaf Amsterdam.',
    near: ['lachgas-amsterdam-noord', 'lachgas-purmerend', 'lachgas-zaandam', 'lachgas-volendam'],
    q: { q: 'Kan ik een locatiepin sturen?', a: 'Ja, een WhatsApp-locatie is de snelste manier om een afgelegen adres exact door te geven.' },
  },
  {
    slug: 'lachgas-purmerend', name: 'Purmerend', kind: 'plaats', region: 'Waterland',
    hoods: ['Weidevenne', 'Overwhere', 'Wheermolen', 'Gors', 'Purmer-Noord', 'Purmerend-Centrum'],
    spots: ['station Purmerend', 'de Koemarkt', 'de N244'],
    intro: 'Purmerend is de grootste plaats van Waterland en een belangrijke woonstad ten noorden van Amsterdam.',
    detail: 'Via de N244 en de A7 is Purmerend goed bereikbaar. De wijken zijn overzichtelijk, maar Weidevenne en Purmer-Noord liggen aan de randen van de stad, wat voor de tijd net iets uitmaakt.',
    access: 'In de nieuwbouwwijken zijn straten genoemd naar thema; het huisnummer volstaat meestal. In het centrum rond de Koemarkt leveren we vlak bij de afgesproken ingang.',
    time: 'Doorgaans 30 tot 40 minuten.',
    near: ['lachgas-landsmeer', 'lachgas-volendam', 'lachgas-zaandam', 'lachgas-amsterdam-noord'],
    q: { q: 'Bezorgen jullie ook in Weidevenne?', a: 'Ja, alle wijken van Purmerend. Geef bij het bestellen de wijk en het huisnummer door.' },
  },
  {
    slug: 'lachgas-volendam', name: 'Volendam', kind: 'plaats', region: 'Edam-Volendam',
    hoods: ['Haven', 'Dijk', 'Zeestraat', 'Edam'],
    spots: ['de Haven', 'de Zeedijk', 'de N247'],
    intro: 'Volendam is een toeristische vissersplaats aan het IJsselmeer en een drukke horecabestemming.',
    detail: 'Rond de haven en de Zeestraat is het in het seizoen druk met bezoekers, waardoor horeca veel en onregelmatig bestelt. Via de N247 rijden we in een kleine drie kwartier vanuit Amsterdam.',
    access: 'De haven en de Zeestraat zijn smal en voetgangersgebied; spreek bij horeca een achteringang af. Op de Dijk is parkeren moeilijk, dus we lopen het laatste stuk.',
    time: 'Vaak 35 tot 45 minuten.',
    near: ['lachgas-purmerend', 'lachgas-landsmeer', 'lachgas-amsterdam-noord', 'lachgas-zaandam'],
    q: { q: 'Bezorgen jullie ook in Edam en Marken?', a: 'Edam wel, Marken gaat over de dijk en vraagt iets meer tijd. Stuur ons je adres en we bevestigen het.' },
  },
  {
    slug: 'lachgas-weesp', name: 'Weesp', kind: 'plaats', region: 'Amsterdam',
    hoods: ['Vestingstad', 'Hogeweyselaan', 'Leeuwenveld', 'Aetsveld'],
    spots: ['station Weesp', 'de Vecht', 'het Stadhuisplein'],
    intro: 'Weesp is een historische vestingstad aan de Vecht en is sinds 2022 onderdeel van de gemeente Amsterdam.',
    detail: 'Het compacte stadscentrum heeft veel smalle straten en grachtjes, maar vanuit Amsterdam Zuidoost zijn we er via de A1 en A9 in een kwartier. Onze koeriers kennen zowel de oude vesting als de woonwijken Leeuwenveld en Aetsveld.',
    access: 'In de vesting parkeren we aan de rand en lopen we naar de deur. Bij woningen aan de Vecht is het handig het huisnummer duidelijk te noemen.',
    time: 'Meestal 25 tot 35 minuten.',
    near: ['lachgas-diemen', 'lachgas-abcoude', 'lachgas-amsterdam-zuidoost', 'lachgas-almere'],
    q: { q: 'Is Weesp nu Amsterdam?', a: 'Ja, sinds 24 maart 2022 is Weesp onderdeel van de gemeente Amsterdam. Voor ons ligt het in hetzelfde bezorggebied.' },
  },
  {
    slug: 'lachgas-wormerveer', name: 'Wormerveer', kind: 'plaats', region: 'Zaanstad',
    hoods: ['Wormerveer-Centrum', 'Wormer', 'Zaandijk', 'Westknollendam'],
    spots: ['station Wormerveer', 'de Zaan', 'de Zaanse Schans'],
    intro: 'Wormerveer ligt aan de Zaan in de noordelijke Zaanstreek, in de buurt van de Zaanse Schans.',
    detail: 'De Zaanstreek is een lange rij dorpen langs het water. We rijden via de A8 en de N203 en kiezen bij drukte de route langs de Zaan.',
    access: 'Veel panden langs de Zaan hebben een smalle straat ervoor; we parkeren in de zijstraat en komen lopend. Noteer bij horeca de achteringang.',
    time: 'Gemiddeld 30 tot 40 minuten.',
    near: ['lachgas-krommenie', 'lachgas-zaandam', 'lachgas-landsmeer', 'lachgas-purmerend'],
    q: { q: 'Bezorgen jullie ook in Zaandijk bij de Zaanse Schans?', a: 'Ja, Zaandijk valt binnen ons gebied. Bij de Zaanse Schans zelf spreken we een punt buiten het bezoekerscentrum af.' },
  },
  {
    slug: 'lachgas-zaandam', name: 'Zaandam', kind: 'plaats', region: 'Zaanstad',
    hoods: ['Inverdan', 'Zaandam-Zuid', 'Kogerveld', 'Poelenburg', 'Zaandam-Noord', 'Westzaan'],
    spots: ['station Zaandam', 'Inverdan', 'de Zaan'],
    intro: 'Zaandam is de hoofdplaats van Zaanstad en ligt aan de Zaan, direct ten noorden van Amsterdam Noord.',
    detail: 'Via de A8 is Zaandam goed bereikbaar; rond Inverdan en het station zitten horeca, winkels en kantoren. Vanuit Amsterdam West ligt Zaandam dichterbij dan veel mensen denken.',
    access: 'In Inverdan zijn veel straten autoluw en zijn de pleinen markt- of evenementenruimte. Geef een duidelijke ontmoetingsplek door als je op een plein zit.',
    time: 'Doorgaans 25 tot 35 minuten.',
    near: ['lachgas-amsterdam-noord', 'lachgas-wormerveer', 'lachgas-krommenie', 'lachgas-zwanenburg'],
    q: { q: 'Is Zaandam snel te bereiken vanuit Amsterdam?', a: 'Ja, via de A8 rijden we in een kwartier tot half uur naar Zaandam, afhankelijk van de drukte.' },
  },
  {
    slug: 'lachgas-zwanenburg', name: 'Zwanenburg', kind: 'plaats', region: 'Haarlemmermeer',
    hoods: ['dorpskern', 'Halfweg'],
    spots: ['Halfweg', 'de A5', 'Schiphol-Noord'],
    intro: 'Zwanenburg ligt in Haarlemmermeer, tussen Halfweg en Badhoevedorp, vlak bij de A5 en A9.',
    detail: 'Het dorp heeft een rustig karakter en veel adressen liggen aan doorgaande straten. Vanuit Amsterdam West en Nieuw-West ben je er snel via de Amsterdamse ring.',
    access: 'Vanwege het kleine dorpsstraatpatroon is een huisnummer genoeg; bij bedrijfsterreinen vragen we naar het hekje of de ingang.',
    time: 'Meestal 25 tot 35 minuten.',
    near: ['lachgas-badhoevedorp', 'lachgas-haarlem', 'lachgas-zaandam', 'lachgas-amsterdam-west'],
    q: { q: 'Bezorgen jullie ook in Halfweg?', a: 'Ja, Halfweg ligt direct naast Zwanenburg en valt binnen hetzelfde gebied.' },
  },
];

const byslug = new Map(L.map((l) => [l.slug, l]));
const range = (t: string) => (t.match(/d+ tot d+ minuten/) || ['20 tot 30 minuten'])[0];

function make(l: Loc): Page {
  const where = `in ${l.name}`;
  const nearPages = l.near.map((s) => byslug.get(s)!).filter(Boolean);
  const hoodTxt = l.hoods.join(', ');
  const spotTxt = l.spots.join(', ');
  const faq: Faq[] = [
    {
      q: `Hoe snel bezorgen jullie ${where}?`,
      a: `${l.time} Je betaalt bij aflevering met PIN of contant.`,
    },
    l.q,
    {
      q: `Welke Fastgas tanks kan ik ${where} bestellen?`,
      a: `De Fastgas Wegwerp Tank in 2KG, 4KG en 10KG, verzegeld en klaar voor gebruik. Zie [alle lachgas tanks](/lachgas-tanks/).`,
    },
    {
      q: `Is er een minimumleeftijd ${where}?`,
      a: `Ja, we leveren uitsluitend aan klanten van ${site.minAge} jaar en ouder en uitsluitend voor toegestaan gebruik. De koerier kan bij aflevering om legitimatie vragen. Lees meer op [is lachgas verboden](/is-lachgas-verboden/).`,
    },
  ];

  return {
    slug: l.slug,
    group: 'location',
    kind: 'location',
    place: l.name,
    nav: l.name,
    parent: 'bezorggebied',
    title: `Lachgas ${l.name} bezorgen`,
    desc: `Lachgas bezorgen ${where}: Fastgas Wegwerp Tank in 2KG, 4KG of 10KG. 24/7 bereikbaar, doorgaans ${range(l.time)}. PIN of contant.`.slice(0, 158),
    h1: `Lachgas ${l.name}`,
    kicker: l.kind === 'plaats' ? `Bezorggebied ${l.region}` : l.kind === 'stad' ? 'Heel Amsterdam' : 'Stadsdeel van Amsterdam',
    lead: `${l.intro} Wij bezorgen de Fastgas Wegwerp Tank ${where}, dag en nacht.`,
    blocks: [
      { t: 'h2', x: `Bezorgen ${where}` },
      { t: 'p', x: l.detail },
      { t: 'p', x: l.access },
      { t: 'h2', x: `Wijken en plekken ${where}` },
      { t: 'p', x: `Dit zijn de wijken en punten die we ${where} het vaakst bezoeken: ${hoodTxt}. Bekende plekken zijn ${spotTxt}. Staat jouw buurt er niet bij, stuur gerust je adres, dan zeggen we direct of we er kunnen komen.` },
      { t: 'h2', x: 'Zo bestel je' },
      {
        t: 'steps',
        x: [
          ['Stuur een WhatsApp of bel', `Geef je adres ${where}, je gewenste formaat (2KG, 4KG of 10KG) en wat voor gebruik het is.`],
          ['Wij bevestigen prijs en tijd', `Verwachte aankomst: ${range(l.time)}. We noemen vooraf de prijs; er zijn geen verrassingen achteraf.`],
          ['Betaal bij aflevering', 'Betalen kan met PIN of contant. Een account of vooruitbetaling is niet nodig.'],
        ],
      },
      { t: 'note', x: `Levering uitsluitend aan ${site.minAge}+ en uitsluitend voor toegestane toepassingen, zoals keuken, horeca en technisch gebruik. Bij twijfel over het beoogde gebruik leveren we niet.` },
      { t: 'h2', x: `Ook in de buurt van ${l.name}` },
      {
        t: 'cards',
        x: nearPages.map((n) => ({ h: `Lachgas ${n.name}`, p: n.intro.split('. ')[0] + '.', href: `/${n.slug}/` })),
      },
    ],
    faq,
    related: ['lachgas-tanks', 'bestellen', 'bezorggebied', 'lachgas-24-7'],
  };
}

export const locations: Page[] = L.map(make);
export const locationData = L;
