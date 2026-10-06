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
      ["M", 9, 10],
      ["W", 9, 10],
      ["F", 9, 10],
    ],
    courses: [
      "EECS 138",
      "EECS 140",
      "EECS 141",
      "EECS 168",
      "EECS 169",
      "EECS 210",
      "EECS 268",
      "EECS 330",
      "EECS 348",
      "EECS 388",
      "EECS 461",
      "EECS 510",
      "EECS 645",
      "EECS 678",
      "MATH 125",
      "MATH 145",
      "MATH 126",
      "MATH 146",
      "MATH 127",
      "MATH 147",
      "MATH 290",
      "MATH 291",
    ],
  },
  {
    name: "Angel Schuerman",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["M", 10, 11],
      ["T", 11, 12.5],
      ["W", 10, 11],
      ["R", 11, 12],
    ],
    courses: [
      "EECS 168",
      "EECS 169", 
    ],
  },
  {
    name: "Aditya Kulkarni",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["M", 12, 14]
    ],
    courses: [
      "MATH 125",
      "MATH 145",
      "EECS 168",
      "EECS 169",
      "EECS 268",
    ]
  },
  {
    name: "Alivia Hanes",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["T", 15, 16],
      ["R", 14, 15],
    ],
    courses: [
      "MATH 125",
      "MATH 145",
      "MATH 126",
      "MATH 146",
      "EECS 168",
      "EECS 268",
      "EECS 388",
    ]
  },
  {
    name: "Andrew Huang",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["W", 11, 12],
      ["F", 10, 12]
    ],
    courses: [
      "MATH 125",
      "MATH 145",
      "MATH 126",
      "MATH 147",
      "MATH 127",
      "MATH 147",
      "MATH 290",
      "MATH 291",
      "EECS 138",
      "EECS 140",
      "EECS 141",
      "EECS 168",
      "EECS 169",
      "EECS 210",
      "EECS 268",
      "EECS 330",
      "EECS 348",
      "EECS 388",
      "EECS 461",
      "EECS 465",
      "EECS 510",
      "EECS 565",
      "EECS 623",
      "EECS 649",
      "EECS 678",
    ]
  },
  {
    name: "Jaxon Keleher",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["R", 12, 13]
    ],
    courses: [
      "EECS 138",
      "EECS 140",
      "EECS 168",
      "EECS 268",
      "MATH 125"
    ]
  },
  
  //template
  /*
  {
    name: "Joe",
    color: COLORS[idx++ % COLORS.length],
    id: idx,
    times: [
      ["M", 9, 10],
    ],
    courses: [
      "EECS 138",
      "EECS 140",
      "EECS 168",
      "EECS 210",
      "EECS 268",
      "ANYTHING"
    ],
    flags: ["joe-sp26"],
  }
  */
];

