// scripts/optimize-photos.mjs
// Roda uma vez. Gera versões reduzidas para /public/photos/ (poster do hero, og).
// Não roda no build — é manual, pra evitar reprocessamento sempre que rebuildar.
// @ts-check
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const src = resolve(root, 'src/assets/photos/irmaos.jpeg');
const outDir = resolve(root, 'public/photos');

await mkdir(outDir, { recursive: true });

const tasks = [
  { name: 'og-default.jpg', w: 1200, h: 630, fit: 'cover', q: 82 },
];

for (const t of tasks) {
  const out = resolve(outDir, t.name);
  await sharp(src)
    .resize({ width: t.w, height: t.h, fit: t.fit, position: 'center' })
    .jpeg({ quality: t.q, mozjpeg: true })
    .toFile(out);
  console.log(`✓ ${t.name}  ${t.w}×${t.h}`);
}

console.log('\nDone. Verifique em public/photos/.');
