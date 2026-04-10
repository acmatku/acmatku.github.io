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
  {
    date: "September 24, 2025",
    title: "Bugsmashers Takeover!",
    subtitle: "Molly and Thomas take over the general meeting this week.",
  },
  {
    date: "October 1, 2025",
    title: "Schoonover Talk",
    subtitle: "Instructor Schoonover will speak about his 17 years at Garmin at this week's meeting.",
  },
  {
    date: "October 8, 2025",
    title: "Gibbons Q&A",
    subtitle: "Dr. Gibbons will be doing his yearly Q&A at this week's meeting!",
  },
  {
    date: "October 15, 2025",
    title: "Scratch Codeoff!",
    subtitle: "Take a trip back to high school as ACM hold a fun scratch-based meeting!",
  },
  {
    date: "October 22, 2025",
    title: "Bugsmashers Takeover 2",
    subtitle: "The Bugsmashers will be taking over another meeting with an exciting topic.",
  },
  {
    date: "October 29, 2025",
    title: "Text Editor Fashion",
    subtitle: "Dellie is giving a talk about text editors and IDEs and will speak on spicing up your development experience.",
  },
  {
    date: "November 5, 2025",
    title: "Lightning Talks",
    subtitle: "Come and listen to (and maybe give) miniture talks on a whole litany of vaguely CS-adjacent topics!",
  },
  {
    date: "November 12, 2025",
    title: "AI Club Collab Meeting",
    subtitle: "Spencer Talks about AI and Google Colab!",
  },
  {
    date: "November 19, 2025",
    title: "Dr. Alexander Talk",
    subtitle: "Dr. Alexander will be giving a talk likely about his research topics.",
  },
  {
    date: "December 3, 2025",
    title: "Fun Meeting!!",
    subtitle: "Join ACM for some pre-finals fun to end the semester.",
  },
  // spring 26
  {
    date: "January 28, 2026",
    title: "Kickoff Meeting",
    subtitle: "Join ACM to Kick-off the Spring Semester with a game of Stack Overfeud!!",
  },
  {
    date: "February 4, 2026",
    title: "Collab w/ KU Blockchain",
    subtitle: "ACM and KUBI are collaborating on a presentation about blockchain technologies. Show up to learn about this emerging technology!",
  },
  {
    date: "February 11, 2026",
    title: "James Hurd on Microsoft",
    subtitle: "Past ACM Co-Chair and HackKU director James Hurd speaks on his experience at Microsoft.",
  },
  {
    date: "February 18, 2026",
    title: "Python After 168 and 268",
    subtitle: "Serom and Andrew talk about what Python looks like after introductory courses.",
  },
  {
    date: "February 26, 2026",
    title: "BugSmashers Takeover: Game Night!",
    subtitle: "The BugSmashers take over this week's general meeting to bring out some games! Be there!",
  },
  {
    date: "March 4, 2026",
    title: "Programming Best Practices",
    subtitle: "Aniketh and Hunter discuss programming best practices important to learn for any new software engineer.",
  },
  {
    date: "March 12, 2026",
    title: "ACM x WIC: Leetcode and Art Night",
    subtitle: "LEEP2 2425: ACM joins Women in Computing for a Leetcode and art combo meeting!",
  },
  {
    date: "March 25, 2026",
    title: "Alarm.com Industry Speaker",
    subtitle: "Join ACM for a speech from a software engineer from Alarm.com.",
  },
  {
    date: "April 1, 2026",
    title: "ACM x Upsilon Pi Epsilon",
    subtitle: "ACM is holding a collaborative meeting with Upsilon Pi Epsilon, a computer science honor society.",
  },
  {
    date: "April 8, 2026",
    title: "Archer Speaker on DevOps",
    subtitle: "Bruce Allison of Archer Integrated Risk Management will speak on their experience with DevOps and service ownership.",
  },
  {
    date: "April 13, 2026",
    title: "HackKU Beginner's Series: Intro C++ 6-7pm Eaton 2",
    subtitle: "New to writing code in statically-typed c-like languages? Pull up to this entry in the beginner's series to learn more!",
  },
  {
    date: "April 14, 2026",
    title: "HackKU Beginner's Series: AI for Non-Coders 6-7pm LEEP G415",
    subtitle: "Learn how to leverage AI in this beginner's series workshop! Open and accessible to students of all backgrounds.",
  },
  {
    date: "April 15, 2026",
    title: "HackKU Beginner's Series: Hackathons 101 6-7pm Eaton 2",
    subtitle: "Never attended a hackathon before? Attend this beginner's series talk to learn what its all about a get pointers on what to bring and expect!",
  },
  {
    date: "April 16, 2026",
    title: "HackKU Beginner's Series: Intro JavaScript 5-6pm LEEP G415",
    subtitle: "Molly and Thomas will go over introductory JavaScript concepts in this beginner's series workshop. Show up to learn about frameworks and the DOM!",
  },
]