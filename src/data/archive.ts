/*
DATA FOR THE ARCHIVE PAGE ../pages/archive.astro

Parsed date strings are in ISO format (YYYY-MM-DD)
*/

// be sure to edit these at the same time. not sure of a great way to couple them with code.
export const ARCHIVE_YEARS: string[] = [
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
        url: string;
    }[];
    tagline?: string;
    entryType?: "Meeting" | "Bugsmashers" | "HackKU";
    date: Date;
    tags?: string[];
}

/* export type ArchiveItem = ArchiveItemPrototype & { 
    key: number;
} */

export const ALL_ARCHIVE_ITEMS: ArchiveItem[] = [
    {
        date: new Date("2025-12-11"),
        semester: "Fall",
        year: "25-26",
        name: "Test 1",
    },
    {
        date: new Date("2025-12-12"),
        semester: "Fall",
        year: "25-26",
        name: "Test 2",
    },
    {
        date: new Date("2025-12-13"),
        semester: "Fall",
        year: "25-26",
        name: "Test 3",
    }
];

/* export const ALL_ARCHIVE_ITEMS: ArchiveItem[] = ALL_ARCHIVE_ITEMS_PREKEY.map((e, idx) => {
    const newItem: ArchiveItem = {
        ...e,
        key: ALL_ARCHIVE_ITEMS_PREKEY.length - idx - 1
    }
    return newItem;
});

function loadInItemDefinitions() {
    const outList: ArchiveItemPrototype[] = [
        {
            date: new Date("2025-12-11"),
            semester: "Fall",
            year: "25-26",
            name: "Test 1",
        },
        {
            date: new Date("2025-12-12"),
            semester: "Fall",
            year: "25-26",
            name: "Test 2",
        },
        {
            date: new Date("2025-12-13"),
            semester: "Fall",
            year: "25-26",
            name: "Test 3",
        }
    ];

    return outList;
} */