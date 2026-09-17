#!/usr/bin/env node
// Voice lint harness: does the content obey the countable rules of the writing guide?
//
//   npm run eval:voice                          whole world; markdown report, exit 1 on any finding
//   npm run eval:voice -- --story <slug>        only the rooms design/stories/<slug>/OUTLINE.md claims
//   npm run eval:voice -- --rooms <id>,<id>,…   only those room ids
//   npm run eval:voice -- --json                machine-readable report (combines with the above)
//
// Deterministic and engine-free: it reads the content data and applies the
// mechanical checklist lines of design/WRITING-GUIDE.md (sentence caps, banned
// words, em-dashes, exclamation points, the reversal tic). The evaluator runs it
// alongside eval:reach, scoped to its story so finished stories' rooms are not
// its problem; judgment calls stay in the evaluator's Notes.

import { exit, argv, stdout, stderr } from "node:process";
import { readFileSync, existsSync } from "node:fs";
import { world } from "../src/content/index.ts";
import {
  lintVoice,
  parseOutlineRooms,
  selectRooms,
  RULE_HINTS,
  type VoiceFinding,
  type VoiceRule,
} from "../src/voice.ts";

const args = argv.slice(2);
const json = args.includes("--json");
const flag = (name: string): string | undefined => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};

const story = flag("--story");
const roomIds = flag("--rooms");
let scope = "whole world";
let rooms = world.rooms;

if (story !== undefined) {
  const outline = `design/stories/${story}/OUTLINE.md`;
  if (!existsSync(outline)) {
    stderr.write(`no outline at ${outline}\n`);
    exit(2);
  }
  const refs = parseOutlineRooms(readFileSync(outline, "utf8"));
  rooms = selectRooms(world, refs);
  scope = `story ${story}`;
  const missing = refs.filter((ref) => !rooms.some((r) => r.place === ref.place && r.landing === ref.landing));
  if (refs.length === 0) stderr.write(`warning: ${outline} lists no rooms under ## Rooms\n`);
  for (const m of missing) stderr.write(`warning: outline names ${m.place} · ${m.landing} but no such room is built\n`);
} else if (roomIds !== undefined) {
  const wanted = new Set(roomIds.split(",").map((s) => s.trim()).filter(Boolean));
  rooms = world.rooms.filter((r) => wanted.has(r.id));
  scope = `rooms ${[...wanted].join(", ")}`;
  for (const id of wanted) if (!rooms.some((r) => r.id === id)) stderr.write(`warning: no room with id ${id}\n`);
}

const findings = lintVoice(world, rooms);
const pass = findings.length === 0;

const byRule = new Map<VoiceRule, number>();
for (const f of findings) byRule.set(f.rule, (byRule.get(f.rule) ?? 0) + 1);

if (json) {
  stdout.write(
    JSON.stringify(
      {
        verdict: pass ? "PASS" : "FAIL",
        scope,
        rooms: rooms.length,
        worldRooms: world.rooms.length,
        checked: rooms.map((r) => r.id),
        findings: findings.length,
        byRule: Object.fromEntries(byRule),
        hints: RULE_HINTS,
        details: findings,
      },
      null,
      2,
    ) + "\n",
  );
  exit(pass ? 0 : 1);
}

const lines: string[] = [];
lines.push("# Voice");
lines.push(`verdict: ${pass ? "PASS" : "FAIL"}`);
lines.push(`scope: ${scope}`);
lines.push(`rooms: ${rooms.length} of ${world.rooms.length}  findings: ${findings.length}`);
lines.push("");

if (!pass) {
  lines.push("## By rule");
  for (const [rule, n] of byRule) lines.push(`- ${rule}: ${n} — ${RULE_HINTS[rule]}`);
  lines.push("");

  lines.push("## Findings");
  const byRoom = new Map<string, VoiceFinding[]>();
  for (const f of findings) byRoom.set(f.roomId, [...(byRoom.get(f.roomId) ?? []), f]);
  for (const room of rooms) {
    const here = byRoom.get(room.id);
    if (!here) continue;
    lines.push(`### ${room.place} · ${room.landing} (${room.id})`);
    for (const f of here) {
      const where = f.targetId ? `${f.targetId}.${f.field}` : f.field;
      const measure =
        f.limit === undefined ? `matched "${f.found}"` : `${f.found} (limit ${f.limit})`;
      lines.push(`- ${f.rule} · ${where}: ${measure}`);
      lines.push(`  text: "${f.text.replace(/\s+/g, " ")}"`);
    }
    lines.push("");
  }
}

stdout.write(lines.join("\n") + "\n");
exit(pass ? 0 : 1);
