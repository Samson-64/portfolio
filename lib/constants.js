export const siteConfig = {
  name: "Samson Philipo Mamuya",
  title: "Full Stack Web Developer",
  email: "samsonmamuya41@gmail.com",
  phones: ["0690137945", "0653100186"],
  about:
    "I am Samson Mamuya, a passionate full stack web developer with 3 years of experience building fast, scalable and user-friendly web applications. I specialize in JavaScript technologies including React, Next.js, Tailwind CSS and Node.js. I focus on creating responsive websites and dynamic web apps that deliver seamless user experiences.",
  intro:
    "I design and build polished digital products that feel fast, intuitive, and ready to scale from launch day.",
  location: "Tanzania",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["PostgreSQL"],
  },
];

export const services = [
  {
    title: "Web Development",
    description: "Modern, responsive marketing sites and business websites that feel premium on every screen.",
  },
  {
    title: "Full Stack Web Applications",
    description: "Production-ready apps with thoughtful UX, clean architecture, and scalable integrations.",
  },
  {
    title: "API Development",
    description: "Reliable backends, REST APIs, and secure data flows built for real-world products.",
  },
  {
    title: "Website Optimization",
    description: "Performance tuning, SEO improvements, and accessibility upgrades that make products faster and stronger.",
  },
];

export const experience = [
  {
    role: "Full Stack Web Developer",
    company: "Freelance",
    period: "2022 - Present",
    responsibilities: ["Develop web apps", "Build APIs", "Create responsive UI"],
  },
];

export const socialProof = [
  "Fast, scalable web apps",
  "Conversion-focused interfaces",
  "Reliable API architecture",
  "Responsive by default",
];

export const fallbackProjects = [
  {
    id: 1,
    title: "E-Commerce Control Room",
    description:
      "A fast storefront and operations dashboard with seamless filtering, analytics snapshots, and Stripe-ready purchase flows.",
    image: "/images/project-1.svg",
    github_link: "https://github.com/yourusername/ecommerce-control-room",
    live_link: "https://demo.example.com/ecommerce-control-room",
    tech_stack: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Clinic Booking Platform",
    description:
      "A full stack booking platform for appointments, availability management, and automated communication touchpoints.",
    image: "/images/project-2.svg",
    github_link: "https://github.com/yourusername/clinic-booking-platform",
    live_link: "https://demo.example.com/clinic-booking-platform",
    tech_stack: ["React", "Express.js", "PostgreSQL", "REST API"],
  },
  {
    id: 3,
    title: "Portfolio CMS Suite",
    description:
      "A polished content-managed portfolio system with protected admin tools, project publishing workflows, and SEO controls.",
    image: "/images/project-3.svg",
    github_link: "https://github.com/yourusername/portfolio-cms-suite",
    live_link: "https://demo.example.com/portfolio-cms-suite",
    tech_stack: ["Next.js", "Framer Motion", "Node.js", "PostgreSQL"],
  },
];
