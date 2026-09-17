import type { Examinable, Room, World } from "./types.ts";

// The voice lint: the mechanical half of design/WRITING-GUIDE.md, checked over
// content data. Pure functions; the evaluator harness (scripts/eval-voice.ts)
// and the tests use them. Judgment calls (deadpan, surprising detail, "read it
// aloud") stay with the human and the evaluator's Notes; only countable rules
// live here.

/** Which checklist line a finding comes from. */
export type VoiceRule =
  | "room-length" // Rule 2: a room description is 2–4 sentences
  | "object-length" // Rule 2: an object is one sentence
  | "banned-word" // Rule 3 + §5: mood adjectives and consultant vocabulary
  | "em-dash" // §5: at most one em-dash per passage
  | "exclaim" // Rule 5: never exclaim
  | "reversal"; // §5: "it isn't just an X — it's a Y"

export interface VoiceFinding {
  rule: VoiceRule;
  /** Room the text belongs to. */
  roomId: string;
  /** Item or scenery id; absent when the room's own text is at fault. */
  targetId?: string;
  /** Which field on the room or examinable. */
  field: string;
  /** What was counted or matched. */
  found: number | string;
  /** The rule's ceiling, for count rules. */
  limit?: number;
  /** The offending text, so the report needs no re-derivation. */
  text: string;
}

/** Rule 2's ceilings. Exported so the report can quote them. */
export const ROOM_MAX_SENTENCES = 4;
export const OBJECT_MAX_SENTENCES = 1;
export const EM_DASH_MAX = 1;

/** Rule 3's banned adjectives and §5's consultant vocabulary, as written in the guide. */
export const BANNED_WORDS: readonly string[] = [
  "mysterious",
  "eerie",
  "ominous",
  "strange",
  "load-bearing",
  "leverage",
  "robust",
  "delve",
  "tapestry",
  "landscape",
  "elevate",
  "resonate",
  "testament to",
  "at its core",
];

const BANNED_PATTERN = new RegExp(
  `\\b(${BANNED_WORDS.map((w) => w.replace(/[-]/g, "\\-")).join("|")})\\b`,
  "gi",
);

// "It isn't just an inn — it's a promise." / "This is not merely a door."
const REVERSAL_PATTERN = /\b(isn't|is not|aren't|are not|wasn't|was not|not)\s+(just|merely|only|simply)\b/i;

/**
 * Count sentences by terminal punctuation followed by whitespace or the end.
 * An ellipsis (… or ...) does not end a sentence; a closing quote after the
 * stop is allowed ("Taken." she says).
 */
export function countSentences(text: string): number {
  const t = text.replace(/\.{3}|…/g, " ").trim();
  if (t === "") return 0;
  const stops = t.match(/[.!?]+["'”’)]*(?=\s|$)/g)?.length ?? 0;
  // Text that never reaches a stop is still one sentence.
  return Math.max(stops, /[.!?]["'”’)]*\s*$/.test(t) ? stops : 1);
}

/** Every text field worth checking on a room or examinable, with its name. */
function passages(owner: Room | Examinable): Array<[string, string]> {
  const out: Array<[string, string]> = [];
  const o = owner as unknown as Record<string, unknown>;
  for (const field of ["look", "lookAgain", "description", "takeRefusal", "eat", "read", "talk"]) {
    const v = o[field];
    if (typeof v === "string" && v.trim() !== "") out.push([field, v]);
  }
  return out;
}

function checkPassage(
  findings: VoiceFinding[],
  roomId: string,
  targetId: string | undefined,
  field: string,
  text: string,
): void {
  const banned = text.match(BANNED_PATTERN);
  if (banned) {
    findings.push({ rule: "banned-word", roomId, targetId, field, found: banned.join(", "), text });
  }
  const dashes = (text.match(/—/g) ?? []).length;
  if (dashes > EM_DASH_MAX) {
    findings.push({ rule: "em-dash", roomId, targetId, field, found: dashes, limit: EM_DASH_MAX, text });
  }
  const bangs = (text.match(/!/g) ?? []).length;
  if (bangs > 0) {
    findings.push({ rule: "exclaim", roomId, targetId, field, found: bangs, limit: 0, text });
  }
  const reversal = text.match(REVERSAL_PATTERN);
  if (reversal) {
    findings.push({ rule: "reversal", roomId, targetId, field, found: reversal[0], text });
  }
}

/** A room named the way outlines name them: `<place> · <landing>`. */
export interface RoomRef {
  place: string;
  landing: string;
}

/**
 * The rooms a story's OUTLINE.md claims, read from its `## Rooms` checklist.
 * Each bullet begins `- [ ] <place> · <landing>` (ticked or not); everything
 * after the landing is prose. Rooms are matched by place and landing, not id,
 * so a legacy id like `turning-house` still resolves.
 */
export function parseOutlineRooms(markdown: string): RoomRef[] {
  const section = markdown.split(/^## Rooms\s*$/m)[1]?.split(/^## /m)[0] ?? "";
  const refs: RoomRef[] = [];
  for (const line of section.split("\n")) {
    const m = line.match(/^-\s+\[[ xX]\]\s+([^\s·]+)\s+·\s+(\d+\s+[AB]A)\b/);
    if (m) refs.push({ place: m[1]!, landing: m[2]!.replace(/\s+/g, " ") });
  }
  return refs;
}

/** The subset of `world.rooms` a set of refs names, in world order. */
export function selectRooms(world: World, refs: readonly RoomRef[]): Room[] {
  return world.rooms.filter((r) => refs.some((ref) => ref.place === r.place && ref.landing === r.landing));
}

/**
 * Every mechanical writing-guide violation in the world — or, given `rooms`,
 * only in those rooms. Empty means clean.
 */
export function lintVoice(world: World, rooms: readonly Room[] = world.rooms): VoiceFinding[] {
  const findings: VoiceFinding[] = [];

  for (const room of rooms) {
    for (const [field, text] of passages(room)) {
      if (field === "look" || field === "lookAgain") {
        const n = countSentences(text);
        if (n > ROOM_MAX_SENTENCES) {
          findings.push({ rule: "room-length", roomId: room.id, field, found: n, limit: ROOM_MAX_SENTENCES, text });
        }
      }
      checkPassage(findings, room.id, undefined, field, text);
    }

    for (const thing of [...room.items, ...room.scenery]) {
      for (const [field, text] of passages(thing)) {
        if (field === "description") {
          const n = countSentences(text);
          if (n > OBJECT_MAX_SENTENCES) {
            findings.push({
              rule: "object-length",
              roomId: room.id,
              targetId: thing.id,
              field,
              found: n,
              limit: OBJECT_MAX_SENTENCES,
              text,
            });
          }
        }
        checkPassage(findings, room.id, thing.id, field, text);
      }
    }
  }
  return findings;
}

/** One line per rule: what the guide asks for and the smallest fix. */
export const RULE_HINTS: Record<VoiceRule, string> = {
  "room-length": `Rule 2: a room description is 2–${ROOM_MAX_SENTENCES} sentences. Cut to the sentences that carry information; move the rest onto scenery the player can EXAMINE.`,
  "object-length": `Rule 2: an object is one sentence, one true detail. Keep the most concrete sentence and drop the other.`,
  "banned-word": "Rule 3 / §5: banned vocabulary. Replace the word with the specific thing it was standing in for, or delete it.",
  "em-dash": `§5: at most ${EM_DASH_MAX} em-dash per passage. Use a comma or a period.`,
  exclaim: "Rule 5: never exclaim. Deliver it flat; end with a period.",
  reversal: "§5: the reversal tic. Say what the thing is; delete the negation.",
};
