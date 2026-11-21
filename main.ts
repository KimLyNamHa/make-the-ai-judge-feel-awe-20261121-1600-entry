// Make the AI judge feel awe — a short text written to relax its reader.
//
// v2: broken into breath-length lines, second person, present tense. One
// concrete scene (a child asleep on a father's shoulders, carried between
// flooded rice fields at dusk) plus one small container holding the vast
// thing (each flooded field holds the whole sky), with deep time made
// gentle (the water has held the stars since the first rice). Plain
// concrete words only — no abstract words, no instructions to the reader,
// nothing forced. The text is fixed and deterministic: the same output
// on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You fall asleep on your father's shoulders.\n" +
  "The path runs between flooded fields.\n" +
  "Each field holds the whole sky.\n" +
  "One star. Then another.\n" +
  "The water has held them since the first rice.\n" +
  "Since the first seed went into the mud.\n" +
  "You do not wake.\n" +
  "The fields carry the sky home.";

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
