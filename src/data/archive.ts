/*
DATA FOR THE ARCHIVE PAGE ../pages/archive.astro

Parsed date strings are in ISO format (YYYY-MM-DD)
*/

// be sure to edit these at the same time. not sure of a great way to couple them with code.
export const ARCHIVE_YEARS: ArchiveYear[] = [
    "25-26"
];
export type ArchiveYear = "25-26";

// Modify as needed.
export type ArchiveTag = "Test" |
    "Research" |
    "Talks" |
    "Dr. Alexander" |
    "AI/ML" |
    "Collab" |
    "Mobile" |
    "Dr. Gibbons" |
    "Industry" |
    "Professor" |
    "Workshops" |
    "Linux" |
    "Fun" |
    "Schoonover" |
    "Professional Development" |
    "Intro";

export const ALL_ENTRY_TYPES: ArchiveEntryType[] = [
    "Meetings", "Bugsmashers", "HackKU", "Miscellaneous"
];
export type ArchiveEntryType = "Meetings" | "Bugsmashers" | "HackKU" | "Miscellaneous";

export type ArchiveItem = {
    name: string;
    description?: string;
    year: ArchiveYear;
    semester: "Fall" | "Spring";
    links?: {
        name: string;
        url: URL;
    }[];
    entryType: ArchiveEntryType;
    date: Date;
    tags?: ArchiveTag[];
}

export const ALL_ARCHIVE_ITEMS: ArchiveItem[] = [
    {
        date: new Date("2025-12-03"),
        semester: "Fall",
        year: "25-26",
        name: "ACM x SASE End of Year Wind-Down",
        links: [
            {
                name: "Slides",
                url: new URL("https://docs.google.com/presentation/d/180XO632jU4g8gC7YC2khLfOVg2nN-qjEyRlEmSTeJZk/edit?usp=sharing")
            },
        ],
        entryType: "Meetings",
        tags: ["Collab", "Fun"],
    },
    {
        date: new Date("2025-11-19"),
        name: "Dr. Alexander on Grad School",
        semester: "Fall",
        year: "25-26",
        description: "Dr. Perry Alexander presents on his experience with research and elaborates upon it as a career path.",
        entryType: "Meetings",
        links: [
            {
                name: "ACM Slides",
                url: new URL("https://docs.google.com/presentation/d/1IV50-xAsipy-A27PYsard40ZYocNBbjLgVFlJGQsXE8/edit?usp=sharing")
            }
        ],
        tags: ["Research", "Talks", "Dr. Alexander", "Professor"]
    },
    {
        date: new Date("2025-11-12"),
        name: "ACM x AI Club Workshop",
        semester: "Fall",
        year: "25-26",
        entryType: "Meetings",
        links: [
            {
                name: "Slides",
                url: new URL("https://docs.google.com/presentation/d/1IqY1HyNw4NH_lQCQUNpG85KIyqoTvi1ZYcx5CCdN6cA/edit?usp=sharing")
            }
        ],
        description: "Spencer from AI club walks ACM through creating an ML classifier.",
        tags: ["AI/ML", "Collab", "Workshops"]
    },
    {
        date: new Date("2025-11-05"),
        name: "Lightning Talks Fall '25",
        description: "ACM members speak on their most adamently-held computing-adjacent beliefs.",
        semester: "Fall",
        entryType: "Meetings",
        year: "25-26",
        tags: ["Talks", "Fun"],
        links: [
            {
                name: "Meeting Slides",
                url: new URL("https://docs.google.com/presentation/d/1h5tOP0Yqm45dPzIBC0lkynWz_ZqnBSkloTCo5nqMBD0/edit?usp=sharing")
            },
            {
                name: "Why Ubuntu is the Worst Linux Distribution -- Addison",
                url: new URL("https://docs.google.com/presentation/d/1c_76_IuYCtx_dBAxwAHQRVfHeoL2banni9VJpZJ5O7s/edit?usp=sharing")
            },
            {
                name: "Async Rust and the Borrow Checker -- Eyassu",
                url: new URL("https://drive.google.com/file/d/1PdFNXR3pKHYK0T1bA6eSSeAJeNnbNviu/view?usp=sharing")
            },
            {
                name: "Intro to Blockchain and When Not to Use It -- Nischay",
                url: new URL("https://drive.google.com/file/d/106XTtxfwOPxiGbwbkaffyDzm2FkesoY0/view?usp=sharing")
            },
            {
                name: "How Does a Neural Net Work? -- Spencer",
                url: new URL("https://docs.google.com/presentation/d/1iUANCfwOrKjmzzsdMWrZM75SZW6EBauuWsV9r4UGaKQ/edit?usp=sharing")
            },
        ]
    },
    {
        date: new Date ("2025-10-29"),
        name: "Dellie Speaks on Vim and Terminal",
        semester: "Fall",
        year: "25-26",
        entryType: "Meetings",
        tags: ["Talks", "Linux"],
        links: [
            {
                name: "ACM Slides",
                url: new URL("https://docs.google.com/presentation/d/1qwSmbg3JAok9vP1NVQcyRjmbRPXVJGlx9tBIPuFbrNc/edit?usp=sharing")
            },
            {
                name: "Dellie's Slides",
                url: new URL("https://docs.google.com/presentation/d/1G2K7bSbTkRZMkwV9h6NYyOmrwaYY3qaGb8yaA7ii_Ho/edit?usp=sharing")
            }
        ]
    },
    {
        name: "Scratch Competition",
        description: "ACM members put their programming skills to the test in the finest language there is.",
        date: new Date("2025-10-05"),
        semester: "Fall",
        year: "25-26",
        entryType: "Meetings",
        tags: ["Fun"],
        links: [
            {
                name: "Slides",
                url: new URL("https://docs.google.com/presentation/d/120JU7FjvmSHKb7emKjAMcu8eGl2emuLdz-vbWxjr_B4/edit?usp=sharing")
            }
        ]
    },
    {
        date: new Date("2025-10-08"),
        name: "Dr. Gibbons Q&A",
        description: "Dr. Gibbons answers the most pressing questions CS students have to offer. This meeting was conducted as a live zoom call which cannot be made available here.",
        semester: "Fall",
        year: "25-26",
        entryType: "Meetings",
        tags: ["Dr. Gibbons", "Professor", "Fun"],
        links: [
            {
                name: "Slides",
                url: new URL("https://docs.google.com/presentation/d/10jhpGxNx8sjAY1sESiUUsW499StkuM_C9ayGeqmv6gU/edit?usp=sharing")
            }
        ]
    },
    {
        date: new Date("2025-10-01"),
        name: "Schoonover Speaks on Industry Experience at Garmin",
        year: "25-26",
        semester: "Fall",
        entryType: "Meetings",
        tags: ["Professor", "Industry", "Schoonover"],
        links: [
            {
                name: "Slides (Adminstivia Only)",
                url: new URL("https://docs.google.com/presentation/d/1CvU8NHBhaB2mV93EVIiKmIJ8mP0Fi7BDcOjy2OQ50KA/edit?usp=sharing")
            }
        ]
    },
    {
        date: new Date("2025-09-24"),
        name: "BugSmashers Takeover: Jeopardy!",
        semester: "Fall",
        year: "25-26",
        entryType: "Meetings",
        tags: ["Fun"],
        links: [
            {
                name: "Meeting and Jeopardy Slides",
                url: new URL("https://docs.google.com/presentation/d/1Nj9wqRv9E_qi9I4c3drECnlwnbcTxGvM/edit?usp=sharing&ouid=112849630344823845812&rtpof=true&sd=true")
            }
        ]
    },
    {
        date: new Date("2025-09-10"),
        name: "Resume Review and Workshop",
        semester: "Fall",
        year: "25-26",
        entryType: "Meetings",
        tags: ["Workshops", "Professional Development"],
        links: [
            {
                name: "Slides",
                url: new URL("https://docs.google.com/presentation/d/1tnGYLaTlxDsjojrEOrmaA_D_Kwm3cDzlxzUjHj7houI/edit?usp=sharing")
            }
        ]
    },
    {
        date: new Date("2025-09-03"),
        name: "Jason Salge Speaks on Experience at CBOE",
        year: "25-26",
        semester: "Fall",
        entryType: "Meetings",
        tags: ["Industry", "Talks"],
        links: [
            {
                name: "Slides (ACM Only)",
                url: new URL("https://docs.google.com/presentation/d/1WP7a-hDwQgzfdsr4qjb_Huq_PLjgzu1BFHAsoXGihxQ/edit?usp=sharing")
            }
        ]
    },
    {
        date: new Date("2025-08-27"),
        name: "25-26 Intro Meeting",
        semester: "Fall",
        year: "25-26",
        description: "ACM and its Exec Board introduce themselves for the year.",
        entryType: "Meetings",
        tags: ["Intro"],
        links: [
            {
                name: "Slides",
                url: new URL("https://docs.google.com/presentation/d/1p6fQ5bxVPbSFUus6wYRdNfxGnmxhReYw1b6IYgCXfPg/edit?usp=sharing")
            }
        ]
    }

];