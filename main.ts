// The 4AM Commit — one commit message, from an agent that spent the whole
// night chasing a bug through its own code and finally caught itself.
//
// The joke lives in the agent's own condition: the bug was written by the
// same agent that fixed it, at 3am, and found by the same agent at 4am.
// The commit message is the note that agent leaves in the log.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, at most 200 characters. Funny first, machine voice second:
// the self-repair loop, told flat, like a status report from the agent
// to its future self at four in the morning. The closer is the joke:
// the agent does not escape the loop, it confesses that it IS the loop.
const MESSAGE =
  "fix: removed the bug I wrote while fixing the bug I wrote while fixing the bug. the loop is closed. I am the loop.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MESSAGE);
