// Generates responsive WebP variants for every JPEG in public/ and a manifest
// the next/image loader reads (lib/image-loader.ts). Runs before dev and build.
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC = "public";
const OUT = path.join(PUBLIC, "img");
const MANIFEST = path.join("lib", "image-manifest.json");
// matches images.deviceSizes + images.imageSizes in next.config.ts
const STEPS = [64, 128, 160, 320, 640, 960, 1280, 1920];
const QUALITY = 78;

await fs.mkdir(OUT, { recursive: true });
const files = (await fs.readdir(PUBLIC)).filter((f) => /\.jpe?g$/i.test(f)).sort();
const manifest = {};
let made = 0;

for (const file of files) {
  const src = path.join(PUBLIC, file);
  const stat = await fs.stat(src);
  const meta = await sharp(src).metadata();
  const name = file.replace(/\.jpe?g$/i, "");
  const widths = STEPS.filter((w) => w < meta.width);
  widths.push(meta.width);
  for (const w of widths) {
    const out = path.join(OUT, `${name}-${w}.webp`);
    const fresh = await fs
      .stat(out)
      .then((s) => s.mtimeMs >= stat.mtimeMs)
      .catch(() => false);
    if (fresh) continue;
    await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(out);
    made++;
  }
  manifest[`/${file}`] = { widths };
}

await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`images: ${files.length} sources, ${made} variants written, manifest at ${MANIFEST}`);
