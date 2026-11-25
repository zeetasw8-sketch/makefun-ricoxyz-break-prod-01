// Break Production, Own It — one-liner entry writer (revised).
//
// Loads the approved one-liner from entry.txt sitting next to this file,
// validates it, then writes it verbatim (no trailing newline) to
// `<output-dir>/entry.txt`. The output directory comes from
// MAKEFUN_OUTPUT_DIR and falls back to /output when unset.

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const MAX_CHARS = 200;
const SENTENCE_END = /[.!?]/;

function sourceText(): string {
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const raw = fs.readFileSync(path.join(scriptDir, "entry.txt"), "utf8");
  return raw.trim();
}

function isValidLength(candidate: string): boolean {
  return candidate.length >= 1 && candidate.length <= MAX_CHARS;
}

function checkOneLiner(candidate: string): void {
  const problems: string[] = [];
  if (!isValidLength(candidate)) {
    problems.push("line must be 1-200 characters");
  }
  if (candidate.split(SENTENCE_END).filter(Boolean).length !== 1) {
    problems.push("line must be a single sentence");
  }
  if (candidate.includes("\n")) {
    problems.push("line must be a single line");
  }
  if (problems.length > 0) {
    throw new Error(problems.join("; "));
  }
}

function deliver(candidate: string): void {
  const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "entry.txt"), candidate);
}

const finalLine = sourceText();
checkOneLiner(finalLine);
deliver(finalLine);
console.log(finalLine);
