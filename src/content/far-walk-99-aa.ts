import type { Room } from "../types.ts";

// The Far Walk, 99 AA — the Morning Country.
// The hedge that was cut is the hedge that died. The length set again in 99 BA
// is grey wood now with a gap in it, and it is the only way into the heart.
// The walk west has closed to thicket — the same thicket that stopped the
// player at `long-walk:99-aa`, seen from the other end — so this room and the
// heart above it are a pocket with no walking way out of the maze. The way out
// is a stride (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const farWalk99AA: Room = {
  id: "far-walk:99-aa",
  place: "far-walk",
  title: "The Far Walk",
  landing: "99 AA",
  age: "the Morning Country",
  look:
    "A square of rough grass with hedge on three sides of it. West, where a walk came in, " +
    "is the far end of the same thicket, and it is no better from this side. The north " +
    "hedge is dead: grey wood, not a leaf on it, and a gap in it wide enough to step " +
    "through. There is the gap and there is the thicket, and that is the whole of the " +
    "choice.",
  lookAgain:
    "The square, the thicket west, and the gap north through the dead hedge.",
  time: {
    past: true,
    future: false,
  },
  items: [],
  scenery: [
    {
      id: "dead-hedge",
      nouns: ["dead hedge", "north hedge", "dead yew", "grey wood", "wood", "north"],
      description:
        "Every yew in this length died together, which is what happens to yew set in turned " +
        "ground. The rest of the maze did not.",
    },
    {
      id: "gap",
      nouns: ["gap", "hole", "opening", "way north", "break"],
      description: "Where two of the dead ones came out. You can see grass on the other side of it.",
    },
    {
      id: "thicket",
      nouns: ["thicket", "west", "tangle", "growth", "walk", "path", "way west"],
      description:
        "The same thicket from the other end, and it has had the same age to do it in.",
    },
    {
      id: "hedge",
      nouns: ["hedge", "yew", "hedges", "walls", "wall", "maze", "old hedge"],
      description: "Grown out, grown together, and in no hurry. Nobody has told it anything for an age.",
    },
    {
      id: "grass",
      nouns: ["grass", "ground", "square", "floor", "earth", "soil"],
      description: "Rough grass and moss, with the old trodden line along the north side still showing.",
    },
  ],
  exits: {
    // No west and no south: this square and the heart above it are a pocket.
    north: "maze-heart:99-aa",
  },
};
