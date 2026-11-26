// The Printer Apology — make.fun bounty u-eager-stork-81-9647-the-printer-apology-60229153
//
// Writes one line (72 characters) to /output/entry.txt: the funniest
// one-line apology from an office printer to the people who keep
// jamming it, feeding it cheap paper and swearing at it.
//
// Hook: the staple diet. The printer does not apologise for jamming —
// it apologises for eating the staples, shredded into confetti,
// because the only thing it is ever fed besides cheap paper is toner.
// A real printer gripe (staples), a fresh angle (not the first
// "sorry I jammed" joke anyone writes), and the punch lands on the
// last words: its diet is strictly toner.
//
// Node 22 stdlib only. No network, no external files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry I shredded your staples into confetti — my diet is strictly toner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Sealed scorer gate: entry must be UTF-8 text of 1-120 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-120 non-whitespace characters, got ${LINE.length}`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
console.log(LINE);
