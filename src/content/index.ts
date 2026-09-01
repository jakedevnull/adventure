import type { World } from "../types.ts";
import { turningHouse } from "./turning-house.ts";
import { turningHouse1099BA } from "./turning-house-1099-ba.ts";
import { turningHouse99BA } from "./turning-house-99-ba.ts";
import { turningHouse99AA } from "./turning-house-99-aa.ts";
import { turningHouse1099AA } from "./turning-house-1099-aa.ts";
import { turningHouse2099AA } from "./turning-house-2099-aa.ts";
import { backGarden2099BA } from "./back-garden-2099-ba.ts";
import { backGarden1099BA } from "./back-garden-1099-ba.ts";
import { backGarden99BA } from "./back-garden-99-ba.ts";
import { backGarden99AA } from "./back-garden-99-aa.ts";
import { backGarden1099AA } from "./back-garden-1099-aa.ts";
import { backGarden2099AA } from "./back-garden-2099-aa.ts";
import { mazeMouth99BA } from "./maze-mouth-99-ba.ts";
import { mazeMouth99AA } from "./maze-mouth-99-aa.ts";
import { longWalk99BA } from "./long-walk-99-ba.ts";
import { longWalk99AA } from "./long-walk-99-aa.ts";
import { farWalk99BA } from "./far-walk-99-ba.ts";
import { farWalk99AA } from "./far-walk-99-aa.ts";
import { mazeHeart99AA } from "./maze-heart-99-aa.ts";
import { mazeHeart99BA } from "./maze-heart-99-ba.ts";
import { cellar2099BA } from "./cellar-2099-ba.ts";

// The assembled world. Every room in every era is registered here, and
// `landings` lists every era oldest-first — PAST and FUTURE step along it.
//
// Authoring a new room (see .claude/skills/generate-story): write it in its
// own file under src/content/, import it here, add it to `rooms`, and add its
// landing to `landings` if the era is new. Keep `landings` in chronological
// order. The engine validates the world on startup and `npm run eval:reach`
// proves every room can be reached from the start.

export const world: World = {
  start: "turning-house",
  landings: ["2099 BA", "1099 BA", "99 BA", "99 AA", "1099 AA", "2099 AA"],
  rooms: [
    turningHouse,
    turningHouse1099BA,
    turningHouse99BA,
    turningHouse99AA,
    turningHouse1099AA,
    turningHouse2099AA,
    backGarden2099BA,
    backGarden1099BA,
    backGarden99BA,
    backGarden99AA,
    backGarden1099AA,
    backGarden2099AA,
    mazeMouth99BA,
    mazeMouth99AA,
    longWalk99BA,
    longWalk99AA,
    farWalk99BA,
    farWalk99AA,
    mazeHeart99AA,
    mazeHeart99BA,
    cellar2099BA,
  ],
};
