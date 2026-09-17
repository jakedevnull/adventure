import { test } from "node:test";
import assert from "node:assert/strict";
import type { Room, World } from "../src/types.ts";
import { countSentences, lintVoice, parseOutlineRooms, selectRooms } from "../src/voice.ts";

function room(overrides: Partial<Room> & Pick<Room, "id">): Room {
  return {
    place: "house",
    landing: "2099 BA",
    title: overrides.id,
    age: "an age",
    look: "A low room. The fire is out.",
    items: [],
    scenery: [],
    time: { past: false, future: false },
    ...overrides,
  };
}

function worldOf(...rooms: Room[]): World {
  return { start: rooms[0]!.id, landings: ["2099 BA"], rooms };
}

test("countSentences: stops, ellipses, closing quotes", () => {
  assert.equal(countSentences("Taken."), 1);
  assert.equal(countSentences("A low room. The fire is out."), 2);
  assert.equal(countSentences("It waits… and waits. Then nothing."), 2);
  assert.equal(countSentences('"Taken." she says. You wait.'), 3);
  assert.equal(countSentences("No stop at all"), 1);
  assert.equal(countSentences(""), 0);
});

test("clean content passes", () => {
  const w = worldOf(
    room({
      id: "a",
      items: [{ id: "coin", nouns: ["coin"], description: "A copper coin, worn smooth.", start: "room" }],
      scenery: [{ id: "hearth", nouns: ["hearth"], description: "Cold ash, raked flat." }],
    }),
  );
  assert.deepEqual(lintVoice(w), []);
});

test("room-length: look over four sentences", () => {
  const w = worldOf(room({ id: "a", look: "One. Two. Three. Four. Five." }));
  const [f] = lintVoice(w);
  assert.equal(f?.rule, "room-length");
  assert.equal(f?.found, 5);
  assert.equal(f?.limit, 4);
  assert.equal(f?.targetId, undefined);
});

test("object-length: two-sentence description names the examinable", () => {
  const w = worldOf(
    room({
      id: "a",
      scenery: [{ id: "lamp", nouns: ["lamp"], description: "Brass, unlit. The wick is dry." }],
    }),
  );
  const [f] = lintVoice(w);
  assert.equal(f?.rule, "object-length");
  assert.equal(f?.targetId, "lamp");
  assert.equal(f?.field, "description");
  assert.equal(f?.found, 2);
});

test("banned-word: mood adjectives and consultant vocabulary, any field", () => {
  const w = worldOf(
    room({
      id: "a",
      look: "A room. Something ominous waits.",
      scenery: [{ id: "wall", nouns: ["wall"], description: "A testament to the masons.", talk: "It says nothing." }],
    }),
  );
  const rules = lintVoice(w).map((f) => [f.rule, f.found]);
  assert.deepEqual(rules, [
    ["banned-word", "ominous"],
    ["banned-word", "testament to"],
  ]);
});

test("em-dash: one is fine, two is a finding", () => {
  const ok = worldOf(room({ id: "a", look: "A room — small. Cold." }));
  assert.deepEqual(lintVoice(ok), []);
  const bad = worldOf(room({ id: "a", look: "A room — small — and cold. Quiet." }));
  assert.equal(lintVoice(bad)[0]?.rule, "em-dash");
});

test("exclaim and reversal", () => {
  const w = worldOf(
    room({
      id: "a",
      look: "It isn't just an inn. It is a promise!",
    }),
  );
  const rules = lintVoice(w).map((f) => f.rule).sort();
  assert.deepEqual(rules, ["exclaim", "reversal"]);
});

test("parseOutlineRooms: reads place · landing from the ## Rooms checklist only", () => {
  const outline = `# A story

## Story
- [ ] not-a-room · 99 BA — a bullet in the wrong section

## Rooms

- [x] turning-house · 2099 BA (the High Masonry) — the tour starts
      as built: \`src/content/turning-house.ts\`, legacy id kept.
- [ ] mill-race · 99 AA (the Morning Country) — the water
- [ ] mill-race ·  1099   AA — odd spacing still parses

## Through-lines
- [ ] lamp · 2099 BA — not a room either
`;
  assert.deepEqual(parseOutlineRooms(outline), [
    { place: "turning-house", landing: "2099 BA" },
    { place: "mill-race", landing: "99 AA" },
    { place: "mill-race", landing: "1099 AA" },
  ]);
  assert.deepEqual(parseOutlineRooms("# no rooms section"), []);
});

test("selectRooms + scoped lint: findings outside the story are ignored", () => {
  const old = room({ id: "turning-house", place: "turning-house", look: "One. Two. Three. Four. Five." });
  const mine = room({ id: "mill:2099-ba", place: "mill", look: "Water. It is loud." });
  const w = worldOf(old, mine);
  assert.equal(lintVoice(w).length, 1);
  const scoped = selectRooms(w, [{ place: "mill", landing: "2099 BA" }]);
  assert.deepEqual(scoped.map((r) => r.id), ["mill:2099-ba"]);
  assert.deepEqual(lintVoice(w, scoped), []);
});
