// Maakt public/og.jpg (1200x630): de afbeelding die WhatsApp, sociale media en zoekmachines bij een gedeelde link tonen.
// Bewust zonder telefoonnummer: alleen merknaam, belofte en domein. Pas de teksten hieronder aan en draai opnieuw.
// Gebruik: `npm run og`. Vereist Playwright met Chromium (geen projectafhankelijkheid: `npx playwright install chromium`
// of een omgeving waar het al staat). Het lettertype is Inter als dat geïnstalleerd is, anders het systeemlettertype.
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';

const root = process.cwd();
const site = readFileSync(join(root, 'lib/site.ts'), 'utf8');
const domain = site.match(/domain: '([^']+)'/)[1];
const name = site.match(/name: '([^']+)'/)[1];

const text = {
  chip: '24/7 bezorgd · 18+',
  title: name.replace(' ', '<br>'),
  sub: 'Fastgas tank binnen 20 tot 30 min',
  pill: domain,
};

const uri = (file, type) => `data:${type};base64,${readFileSync(join(root, 'public', file)).toString('base64')}`;

const html = `<!doctype html><html lang="nl"><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0}
html,body{width:1200px;height:630px;overflow:hidden;background:#04060b;color:#f5f5f7;font-family:Inter,system-ui,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased}
.bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5;filter:blur(1.5px)}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,6,11,.92) 0%,rgba(4,6,11,.72) 42%,rgba(4,6,11,.25) 72%,rgba(4,6,11,.35) 100%)}
.tank{position:absolute;right:104px;top:98px;height:434px;width:auto;filter:drop-shadow(0 24px 40px rgba(0,0,0,.6))}
.txt{position:absolute;left:72px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}
.chip{padding:11px 20px;border:1.5px solid rgba(255,255,255,.28);border-radius:999px;background:rgba(6,8,14,.6);font-size:23px;color:#e6e8ee}
h1{margin-top:30px;font-size:98px;line-height:1.02;letter-spacing:-.04em;font-weight:800}
.sub{margin-top:24px;font-size:33px;color:#d5d8e0;letter-spacing:-.01em}
.pill{margin-top:38px;padding:17px 32px;border-radius:999px;background:#ffd60a;color:#16120a;font-size:30px;font-weight:700;letter-spacing:-.01em}
</style>
<img class="bg" src="${uri('bg-poster-v1.webp', 'image/webp')}" alt="">
<div class="shade"></div>
<img class="tank" src="${uri('fastgas-2kg.webp', 'image/webp')}" alt="">
<div class="txt">
  <div class="chip">${text.chip}</div>
  <h1>${text.title}</h1>
  <div class="sub">${text.sub}</div>
  <div class="pill">${text.pill}</div>
</div></html>`;

let chromium;
try {
  ({ chromium } = createRequire(import.meta.url)('playwright'));
} catch {
  console.error('Playwright ontbreekt. Installeer het eenmalig met `npm i --no-save playwright && npx playwright install chromium`.');
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
const out = join(root, 'public/og.jpg');
const buf = await page.screenshot({ type: 'jpeg', quality: 84 });
await browser.close();
writeFileSync(out, buf);
console.log(`og.jpg: ${(buf.length / 1024).toFixed(0)} KB (1200x630)`);
