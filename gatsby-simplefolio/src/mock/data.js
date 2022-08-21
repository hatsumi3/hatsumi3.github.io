import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'hatsumi3 | Dev', // e.g: 'Name | Developer'
  lang: 'ja', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' Hello! My name is',
  name: 'hatsumi3',
  subtitle: "I'm the Web Engineer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'terada_icon.png',
  paragraphOne: 'yaha',
  paragraphTwo: 'yaha!',
  paragraphThree: 'yaahaaaa!',
  resume: 'https://github.com/hatsumi3', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: 'https://github.com/hatsumi3',
    repo: 'https://github.com/hatsumi3', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'https://github.com/hatsumi3',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/hatsumi3823',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/hatsumi3823',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hatsumi3',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
