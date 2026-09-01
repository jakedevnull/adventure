import type { Room } from "../types.ts";

// The Heart of the Maze, 99 BA — the Hush.
// The burial, in progress. This room has no spatial exits at all: it is
// reached only by striding PAST from the heart in 99 AA and left only by
// striding FUTURE, so the player stands here holding the thing the hedger is
// about to put in the ground. She cannot know that and the text does not know
// it either — she never says what the bundle is and never remarks on what the
// player carries (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const mazeHeart99BA: Room = {
  id: "maze-heart:99-ba",
  place: "maze-heart",
  title: "The Heart of the Maze",
  landing: "99 BA",
  age: "the Hush",
  look:
    "A square of turned earth with hedge close on all four sides and no way out of it " +
    "that you can see. The south side is newly set: young yew, closer planted than the " +
    "rest, with the mark of the spade still in the soil under it.\n" +
    "The hedger stands in the middle of the square with her shears down. A bundle in " +
    "oiled cloth lies at her feet.",
  lookAgain:
    "The turned square, and the young hedge set along the south side. The hedger at her " +
    "work, with the bundle at her feet.",
  time: {
    past: false,
    // The only way out, and the only way in is the stride the other way.
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "hedger",
      nouns: ["hedger", "woman", "gardener", "keeper", "her"],
      description:
        "She has clipped this maze since she could hold the shears, and she is the only one " +
        "who holds the plan of it.",
      talk:
        "\"A maze is a good cupboard,\" she says, \"so long as one person has the plan and " +
        "nobody writes it down.\" She looks at the young hedge, not at you.",
    },
    {
      id: "bundle",
      nouns: ["bundle", "cloth", "oiled cloth", "parcel", "package"],
      description: "Long, wrapped close, and tied at both ends by somebody who does not want it wet.",
    },
    {
      id: "young-hedge",
      nouns: ["young hedge", "south hedge", "new hedge", "young yew", "south"],
      description:
        "Set this spring out of the length that was here, and doing well. It has the whole " +
        "square to itself for water.",
    },
    {
      id: "earth",
      nouns: ["earth", "ground", "soil", "square", "spade", "turf"],
      description: "Dug over and raked, and the turf that came off it stacked at the hedge foot to go back.",
    },
    {
      id: "hedge",
      nouns: ["hedge", "yew", "hedges", "walls", "wall", "maze"],
      description: "Cut flat on every side of you. There is no gap in it and there is not going to be.",
    },
    {
      id: "shears",
      nouns: ["shears", "tools", "blade", "blades"],
      description: "Long shears, kept sharp, with her father's initials on the shank and hers under them.",
    },
    {
      id: "bells",
      nouns: ["bells", "bell", "ringing", "sky", "light"],
      description: "The bells carry over the hedge from the valley. She works through them.",
    },
  ],
  // No exits. In and out of this room is a stride, and nothing else.
};
