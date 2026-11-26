// News-image entry for 26 November 2026 (Node 22, standard library only).
// The program copies this repository's entry.png into the output directory
// the grader provides, and checks the copy landed whole.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// PNG files start with an 8-byte signature; refuse to ship anything else.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const sourceSize = statSync(source).size;
mkdirSync(targetDir, { recursive: true });
copyFileSync(source, join(targetDir, 'entry.png'));
const target = join(targetDir, 'entry.png');
const copiedSize = statSync(target).size;
if (copiedSize !== sourceSize || copiedSize === 0) {
  throw new Error(`entry.png copy failed: ${copiedSize} of ${sourceSize} bytes`);
}
if (!readFileSync(target).subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error('entry.png is not a PNG file');
}
console.log(`entry.png (${copiedSize} bytes, PNG) -> ${targetDir}`);
