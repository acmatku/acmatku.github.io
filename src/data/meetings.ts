export interface Meeting { 
  date: Date,
  title: string,
  subtitle: string,
}

export const UPCOMING_MEETINGS: Meeting[] = [
  {
    date: new Date("February 5, 2025"),
    title: "Alexis of Da Fed!",
    subtitle: "Come listen to a KU ACM alum talk about their experience at the Federal Reserve!",
  },
  {
    date: new Date("February 12, 2025"),
    title: "Career Fair Prep Meeting",
    subtitle: "Bring your resumes and get some help prepping for the career fair!",
  },
  {
    date: new Date("February, 19"),
    title: "Bugsmashers Takeover!",
    subtitle: "TBD",
  },
  {
    date: new Date("February, 26, 2025"),
    title: "Lighting Talks",
    subtitle: "Listen to your fellow students talk about things that interest them. Maybe they'll interest you too!",
  },
  {
    date: new Date("March 5, 2025"),
    title: "Research Meeting",
    subtitle: "Come learn about research and research opportunities!",
  },
  {
    date: new Date("March 12, 2025"),
    title: "Fun Meeting",
    subtitle: "We're having fun!",
  },
]
