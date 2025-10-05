// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-tag, .about-text, .contact-content');
    animatedElements.forEach(el => observer.observe(el));
});

// Add animation classes to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .project-card, .skill-tag, .about-text, .contact-content {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Typing effect for hero title (optional enhancement)
function createTypingEffect() {
    const titleElement = document.querySelector('.hero-title');
    if (!titleElement) return;
    
    const text = titleElement.textContent;
    const highlight = titleElement.querySelector('.highlight');
    if (!highlight) return;
    
    // This is a simple implementation - you can enhance it further
    highlight.style.borderRight = '2px solid #2563eb';
    
    // Remove typing cursor after animation
    setTimeout(() => {
        highlight.style.borderRight = 'none';
    }, 3000);
}

// Form validation (if you add a contact form later)
function validateForm(form) {
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');
    
    if (email && !email.value.includes('@')) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (message && message.value.length < 10) {
        alert('Please enter a message with at least 10 characters');
        return false;
    }
    
    return true;
}

// Theme toggle functionality (for future enhancement)
function initThemeToggle() {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    
    // You can add a theme toggle button later
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

function generateContactLinks() {
    const contactLinksContainer = document.querySelector('.contact-links');
    if (contactLinksContainer && typeof contacts !== 'undefined') {
        contactLinksContainer.innerHTML = ''; // Clear existing links
        contacts.forEach(contact => {
            const link = document.createElement('a');
            link.href = contact.href;
            link.className = 'contact-link';

            if (!contact.href.startsWith('mailto:')) {
                link.target = contact.target;
                if (contact.target === '_blank') {
                    link.rel = 'noopener noreferrer';
                }
            }

            const icon = document.createElement('i');
            icon.className = contact.iconClass;

            const span = document.createElement('span');
            span.textContent = contact.text;

            link.appendChild(icon);
            link.appendChild(span);
            contactLinksContainer.appendChild(link);
        });
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    createTypingEffect();
    initThemeToggle();
    generateContactLinks();
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// Loading animation styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        body {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }
        
        body.loaded {
            opacity: 1;
        }
        
        /* Smooth hover effects */
        .nav-link, .btn, .project-card, .contact-link, .skill-tag {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Enhanced focus styles for better accessibility */
        .nav-link:focus,
        .btn:focus,
        .project-link:focus,
        .contact-link:focus {
            outline: 2px solid #2563eb;
            outline-offset: 2px;
            border-radius: 4px;
        }
        
        /* Mobile menu animation */
        .nav-toggle.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .nav-toggle.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    </style>
`);

// Performance optimization: Lazy load images when added
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Call lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const handleScroll = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}, 10);

window.addEventListener('scroll', handleScroll);