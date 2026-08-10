// Portfolio Configuration File
// Edit this file to customize your portfolio content

export const personalInfo = {
    name: "Raid Boudra",
    title: "Full Stack Web Developer",
    bio: "Passionate about creating beautiful, functional, and user-centered digital experiences. I bring ideas to life through clean code and thoughtful design.",
    email: "john@example.com",
    socialLinks: {
        github: "https://github.com/johndeveloper",
        linkedin: "https://linkedin.com/in/johndeveloper",
        twitter: "https://twitter.com/johndeveloper"
    },
    skills: [
        { name: "HTML5", color: "purple" },
        { name: "CSS3", color: "blue" },
        { name: "JavaScript", color: "yellow" },
        { name: "React", color: "green" },
        { name: "Node.js", color: "cyan" },
        { name: "TypeScript", color: "red" },
        { name: "Tailwind CSS", color: "indigo" },
        { name: "Git", color: "pink" },
        { name: "MongoDB", color: "orange" },
        { name: "PostgreSQL", color: "teal" }
    ],
    aboutText: [
        "I'm a web developer with 5+ years of experience building modern web applications.",
        "I specialize in creating responsive, accessible, and performant websites that help businesses grow.",
        "My approach combines technical expertise with creative problem-solving to deliver solutions that not only work well but also provide exceptional user experiences.",
        "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing."
    ]
};

export const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart functionality, payment processing, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "https://example.com/project1",
        icon: "shopping-cart"
    },
    {
        title: "Task Management App",
        description: "A collaborative project management tool with real-time updates and team features.",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        link: "https://example.com/project2",
        icon: "check-square"
    },
    {
        title: "Weather Dashboard",
        description: "A beautiful weather application with location-based forecasts and interactive maps.",
        technologies: ["JavaScript", "API Integration", "Chart.js"],
        link: "https://example.com/project3",
        icon: "cloud"
    },
    {
        title: "Portfolio Template",
        description: "A modern, responsive portfolio template for developers and designers.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://example.com/project4",
        icon: "layout"
    },
    {
        title: "Social Media App",
        description: "A social networking platform with posts, comments, and real-time messaging.",
        technologies: ["React", "Redux", "Socket.io", "Node.js"],
        link: "https://example.com/project5",
        icon: "users"
    },
    {
        title: "Blog Platform",
        description: "A content management system for bloggers with markdown support and SEO optimization.",
        technologies: ["Next.js", "PostgreSQL", "MDX"],
        link: "https://example.com/project6",
        icon: "file-text"
    }
];

export const theme = {
    primaryColor: "indigo",
    gradientStart: "#4f46e5",
    gradientEnd: "#db2777",
    darkMode: {
        enabled: true,
        default: false // Set to true to enable dark mode by default
    }
};
