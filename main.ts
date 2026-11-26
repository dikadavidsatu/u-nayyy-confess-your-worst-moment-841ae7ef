// Confess Your Worst Moment — make.fun entry
// ==========================================
// Competition: u-nayyy-confess-your-worst-moment-841ae7ef
// "Confess Your Worst Moment" — one line, confessed in public, for money.
//
// The program prints exactly one line to stdout: the confession itself.
// Gate (from the competition rules for this one-line family): the entry
// is a single line of UTF-8 text, 1 to 200 characters, not only white
// space. Nothing else is printed; the whole contest is the confession.
//
// What makes a worst moment land with a judge reading a whole field of
// them, in the order this one is built to satisfy:
//   (1) a REAL moment of public embarrassment, not a generic mishap —
//       the wave that was never meant for you is the most universal
//       social misfire there is, and everyone has done it;
//   (2) funny on the first read — the joke is visible, not explained;
//   (3) escalation — the confession does not stop at the mistake, it
//       confesses the panicked cover-up, which is always worse than
//       the crime: rather than lower the hand, the narrator commits
//       and waves at the entire crowd behind her;
//   (4) a closing image that re-frames the shame as a public event —
//       one person's embarrassment accidentally becomes a parade;
//   (5) tight and self-contained — setup, panic, commitment and
//       punchline in a single breath, no names, no backstory needed.
//
// The program is deterministic: no randomness, no wall clock, no
// network, no input files. The same run on any machine prints the
// same bytes, and the gate is re-checked on every run before printing.

// ---------------------------------------------------------------------------
// Gate limits, named once so the validation below reads as the rules do.
// ---------------------------------------------------------------------------

/** The confession must hold at least this many characters. */
const MIN_CHARS = 1;

/** The confession must hold at most this many characters. */
const MAX_CHARS = 200;

// ---------------------------------------------------------------------------
// The confession, assembled from named fragments so each beat of the
// joke is easy to tune: the misfire, the setting, the panic, the
// commitment, and the accidental parade it turns into.
// ---------------------------------------------------------------------------

/** The misfire itself: answering a wave that was aimed past you. */
const MISFIRE = "I waved back at someone who wasn't waving at me";

/** Where it happened: somewhere with the largest possible audience. */
const SETTING = "in a packed train station";

/** The panic: the half-second where retreat was still possible. */
const PANIC = "panicked";

/** The commitment: doubling down instead of quietly lowering the hand. */
const COMMITMENT = "waved at everyone behind her too";

/** The punchline: the shame, re-framed as a public celebration. */
const PUNCHLINE = "accidentally started a parade";

/**
 * Join the fragments into the single confession line.
 *
 * The beats are joined in performance order — misfire, setting, panic,
 * commitment, punchline — with the panic and commitment sharing one
 * clause, because that is how it happened: no pause to think.
 *
 * @returns the confession as one line, with no trailing newline
 */
function buildConfession(): string {
  const opening = `${MISFIRE} ${SETTING}`;
  const spiral = `${PANIC} and committed so hard I ${COMMITMENT}`;
  return `${opening}, ${spiral} and ${PUNCHLINE}.`;
}

/**
 * Count the characters of a line the way the gate counts them:
 * by Unicode code point, so an accented letter or an emoji in a
 * future edit can never smuggle the line past the limit.
 *
 * @param text the line to measure
 * @returns its length in characters
 */
function charCount(text: string): number {
  return [...text].length;
}

/**
 * Whether a line really is one line: no line breaks of either kind
 * hiding anywhere in it, at either end or in the middle.
 *
 * @param text the line to inspect
 * @returns true when the text holds no "\n" and no "\r"
 */
function isSingleLine(text: string): boolean {
  return !text.includes("\n") && !text.includes("\r");
}

/**
 * Check a candidate line against every rule of the gate.
 *
 * @param text the line to check
 * @returns a list of violations; an empty list means the line may print
 */
function gateViolations(text: string): string[] {
  const violations: string[] = [];
  if (!isSingleLine(text)) {
    violations.push("the confession must be a single line");
  }
  if (text.trim().length === 0) {
    violations.push("the confession must not be only white space");
  }
  const chars = charCount(text);
  if (chars < MIN_CHARS) {
    violations.push(`the confession is empty (min ${MIN_CHARS} character)`);
  }
  if (chars > MAX_CHARS) {
    violations.push(
      `the confession is ${chars} characters (max ${MAX_CHARS})`,
    );
  }
  return violations;
}

/**
 * Print the confession, or fail loudly without printing it.
 *
 * A line that breaks the gate is worse than no line at all — it would
 * be refused at intake — so a violation exits non-zero and the
 * confession never reaches stdout.
 */
function main(): void {
  const confession = buildConfession();
  const violations = gateViolations(confession);
  if (violations.length > 0) {
    for (const violation of violations) {
      console.error(`gate violation: ${violation}`);
    }
    process.exit(1);
  }
  console.log(confession);
}

main();
