import { I18N } from "../utils/config";
import type { Post } from "../types";
import type { BugsmasherMeeting } from "../data/bugsmashers.ts";
import type { Tutor } from "../data/tutorTypes";

export const createBugsmasherPosts = (meetings: BugsmasherMeeting[], authors: string): Post[] => {
  return meetings.map((meeting) => {
    const slug = `${meeting.title.toLowerCase()}-${meeting.semester.toLowerCase()}`;
    return ({
      title: meeting.title,
      id: 'bugsmashers-' + slug,
      slug: slug,
      publishDate: meeting.date,
      permalink: '/bugsmashers/' + slug,
      excerpt: meeting.subtitle,
      content: meeting.content,
      author: authors,
      tags: (meeting.tags ? meeting.tags : undefined),
    })
  })
}

export const createTutorPosts = (tutors: Tutor[]): Post[] => {
  return tutors.map((tutor) => {
    const slug = tutor.name
      .toLowerCase()
      .trim()
      .replaceAll(/\s/g, "-");
    return ({
      title: tutor.name,
      id: 'tutor-' + slug,
      slug: slug,
      publishDate: new Date(), // Manually added this date
      permalink: '/tutoring/' + slug,
      excerpt: "Hello, I'm tutoring for the Fall 2025 semester!", // Manually changed the semester. Again.
      content: `I am available to tutor the following classes: ${tutor.courses.join(', ')}`,
      author: tutor.name,
    })
  })
}

const formatter: Intl.DateTimeFormat =
  I18N?.dateFormatter ||
  new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

export const getFormattedDate = (date: Date): string =>
  date ? formatter.format(date) : "";

export const trim = (str = "", ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

// Function to format a number in thousands (K) or millions (M) format depending on its value
export const toUiAmount = (amount: number) => {
  if (!amount) return 0;

  let value: string;

  if (amount >= 1000000000) {
    const formattedNumber = (amount / 1000000000).toFixed(1);
    if (Number(formattedNumber) === parseInt(formattedNumber)) {
      value = parseInt(formattedNumber) + "B";
    } else {
      value = formattedNumber + "B";
    }
  } else if (amount >= 1000000) {
    const formattedNumber = (amount / 1000000).toFixed(1);
    if (Number(formattedNumber) === parseInt(formattedNumber)) {
      value = parseInt(formattedNumber) + "M";
    } else {
      value = formattedNumber + "M";
    }
  } else if (amount >= 1000) {
    const formattedNumber = (amount / 1000).toFixed(1);
    if (Number(formattedNumber) === parseInt(formattedNumber)) {
      value = parseInt(formattedNumber) + "K";
    } else {
      value = formattedNumber + "K";
    }
  } else {
    value = Number(amount).toFixed(0);
  }

  return value;
};
