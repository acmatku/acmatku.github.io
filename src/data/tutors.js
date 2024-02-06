const COLORS = {
	PURPLE: "#9C27B0",
	GREEN: "#4CAF50",
	BURGANDY: "#800020",
	INDIGO: "#3F51B5",
	AMBER: "#FFC107",
	PINK: "#E91E63",
	DEEP_PURPLE: "#673AB7",
	LIGHT_BLUE: "#03A9F4",
	BLUE_GRAY: "#607D8B",
  ORANGE: "#FF9800",
  RED: "#F44336",
  BROWN: "#795548",
  NAVY: "#000080",
  DARK_BEIGE: "#FFCC99",
  DARK_GREEN: "#006400",

};
const colorKeys = Object.keys(COLORS);
let colorIndex = 0;

export const TUTORS = [
  {
    name: 'Charlie D.',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['M', 10.5, 11.5],
      ['F', 9, 10],
    ],
    courses: [
      'EECS 138',
      'EECS 140',
      'EECS 168',

      'MATH 125',
      'MATH 126',
    ]
  },
  {
    name: 'Wyatt P.',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['M', 14, 15.5],
      ['R', 9, 10],
    ],
    courses: [
      'EECS 138',
      'EECS 140',
      'EECS 168',

      'MATH 125',
      'MATH 126',
    ]
  },
  {
    name: 'Chris C.',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['M', 9, 10],
    ],
    courses: [
      'EECS 140',
      'EECS 168',
      'EECS 210',
      'EECS 268',
      'EECS 348',
      'EECS 388',
      'EECS 468',

      'MATH 125',
      'MATH 126',
      'MATH 127',
      'MATH 290',

      'PHSX 210/211',
      'PHSX 212',
      'PHSX 216',
      'PHSX 236',
    ],
  },
  {
    name: 'Ibrahim S.',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['M', 12, 13],
      ['F', 12, 13],
  ],
    courses: [
      'EECS 140',
      'EECS 168',
      'EECS 268',

      'MATH 125', 
      'MATH 126',
      'MATH 127',
      'MATH 290',
    ],

  },
  {
    name: 'Aniketh A.',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['T', 10, 13],
    ],
    courses: [
      'EECS 140', 
      'EECS 168', 
      'EECS 268', 
      'EECS 348',
      'EECS 388', 
      'EECS 468', 

      'MATH 125', 
      'MATH 126',
      'MATH 127',
      'MATH 290',
    ],
  },
  {
    name: 'John R.',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['R', 10, 11],
      ['F', 15, 16],
    ],
    courses: [
      'EECS 168',
      'MATH 125',
      'MATH 126',
    ],
  },
  {
    name: 'Louis T.',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['T', 14, 16],
      ['R', 14, 16],
    ],
    courses: [
      'EECS 330',
      'EECS 447',
      'EECS 510',
    ],
  },
  {
    name: 'Hunter L.',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['W', 10, 12],
    ],
    courses: [
      'EECS 168',
      'EECS 268',

      'MATH 125',
      'MATH 126',
      'MATH 290',

    ],
  },
  {
    name: "Lauren D.",
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['W', 12, 14],
    ],
    courses: [
      'EECS 168',
      'EECS 210',
      'EECS 268',
      'EECS 348', 
      'EECS 388',
      'MATH 125', 
      'MATH 126', 
      'MATH 127', 
      'MATH 290'],
  },
  {
    name: 'Dellie W.',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [['M', 13, 14]],
    courses: ['EECS 140', 'EECS 168', 'MATH 125'],
  },
];