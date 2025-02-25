export interface Meeting { 
  date: string, // Can be any javascript date-time string
  title: string,
  subtitle: string,
}

export const UPCOMING_MEETINGS: Meeting[] = [
  {
    date: "February 5, 2025",
    title: "Alexis of Da Fed!",
    subtitle: "Come listen to a KU ACM alum talk about their experience at the Federal Reserve!",
  },
  {
    date: "February 12, 2025",
    title: "Career Fair Prep Meeting",
    subtitle: "Bring your resumes and get some help prepping for the career fair!",
  },
  {
    date: "February 26, 2025",
    title: "Making the Most of Your Undergrad",
    subtitle: "The BugSmashers will talk about how to make your undergraduate experience at KU worth it!",
  },
  {
    date: "March 5, 2025",
    title: "Lighting Talks",
    subtitle: "Listen to your fellow students talk about things that interest them. Maybe they'll interest you too!",
  },
  {
    date: "March 12, 2025",
    title: "Research Meeting",
    subtitle: "Come learn about research and research opportunities!",
  },
]
