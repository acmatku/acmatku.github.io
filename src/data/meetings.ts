export interface Meeting { 
  date: string, // Can be any javascript date-time string
  title: string,
  subtitle: string,
}

export const UPCOMING_MEETINGS: Meeting[] = [
  // spring 25
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
    date: "April 2, 2025",
    title: "HackKU Prep + Community Chair Elections!!",
    subtitle: "Learn about HackKU and Hackathons in general!",
  },
  {
    date: "April 9, 2025",
    title: "Research Meeting",
    subtitle: "Dylan and friends talk about doing research at KU!",
  },
  {
    date: "April 16, 2025",
    title: "BugSmashers Takeover",
    subtitle: "The BugSmashers invade 🪲",
  },
  {
    date: "April 23, 2025",
    title: "Microsoft (Tentative)",
    subtitle: "Sandy/Firangiz/James come and talk??",
  },
  {
    date: "April 30, 2025",
    title: "Classic ACM (Tentative)",
    subtitle: "We will find something to do...",
  },
  {
    date: "May 7, 2025",
    title: "Officer Elections for 25-26!!",
    subtitle: "Come elect our new board for the Fall 25' and Spring 26' school year!",
  },
  // fall 25
  {
    date: "August 27, 2025",
    title: "Intro and Info Meeting",
    subtitle: "Show up for the first meeting of the semester! The exec team will be talking about the club and upcoming opportunities!",
  },
  {
    date: "September 3, 2025",
    title: "Career Insights: Jason Salge",
    subtitle: "ACM is hosting Jason Salge of CBOE Global Markets. Learn about FinTech and CS Careers!",
  },
  {
    date: "September 10, 2025",
    title: "Career Fair Prep Meeting",
    subtitle: "Bring your resumes and get some help prepping for the career fair!",
  },
]