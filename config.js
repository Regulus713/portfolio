// Portfolio Configuration File
// Edit this file to customize your portfolio content

export const personalInfo = {
    name: "Raid Boudra",
    title: "Full Stack Web Developer",
    bio: "Passionate about creating beautiful, functional, and user-centered digital experiences. I bring ideas to life through clean code and thoughtful design.",
    email: "raidboudra713@gmail.com",
    socialLinks: {
        github: "https://github.com/regulus713",
        linkedin: "https://linkedin.com/in/RaidBoudra",
        
    },
    skills: [
        { name: "HTML5", color: "purple" },
        { name: "CSS3", color: "blue" },
        { name: "Javascript", color: "yellow" },
        { name: "Python", color: "green" },
        { name: "Github", color: "pink" },
        { name: "MySQL", color: "orange" },
        { name: "C#", color: "cyan" },
        { name: "ASP.NET", color: "blue" , icon: "aspnet" },
        { name: "PHP", color: "purple" },
        { name : "Laravel", color: "red" , icon: "laravel" },
        { name: "REST API", color: "green" }
    ],
    aiSkills: [
        { name: "Devin AI", color: "indigo" },
        { name: "Hermes Agent", color: "cyan" },
        { name: "Prompting", color: "red" },
        { name: "Context Management", color: "orange" }
    ],
    aboutText: [
        "I'm a fresh graduate and full-stack web developer with a passion for building modern web applications and AI-powered solutions.",
        "I specialize in creating responsive, accessible, and performant applications while exploring Agentic AI, LLMs, prompt engineering, and AI-driven development",
        "I'm particularly interested in building AI agents and agentic workflows that can leverage tools, automate tasks, and solve complex problems.",
        "I enjoy experimenting with emerging AI technologies and finding new ways to integrate intelligent automation into web applications."
    ]
};

export const projects = [

    {
        title: "YugiPoke",
                description: "A Yugioh-type card dueling game with Pokemon cards from fetching POKEAPI, simulation was done through Python to check if the decks are balanced",
                technologies: ["CSS", "HTML", "Javascript", "Python"],
                link: "yugipoke.raidboudra.com",
                icon: "users"
    },

    {
        
        // {
        //     title: "Social Media App",
        //     description: "A social networking platform with posts, comments, and real-time messaging.",
        //     technologies: ["React", "Redux", "Socket.io", "Node.js"],
        //     link: "https://example.com/project5",
        //     icon: "users"
        // },


        title: "E-Commerce Platform",
        description: "A full-featured online store with Authentication, cart functionality, and admin dashboard.",
        technologies: ["PHP", "Laravel", "Livewire", "MYSQL"],
        link: "https://github.com/Regulus713/inventory-ecommerce",
        icon: "shopping-cart"
    },
    {
        title: "ToolVault for renting",
        description: "An app for renting tools in real-time, uses Authentication, booking system, notification, forums..etc.",
        technologies: ["Express.js", "Node.Js", "Tailwind CSS", "Three.js"],
        link: "https://toolvault.raidboudra.com",
        icon: "check-square"
    },
   
    {
        title: "Pokedex",
        description: "A frontend application for browsing and searching Pokémon data using PokeAPI.",
        technologies: ["HTML", "CSS", "JavaScript", "PokeAPI","localStorage"],
        link: "https://pokedex.raidboudra.com",
        icon: "layout"
    },




    // {
    //     title: "Blog Platform",
    //     description: "A content management system for bloggers with markdown support and SEO optimization.",
    //     technologies: ["Next.js", "PostgreSQL", "MDX"],
    //     link: "https://example.com/project6",
    //     icon: "file-text"
    // }
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
