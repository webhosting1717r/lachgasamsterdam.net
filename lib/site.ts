/* Eén plek voor alle vaste gegevens: domein, nummers, tijden. Wijzig hier, niet in de pagina's. */
const digits = (s: string) => s.replace(/\D/g, '');

export const site = {
  name: 'Lachgas Amsterdam',
  brand: 'Fastgas',
  url: 'https://www.lachgasamsterdam.net',
  host: 'www.lachgasamsterdam.net',
  lastmod: '2026-10-30',
  /** dag/maand/jaar voor de zichtbare "Bijgewerkt"-regel */
  lastmodText: '30 oktober 2026',
  lastmodTextEn: '30 October 2026',
  /* Contact loopt uitsluitend via WhatsApp. */
  whatsapp: '+447441484283',
  whatsappText: '+44 7441 484283',
  eta: '20 tot 30 minuten',
  etaShort: '20-30 min',
  minAge: 18,
};

export const waNumber = digits(site.whatsapp);
export const waHref = (text = 'Hoi, ik wil graag een Fastgas tank bestellen.') =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
export const abs = (path: string) => `${site.url}${path}`;
