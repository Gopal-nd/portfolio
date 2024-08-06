import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";


export const HERO_CONTENT = `I'm a full stack developer with 2 years of experience. I build strong and scalable web applications. I work with front-end tools like React and Next.js, and back-end tools like Node.js, MySQL, PostgreSQL, and MongoDB. I aim to use my skills to create solutions that help businesses grow and provide great user experiences.`;

export const ABOUT_TEXT = `I am a full stack developer with 2 years of experience. I love creating easy-to-use web applications. I work with tools like React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My interest in how things work led me to web development, and now I always aim to learn and tackle new challenges. I enjoy working with others and solving tough problems to build great solutions. When I'm not coding, I like staying active, exploring new tech, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - December",
    role: "Web Design Hackathon",
    company: "UI",
    description: `Participated in a competitive web design hackathon where I collaborated with a team to create a visually appealing and user-friendly hotel booking website. My primary responsibilities included developing the front-end using React.js and ensuring a seamless user experience. The project involved implementing responsive design principles using CSS and HTML, and integrating interactive features with JavaScript.`,
    technologies: ["Javascript", "React.js", "CSS", "HTML"],
  },
  {
    year: "2024 - January",
role: "Defy-24 Hackathon",
company: "Web 3",
description: `Participated in a Web3 hackathon where we created a crowdfunding platform. Designed and developed user interfaces using Next.js and React. Collaborated with backend developers to integrate frontend components with Node.js APIs and smart contracts using Solidity and Hardhat. Focused on implementing responsive designs and optimizing frontend performance for a seamless user experience.`,
technologies: ["React.js", "Node.js", "Hardhat", "Ethereum","Solidity","Next.js"],
  },
  {
    year: "2024 - February",
    role: "Hack To Future 2.0 Hackathon",
    company: "Web 3",
    description: `Won the Hack To Future 2.0 Hackathon by building a Web3 payments application. Developed the frontend using React.js and Next.js, and integrated with blockchain technology using Node.js, Solidity, and Hardhat to enable secure and efficient payments.`,
    technologies: ["React.js", "Node.js", "Hardhat", "Solidity", "Ethereum","Next.js"],
  },

];

export const PROJECTS = [
  {
    title: "Full Stack Blogging App",
    image: project1,
    description: "A full stack blogging app with features like CRUD operations, search functionality, and comments.",
    technologies: ["HTML", "CSS", "React", "Next.js", "Prisma", "Next-Auth", "Postgres"],
    Live: 'https://blog-wev2.vercel.app/',
    Git: 'https://github.com/Gopal-nd/blog'
  },
  {
    title: "Full Stack AI SAAS Application",
    image: project2,
    description: "A full stack AI SaaS application with features for managing tasks and projects. Includes AI-powered task creation, assignment, and progress tracking, with advanced data analytics to monitor and optimize workflows.",
    technologies: ["HTML", "CSS", "MongoDB", "GeminAI", "React", "Next.js"],
    Live: 'https://next-auth-self-sigma.vercel.app/',
    Git: 'https://github.com/Gopal-nd/next-auth/tree/main/ai-saas'
  },
  {
    title: "Node.js Web Application",
    image: project3,
    description:
      "Node js blog Application with image Upload and Text Sharing",
    technologies: ["HTML", "CSS", "Node.js", "MongoDB","EJS"],
     Live: 'blogging-v8pu.onrender.com',
    Git: 'https://github.com/Gopal-nd/blogging'
  },
];

export const CONTACT = {
 
  phoneNo: "+91 9353272203 ",
  email: "docode999@gmail.com",
};
