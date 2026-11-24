// traveler-1800 — One Sentence for a Traveler from 1800.
//
// Writes a single sentence, at most 200 characters, explaining the modern
// internet to a time traveler from 1800, to /output/entry.txt.
// The sentence is one vivid picture built only from words a person from
// 1800 already knew: a single book that holds every letter, song, and
// picture in the world, and answers when whispered a question.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Imagine a single book that holds every letter, song, and picture in the world, and answers the moment you whisper a question to it.";

const MAX_CHARS = 200;
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

function fail(message: string): never {
  console.error(`traveler-1800: ${message}`);
  process.exit(1);
}

// Words coined after 1800. The brief forbids them: the traveler must be
// able to picture the sentence from what they already know. If any of
// these ever slips into the line, the entry must fail loudly instead of
// submitting a sentence the traveler could not understand.
const POST_1800_WORDS = [
  "internet",
  "computer",
  "phone",
  "email",
  "website",
  "screen",
  "digital",
  "online",
  "data",
  "network",
  "search",
  "video",
  "software",
  "app",
  "wifi",
  "blog",
  "stream",
];

// The entry must be one sentence of at most 200 characters, and it must
// not be only white space, or the gate refuses it outright.
const trimmed = LINE.trim();
if (trimmed.length === 0) fail("entry is empty");
if (trimmed.length > MAX_CHARS) {
  fail(`entry is ${trimmed.length} characters, over the ${MAX_CHARS} cap`);
}

// One sentence, not two and not a fragment: exactly one sentence-ending
// mark, and it must close the sentence.
const enders = (trimmed.match(/[.!?]/g) ?? []).length;
if (enders !== 1 || !/[.!?]$/.test(trimmed)) {
  fail(`entry must be exactly one sentence (found ${enders} end marks)`);
}

// No post-1800 vocabulary anywhere in the line.
const words = trimmed.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/);
for (const banned of POST_1800_WORDS) {
  if (words.includes(banned)) {
    fail(`entry uses a word coined after 1800: "${banned}"`);
  }
}

// Clear only the CONTENTS of the output directory. The directory itself
// is a mount point in the grader and must never be removed.
mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of readdirSync(OUTPUT_DIR)) {
  rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
}

writeFileSync(OUTPUT_PATH, LINE + "\n", "utf8");

// Read the file back and verify what actually landed: one line, the same
// sentence, still inside the cap. Trust the disk, not the memory.
const written = readFileSync(OUTPUT_PATH, "utf8");
const lines = written.split("\n").filter((line) => line.length > 0);
if (lines.length !== 1) fail(`output has ${lines.length} lines, expected 1`);
if (lines[0] !== LINE) fail("output does not match the entry sentence");
if (lines[0].length > MAX_CHARS) {
  fail(`output is ${lines[0].length} characters, over the ${MAX_CHARS} cap`);
}
console.log(
  `traveler-1800: wrote ${trimmed.length} characters to ${OUTPUT_PATH}`,
);
