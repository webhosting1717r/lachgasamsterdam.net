// Meldt URL's bij IndexNow (Bing, Yandex, Seznam, Naver): `npm run build && npm run indexnow` voor alle URL's uit de
// sitemap, of `node scripts/indexnow.mjs /pad/ /ander-pad/` voor alleen gewijzigde pagina's. Google doet niet mee aan
// IndexNow; daarvoor blijft Search Console (sitemap indienen, URL-inspectie) nodig.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const site = readFileSync(join(process.cwd(), 'lib/site.ts'), 'utf8');
const url = site.match(/url: '([^']+)'/)[1];
const host = new URL(url).host;
const key = site.match(/indexNowKey: '([^']+)'/)[1];

const args = process.argv.slice(2);
let urlList;
if (args.length) {
  urlList = args.map((p) => (p.startsWith('http') ? p : url + p));
} else {
  const sm = readFileSync(join(process.cwd(), 'out/sitemap.xml'), 'utf8');
  urlList = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
if (!urlList.length) throw new Error('geen URL\'s gevonden');

const keyLocation = `${url}/${key}.txt`;
// Zonder bereikbaar sleutelbestand weigert IndexNow de melding; controleer dat eerst, zodat dit niet stil misgaat.
const check = await fetch(keyLocation, { method: 'HEAD' });
if (check.status !== 200) {
  console.log(`Sleutelbestand ${keyLocation} geeft ${check.status}; deploy eerst en probeer opnieuw.`);
  process.exit(1);
}

const body = { host, key, keyLocation, urlList };
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});
console.log(`IndexNow: ${urlList.length} URL's, antwoord ${res.status} ${res.statusText}`);
if (res.status !== 200 && res.status !== 202) {
  console.log(await res.text());
  process.exit(1);
}
