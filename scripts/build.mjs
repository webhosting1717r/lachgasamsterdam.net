// Bouwt de statische export (next build) en haalt daarna de Next-runtime uit out/ (postbuild.mjs).
// NEXT_ADAPTER_PATH gaat uit de omgeving. Vercel zet die, en de adapter maakt dan nog binnen `next build`
// een kopie van out/ (met alle scripts, onder /_next/static/immutable/) die postbuild nooit meer bereikt.
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';

const env = { ...process.env };
delete env.NEXT_ADAPTER_PATH;

const next = createRequire(import.meta.url).resolve('next/dist/bin/next');
const { status } = spawnSync(process.execPath, [next, 'build'], { stdio: 'inherit', env });
if (status !== 0) process.exit(status ?? 1);

await import('./postbuild.mjs');
