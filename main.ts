// SPDX-License-Identifier: MIT
// The Absurd Clause Contest — u-donrulezz-the-absurd-clause-contest-035cc0f1
// Writes a single original absurd ToS clause (163 characters, one sentence)
// to <output-dir>/entry.txt. Fully deterministic: no randomness, no clock,
// no network, no input. The output directory defaults to /output (the
// grader's location) and can be overridden with OUTPUT_DIR for local tests.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The clause: deadpan boilerplate ("perpetual licence", "no refunds")
// around one concrete absurd image — the service borrows your dreams
// every Tuesday and hands them back slightly used. The "no refunds for
// nightmares" kicker lands the joke without explaining it.
const CLAUSE =
  "Clause 22: by using this service, you grant us a perpetual licence to borrow your dreams on Tuesdays and return them slightly used, with no refunds for nightmares.";

// Guard the gate before writing: the entry must be 1-200 characters of
// non-whitespace text, a single sentence (exactly one terminal full stop).
if (CLAUSE.length < 1 || CLAUSE.length > 200 || CLAUSE.trim().length === 0) {
  throw new Error(`entry length ${CLAUSE.length} is outside the 1-200 range`);
}
if ((CLAUSE.match(/\./g) ?? []).length !== 1 || !CLAUSE.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), CLAUSE, "utf8");
