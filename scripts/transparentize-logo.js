/**
 * Convert src/img/logo.png to src/img/logo-transparent.png by setting
 * near-white pixels to alpha=0. Threshold tuned so the comic outline
 * and color fills stay intact.
 */
const sharp = require("sharp");
const path = require("path");

const SRC = path.resolve(__dirname, "..", "src", "img", "logo.png");
const OUT = path.resolve(__dirname, "..", "src", "img", "logo-transparent.png");
const THRESHOLD = 240; // R,G,B all above => treat as background

(async () => {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let cleared = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (r > THRESHOLD && g > THRESHOLD && b > THRESHOLD) {
      data[i + 3] = 0;
      cleared++;
    } else {
      // Soft edge: pixels close to threshold get a partial alpha to avoid jagged outline.
      const minChannel = Math.min(r, g, b);
      if (minChannel > 200) {
        // remap 200..240 -> alpha 255..0
        data[i + 3] = Math.max(0, 255 - Math.round(((minChannel - 200) / 40) * 255));
      }
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(OUT);

  console.log(`Wrote ${OUT}`);
  console.log(`  size: ${info.width}x${info.height}`);
  console.log(`  pixels cleared: ${cleared} / ${(info.width * info.height)}`);
})();
