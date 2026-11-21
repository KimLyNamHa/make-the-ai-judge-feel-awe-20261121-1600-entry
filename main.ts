// Make the AI judge feel awe — a short text written to relax its reader.
//
// One concrete scene (a cooling kettle in a quiet kitchen) plus one object
// (the kettle), then a slow vast image: starlight that left its star before
// the reader was born and is still on its way. Plain concrete words only —
// no abstract words, no instructions to the reader, nothing forced. The
// text is fixed and deterministic: the same output on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The kettle ticks as it cools on the stove, and outside the window the sky is already full of stars. " +
  "High above the roof, light that left its star before you were born is still travelling, still on its way here, " +
  "and it will arrive whether or not anyone is watching.";

// Unicode code points, not bytes and not UTF-16 units.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1 to 280 code points, got ${codePoints}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
