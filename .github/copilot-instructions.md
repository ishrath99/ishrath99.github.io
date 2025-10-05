# Copilot Instructions for ishrath99.github.io

## Project Overview
This is a **GitHub Pages portfolio website** featuring a clean, modern single-page application built with vanilla HTML, CSS, and JavaScript. The site showcases personal projects, skills, and contact information with smooth animations and responsive design.

## Architecture & Key Files

### Core Structure
- `index.html` - Single-page application with semantic sections (hero, about, projects, contact)
- `styles.css` - Complete CSS with custom properties, responsive design, and animation keyframes
- `script.js` - Vanilla JavaScript for interactivity, animations, and dynamic content
- `contact-data.js` - Modularized contact information (email, LinkedIn, GitHub)
- `assets/` - Static resources (profile picture)

### Data Flow Pattern
Contact information follows a **separation of concerns** approach:
1. `contact-data.js` exports `contacts` array with structured data
2. `script.js` dynamically generates DOM elements via `generateContactLinks()`
3. Allows easy updates without touching core JavaScript logic

## Development Conventions

### CSS Architecture
- **Mobile-first responsive design** with breakpoints at 768px, 1024px
- **CSS custom properties** for consistent theming (colors, spacing, typography)
- **Intersection Observer API** for scroll-triggered animations with performance optimization
- **Backdrop-filter** for modern glassmorphism effects on navbar

### JavaScript Patterns
- **Event delegation** and **debounced scroll handlers** for performance
- **IntersectionObserver** for lazy loading and animation triggers
- **Dynamic CSS injection** for animation styles and responsive behavior
- **Accessibility-first** focus management and ARIA considerations

### Animation System
```javascript
// Elements animate in with opacity and transform
.project-card, .skill-tag, .about-text, .contact-content {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
}
```

## Development Workflow

### Local Development
No build process required - serve files directly:
```bash
python -m http.server 8000  # or any static file server
```

### Content Updates
1. **Projects**: Edit `.project-card` HTML blocks in `index.html`
2. **Skills**: Modify `.skill-tag` elements in about section
3. **Contact**: Update `contacts` array in `contact-data.js`
4. **Styling**: CSS follows BEM-like naming conventions

### GitHub Pages Deployment
- Automatic deployment from `main` branch
- No build step required - static files served directly
- Images optimized and served from `assets/` directory

## Key Implementation Details

### Performance Optimizations
- **Debounced scroll events** (10ms delay) for smooth navbar transitions
- **Intersection Observer** replaces scroll-based animations
- **Lazy loading infrastructure** ready for future image additions

### Responsive Behavior
- Mobile navigation with hamburger menu toggle
- Fluid typography using `clamp()` functions
- Touch-friendly interactive elements (44px minimum)

### Accessibility Features
- Semantic HTML structure with proper heading hierarchy
- Focus management for keyboard navigation
- High contrast ratios and scalable text
- `prefers-reduced-motion` respect for animations

## Extension Points

### Adding New Sections
Follow the existing pattern:
1. Add semantic `<section>` with unique ID in `index.html`
2. Style using `.section-title` and `.container` classes
3. Add navigation link to navbar
4. Register for animation observer if needed

### Theme Enhancement
Infrastructure exists for dark mode toggle:
- `initThemeToggle()` function ready for theme button
- CSS custom properties structure supports theming
- `localStorage` persistence implemented

### Form Integration
Contact form validation framework exists in `validateForm()` function - ready for form addition with minimal setup.

## Common Modifications
- **Project updates**: Replace placeholder content in `.project-card` elements
- **Social links**: Modify `contact-data.js` array structure
- **Styling**: Update CSS custom properties in `:root` for consistent theming
- **Content**: Edit text content directly in HTML semantic elements