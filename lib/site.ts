/* Eén plek voor alle vaste gegevens: domein, tijden. Wijzig hier, niet in de pagina's. */
export const site = {
  name: 'Lachgas Amsterdam',
  brand: 'Fastgas',
  url: 'https://www.lachgasamsterdam.net',
  host: 'www.lachgasamsterdam.net',
  /** datum van de site als geheel (home, overzicht, sitemap-fallback) */
  lastmod: '2026-11-13',
  /** eerste publicatie van de site */
  published: '2026-10-29',
  /** fallback 'bijgewerkt'-datum voor subpagina's zonder eigen `updated` */
  contentDate: '2026-10-30',
  eta: '20 tot 30 minuten',
  etaShort: '20-30 min',
  minAge: 18,
  /* IndexNow-sleutel (Bing, Yandex, Seznam, Naver). Openbaar bestand /<key>.txt; zie scripts/indexnow.mjs. */
  indexNowKey: '8d0318a4f2ca3ac806848fd5b99318fe',
};

export const abs = (path: string) => `${site.url}${path}`;

const MONTHS_NL = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/** '2026-11-09' -> '9 november 2026' (of '9 November 2026') */
export const dateText = (iso: string, en = false) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${(en ? MONTHS_EN : MONTHS_NL)[m - 1]} ${y}`;
};
