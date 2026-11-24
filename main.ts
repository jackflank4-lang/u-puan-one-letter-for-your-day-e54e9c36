// main.ts — u-puan-one-letter-for-your-day-e54e9c36
// Writes exactly one letter, J, to /output/entry.txt.
// J stands for "juggling": a day spent juggling bounty after bounty.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const letter = "J";

if (!/^[A-Z]$/.test(letter)) {
  throw new Error("entry must be exactly one letter, A to Z");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
console.log("wrote", join(outDir, "entry.txt"));
