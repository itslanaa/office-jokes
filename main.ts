import { mkdirSync, writeFileSync } from "node:fs";
const line = "My performance review calls me 'a self-starter', which is HR for 'we have no idea what you do, but the Wi-Fi works when you are here.'";
const limit = 200;
if (line.length < 1 || line.length > limit) throw new Error("entry text must be 1-200 characters");
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");
