# Web Developer Portfolio

A modern, responsive portfolio website for web developers to showcase their work and skills.

## Features

- **Hero Section**: Eye-catching introduction with gradient background
- **About Section**: Personal bio and skills showcase
- **Projects Section**: Grid of project cards with external links
- **Contact Section**: Social media and contact links
- **Responsive Design**: Mobile-friendly layout
- **Smooth Animations**: Subtle hover effects and transitions
- **Modern UI**: Clean design using Tailwind CSS
- **Modular Architecture**: Separated concerns for easy customization

## Customization

The portfolio uses a modular architecture. All customization is done through the `config.js` file.

### Configuration File (`config.js`)

Edit `config.js` to customize all your content:

```javascript
export const personalInfo = {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio text",
    email: "your.email@example.com",
    socialLinks: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername"
    },
    skills: [
        { name: "HTML5", color: "purple" },
        { name: "CSS3", color: "blue" },
        // Add more skills...
    ],
    aboutText: [
        "First paragraph about you...",
        "Second paragraph about you...",
        // Add more paragraphs...
    ]
};

export const projects = [
    {
        title: "Project Name",
        description: "Project description",
        technologies: ["Tech1", "Tech2", "Tech3"],
        link: "https://your-project-url.com",
        icon: "icon-name"
    },
    // Add more projects...
];

export const theme = {
    primaryColor: "purple",
    gradientStart: "#667eea",
    gradientEnd: "#764ba2"
};
```

### Available Color Options for Skills

- purple, blue, yellow, green, cyan, red, indigo, pink, orange, teal

### Available Icons

See [Lucide Icons](https://lucide.dev/icons/) for all available icon names to use in projects.

### Styling

To customize CSS styles, edit `styles.css`:

- **Gradient Background**: Modify `.gradient-bg` class
- **Card Effects**: Modify `.card-hover` class
- **Animations**: Modify `.fade-in` and `@keyframes fadeIn`
- **Skill Tags**: Modify `.skill-tag` class

## Architecture

### File Structure

```
portfolio/
├── index.html      # Main HTML structure (minimal content)
├── styles.css      # All custom styles
├── config.js       # Configuration data (personal info, projects, theme)
├── app.js          # Modular JavaScript application
└── README.md       # This file
```

### Modules in `app.js`

- **ProjectRenderer**: Handles project card rendering
- **PersonalInfoRenderer**: Handles personal info, skills, and contact links
- **NavigationHandler**: Handles smooth scrolling and scroll effects
- **ThemeHandler**: Applies theme configurations
- **App**: Main controller that initializes all modules

## Deployment

### Local Development

Due to ES modules, you need a local server. Options:

1. **Using Python**:
   ```bash
   python -m http.server 8000
   ```

2. **Using Node.js**:
   ```bash
   npx serve
   ```

3. **Using VS Code Live Server extension**

Then open `http://localhost:8000` in your browser.

### Hosting Options

1. **GitHub Pages**:
   - Push the repository to GitHub
   - Enable GitHub Pages in repository settings
   - Select the main branch as source

2. **Netlify**:
   - Drag and drop the folder to Netlify
   - Or connect your GitHub repository

3. **Vercel**:
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel` in the project directory

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- ES6+ JavaScript (Modules)
- Lucide Icons (via CDN)

## Browser Support

Works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use for personal and commercial projects.
