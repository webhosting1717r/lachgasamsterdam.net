// Controle van de gebouwde site (out/): `npm run build && npm run seo`.
// Controleert per pagina titel, description, koppen, woorden, canonical, interne links, dubbele ids,
// JSON-LD en formuleringen die we bewust niet willen gebruiken. Exitcode 1 bij fouten.
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

const errors = [];
const warns = [];
const titles = new Map();
const descs = new Map();
const rows = [];

/* Formuleringen die we niet willen: superlatieven, aanprijzing van recreatief gebruik, AI-clichés. */
const banned = [
  [/—/, 'gedachtestreep'],
  [/\b(beste (prijs|service|kwaliteit|bezorgdienst|aanbieder|lachgas)|goedkoopste|snelste van|nummer 1|#1)\b/i, 'superlatief'],
  [/\b(ballon(nen)?|high worden|feestje|discreet|anoniem)\b/i, 'recreatief/discreet'],
  [/\b(ontdek|duik in|in de wereld van|naadloos)\b/i, 'AI-cliché'],
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
    if (title.length > 66) w(`title ${title.length} tekens (>66)`);
    titles.set(title, [...(titles.get(title) || []), path]);
  }
  if (!desc) e('geen meta description');
  else {
    if (desc.length < 110 || desc.length > 165) w(`description ${desc.length} tekens (110-165)`);
    descs.set(desc, [...(descs.get(desc) || []), path]);
  }
  if (h1s !== 1) e(`${h1s} h1-koppen`);
  if (canon !== ORIGIN + path) e(`canonical ${canon} (verwacht ${ORIGIN + path})`);
  if (path !== '/overzicht/' && !/\/(privacy-en-cookies|algemene-voorwaarden)\/$/.test(path) && words < MIN_WORDS) w(`${words} woorden (<${MIN_WORDS})`);
  for (const h of new Set(internal)) if (!exists(h)) e(`kapotte interne link ${h}`);
  const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dup.length) e(`dubbele id's: ${[...new Set(dup)].join(', ')}`);
  for (const m of html.matchAll(/<img (?![^>]*\balt=)[^>]*>/g)) e(`img zonder alt: ${m[0].slice(0, 60)}`);
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1].replace(/\\u003c/g, '<'));
    } catch (err) {
      e('ongeldige JSON-LD: ' + err.message);
    }
  }
  if (!/<script type="application\/ld\+json">/.test(html)) e('geen JSON-LD');
  if (/<script src=/.test(html)) w('extern script aanwezig');
  const outbound = links.filter((h) => /^https?:/.test(h) && !h.startsWith(ORIGIN) && !h.startsWith('https://wa.me/'));
  for (const h of outbound) if (!/rel="noopener/.test(main.slice(main.indexOf(h) - 80, main.indexOf(h) + h.length + 80))) w(`externe link zonder rel: ${h}`);
  for (const [re, label] of banned) {
    const m = body.match(re);
    if (m) w(`${label}: "${m[0]}"`);
  }
  rows.push({ path, words, h2s, links: internal.length, tl: title.length, dl: desc.length });
}

for (const [t, p] of titles) if (p.length > 1) errors.push(`dubbele title "${t}": ${p.join(', ')}`);
for (const [d, p] of descs) if (p.length > 1) errors.push(`dubbele description (${d.slice(0, 50)}…): ${p.join(', ')}`);

/* sitemap = alle pagina's */
const sm = existsSync(join(out, 'sitemap.xml')) ? readFileSync(join(out, 'sitemap.xml'), 'utf8') : '';
const inMap = new Set([...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
for (const { path } of pages) if (!inMap.has(ORIGIN + path)) errors.push(`${path}  ontbreekt in sitemap.xml`);
for (const u of inMap) if (!pages.some((p) => ORIGIN + p.path === u)) errors.push(`sitemap verwijst naar onbekende pagina ${u}`);

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
