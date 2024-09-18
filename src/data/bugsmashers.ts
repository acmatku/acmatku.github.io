import type { Item } from '../types';
import { createBugsmasherPosts, getFormattedDate } from '../utils/utils';

export interface BugsmasherMeeting {
  title: string;
  subtitle: string;
  semester: string;
  date: Date;
  tags?: string[];
  content: string;
}

const AUTHORS = 'Andrew H. & John R.';

const HACKNIGHTS: BugsmasherMeeting[] = [
  {
    title: 'CLI',
    subtitle: 'Using the terminal, for developers.',
    semester: 'F24',
    date: new Date('September 12, 2024'),
    content: 'This meeting will be focused on navigating the command line.',
    tags: ['bash', 'linux', 'terminal', 'cli'],
  },
  {
    title: 'Using Git(Hub)',
    subtitle: 'What is git and GitHub?',
    semester: 'F24',
    date: new Date('September 26, 2024'),
    content: 'This meeting, we will be learning about git, and GitHub. Two very important tools for developers to learn.',
    tags: ['git', 'github', 'cli', 'repo'],
  },
  {
    title: 'KUBL Collab (Tentative)',
    subtitle: 'Collab with KU Blockchain club on building websites.',
    semester: 'F24',
    date: new Date('October 10, 2024'),
    content: 'This will focus on frontend development.',
    tags: ['web-dev', 'frontend', 'javascript', 'html', 'css'],
  },
  {
    title: 'Libraries and APIs',
    subtitle: 'Someone else already did that!',
    semester: 'F24',
    date: new Date('November 7, 2024'),
    content: 'We will cover what libraries and APIs are, and how to use them for you next personal project!',
    tags: ['api', 'libraries'],
  },
  {
    title: 'Game Dev',
    subtitle: 'How to build games.',
    semester: 'F24',
    date: new Date('November 21 2024'),
    content: 'Learn how to build video games for you next project!',
    tags: ['game-dev'],
  },
  {
    title: 'Tech Stacks',
    subtitle: 'What is a tech stack?',
    semester: 'F24',
    date: new Date('December 12, 2024'),
    content: 'Learn what kinds of tech companies use to build and deploy their software!',
    tags: ['tech-stack', 'lamp', 'mern'],
  },
];

let day = 1;

export const PROJECT_NIGHTS = [
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('Sept 19, 2024')),
  },
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('October 2, 2024')),
  },
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('October 17, 2024')),
  },
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('October 31, 2024')),
  },
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('November 14, 2024')),
  },
  {
    title: 'Project Day ' + day++,
    description: getFormattedDate(new Date('November 28, 2024')),
  },
]

export const BUGSMASHERS_SCHEDULE = createBugsmasherPosts(HACKNIGHTS, AUTHORS);


