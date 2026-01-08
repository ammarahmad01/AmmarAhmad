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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  user,
  rentease,
  noor,
  sport,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    title: "Web Development Intern",
    company_name: "HHRD",
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Assisting in designing and updating websites using HTML, CSS, JavaScript, and WordPress.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Intern",
    company_name: "Hexler Tech",
    iconBg: "#E6DEDD",
    date: "July 2025 - August 2025",
    points: [
      "Worked as a MERN Stack Intern at Hexler Tech contributing to full-stack development across multiple modules.",
      "Integrated REST APIs and implemented scalable features to enhance system functionality.",
      "Optimized performance by identifying bottlenecks, refactoring code, and fixing bugs.",
      "Collaborated within an agile team environment, participating in sprints, stand-ups, and code reviews.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Solvexa",
    iconBg: "#383E56",
    date: "Jan 2025 - Oct 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Cofounder & CEO",
    company_name: "Solvexa",
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Co-founded Solvexa, a service-based tech company and marketing agency.",
      "Delivered custom software and digital marketing solutions for diverse clients.",
      "Led development, design, and marketing teams to execute projects efficiently.",
      "Managed client relations, partnerships, and key business operations for growth.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ammar proved me wrong.",
    name: "Mani",
    designation: "Owner",
    company: "Tayyab Autos",
    image: user,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ammar does.",
    name: "Rizwan Ahmad",
    designation: "Director",
    company: "The Noor School",
    image: user,
  },
  {
    testimonial:
      "After Ammar optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Alex",
    designation: "CTO",
    company: "365 Enterprises",
    image: user,
  },
];

const projects = [
  {
    name: "RentEase",
    description:
      "A full-stack online rental marketplace platform where users can list items for rent, browse available rentals, make bookings, and securely process payments. The system includes automated deposit handling, user accounts, reviews & ratings, messaging between users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: rentease,
    source_code_link: "https://github.com/ammarahmad01/RentEase",
  },
  {
    name: "SportBook",
    description:
      "A comprehensive full-stack sports venue booking platform that connects users with sports ground owners. The system supports real-time slot management, booking workflows, payment verification, and role-based dashboards for users, venue owners, and administrators.",
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
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: sport,
    source_code_link: "https://github.com/ammarahmad01",
  },
  {
    name: "The Noor School",
    description:
      "A modern full-stack web platform for an educational institution, built to provide a professional digital presence and scalable backend support. The system is designed with performance, responsiveness, and clean UI in mind and enabling efficient content management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: noor,
    source_code_link: "https://github.com/ammarahmad01/The-Noor-School",
  },
];

export { services, technologies, experiences, testimonials, projects };
