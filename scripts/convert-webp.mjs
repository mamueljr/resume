// Convierte las imágenes de public/assets a WebP (calidad 82).
// Uso: node scripts/convert-webp.mjs
// Los originales se conservan como respaldo; el sitio referencia los .webp.
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const ASSETS_DIR = new URL('../public/assets/', import.meta.url).pathname
  .replace(/^\/([A-Za-z]:)/, '$1'); // normaliza rutas de Windows

const SKIP = new Set(['favicon.ico', 'og-image.png', 'style.scss']);

const files = await readdir(ASSETS_DIR);
for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext) || SKIP.has(file)) continue;

  const src = path.join(ASSETS_DIR, file);
  const dest = path.join(ASSETS_DIR, `${path.basename(file, ext)}.webp`);

  const before = (await stat(src)).size;
  await sharp(src).webp({ quality: 82 }).toFile(dest);
  const after = (await stat(dest)).size;

  console.log(
    `${file} → ${path.basename(dest)}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (${Math.round((1 - after / before) * 100)}% menos)`
  );
}
console.log('Conversión completa.');
