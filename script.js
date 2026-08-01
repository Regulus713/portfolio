// Initialize Lucide icons
lucide.createIcons();

// Project data - easily customizable
const projects = [
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

// Render project cards
function renderProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'card-hover bg-white rounded-xl p-6 shadow-md border border-gray-100';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const techBadges = project.technologies
            .map(tech => `<span class="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">${tech}</span>`)
            .join('');
        
        card.innerHTML = `
            <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <i data-lucide="${project.icon}" class="w-6 h-6 text-purple-600"></i>
                </div>
                <h3 class="text-xl font-semibold text-gray-800">${project.title}</h3>
            </div>
            <p class="text-gray-600 mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${techBadges}
            </div>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors">
                View Project
                <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
        `;
        
        container.appendChild(card);
    });
    
    // Reinitialize Lucide icons for dynamically added elements
    lucide.createIcons();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll-based navbar background change
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
    } else {
        nav.classList.remove('shadow-md');
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
