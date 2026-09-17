import type { Room } from "../types.ts";

// The Turning House, 99 AA — the Morning Country.
// One stride from the Hush, a thousand years, straight over the Gap. This room is
// the aftermath of something it does not know happened: no evidence about the
// Awakening appears here, only how this age copes. The drystone is still standing
// and the mortared work is not, which is the whole persistence argument in one
// sentence. The family is still here and no longer knows why.
// All text here answers to design/WRITING-GUIDE.md.

export const turningHouse99Aa: Room = {
  id: "turning-house:99-aa",
  place: "turning-house",
  title: "The Turning House",
  landing: "99 AA",
  age: "the Morning Country",
  look:
    "Half the roof is gone and the rest is thatched with whatever came to hand. The " +
    "drystone stands exactly as it was laid, having never needed mortar; the mortared " +
    "work along the road is a long heap of stone and lime. A woman keeps a small fire in " +
    "the old hearth.\n" +
    "A child is copying the letters off a fallen lintel, carefully, and cannot read them.",
  lookAgain:
    "Half a roof, a small fire, and the child still copying the lintel.",
  time: {
    past: true,
    future: true,
  },
  items: [
    {
      id: "lintel",
      nouns: ["lintel", "letters", "stone", "inscription"],
      description:
        "A fallen lintel with letters down one face, which the child is copying without knowing what they are.",
      takeable: false,
      takeRefusal: "It weighs what a lintel weighs.",
      read: "Deep-cut, and legible if you have seen the hand before. It is the name of this house.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "woman-99-aa",
      nouns: ["woman", "keeper", "her", "mother"],
      description: "She is here because her mother was here, and does not go back further than that.",
      talk: "\"We keep it,\" she says. \"There was a reason.\"",
    },
    {
      id: "child",
      nouns: ["child", "girl", "boy", "slate"],
      description: "Eight or so, with a slate and good handwriting.",
    },
    {
      id: "hearth-99-aa",
      nouns: ["fire", "hearth", "fireplace", "flames"],
      description: "A small fire in a hearth built for a bigger one.",
    },
    {
      id: "walls-99-aa",
      nouns: ["walls", "wall", "drystone", "stones", "masonry"],
      description: "Drystone as laid, held up by nothing but the fit of it, which was enough.",
    },
    {
      id: "roof",
      nouns: ["roof", "thatch", "rafters", "sky"],
      description: "Thatch over half of it, and sky over the rest.",
    },
    {
      id: "ruins",
      nouns: ["ruins", "ruin", "rubble", "heap", "village", "buildings"],
      description: "Stone shapes in the grass for a mile out, and nobody here has a name for any of them.",
    },
    {
      id: "table-99-aa",
      nouns: ["table", "long table"],
      description: "The long table is still the long table, shorter by a yard where it burned.",
    },
    {
      id: "road-99-aa",
      nouns: ["road", "roads", "crossroads", "high road", "high roads"],
      description: "The high roads are under the grass now, and still the fastest way anywhere.",
    },
  ],
};
