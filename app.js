import { personalInfo, projects, theme } from './config.js';

// Module: Project Renderer
const ProjectRenderer = {
    createTechBadge(tech) {
        return `<span class="bg-${theme.primaryColor}-100 text-${theme.primaryColor}-700 text-xs px-2 py-1 rounded-full">${tech}</span>`;
    },

    createProjectCard(project, index) {
        const techBadges = project.technologies
            .map(tech => this.createTechBadge(tech))
            .join('');

        return `
            <div class="card-hover bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col h-full" style="animation-delay: ${index * 0.1}s">
                <div class="flex items-center gap-4 mb-5">
                    <div class="w-12 h-12 bg-${theme.primaryColor}-100 rounded-xl flex items-center justify-center">
                        <i data-lucide="${project.icon}" class="w-6 h-6 text-${theme.primaryColor}-600"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800">${project.title}</h3>
                </div>
                <p class="text-gray-600 mb-5 leading-relaxed flex-grow">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-5">
                    ${techBadges}
                </div>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center gap-2 text-${theme.primaryColor}-600 font-semibold hover:text-${theme.primaryColor}-700 transition-colors mt-auto">
                    View Project
                    <i data-lucide="external-link" class="w-4 h-4"></i>
                </a>
            </div>
        `;
    },

    render(containerId, projectData) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = projectData
            .map((project, index) => this.createProjectCard(project, index))
            .join('');

        lucide.createIcons();
    }
};

// Module: Personal Info Renderer
const PersonalInfoRenderer = {
    renderHero(name, title, bio) {
        const nameEl = document.getElementById('hero-name');
        const titleEl = document.getElementById('hero-title');
        const bioEl = document.getElementById('hero-bio');

        if (nameEl) nameEl.textContent = name;
        if (titleEl) titleEl.textContent = title;
        if (bioEl) bioEl.textContent = bio;
    },

    renderSkills(containerId, skills) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = skills
            .map(skill => `<span class="skill-tag bg-${skill.color}-100 text-${skill.color}-700 px-4 py-2 rounded-full text-sm font-medium">${skill.name}</span>`)
            .join('');
    },

    renderAboutText(containerId, paragraphs) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = paragraphs
            .map(para => `<p class="text-lg text-gray-600 leading-relaxed">${para}</p>`)
            .join('');
    },

    renderFooter(name) {
        const footerEl = document.getElementById('footer-text');
        if (footerEl) {
            footerEl.textContent = `© ${new Date().getFullYear()} ${name}. All rights reserved.`;
        }
    },

    renderContactLinks(socialLinks, email) {
        const contactContainer = document.getElementById('contact-links-container');
        if (!contactContainer) return;

        const links = [
            { icon: 'mail', text: email, href: `mailto:${email}` },
            { icon: 'github', text: 'GitHub', href: socialLinks.github },
            //{ icon: 'linkedin', text: 'LinkedIn', href: socialLinks.linkedin },
            //{ icon: 'twitter', text: 'Twitter', href: socialLinks.twitter }
        ];

        contactContainer.innerHTML = links
            .map(link => `
                <a href="${link.href}" target="_blank" rel="noopener noreferrer"
                   class="card-hover group flex items-center gap-4 bg-white border border-gray-100 px-6 py-4 rounded-2xl shadow-sm hover:border-${theme.primaryColor}-200 hover:bg-${theme.primaryColor}-50/50 transition-all">
                    <div class="w-11 h-11 rounded-xl bg-${theme.primaryColor}-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i data-lucide="${link.icon}" class="w-5 h-5 text-${theme.primaryColor}-600"></i>
                    </div>
                    <span class="font-semibold text-gray-700">${link.text}</span>
                </a>
            `)
            .join('');

        lucide.createIcons();
    }
};

// Module: Navigation Handler
const NavigationHandler = {
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },

    initScrollEffect() {
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        });
    }
};

// Module: Theme Handler
const ThemeHandler = {
    isDarkMode: false,

    init(themeConfig) {
        if (!themeConfig.darkMode?.enabled) return;

        // Load saved theme from localStorage or use default
        const savedTheme = localStorage.getItem('theme');
        this.isDarkMode = savedTheme === 'dark' || (!savedTheme && themeConfig.darkMode.default);

        this.applyDarkMode();
        this.initToggle();
    },

    initToggle() {
        const toggleButton = document.getElementById('theme-toggle');
        if (!toggleButton) return;

        toggleButton.addEventListener('click', () => {
            this.toggle();
        });
    },

    toggle() {
        this.isDarkMode = !this.isDarkMode;
        this.applyDarkMode();
        this.saveTheme();
    },

    applyDarkMode() {
        const body = document.body;
        const icon = document.querySelector('.theme-icon');

        if (this.isDarkMode) {
            body.classList.add('dark');
            if (icon) {
                icon.setAttribute('data-lucide', 'sun');
            }
        } else {
            body.classList.remove('dark');
            if (icon) {
                icon.setAttribute('data-lucide', 'moon');
            }
        }

        // Reinitialize Lucide icons to update the icon
        lucide.createIcons();
    },

    saveTheme() {
        localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    },

    applyTheme(themeConfig) {
        // Update gradient background
        const gradientElements = document.querySelectorAll('.gradient-bg');
        gradientElements.forEach(el => {
            el.style.background = `linear-gradient(135deg, ${themeConfig.gradientStart} 0%, ${themeConfig.gradientEnd} 100%)`;
        });
    }
};

// Main App Controller
const App = {
    init() {
        // Initialize Lucide icons
        lucide.createIcons();

        // Render personal info
        PersonalInfoRenderer.renderHero(personalInfo.name, personalInfo.title, personalInfo.bio);
        PersonalInfoRenderer.renderAboutText('about-text-container', personalInfo.aboutText);
        PersonalInfoRenderer.renderSkills('skills-container', personalInfo.skills);
        PersonalInfoRenderer.renderSkills('ai-skills-container', personalInfo.aiSkills);
        PersonalInfoRenderer.renderContactLinks(personalInfo.socialLinks, personalInfo.email);
        PersonalInfoRenderer.renderFooter(personalInfo.name);

        // Render projects
        ProjectRenderer.render('projects-container', projects);

        // Initialize navigation
        NavigationHandler.initSmoothScroll();
        NavigationHandler.initScrollEffect();

        // Apply theme
        ThemeHandler.init(theme);
        ThemeHandler.applyTheme(theme);

        console.log('Portfolio initialized successfully');
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
