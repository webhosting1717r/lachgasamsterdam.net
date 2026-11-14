// Controle van de gebouwde site (out/): `npm run build && npm run seo`.
// Controleert per pagina titel, description, koppen, woorden, canonical, robots, hreflang, interne links, dubbele ids,
// JSON-LD en formuleringen die we bewust niet willen gebruiken. Daarnaast: nergens een telefoonnummer of bel-/WhatsApp-link
// (HTML, JSON-LD, llms.txt, sitemap, manifest), robots.txt, de deel-afbeelding en de 404-pagina. Exitcode 1 bij fouten.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const out = join(process.cwd(), 'out');
const ORIGIN = 'https://www.lachgasamsterdam.net';
const MIN_WORDS = Number(process.env.MIN_WORDS || 600);

const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(out).filter((f) => f.endsWith('index.html') || f.endsWith('.html'));
const pages = files
  .map((f) => ({ f, rel: relative(out, f).replaceAll('\\', '/') }))
  .filter(({ rel }) => !/^404(\/index)?\.html$/.test(rel))
  .map(({ f }) => {
    const rel = relative(out, f).replaceAll('\\', '/');
    const path = rel === 'index.html' ? '/' : '/' + rel.replace(/index\.html$/, '');
    return { f, path, html: readFileSync(f, 'utf8') };
  });

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&rsquo;/g, '’');
const first = (re, s) => (s.match(re) || [])[1];
const text = (html) =>
  decode(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();

const exists = (href) => {
  const p = href.split('#')[0].split('?')[0];
  if (!p) return true;
  const target = join(out, p);
  return existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
};

/* Telefoonnummers en bel-/WhatsApp-links horen nergens op de site te staan (keuze van de eigenaar).
   Het alarmnummer 112 in de veiligheidsteksten valt buiten deze patronen. Afbeeldingen kan dit script niet lezen:
   de deel-afbeelding komt uit scripts/og.mjs, daar staat de tekst die erop komt. */
const phoneLink = /\b(?:tel|sms|callto):|wa\.me\/|api\.whatsapp\.com|whatsapp:\/\/|"(?:telephone|faxNumber)"\s*:/i;
const phoneNumber = [
  /(?:\+|\b00)[1-9]\d?(?:[\s().-]{0,2}\d){8,12}\b/, // internationaal: plus of 00, landcode en nog 8 tot 12 cijfers
  /\b0[1-9](?:[\s.-]?\d){8}\b/, // Nederlands: tien cijfers die met 0 beginnen (mobiel, vast, 085/088), met of zonder spaties of streepjes
  /\b0[89]00[\s-]?\d{4,7}\b/, // 0800- en 0900-nummers
];
const findPhone = (s) => {
  const link = s.match(phoneLink);
  if (link) return link[0];
  for (const re of phoneNumber) {
    const m = s.match(re);
    if (m) return m[0];
  }
  return null;
};

const errors = [];
const warns = [];
const hreflang = new Map();
const titles = new Map();
const descs = new Map();
const h1texts = new Map();
const rows = [];

/* Formuleringen die we niet willen: superlatieven, aanprijzing van recreatief gebruik, AI-clichés. */
const banned = [
  [/—/, 'gedachtestreep'],
  [/\b(beste (prijs|service|kwaliteit|bezorgdienst|aanbieder|lachgas)|goedkoopste|snelste van|nummer 1|#1)\b/i, 'superlatief'],
  [/\b(ballon(nen)?|high worden|feestje|discreet|anoniem)\b/i, 'recreatief/discreet'],
  [/\b(ontdek|duik in|in de wereld van|naadloos)\b/i, 'AI-cliché'],
  [/\b(of belt|telefoontje|bel ons|bellen met ons|kunt bellen)\b/i, 'bellen (contact loopt alleen via WhatsApp)'],
];

for (const { path, html } of pages) {
  const title = decode(first(/<title>([^<]*)<\/title>/, html) || '');
  const desc = decode(first(/<meta name="description" content="([^"]*)"/, html) || '');
  const canon = first(/<link rel="canonical" href="([^"]*)"/, html);
  const h1s = (html.match(/<h1[ >]/g) || []).length;
  const h2s = (html.match(/<h2[ >]/g) || []).length;
  const main = first(/<main[^>]*>([\s\S]*?)<\/main>/, html) || '';
  const body = text(main);
  const words = body ? body.split(' ').length : 0;
  const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => decode(m[1]));
  const internal = links.filter((h) => h.startsWith('/'));
  const ids = [...main.matchAll(/ id="([^"]+)"/g)].map((m) => m[1]);

  const e = (m) => errors.push(`${path}  ${m}`);
  const w = (m) => warns.push(`${path}  ${m}`);

  if (!title) e('geen <title>');
  else {
    if (title.length > 62) w(`title ${title.length} tekens (>62, wordt in Google afgekapt)`);
    titles.set(title, [...(titles.get(title) || []), path]);
  }
  if (!desc) e('geen meta description');
  else {
    if (desc.length < 110 || desc.length > 165) w(`description ${desc.length} tekens (110-165)`);
    descs.set(desc, [...(descs.get(desc) || []), path]);
  }
  if (h1s !== 1) e(`${h1s} h1-koppen`);
  const h1 = decode((first(/<h1[^>]*>([\s\S]*?)<\/h1>/, main) || '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
  if (h1) h1texts.set(h1, [...(h1texts.get(h1) || []), path]);
  if (canon !== ORIGIN + path) e(`canonical ${canon} (verwacht ${ORIGIN + path})`);
  const robots = first(/<meta name="robots" content="([^"]*)"/, html) || '';
  if (!/^index, follow/.test(robots)) e(`robots-meta "${robots}" (verwacht index, follow)`);
  const ogImg = first(/<meta property="og:image" content="([^"]*)"/, html) || '';
  if (!ogImg.startsWith(ORIGIN + '/') || !exists(ogImg.slice(ORIGIN.length))) e(`og:image "${ogImg}" staat niet in out/`);
  const attrs = [...html.matchAll(/\s(?:alt|title|aria-label|content|href)="([^"]*)"/g)].map((m) => decode(m[1])).join('\n');
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]).join('\n');
  for (const [where, s] of [['de tekst', text(html)], ['een attribuut', attrs], ['de JSON-LD', jsonLd]]) {
    const hit = findPhone(s);
    if (hit) e(`telefoonnummer of bel-/WhatsApp-link in ${where}: "${hit}"`);
  }
  const alts = [...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]);
  if (alts.length) hreflang.set(ORIGIN + path, alts);
  if (path !== '/overzicht/' && !/\/(privacy-en-cookies|algemene-voorwaarden)\/$/.test(path) && words < MIN_WORDS) w(`${words} woorden (<${MIN_WORDS})`);
  for (const h of new Set(internal)) if (!exists(h)) e(`kapotte interne link ${h}`);
  const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dup.length) e(`dubbele id's: ${[...new Set(dup)].join(', ')}`);
  for (const m of html.matchAll(/<img (?![^>]*\balt=)[^>]*>/g)) e(`img zonder alt: ${m[0].slice(0, 60)}`);
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1].replace(/\\u003c/g, '<'));
      /* de pagina beschrijft zichzelf, niet een andere URL (anders krijgt bijvoorbeeld de homepage twee beschrijvingen) */
      const web = (data['@graph'] || []).find((n) => /^(Web|About|Contact)Page$/.test(n['@type']));
      if (!web || web.url !== ORIGIN + path) e(`JSON-LD: WebPage-url is ${web ? web.url : 'afwezig'} (verwacht ${ORIGIN + path})`);
    } catch (err) {
      e('ongeldige JSON-LD: ' + err.message);
    }
  }
  if (!/<script type="application\/ld\+json">/.test(html)) e('geen JSON-LD');
  if (/<script src=/.test(html)) w('extern script aanwezig');
  const outbound = links.filter((h) => /^https?:/.test(h) && !h.startsWith(ORIGIN));
  for (const h of outbound) if (!/rel="noopener/.test(main.slice(main.indexOf(h) - 80, main.indexOf(h) + h.length + 80))) w(`externe link zonder rel: ${h}`);
  for (const [re, label] of banned) {
    const m = body.match(re);
    if (m) w(`${label}: "${m[0]}"`);
  }
  rows.push({ path, words, h2s, links: internal.length, tl: title.length, dl: desc.length });
}

for (const [t, p] of titles) if (p.length > 1) errors.push(`dubbele title "${t}": ${p.join(', ')}`);
for (const [t, p] of h1texts) if (p.length > 1) errors.push(`dubbele h1 "${t}": ${p.join(', ')}`);
for (const [d, p] of descs) if (p.length > 1) errors.push(`dubbele description (${d.slice(0, 50)}…): ${p.join(', ')}`);

/* sitemap = alle pagina's */
const sm = existsSync(join(out, 'sitemap.xml')) ? readFileSync(join(out, 'sitemap.xml'), 'utf8') : '';
const inMap = new Set([...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
for (const { path } of pages) if (!inMap.has(ORIGIN + path)) errors.push(`${path}  ontbreekt in sitemap.xml`);
for (const u of inMap) if (!pages.some((p) => ORIGIN + p.path === u)) errors.push(`sitemap verwijst naar onbekende pagina ${u}`);
const tomorrow = new Date(Date.now() + 864e5).toISOString().slice(0, 10);
for (const m of sm.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) {
  if (!/^\d{4}-\d{2}-\d{2}/.test(m[1]) || m[1].slice(0, 10) > tomorrow) errors.push(`sitemap.xml  lastmod ${m[1]} is ongeldig of ligt in de toekomst`);
}

/* hreflang: elke pagina verwijst naar zichzelf, heeft x-default en wordt door de tegenhanger teruggelinkt */
for (const [url, alts] of hreflang) {
  const p = url.slice(ORIGIN.length);
  if (!alts.some(([, h]) => h === url)) errors.push(`${p}  hreflang zonder verwijzing naar zichzelf`);
  if (!alts.some(([l]) => l === 'x-default')) errors.push(`${p}  hreflang zonder x-default`);
  for (const [l, h] of alts) {
    if (h === url) continue;
    const back = hreflang.get(h);
    if (!back || !back.some(([, b]) => b === url)) errors.push(`${p}  hreflang ${l} naar ${h} wordt niet teruggelinkt`);
  }
}

/* robots.txt, 404 en de overige tekstbestanden */
const robotsTxt = existsSync(join(out, 'robots.txt')) ? readFileSync(join(out, 'robots.txt'), 'utf8') : '';
if (!robotsTxt.includes(`Sitemap: ${ORIGIN}/sitemap.xml`)) errors.push('robots.txt  mist de Sitemap-regel');
if (/^Disallow:\s*\/\s*$/im.test(robotsTxt)) errors.push('robots.txt  blokkeert de hele site (Disallow: /)');
if (existsSync(join(out, '404', 'index.html'))) errors.push('/404/  bestaat als gewone pagina (status 200); postbuild hoort die map te verwijderen');
const notFound = existsSync(join(out, '404.html')) ? readFileSync(join(out, '404.html'), 'utf8') : '';
if (!/<meta name="robots" content="noindex/.test(notFound)) errors.push('404.html  ontbreekt of mist noindex');
for (const f of walk(out).filter((p) => /\.(txt|xml|webmanifest|json|svg|html)$/.test(p) && !pages.some((pg) => pg.f === p))) {
  const src = readFileSync(f, 'utf8');
  const hit = findPhone(f.endsWith('.html') ? text(src) : src);
  if (hit) errors.push(`/${relative(out, f).replaceAll('\\', '/')}  telefoonnummer of bel-/WhatsApp-link: "${hit}"`);
}

rows.sort((a, b) => a.words - b.words);
console.log('woorden  h2  intern  titel  descr  pad');
for (const r of rows) console.log(`${String(r.words).padStart(7)} ${String(r.h2s).padStart(3)} ${String(r.links).padStart(7)} ${String(r.tl).padStart(6)} ${String(r.dl).padStart(6)}  ${r.path}`);
const total = rows.reduce((s, r) => s + r.words, 0);
console.log(`\n${rows.length} pagina’s, ${total} woorden, gemiddeld ${Math.round(total / rows.length)}, minimum ${rows[0].words}`);
if (warns.length) console.log(`\nWAARSCHUWINGEN (${warns.length}):\n` + warns.map((x) => '  ' + x).join('\n'));
if (errors.length) {
  console.log(`\nFOUTEN (${errors.length}):\n` + errors.map((x) => '  ' + x).join('\n'));
  process.exit(1);
}
console.log('\nGeen fouten.');
