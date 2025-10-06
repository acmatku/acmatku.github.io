import { createBugsmasherPosts, getFormattedDate } from '../utils/utils';

export interface BugsmasherMeeting {
  title: string;
  subtitle: string;
  semester: string;
  date: Date;
  tags?: string[];
  content: string;
}

const AUTHORS = 'Molly M. & Thomas S.';

export const HACKNIGHTS: BugsmasherMeeting[] = [
  {
    title: 'Operating Systems',
    subtitle: 'Windows, Linux, and Command Line',
    semester: 'F25',
    date: new Date('September 11, 2025'),
    content: 'This meeting will be focused different operating systems and navigating the command line.',
    tags: ['bash', 'linux', 'terminal', 'cli'],
  },
  {
    title: 'Version Control Systems',
    subtitle: 'Git, GitHub, and More',
    semester: 'F25',
    date: new Date('September 25, 2025'),
    content: 'This meeting will be focused on different version control systems, from git to the other ones.',
    tags: ['vcs', 'version control', 'git'],
  },
  {
    title: 'Basic Web Tech',
    subtitle: 'HTML, CSS, and JavaScript',
    semester: 'F25',
    date: new Date('October 9, 2025'),
    content: 'Learn how to use HTML, CSS, and JavaScript to create a personal website.',
    tags: ['html', 'css', 'javascript', 'website'],
  },
  {
    title: 'Website Kickstarter',
    subtitle: 'It\'s now your turn!',
    semester: 'F25',
    date: new Date('October 16, 2025'),
    content: 'Use HTML, CSS, and JavaScript to create a personal website.',
    tags: ['html', 'css', 'javascript', 'website'],
  },
  {
    title: 'Software Reverse Engineering',
    subtitle: 'No Source Code, No Problem!',
    semester: 'F25',
    date: new Date('October 30, 2025'),
    content: 'Use Ghidra to understand and reverse engineer binaries.',
    tags: ['reverse engineering', 'ghidra'],
  },
  {
    title: 'Make a Mobile App',
    subtitle: 'Learn About Mobile Frameworks.',
    semester: 'F25',
    date: new Date('November 6, 2025'),
    content: 'Use Flutter or Swift to make a cross-platform mobile app.',
    tags: ['mobile', 'flutter', 'swift', 'app'],
  },
  {
    title: 'Gamedev!',
    subtitle: 'An Introduction to Godot',
    semester: 'F25',
    date: new Date('November 20, 2025'),
    content: 'This meeting will be focused different operating systems and navigating the command line.',
    tags: ['games', 'godot'],
  },
  {
    title: 'C and C++',
    subtitle: 'This Isn\'t a Gibbons Class Anymore',
    semester: 'S26',
    date: new Date('January 29, 2026'),
    content: 'This meeting will be focused on C and C++. Learn about pointers and memory management.',
    tags: ['c', 'c++', 'pointers'],
  },
  {
    title: 'Compiler Kickstarter',
    subtitle: 'Get Started on Your Own Compiler',
    semester: 'S26',
    date: new Date('January 29, 2026'),
    content: 'Get started on your own compiler.',
    tags: ['c', 'compiler'],
  },
  {
    title: 'Hardware Projects',
    subtitle: 'Pi and Arduino',
    semester: 'S26',
    date: new Date('Feburary 12, 2026'),
    content: 'Learn how to mix hardware and software with Raspberry Pi/Arduino',
    tags: ['raspberry pi', 'arduino', 'hardware'],
  },
  {
    title: 'CPUs vs GPUs',
    subtitle: 'What\'s the Difference Really?',
    semester: 'S26',
    date: new Date('Feburary 26, 2026'),
    content: 'This meeting will discuss the differences between GPUs and CPUs, their strengths and weaknesses.',
    tags: ['cpu', 'gpu', 'parallelism'],
  },
  {
    title: 'Quantum Computing',
    subtitle: 'Say Goodbye to Your Encryption',
    semester: 'S26',
    date: new Date('March 12, 2026'),
    content: 'A meeting about quantum computing where you\'ll find out what a qubit is.',
    tags: ['quantum', 'qubit'],
  },
  {
    title: 'White Hat Hacking',
    subtitle: 'Join the Red Team!',
    semester: 'S26',
    date: new Date('April 2, 2026'),
    content: 'At this meeting, you\'ll work through some offensive hacking exercises.',
    tags: ['red team', 'ctf', 'cybersecurity'],
  },
  {
    title: 'Encryption',
    subtitle: 'How to Make Math Work for You',
    semester: 'S26',
    date: new Date('April 16, 2026'),
    content: 'At this meeting, you\'ll learn the basics of public-key cryptography.',
    tags: ['encryption', 'aes'],
  },
  {
    title: 'Exam Help!',
    subtitle: 'One of Two Exam Help Sessions',
    semester: 'S26',
    date: new Date('Feburary 26, 2026'),
    content: 'An exam help session for CS and CyE students.',
    // tags: ['cpu', 'gpu', 'parallelism'],
  },
];

let day = 1;

export const PROJECT_NIGHTS = [
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('September 18, 2025')),
  },
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('October 2, 2025')),
  },
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('October 30, 2025')),
  },
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('Feburary 19, 2026')),
  },
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('March 5, 2026')),
  },
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('March 26, 2026')),
  },
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('April 9, 2026')),
  },
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('April 23, 2026')),
  },
]

export const BUGSMASHERS_SCHEDULE = createBugsmasherPosts(HACKNIGHTS, AUTHORS);


