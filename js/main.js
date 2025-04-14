document.addEventListener('DOMContentLoaded', () => {
    // Show loading animation
    const loader = document.createElement('div');
    loader.className = 'loader';
    document.body.appendChild(loader);
    
    // Hide loader and show content after 1.5 seconds
    setTimeout(() => {
        loader.style.display = 'none';
        document.body.style.overflow = 'auto';
        initializeAnimations();
    }, 1500);
    
    // Initialize animations after load
    function initializeAnimations() {
        // Smooth scrolling for navigation
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    section.classList.add('visible');
                    
                    // Alternate animation directions
                    if (section.id === 'experience' || section.id === 'skills') {
                        section.classList.add('animate-left');
                    } else if (section.id === 'projects' || section.id === 'contact') {
                        section.classList.add('animate-right');
                    } else {
                        section.classList.add('animate-fade');
                    }
                    
                    observer.unobserve(section);
                }
            });
        }, observerOptions);
        
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
        
        // Project card hover effects
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            });
        });
    }
});