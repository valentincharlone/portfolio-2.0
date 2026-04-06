import { desc, g } from "framer-motion/client";

export const skills = [
  { name: "React", icon: "simple-icons:react" },
  { name: "Next.js", icon: "simple-icons:nextdotjs" },
  { name: "TypeScript", icon: "simple-icons:typescript" },
  { name: "JavaScript", icon: "simple-icons:javascript" },
  { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
  { name: "Shadcn UI", icon: "simple-icons:shadcnui" },
  { name: "Node.js", icon: "simple-icons:nodedotjs" },
  { name: "Supabase", icon: "simple-icons:supabase" },
  { name: "Prisma", icon: "simple-icons:prisma" },
  { name: "Framer Motion", icon: "simple-icons:framer" },
  { name: "GSAP", icon: "simple-icons:greensock" },
  { name: "Git", icon: "simple-icons:git" },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/valentincharlone",
    icon: `simple-icons:github`,
    size: 28,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/valentincharlone",
    icon: `simple-icons:linkedin`,
    size: 28,
  },
  {
    name: "CV",
    href: "/Valentin Charlone CV.pdf",
    icon: "heroicons:document-arrow-down",
    size: 32,
  },
];

export const experiences = [
  {
    company: "Simple Profits",
    role: "Frontend Freelance → Full Stack Developer",
    period: "Feb 2025 – Jan 2026",
    description: [
      "Led the development of a scalable analytics dashboard for e-commerce store owners, handling real-time sales and performance data",
      "Built complex data visualizations and dynamic filtering systems using React and Recharts",
      "Designed and integrated REST APIs using Django REST Framework",
      "Optimized ORM queries and improved dashboard performance and data response times",
      "Implemented authentication, protected routes, and session management",
      "Integrated third-party e-commerce platforms and automated sales data ingestion",
    ],
    current: false,
  },
  {
    company: "Tuxdi",
    role: "Frontend Engineer",
    period: "April 2023 – July 2025",
    description: [
      "Led migration from Next.js 12 to Next.js 14, improving maintainability and performance",
      "Developed scalable and reusable component architectures across product and marketing platforms",
      "Built Back Office dashboards with key metrics for media managers",
      "Implemented full internationalization (ES/EN) for US-based clients",
      "Integrated Strapi CMS for dynamic content management",
      "Implemented advanced animation systems using Framer Motion and GSAP",
    ],
    current: false,
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "July 2022 – Present",
    description: [
      "Designed and developed custom web solutions for local businesses using React",
      "Gathered requirements directly from clients and translated them into scalable technical implementations",
      "Built responsive applications with modern frontend tooling and reusable components",
      "Delivered iterative releases with continuous client feedback",
    ],
    current: true,
  },
];

export const projects = [
  {
    title: "Architect Portfolio",
    description:
      "A portfolio website for an architect, showcasing their projects, design philosophy, and contact information. Built with a clean and modern design to highlight the architect's work.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Supabase",
      "Prisma",
      "Cloudinary",
      "Vercel",
    ],
    github: "https://github.com/valentincharlone/architecture-webapp",
    demo: "https://v0-architecture-webapp.vercel.app/",
  },
  {
    title: "Invetory Management App",
    description:
      "Streamline your inventory tracking with powerful analytics, real-time updates, and intelligent stock management. Everything you need to run your business efficiently.",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "Prisma",
      "Stack Auth",
      "Neon",
      "Vercel",
    ],
    github: "https://github.com/valentincharlone/inventory-manage-app",
    demo: "https://inventory-manage-app.vercel.app/",
  },
  {
    title: "TODO App",
    description:
      "A simple yet powerful TODO application built with modern web technologies. Features include task management, due dates, and a clean, intuitive interface.",
    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "Kinde Auth",
      "Vercel",
    ],
    github: "https://github.com/valentincharlone/soft-todo",
    demo: "https://soft-todo.vercel.app/",
  },
  {
    title: "Remote Dev Platform",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tech: ["React", "TypeScript", "React-Query", "CSS", "Vite", "Vercel"],
    github: "https://github.com/valentincharlone/remote-dev",
    demo: "https://remote-dev-self.vercel.app/",
  },
  {
    title: "CorpComment",
    description:
      "An interactive platform for public feedback. Post your comments about companies, upvote the most helpful ones, and see what the community is saying.",
    tech: ["React", "TypeScript", "Zustand", "CSS", "Vite", "Vercel"],
    github: "https://github.com/valentincharlone/corp-comment",
    demo: "https://corp-comment-cyan.vercel.app/",
  },
  {
    title: "Pet Soft App",
    description:
      "Management software for dog daycare centers that allows registering pets, managing reservations, and processing secure payments with Stripe.",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "Prisma",
      "Stripe",
      "Vercel",
    ],
    github: "https://github.com/valentincharlone/petsoft",
    demo: "https://petsoft-blue.vercel.app/",
  },
  {
    title: "Inverti AR – Calculadora de Comisiones",
    description:
      "Web app to calculate investment commissions for the Argentine market. Compare brokers across different asset types — stocks, CEDEARs, bonds, and more — to find the most cost-effective option for each operation.",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "Vercel",
      "Framer Motion",
    ],
    github: "https://github.com/valentincharlone/inverti-ar-calculate",
    demo: "https://inverti-calculate-ar.vercel.app/",
  },
];
