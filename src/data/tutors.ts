import type { Tutor } from "./tutorTypes"

const COLORS = [
  "#e04444", // Red
  "#e06c44", // Orange
  "#e0c44d", // Yellow
  "#92c352", // Green
  "#46b8e0", // Blue
  "#4e7cd9", // Light Blue
  "#7b4ee0", // Purple
  "#e04fa9", // Pink
  "#e04f6c", // Coral
  "#a96c3f", // Brown
  "#36b088", // Teal
  "#e06c17", // Peach
];

let idx = 0;

export const TUTORS: Tutor[] = [
  {
    name: "Thomas Savasten",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["M", 14, 16],
      ["W", 14, 16],
      ["F", 14, 16],
    ],
    courses: [
      "EECS 138",
      "EECS 140",
      "EECS 168",
      "EECS 210",
      "EECS 268",
      "EECS 330",
      "EECS 348",
      "EECS 388",
      "EECS 510",
      "EECS 678",
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
      ["M", 11, 12],
      ["W", 11, 12],
      ["F", 11, 12],
    ],
    courses: [
      "EECS 138",
      "EECS 140",
      "EECS 168",
      "EECS 210",
      "EECS 268",
      "EECS 330",
      "EECS 348",
      "EECS 388",
      "EECS 443",
      "EECS 447",
      "EECS 461",
      "EECS 465",
      "EECS 468",
      "EECS 510",
      "EECS 563",
      "EECS 565",
      "EECS 569",
      "EECS 581",
      "EECS 582",
      "EECS 649",
      "EECS 662",
      "EECS 678",
      "EECS 695",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
      "EPHX 210",
    ],
  },
  {
    name: "Lena Palmieri",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["T", 13, 15],
      ["R", 13, 15],
    ],
    courses: [
      "EECS 140",
      "EECS 168",
      "EECS 210",
      "EECS 268",
      "EECS 348",
      "EECS 388",
      "EECS 461",
      "EECS 468",
      "EECS 510",
      "EECS 678",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
    ]
  },
  {
    name: "Joshua Lins",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["T", 10, 12],
      ["R", 10, 12],
    ],
    courses: [
      "EECS 168",
      "EECS 268",
      "EECS 388",
      "EECS 461",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
      "EPHX 210",
    ]
  },
  {
    name: "Nathenael Getahum",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["M", 12, 13],
    ],
    courses: [
     "EECS 138",
     "EECS 168",
    ]
  },
  {
    name: "Lauren D'Souza",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["M", 13, 14],
      ["W", 13, 14],
    ],
    courses: [
      "EECS 138",
      "EECS 168",
      "EECS 210",
      "EECS 268",
      "EECS 348",
      "EECS 388",
      "EECS 468",
      "EECS 510",
      "EECS 563",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
      "EPHX 210",
    ]
  },
  {
    name: "Zema Samuel",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["M", 9, 11],
      ["F", 9, 11],
    ],
    courses: [
     "EECS 138",
     "EECS 168",
    ]
  },
  {
    name: "Eliana Isenburg",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["W", 12, 13],
      ["R", 9, 10],
    ],
    courses: [
      "EECS 140",
      "EECS 168",
      "EECS 210",
      "EECS 268",
      "EECS 388",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
    ],
    flags: ["eliana-sp26"],
  },
/*   {
    name: "Addison Bartelli",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["T", 11, 12],
      ["R", 11, 12],
    ],
    courses: [
      "EECS 138",
      "EECS 140",
      "EECS 168",
      "EECS 210",
      "EECS 268",
      "EECS 330",
      "EECS 348",
      "EECS 388",
      "EECS 465",
      "EECS 468",
      "EECS 565",
      "EECS 569",
      "EECS 581",
      "EECS 677",
      "EECS 678",
      "MATH 125",
    ],
  }, */
];

