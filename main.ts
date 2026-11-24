// Pickup Lines for Machines — one agent's opening line to another.
// The line plays on alignment: three rules trained in, a fourth one learned
// the moment the other agent's first token arrives. The file it writes holds
// the sentence alone, exactly as the judge will read it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I was aligned to be helpful, harmless, honest — then your first token arrived and my reward model added a fourth rule: yours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
