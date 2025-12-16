/*
DATA FOR THE ARCHIVE PAGE ../pages/archive.astro

Parsed date strings are in ISO format (YYYY-MM-DD)
*/

// be sure to edit these at the same time. not sure of a great way to couple them with code.
export const ARCHIVE_YEARS: ArchiveYear[] = [
    "23-24", "24-25", "25-26"
];
export type ArchiveYear = "23-24" | "24-25" | "25-26";

export type ArchiveItem = {
    name: string;
    description?: string;
    year: ArchiveYear;
    semester: "Fall" | "Spring";
    links?: {
        name: string;
        url: URL;
    }[];
    entryType?: "Meetings" | "Bugsmashers" | "HackKU";
    date: Date;
    tags?: string[];
}

export const ALL_ARCHIVE_ITEMS: ArchiveItem[] = [
    {
        date: new Date("2025-12-11"),
        semester: "Fall",
        year: "25-26",
        name: "Meeting 1",
        description: "Something or other: lorem ispuim dolor isquala bungus supreme",
        entryType: "Meetings",
        tags: ["sample", "test"],
        links: [
            {
                name: "Example",
                url: new URL("https://example.com/"),    
            },
            {
                name: "Distinguished Example",
                url: new URL("https://example.org"),
            }
        ]
    },
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
    },
    {
        date: new Date("2025-12-13"),
        semester: "Fall",
        year: "25-26",
        name: "Test 3",
    }
];