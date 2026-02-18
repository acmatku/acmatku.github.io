// Just put variables here that are general and don't relate to any given page.

const now = new Date();
export const semester = now.getUTCMonth() < 7 ? "Spring" : "Fall";
export const term = `${semester} ${now.getFullYear()}`;