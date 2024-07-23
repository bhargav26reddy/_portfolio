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
  figma,
  docker,

  netflix,
  swiggy,
  youtube,
  weather,

  threejs,
  deloitte,
  cognizant,
  acc,
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
    id: "resume",
    title: "Resume",
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
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Quality Assurance Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "DC Analyst - React.js Developer",
    company_name: "Deloitte USI",
    icon: deloitte,
    iconBg: "#ffffff",
    date: "Jan 2022 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Programmer Analyst - Software Development Engineer in Test",
    company_name: "Cognizant Technology Solutions",
    icon: cognizant,
    iconBg: "#ffffff",
    date: "July 2020 - Nov 2021",
    points: [
      "Analyzed client requirements and system functionality to design and execute test cases aligned with project needs.",
      "Conducted System, Functional, and Regression testing to ensure software quality.",
      "Created and maintained traceability matrices for around 95% of projects to establish clear links between requirements and test cases.",
      "Developed and automated test scripts based on scenarios and requirements using the JUnit and TestNG Framework with Selenium.",
      "Prepared detailed defect reports and assigned defects to developers for resolution.",
      "Maintained ongoing communication with Application Developers and Project Managers, providing testing status updates.",
      "Retesting of cases post-defect resolution to validate bug fixes with a validation rate of around 90%, ensuring the overall quality."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Cognizant Technology Solutions",
    icon: cognizant,
    iconBg: "#ffffff",
    date: "Jan 2020 - May 2020",
    points: [
     
"Led the development of Spring-based REST APIs and optimized SQL queries for an order management application, resulting in 20% reduction in query response times and enhanced system efficiency.",
"Designed visually appealing web pages using HTML5, CSS, and React, improving user experience and increasing customer satisfaction scores by 15%.",
"Engineered MySQL views to streamline large, complex queries, leading to a remarkable 30% improvement in API performance and faster data retrieval."
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      `Sai Bhargav is very diligent guy. Whenever it comes to work, he delivers high quality work requiring least testing efforts. He grabs requirements so quickly and executes it with perfection.
He takes ownership and responsibilities which makes him perfect fit for any position. He digs new thing deeper and always believe in doing root cause analysis. In my opinion, Bhargav would be one of the most important asset to any firm.`,
    name: "Mukund Saurav",
    designation: "Consultant",
    company: "Deloitte USI",
    image: "https://media.licdn.com/dms/image/D5603AQGAOuHFUFUVww/profile-displayphoto-shrink_800_800/0/1707712685976?e=1727308800&v=beta&t=8UB_r1hsf59LMrDBA-npvDccMl9ufdCkTFMcq0wULIQ",
  },
  {
    testimonial:
      "I had the pleasure of working with Bhargav during his time as a Core Team Member at Global Child Prodigy Awards and at the Cognizant. Bhargav is an exceptional individual who consistently demonstrated his dedication, hard work, and creativity in all of his endeavors.",
    name: "Chaitanya Madala",
    designation: "Technical Consultant",
    company: "Glidefast Consulting",
    image: "https://media.licdn.com/dms/image/D5603AQHoGKWPM5TYfQ/profile-displayphoto-shrink_100_100/0/1700886086250?e=1727308800&v=beta&t=vz3xlWpaTmd56NNFSdrRPuHq3EHG3VfGlmvW3IDHfow",
  },
  {
    testimonial:
      "I highly recommend Bhargav as a React.js developer. He consistently demonstrates a strong grasp of React and front-end development, creating efficient, scalable, and user-friendly applications. Bhargav is detail-oriented, a great problem solver, and an excellent team player. His contributions have been invaluable, and he would be a fantastic asset to any team.",
    name: "Tharun Kumar Reddy",
    designation: "Team Lead",
    company: "Cognizant Technology Solutions",
    image: "https://media.licdn.com/dms/image/D5603AQF7yANT_MBc_g/profile-displayphoto-shrink_100_100/0/1714131771314?e=1727308800&v=beta&t=8_7_kYDciHAtqz482AMX9zXa0AIdOAKkkMJ4H8m2vVY",
  },
];

const projects = [
  {
    name: "Netflix-GPT",
    description:
      "Netflix-GPT is a React-based web platform designed for streaming your favorite movies and TV shows. Leveraging cutting-edge AI-powered search and movie recommendations to enhance user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/bhargav26reddy/Netflix_Clone",
  },
  {
    name: "Swiggy-Clone",
    description:
      "Developed a feature-rich Swiggy clone using React, incorporating dynamic components, state management, and API integration to replicate the core functionalities of Swiggy's food delivery platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: swiggy,
    source_code_link: "https://github.com/bhargav26reddy/Clone_SwiggyWebsite_Reactjs",
  },
  {
    name: "Youtube-Clone",
    description:
      "Created a YouTube clone with React, focusing on optimizing search functionality, implementing nth-level comments, and integrating live chat.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "search-optimization",
        color: "green-text-gradient",
      },
      {
        name: "liveChat",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather forecast",
    description:
      "The Weather Forecast Application is a user-friendly web application that allows users to check weather conditions for any desired location. Users can view the current temperature and detailed weather forecast for the next 5 days. The application is built using HTML5, CSS3, JavaScript, and React.js, showcasing my skills in front-end development and modern web technologies.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Javscript/React",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/bhargav26reddy/react-projects/tree/master-1",
  },
];

const Mydocs = [
  {
    name: "SaiBhargav_Maddireddy",
    description:
      "My resume offers a comprehensive overview of my journey as a React front-end and Quality Assurance engineer. It details my professional experience, educational background, technical skills, key projects, and notable accomplishments. Download it to explore my qualifications and expertise in these areas.",
    tags: [
      {
        name: "Front-end",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Quality Assurance",
        color: "pink-text-gradient",
      },
    ],
    image: "https://th.bing.com/th/id/R.39a62c14efec3749e264ea0a565f5590?rik=E0%2fE47C6tTcJng&riu=http%3a%2f%2frebeccamatthews.net%2fassets%2fimages%2fresume-logo.jpg&ehk=speBpy5FFpBLwhJYBik5sS1GDNhCTvxDvJEDqkexWac%3d&risl=&pid=ImgRaw&r=0",
    source_code_link: "https://drive.google.com/file/d/1_rdLtU-77u6ixiej56PjXT72yEK8tmWi/view?usp=drive_link",
  },
  {
    name: "Accomplishments and Honors",
    description:
      "An overview of my key awards, certifications, and recognitions that showcase my professional achievements and expertise.",
    tags: [
      {
        name: "Awards",
        color: "blue-text-gradient",
      },
      {
        name: "Recognization(s)",
        color: "green-text-gradient",
      },
      {
        name: "Appaluse",
        color: "pink-text-gradient",
      },
    ],
    image: acc,
    source_code_link: "https://www.google.com/drive/",
  },
];
export { services, technologies, experiences, testimonials, projects, Mydocs };
