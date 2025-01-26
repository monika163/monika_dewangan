import { nanoid } from "nanoid";

const projects = [
  {
    id: nanoid(),
    title: "E Commerce App",
    img: "/imgs/projects/ecommece.webp",
    desc: "online shopping platform with various functionalities to enhance the user experience.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/monika163/E-Commerce-App",
    live: "https://e-commerce-app-h242.onrender.com/"
  },
  {
    id: nanoid(),
    title: "Social Media App",
    img: "/imgs/projects/socialmedia.webp",
    desc: "social media platform where you can share posts, like/unlike posts, Follow/Unfollow users and more.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/monika163/Social-Media-App",
    live: "https://social-media-app-cbw8.onrender.com/"
  },
  {
    id: nanoid(),
    title: "To Do List App",
    img: "/imgs/projects/todolist.webp",
    desc: " App will allow users to manage their todo list by creating, removing, updating and deleting a new task. ",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/monika163/Todo-List",
    live: "https://todo-list2-3pr5.onrender.com/"
  },
  {
    id: nanoid(),
    title: "Food Delivery ",
    img: "/imgs/projects/fooddelivery.webp",
    desc: "App for ordering food and an admin app for managing orders, menu items, and more.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/monika163/Food-Delivery-App",
    live: "https://food-delivery-app-1-ervk.onrender.com/"
  },
  {
    id: nanoid(),
    title: "Chat App",
    img: "/imgs/projects/chatapp.webp",
    desc: "It provides users with a seamless and interactive chatting experience.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/monika163/Chat-App",
    live: "https://chat-app-qli7.onrender.com/"
  },
  {
    id: nanoid(),
    title: "Streaming App",
    img: "/imgs/projects/streaming.webp",
    desc: "This is a clone of Netflix using MERN stack. TMBD api is used for fetching data.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/monika163/Streaming-Application-Netflix-Clone",
    live: "https://streaming-application-s4t4.onrender.com/"
  },
  // {
  //   id: nanoid(),
  //   title: 'Notice Generator',
  //   img: 'https://shrtco.de/1eXuKm',
  //   desc: 'App that helps placement coordinators generate placement notice',
  //   technologies: ['React.js', 'TypeScript', 'MantineUI'],
  //   github: 'https://github.com/AshutoshDash1999/placement-notice-generator',
  //   live: 'https://placement-notice-generator.vercel.app/',
  // },
  {
    id: nanoid(),
    title: "Notes App",
    img: "/imgs/projects/notesapp.webp",
    desc: "This is a MERN based Notes manager app utilizing CRUD operations.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/monika163/Notes-App",
    live: "https://notes-app-2t7k.onrender.com/"
  },
  {
    id: nanoid(),
    title: "Blog App",
    img: "/imgs/projects/blog.webp",
    desc: "It provides a platform for users to create, read, update, and delete blog posts.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/monika163/Mern-Blog-App",
    live: "https://mern-blog-app-1fip.onrender.com/"
  },
  {
    id: nanoid(),
    title: "Weather App",
    img: "/imgs/projects/weatherapp.webp",
    desc: "A weather app that tells weather details based on search query (city, state, etc)",
    technologies: ["React.js"],
    github: "https://github.com/monika163/WeatherApp",
    live: "https://monika163.github.io/WeatherApp/"
  }

  // {
  //   id: nanoid(),
  //   title: "Landing Pa",
  //   img: "/imgs/projects/landing-pages.webp",
  //   desc: "Collection of all landing pages using HTML & CSS",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/monika163/old-frontend-projects",
  //   live: "https://brilliant-snickerdoodle-694771.netlify.app/"
  // }
  // {
  //   id: nanoid(),
  //   title: "Mini JS Projects",
  //   img: "/imgs/projects/mini-js.webp",
  //   desc: "Collection of mini Projects made using JavaScript",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/monika163/Javascript-Projects",
  //   live: "https://github.com/monika163/Javascript-Projects/"
  // }
];

const skills = [
  {
    icon: "html",
    title: "HTML"
  },
  {
    icon: "css",
    title: "CSS"
  },
  {
    icon: "javascript",
    title: "JavaScript"
  },
  {
    icon: "typescript",
    title: "TypeScript"
  },
  {
    icon: "react",
    title: "React.js"
  },
  {
    icon: "redux",
    title: "Redux"
  },
  {
    icon: "tailwindcss",
    title: "TailwindCSS"
  },
  {
    icon: "materialui",
    title: "Material UI"
  },
  {
    icon: "bootstrap",
    title: "Bootstrap"
  },
  // {
  //   icon: 'firebase',
  //   title: 'Firebase',
  // },
  {
    icon: "nodejs",
    title: "Node.js"
  },
  {
    icon: "expressjs",
    title: "Express.js"
  },
  {
    icon: "mongodb",
    title: "MongoDB"
  },
  {
    icon: "sass",
    title: "Sass"
  },
  {
    icon: "git",
    title: "Git"
  },
  {
    icon: "figma",
    title: "Figma"
  },
  {
    icon: "github",
    title: "Github"
  },
  {
    icon: "babel",
    title: "Babel"
  },
  {
    icon: "webpack",
    title: "Webpack"
  }
];

export const data = { projects, skills };
