import { createTutorPosts } from "../utils/utils";

const COLORS = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1",
];

let idx = 0;

export type TimeSlot = [day: string, start: number, end: number];
export interface Tutor {
  name: string,
  id: number,
  color: string,
  times: TimeSlot[]
  courses: string[]
};

export const TUTORS: Tutor[] = [
  {
    name: "Elizabeth Miller",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["M", 9, 10],
      ["F", 9, 10],
    ],
    courses: [
      "EECS 168",
      "MATH 125",
      "MATH 126",
    ],
  },
  {
    name: "Dustin Le",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["M", 11, 12],
    ],
    courses: [
      "EECS 140",
      "EECS 168",
      "EECS 210",
      "EECS 330",
      "EECS 348",
      "EECS 461",
      "EECS 468",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
    ],
  },
  {
    name: "Thomas Savasten",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["M", 12, 13],
      ["W", 10, 11],
      ["F", 10, 11],
    ],
    courses: [
      "EECS 138",
      "EECS 140",
      "EECS 168",
      "EECS 268",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 220",
      "MATH 290",
    ],
  },
  {
    name: "Shravya Matta",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["R", 9, 10],
    ],
    courses: [
      "EECS 168",
      "EECS 268",
      "EECS 210",
      "EECS 330",
      "EECS 348",
      "EECS 388",
      "EECS 468",
      "MATH 125",
      "MATH 126",
    ],
  },
  {
    name: "Charlie Doherty",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["M", 15, 16],
      ["W", 15, 16],
    ],
    courses: [
      "EECS 168",
      "EECS 268",
      "EECS 210",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 210",
    ],
  },
  {
    name: "Hunter Long",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["T", 10, 11],
      ["R", 10, 11],
    ],
    courses: [
      "EECS 140",
      "EECS 168",
      "EECS 268",
      "EECS 210",
      "EECS 330",
      "EECS 348",
      "EECS 468",
      "EECS 510",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
    ],
  },
  {
    name: "Aniketh Aatipamula",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["T", 11, 12.5],
      ["R", 11, 12.5],
    ],
    courses: [
      "EECS 140",
      "EECS 168",
      "EECS 268",
      "EECS 210",
      "EECS 330",
      "EECS 348",
      "EECS 388",
      "EECS 510",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
    ],
  },
  {
    name: "Aiden Burke",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["T", 12.5, 14.5],
      ["R", 12.5, 14.5],
    ],
    courses: [
      "EECS 138",
      "EECS 140",
      "EECS 168",
      "EECS 268",
      "EECS 330",
      "EECS 348",
      "EECS 388",
      "EECS 468",
      "EECS 510",
      "MATH 125",
      "MATH 126",
      "MATH 290",
    ],
  },
  {
    name: "John Rader",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["T", 14.5, 16],
      ["R", 14.5, 16],
    ],
    courses: [
      "EECS 138",
      "EECS 140",
      "EECS 168",
      "EECS 268",
      "EECS 210",
      "EECS 330",
      "EECS 348",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
    ],
  },
  {
    name: "Dellie Wright",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["W", 11, 13],
      ["F", 11, 12.5],
    ],
    courses: [
      "EECS 140",
      "EECS 168",
      "EECS 268",
      "EECS 330",
      "EECS 348",
      "EECS 388",
      "EECS 461",
      "EECS 510",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
      "EPHX 210",
    ],
  },
  {
    name: "Jaiden Green",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["W", 9, 10],
    ],
    courses: [
      "EECS 168",
      "EECS 268",
    ],
  },
  {
    name: "Andrea Diehl",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["W", 13, 14],
    ],
    courses: [
      "EECS 140",
      "EECS 202",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
    ],
  },
  {
    name: "Katharine Swann",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["F", 12.5, 14.5],
    ],
    courses: [
      "EECS 168",
      "EECS 268",
      "MATH 125",
    ],
  },
];

export const TUTOR_POSTS = createTutorPosts(TUTORS);

