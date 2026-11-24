import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: the setup asks IT for a second monitor (a second
// screen), the punchline pays it off with a second ticket number instead —
// the helpdesk answers a hardware request with more bureaucracy. Specific
// office detail (IT ticket queue), no reply-all / per-my-last-email cliche,
// one sentence, clear on first read.
const TEXT =
  "I asked IT for a second monitor and got a second ticket number instead.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-200 characters. Fail loudly
// instead of writing an invalid entry if the text is ever edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry text must be 1-200 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
