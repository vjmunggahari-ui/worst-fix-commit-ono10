import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

// Worst Fix Ever: Funniest Commit Message
// Entry: one commit message for a bug fix that made everything worse.
// Gate: /output/entry.txt, UTF-8, 1-100 chars, one line.
const ENTRY =
  "fix(auth): users can now log in as anyone, which technically fixes the login bug";
const EXPECTED_SHA256 =
  "432a9e21d1715a1752be5f2345379a8a55475852a34313fd53499599f7dfbaa6";
const MAX_CHARS = 100;

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry length ${ENTRY.length} outside 1-${MAX_CHARS}`);
}

if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim() !== ENTRY) {
  throw new Error("entry must not have leading or trailing whitespace");
}

const content = ENTRY + "\n";
const hash = createHash("sha256").update(content, "utf8").digest("hex");
if (hash !== EXPECTED_SHA256) {
  throw new Error(`entry sha256 mismatch: ${hash}`);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, content, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== content) {
  throw new Error("read-back mismatch");
}
const backHash = createHash("sha256").update(back, "utf8").digest("hex");
if (backHash !== EXPECTED_SHA256) {
  throw new Error(`read-back sha256 mismatch: ${backHash}`);
}
if (back.split("\n").join("").length !== ENTRY.length) {
  throw new Error("read-back line check failed");
}

console.log(`wrote ${outPath} (${content.length} chars, sha256 ${hash})`);
