// ===== MAGICAL EFFECTS JAVASCRIPT =====

class MagicalEffects {
    constructor() {
        this.particles = [];
        this.cursorTrails = [];
        this.isInitialized = false;
        this.init();
    }

    init() {
        if (this.isInitialized) return;
        
        this.createParticleSystem();
        this.initCursorEffects();
        this.initScrollEffects();
        this.initPageTransitions();
        this.initFloatingShapes();
        this.initMagicalButtons();
        this.initScrollIndicator();
        this.initFloatingActionButton();
        this.initIntersectionObserver();
        
        this.isInitialized = true;
        console.log('🎭 Magical effects initialized successfully!');
    }

    // Particle System
    createParticleSystem() {
        const container = document.createElement('div');
        container.className = 'particles-container';
        document.body.appendChild(container);

        // Create particles
        for (let i = 0; i < 50; i++) {
            this.createParticle(container);
        }

        // Continuously create new particles
        setInterval(() => {
            if (this.particles.length < 50) {
                this.createParticle(container);
            }
        }, 300);
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning and properties
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        // Random colors
        const colors = [
            'rgba(102,126,234,0.6)',
            'rgba(255,107,107,0.6)',
            'rgba(76,175,80,0.6)',
            'rgba(255,193,7,0.6)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
        
        container.appendChild(particle);
        this.particles.push(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
                this.particles = this.particles.filter(p => p !== particle);
            }
        }, 15000);
    }

    // Cursor Effects
    initCursorEffects() {
        let mouseX = 0, mouseY = 0;
        let trails = [];

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Create cursor trail
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = mouseX - 10 + 'px';
            trail.style.top = mouseY - 10 + 'px';
            document.body.appendChild(trail);

            trails.push(trail);

            // Remove old trails
            if (trails.length > 5) {
                const oldTrail = trails.shift();
                if (oldTrail.parentNode) {
                    oldTrail.parentNode.removeChild(oldTrail);
                }
            }

            // Fade out trail
            setTimeout(() => {
                trail.style.opacity = '0';
                trail.style.transform = 'scale(0.5)';
                setTimeout(() => {
                    if (trail.parentNode) {
                        trail.parentNode.removeChild(trail);
                    }
                }, 500);
            }, 100);
        });

        // Interactive hover effects
        document.querySelectorAll('.portfolio-item, .research-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-20px) scale(1.03) rotateX(5deg)';
                item.style.boxShadow = `
                    0 30px 80px rgba(0,0,0,0.2),
                    0 0 50px rgba(102,126,234,0.3),
                    inset 0 0 0 1px rgba(255,255,255,0.2)
                `;
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                item.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            });
        });
    }

    // Floating Shapes
    initFloatingShapes() {
        const container = document.createElement('div');
        container.className = 'floating-shapes';
        document.body.appendChild(container);

        const shapes = [
            { class: 'shape-1', size: 100, color: 'linear-gradient(45deg, #667eea, #764ba2)' },
            { class: 'shape-2', size: 80, color: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)' },
            { class: 'shape-3', size: 60, color: 'linear-gradient(45deg, #4CAF50, #8BC34A)' }
        ];

        shapes.forEach((shapeConfig, index) => {
            const shape = document.createElement('div');
            shape.className = `shape ${shapeConfig.class}`;
            container.appendChild(shape);

            // Add mouse interaction
            document.addEventListener('mousemove', (e) => {
                const rect = shape.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = (e.clientX - centerX) * 0.1;
                const deltaY = (e.clientY - centerY) * 0.1;
                
                shape.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${deltaX * 0.5}deg)`;
            });
        });
    }

    // Scroll Effects
    initScrollEffects() {
        let ticking = false;

        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            // Parallax effect for hero section
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${rate}px)`;
            }

            // Update floating shapes based on scroll
            document.querySelectorAll('.shape').forEach((shape, index) => {
                const speed = 0.5 + (index * 0.2);
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }

    // Scroll Progress Indicator
    initScrollIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.innerHTML = '<div class="scroll-progress"></div>';
        document.body.appendChild(indicator);

        const progress = indicator.querySelector('.scroll-progress');

        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            progress.style.width = scrollPercent + '%';
        });
    }

    // Page Transitions
    initPageTransitions() {
        const transition = document.createElement('div');
        transition.className = 'page-transition';
        document.body.appendChild(transition);

        // Intercept link clicks for smooth transitions
        document.querySelectorAll('a[href$=".html"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                
                transition.classList.add('active');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        });

        // Remove transition on page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                transition.classList.remove('active');
            }, 100);
        });
    }

    // Magical Buttons
    initMagicalButtons() {
        document.querySelectorAll('.portfolio-btn, .research-btn, .cta-btn').forEach(btn => {
            btn.classList.add('magical-btn');
            
            btn.addEventListener('mouseenter', () => {
                this.createButtonRipple(btn);
            });
        });
    }

    createButtonRipple(button) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255,255,255,0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        ripple.style.pointerEvents = 'none';

        button.style.position = 'relative';
        button.appendChild(ripple);

        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }

    // Floating Action Button
    initFloatingActionButton() {
        const fab = document.createElement('div');
        fab.className = 'magical-fab';
        fab.innerHTML = '<i class="fas fa-arrow-up"></i>';
        fab.title = 'العودة إلى الأعلى';
        document.body.appendChild(fab);

        fab.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                fab.style.opacity = '1';
                fab.style.transform = 'scale(1)';
            } else {
                fab.style.opacity = '0';
                fab.style.transform = 'scale(0.8)';
            }
        });
    }

    // Intersection Observer for Animations
    initIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Add stagger effect for multiple items
                    const items = entry.target.parentNode.querySelectorAll('.portfolio-item, .research-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('fade-in');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.portfolio-item, .research-item, .section-title').forEach(item => {
            observer.observe(item);
        });
    }

    // Text Animation Effects
    initTextAnimations() {
        document.querySelectorAll('.hero-title, .page-hero-title').forEach(title => {
            title.classList.add('magical-text');
            
            // Typewriter effect
            const text = title.textContent;
            title.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    title.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 500);
        });
    }

    // Loading Animation
    showLoadingAnimation() {
        const loader = document.createElement('div');
        loader.className = 'liquid-loader';
        loader.style.position = 'fixed';
        loader.style.top = '50%';
        loader.style.left = '50%';
        loader.style.transform = 'translate(-50%, -50%)';
        loader.style.zIndex = '10001';
        
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.zIndex = '10000';
        
        document.body.appendChild(overlay);
        document.body.appendChild(loader);
        
        return {
            hide: () => {
                overlay.style.opacity = '0';
                loader.style.opacity = '0';
                setTimeout(() => {
                    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
                    if (loader.parentNode) loader.parentNode.removeChild(loader);
                }, 500);
            }
        };
    }

    // Enhanced Modal Effects
    enhanceModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('magical-modal');
            
            const content = modal.querySelector('.modal-content');
            if (content) {
                content.style.animation = 'modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            }
        });
    }

    // Performance Optimization
    optimizePerformance() {
        // Reduce animations on low-performance devices
        if (navigator.hardwareConcurrency <= 2) {
            document.documentElement.style.setProperty('--animation-duration', '0.3s');
            this.particles = this.particles.slice(0, 20);
        }

        // Pause animations when page is not visible
        document.addEventListener('visibilitychange', () => {
            const elements = document.querySelectorAll('.particle, .shape, .cursor-trail');
            elements.forEach(el => {
                if (document.hidden) {
                    el.style.animationPlayState = 'paused';
                } else {
                    el.style.animationPlayState = 'running';
                }
            });
        });
    }
}

// Enhanced Form Interactions
class MagicalForms {
    static init() {
        document.querySelectorAll('input, textarea').forEach(input => {
            input.classList.add('magical-input');
            
            input.addEventListener('focus', () => {
                input.style.transform = 'scale(1.02)';
                input.style.boxShadow = '0 0 20px rgba(102,126,234,0.3)';
            });
            
            input.addEventListener('blur', () => {
                input.style.transform = 'scale(1)';
                input.style.boxShadow = 'none';
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const magicalEffects = new MagicalEffects();
    MagicalForms.init();
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .animate-in {
            animation: slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        @keyframes slideInUp {
            from {
                transform: translateY(50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .magical-fab {
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

// Export for use in other files
window.MagicalEffects = MagicalEffects;
