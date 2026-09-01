import type { Room } from "../types.ts";

// The Turning House, 99 BA — the Hush.
// Bells rung against something coming; everyone feels it, no one can say what
// (UNIVERSE.md §4). The last landing before the Gap: FUTURE from here carries
// the player clean over it to 99 AA.
//
// Nothing in this room is offered and nothing can be carried away. The keeper
// asks instead, and hers is the only thing anyone asks of the player on this
// tour. All text here answers to design/WRITING-GUIDE.md.

export const turningHouse99BA: Room = {
  id: "turning-house:99-ba",
  place: "turning-house",
  title: "The Turning House",
  landing: "99 BA",
  age: "the Hush",
  look:
    "The shutters are barred and the common room is full, and quiet. The fire is banked " +
    "to a red seam under the ash, the way a fire is kept when nobody trusts the night. " +
    "Bells are going in the valley, one village and then another. The hatch to the cellar " +
    "is open, and it is the only thing in this House that is.\n" +
    "The keeper stands at the window with the bell-rope knotted at her shoulder. " +
    "Nothing sits on the sill, and nothing is set out on the tables.",
  lookAgain:
    "The barred common room, the banked fire, the bells. The keeper at her window, and " +
    "the sill bare in front of her.",
  time: {
    past: true,
    // The stride over the Gap. It lands in 99 AA, and the calendars are wrong
    // about how far that is (UNIVERSE.md §2, the Lapse).
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "keeper",
      nouns: ["keeper", "woman", "landlady", "innkeeper", "her"],
      description: "She watches the road and not the room. Whatever is coming, she means to see it first.",
      talk:
        "\"You'll be going on,\" she says, and it is not a question. \"There's a brass " +
        "lamp in this House. Take it as far as you go. I'd rather not know how far that is.\"",
    },
    {
      id: "bells",
      nouns: ["bells", "bell", "ringing"],
      description: "Bells in the valley, one village at a time, all night. Nobody has said what for.",
    },
    {
      id: "bell-rope",
      nouns: ["rope", "bell-rope", "bell rope", "knot"],
      description: "The rope comes down through the roof to a knot at her shoulder. Hers to pull, and she has not.",
    },
    {
      id: "fire",
      nouns: ["fire", "hearth", "flame", "flames", "fireplace", "ash", "embers"],
      description: "Banked down to a red seam. It will keep like that until morning, if asked.",
    },
    {
      // The way down. This face has no stair scenery, so the cellar steps may
      // have the word.
      id: "cellar-hatch",
      nouns: ["hatch", "cellar", "cellar steps", "cellar stair", "steps", "trap", "trapdoor"],
      description: "Propped on the stick that lives there. The stores went down it this week and have not come up.",
    },
    {
      id: "sill",
      nouns: ["sill", "windowsill", "window", "ledge"],
      description: "A deep stone sill under a barred window. Nothing on it.",
    },
    {
      id: "shutters",
      nouns: ["shutters", "shutter", "bar", "bars"],
      description: "Barred from the inside with a beam that was cut for the job this winter.",
    },
    {
      id: "people",
      nouns: ["people", "crowd", "folk", "company", "room", "them"],
      description:
        "Farmers and carters, sitting close. They came in for the company and are not using it.",
    },
    {
      id: "tables",
      nouns: ["tables", "table", "long table", "benches"],
      description: "Scrubbed pale and bare tonight. The House is not selling anything.",
    },
    {
      id: "walls",
      nouns: ["walls", "wall", "stones", "stone", "drystone", "masonry", "plaster"],
      description: "The plaster came off years ago. Nobody has had the heart to put it back.",
    },
    {
      id: "road",
      nouns: ["road", "roads", "crossroads", "high road", "high roads"],
      description: "Empty in all directions, which is the whole of tonight's news.",
    },
  ],
  exits: {
    // The back door, into the garden (The Gardens Behind the House).
    north: "back-garden:99-ba",
    // The hatch behind the bar (Basement Encounter).
    down: "cellar:99-ba",
  },
};
