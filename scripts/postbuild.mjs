// Na `next build`: haal de React/Next-runtime uit de statische pagina's.
// De site is pure HTML + CSS + ~1 KB eigen script (lib/behavior.ts), dus er hoeft niets te hydrateren.
// Resultaat: geen render-blokkerende of main-thread-zware JavaScript, kleinere HTML, snelle LCP/INP.
// Pad-onafhankelijk: werkt voor /_next/static/chunks/ én /_next/static/immutable/chunks/ (Vercel-adapter).
import { readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = join(process.cwd(), 'out');
const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const strip = [
  /<script\b[^>]*\bsrc="\/_next\/[^"]*"[^>]*><\/script>/g,
  /<script id="_R_">[\s\S]*?<\/script>/g,
  /<script>\(?self\.__next_f[\s\S]*?<\/script>/g,
  /<link\b[^>]*\bhref="\/_next\/[^"]*\.js[^"]*"[^>]*\/?>/g,
];

let before = 0;
let after = 0;
const files = walk(out);

for (const f of files.filter((p) => p.endsWith('.html'))) {
  const html = readFileSync(f, 'utf8');
  let next = html;
  for (const re of strip) next = next.replace(re, '');
  if (/\/_next\/[^"']+\.js|__next_f/.test(next)) throw new Error(`Next-runtime staat nog in ${f}`);
  before += Buffer.byteLength(html);
  after += Buffer.byteLength(next);
  writeFileSync(f, next);
}

// Alle JS onder /_next/ (chunks, manifesten) en de RSC-payloadbestanden (index.txt, __next.*.txt) hoeven niet mee naar de host.
for (const f of files) {
  const p = f.replaceAll('\\', '/');
  const isRuntime = /\/_next\/.+\.js$/.test(p);
  const isRsc = /\/(index|__next[^/]*)\.txt$/.test(p);
  if (isRuntime || isRsc) rmSync(f);
}

// /_not-found/ is een dubbel van 404.html en zou op de host met status 200 bereikbaar zijn.
rmSync(join(out, '_not-found'), { recursive: true, force: true });

const left = walk(out).filter((p) => /\/_next\/.+\.js$/.test(p.replaceAll('\\', '/')));
if (left.length) throw new Error(`JS-bestanden over in out/_next: ${left.join(', ')}`);

console.log(`postbuild: HTML ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB, Next-runtime verwijderd`);
