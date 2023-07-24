import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  firebase,
  unity,
  threejs,
  csharp,
  illustrator,
  photoshop,
  java,
  python,
  sql,
  js,
  ysLogo,
  uaLogo,
  graphicLogo,
  targetM,
  mGraphics,
  clothingStore,
  monsters,
  zombie,
  invanders,
  fruit,
  LyricsDB,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Unity Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
];

const experiences = [
  {
    title: "Event Productions",
    company_name: "Target-Market",
    icon: targetM,
    iconBg: "#E6DEDD",
    date: "2014 - 2016",
    points: [
      "Operations management - handling throughout the event and responding to cases accordingly.",
      "Team leader - manage a team of 4-5 people by dividing roles and tasks into an event.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "M-Graphics",
    icon: mGraphics,
    iconBg: "#E6DEDD",
    date: "2017 - 2018",
    points: [
      "To understand the design needs of clients.",
      "Prepare and produce proposals and presentations for clients.",
      "Develop designs based on the client’s requirements.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Freelancer",
    icon: graphicLogo,
    iconBg: "#E6DEDD",
    date: "2019 - 2020",
    points: [
      "To understand the design needs of clients.",
      "Prepare and produce proposals and presentations for clients.",
      "Develop designs based on the client’s requirements.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Freelancer",
    icon: uaLogo,
    iconBg: "#E6DEDD",
    date: "2021 - 2023",
    points: [
      "Studio Fitness Management App - activity schedule, and customer tracking.",
      "Creating a portfolio and projects on Github, learning and integrating new technologies.",
      "Taking courses independently, adapting to new platforms, and self-learning abilities.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "מערכות מידע ותוכנה - YSolutions",
    icon: ysLogo,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Clothing Store",
    description:
      "Web-based platform that allows users to Register/Sign in to the site by Firebase, search for clothes and add to the shopping cart, update the product in the shopping cart accordingly, and make a purchase. All products on the site were provided by API.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "StyledComponents",
        color: "pink-text-gradient",
      },
    ],
    image: clothingStore,
    source_code_link: "https://github.com/uriya66/Clothing_Store",
    source_web_link: "https://clothing-store-ua.netlify.app",
  },
  {
    name: "Monsters Rolodex",
    description:
      "This application creates “monster” cards with monster pictures, and user names as well as emails by connecting to two APIs. There is also a search bar that can be used to filter and search for the monsters by name.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: monsters,
    source_code_link: "https://github.com/uriya66/Monsters_Rolodex",
    source_web_link: "https://monsters-rolodex-ua.netlify.app",
  },
  {
    name: "Lyrics Database ",
    description: "Lyrics Database, Python - PySimpleGUI, SQL - MSSQL.",
    tags: [
      {
        name: "Python - PySimpleGUI",
        color: "blue-text-gradient",
      },
      {
        name: "SQL - MSSQL",
        color: "green-text-gradient",
      },
    ],
    image: LyricsDB,
    source_code_link: "https://github.com/uriya66/LyricsDB_GUI",
    source_web_link: "https://github.com/uriya66/LyricsDB_GUI",
  },
  {
    name: "Zombie Game",
    description: `A zombie shooting game, each round the difficulty level increases. The zombies will surprise you! You can download the "ZombieGame.7z" file and play it on your own PC.`,
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C-sharp",
        color: "green-text-gradient",
      },
    ],
    image: zombie,
    source_code_link: "https://github.com/uriya66/ZombieGame",
    video:
      "https://user-images.githubusercontent.com/35742868/204385639-6e59cd4b-7f90-4ad9-a226-cb71730da718.mp4",
  },
  {
    name: "Fruit Ninja Game",
    description: "FruitNinja game built from zero with my own sound.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C-sharp",
        color: "green-text-gradient",
      },
    ],
    image: fruit,
    source_code_link: "https://github.com/uriya66/FruitNinja",
    video:
      "https://user-images.githubusercontent.com/35742868/202919108-ede570d3-a888-4b3c-a136-1eb36d819565.mp4",
  },
  {
    name: "Space Invaders Game",
    description:
      "The space invaders game is a game where you fight space invaders and the goal is to stay alive as long as possible.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C-sharp",
        color: "green-text-gradient",
      },
    ],
    image: invanders,
    source_code_link: "https://github.com/uriya66/SpaceInvaders",
    video:
      "https://user-images.githubusercontent.com/35742868/199036966-9dc58118-a8ab-4445-a3c3-78ead79a2ec5.mp4",
  },
];

export { services, technologies, experiences, projects };
