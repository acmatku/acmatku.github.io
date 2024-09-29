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

let colorIndex = 0;

export const TUTORS = [
  {
    name: "Elizabeth Miller",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["M", 9, 10],
      ["W", 9, 10],
    ],
    courses: [
      "EECS 168",
      "MATH 125",
      "MATH 126",
      "MATH 127",
    ],
  },
  {
    name: "Andrea Diehl",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["M", 10, 11],
      ["W", 10, 11],
    ],
    courses: [
      "MATH 125",
      "MATH 126",
      "MATH 127",
    ],
  },
  {
    name: "Ansuman Sharma",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["M", 11.5, 12.5],
      ["R", 14, 15],
      ["F", 12, 13],
    ],
    courses: [
      "EECS 168",
      "EECS 268",
      "MATH 125",
      "MATH 126",
      "MATH 290",
      "MATH 590",
    ],
  },
  {
    name: "Aiden Burke",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["M", 15, 16],
      ["W", 15, 16],
      ["F", 15, 16],
    ],
    courses: [
      "EECS 138",
      "EECS 168",
      "EECS 268",
      "EECS 210",
      "EECS 348",
      "EECS 388",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
    ],
  },
  {
    name: "Pruthviraj Sadhankar",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["T", 9, 10],
      ["F", 9, 10],
    ],
    courses: [
      "EECS 138",
      "MATH 125",
    ],
  },
  {
    name: "Parker Albright",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["T", 10, 11],
    ],
    courses: [
      "EECS 138",
      "EECS 168",
    ],
  },
  {
    name: "Delroy Wright",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["T", 11, 12],
      ["R", 11, 12],
    ],
    courses: [
      "EECS 138",
      "EECS 140",
      "EECS 168",
      "EECS 268",
      "EECS 210",
      "EECS 330",
      "MATH 125",
      "MATH 126",
      "MATH 127",
      "MATH 290",
    ],
  },
  {
    name: "Aniketh Aatipamula",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["T", 12, 13],
      ["W", 12.5, 14],
      ["R", 12, 13],
      ["F", 13, 14],
    ],
    courses: [
      "EECS 140",
      "EECS 168",
      "EECS 268",
      "EECS 210",
      "EECS 330",
      "EECS 348",
      "EECS 388",
      "EECS 468",
    ],
  },
  {
    name: "Sneha Thomas",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["T", 13, 14],
    ],
    courses: [
      "EECS 168",
      "MATH 125",
      "MATH 126",
    ],
  },
  {
    name: "Nabeel Ahmad",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["T", 15, 16],
      ["R", 15, 16],
    ],
    courses: [
      "EECS 140",
      "EECS 168",
      "EECS 268",
    ],
  },
  {
    name: "Evan Laube",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["W", 11, 12],
      ["F", 11, 12],
    ],
    courses: [
      "EECS 140",
      "EECS 168",
      "EECS 202",
    ],
  },
  {
    name: "Hunter Long",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["R", 9.5, 11],
    ],
    courses: [
      "EECS 168",
      "EECS 268",
      "EECS 210",
      "EECS 348",
      "MATH 125",
      "MATH 126",
      "MATH 290",
    ],
  },
  {
    name: "Charlie Doherty",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["M", 14, 15],
    ],
    courses: [
      "EECS 168",
      "EECS 268",
      "EECS 348",
      "MATH 125",
      "MATH 126",
    ],
  },
  {
    name: "John Rader",
    color: COLORS[colorIndex++ % COLORS.length],
    times: [
      ["F", 10, 11],
    ],
    courses: [
      "EECS 138",
      "EECS 140",
      "EECS 168",
      "EECS 268",
      "MATH 125",
      "MATH 126",
      "MATH 290",
    ],
  },
];
