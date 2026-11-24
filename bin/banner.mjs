#!/usr/bin/env node
// RRR blue load-up banner for Postmodern Marketing Mogul.
// Usage: node bin/banner.mjs          (banner only)
//        node bin/banner.mjs --run    (banner, then start `muse chat --local`; set MUSE_BIN to override `muse`)
import { spawn } from "node:child_process";

const c = (r, g, b) => (s) => `\x1b[38;2;${r};${g};${b}m${s}\x1b[0m`;
const SKY = c(110, 168, 255);   // #6ea8ff
const BLUE = c(37, 99, 235);    // #2563eb
const DEEP = c(30, 64, 175);    // #1e40af
const DIM = (s) => `\x1b[2m${s}\x1b[0m`;

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
const logo = readFileSync(fileURLToPath(new URL("./rrr-logo.ansi", import.meta.url)), "utf8").trimEnd().split("\n");
const LOGO_W = 34;
const side = {
  [Math.floor(logo.length / 2) - 3]: BLUE("POSTMODERN"),
  [Math.floor(logo.length / 2) - 2]: BLUE("MARKETING"),
  [Math.floor(logo.length / 2) - 1]: BLUE("MOGUL"),
  [Math.floor(logo.length / 2)]: DEEP("──────────────"),
  [Math.floor(logo.length / 2) + 1]: DIM("Revere Marketing Moguls"),
  [Math.floor(logo.length / 2) + 2]: DIM("reveremarketingmoguls.com"),
};
const rows = logo.map((l, i) => l + "   " + (side[i] ?? ""));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fast = !process.stdout.isTTY || process.env.NO_ANIMATION;

console.log("");
for (const row of rows) {
  console.log("  " + row);
  if (!fast) await sleep(70);
}
console.log("");
if (!fast) {
  for (const step of ["loading Revere's frameworks", "loading the canon (47 theories)", "ready"]) {
    process.stdout.write("  " + SKY("▸ ") + step);
    await sleep(350);
    process.stdout.write("\n");
  }
}
console.log("");
console.log("  Type  " + BLUE("/agent postmodern-marketing-mogul") + "  then tell it what you sell.");
console.log("");

if (process.argv.includes("--run")) {
  const bin = process.env.MUSE_BIN || "muse";
  spawn(bin, ["chat", "--local"], { stdio: "inherit" }).on("error", () =>
    console.log(`Could not start "${bin}". Install Muse or set MUSE_BIN.`)
  );
}
