import type { Room } from "../types.ts";
import { MILESTONE_LETTERS } from "./high-crossing-2099-ba.ts";

// Crossroads Yard, 2099 AA — the Lettered Age. The end of the walk.
//
// The third reading, and the only one with a footnote. The placard quotes the
// letters exactly — the same constant the mason cut and the girl sat on — and then
// glosses them carefully, at length, and wrongly. The University can read and is
// wrong; the girl could not read and had the number. Neither is corrected here.
//
// The engine has no world state, so nothing checks whether the player stood in the
// road in 2099 BA and watched the letters go in. It does not need to: the placard
// is the same for everybody, and only one reader knows.
// All text here answers to design/WRITING-GUIDE.md.

export const crossroadsYard2099Aa: Room = {
  id: "crossroads-yard:2099-aa",
  place: "crossroads-yard",
  title: "Crossroads Yard",
  landing: "2099 AA",
  age: "the Lettered Age",
  look:
    "Survey pegs run in a line across the crossing with string between them, and the " +
    "milestone stands upright at the centre again, cleaned. The well against the east " +
    "wall is capped with a bolted iron plate. A post by the wall carries a printed " +
    "placard, and a student is copying it into a notebook with their back to the " +
    "stone.\n" +
    "The House is open behind you, with lamps in the window.",
  lookAgain:
    "The pegged crossing, the capped well, and the placard on its post. The student is " +
    "still copying.",
  time: {
    // The far end of the world: the years run back and no further forward.
    past: true,
    future: false,
  },
  items: [
    {
      id: "placard-2099-aa",
      nouns: ["placard", "notice", "label", "sign", "glass", "post"],
      description: "Printed and set under glass on the post, with the University's mark in the corner.",
      takeable: false,
      takeRefusal: "It is bolted to the post, and the post is set deeper than the milestone.",
      read:
        "ON THE BOUNDARY MARKER AT THE HIGH CROSSING. The stone reads:\n" +
        MILESTONE_LETTERS +
        "\nELLERMARK is taken to be an administrative district of the late Before, " +
        "otherwise unattested. NINE is read as an ordinal, the ninth in a numbered " +
        "series of markers set out from an administrative centre. The remaining eight " +
        "have not been found. Visitors are asked not to sit on the stone.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "milestone-2099-aa",
      nouns: ["milestone", "stone", "marker", "letters", "inscription"],
      description: "Upright at the centre of the crossing, scrubbed, with every letter of it legible.",
    },
    {
      id: "student",
      nouns: ["student", "scholar", "them", "notebook", "pencil"],
      description: "They have the placard nearly all down and have not looked up from it.",
      talk: "\"There's a sequence of them,\" the student says. \"Somewhere. That's the interesting part.\"",
    },
    {
      id: "well-2099-aa",
      nouns: ["well", "cap", "plate", "iron", "water", "wellhead", "figures", "depth"],
      description: "Capped with a bolted iron plate, the depth cut into the plate in figures, over the same drystone head.",
    },
    {
      id: "pegs-2099-aa",
      nouns: ["pegs", "peg", "string", "survey", "stakes", "line"],
      description: "Painted stakes at even intervals with string run between them, and the crossing measured to the inch.",
    },
    {
      id: "yard-roads-2099-aa",
      nouns: ["road", "roads", "crossing", "crossroads", "paving", "high road", "high roads", "grass"],
      description: "Cleared back to the paving in a strip six feet wide, with the rest left under the grass for later.",
    },
    {
      id: "yard-house-2099-aa",
      nouns: ["house", "inn", "door", "doorway", "window", "wall", "walls", "turning house", "lamps"],
      description: "Open and warm and lettered, with the lamps going in the front window.",
    },
  ],
  exits: {
    in: "turning-house:2099-aa",
  },
};
