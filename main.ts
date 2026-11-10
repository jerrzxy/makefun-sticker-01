// makefun-sticker-01 — copy entry.png to /output/entry.png
import { copyFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const baseDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.png");
copyFileSync(join(baseDir, "entry.png"), outputPath);
console.log(`copied entry.png -> ${outputPath}`);
// Deterministic: copies the bytes unchanged, no network, no randomness.
