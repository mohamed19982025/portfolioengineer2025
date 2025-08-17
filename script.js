// DOM Elements
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

// دالة فتح رابط الفيديو في نافذة جديدة
function openVideoLink(videoUrl) {
    window.open(videoUrl, '_blank', 'width=1000,height=600');
}

// دالة فتح الفيديو في نافذة منبثقة
function openVideoModal(button, videoUrl) {
    const portfolioItem = button.closest('.portfolio-item');
    const title = portfolioItem.querySelector('h3').textContent;
    const description = portfolioItem.querySelector('p').textContent;
    
    // إنشاء نافذة منبثقة للفيديو
    const modal = document.getElementById('imageModal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <div class="video-container">
            <iframe 
                src="${videoUrl}" 
                width="100%" 
                height="400" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="modal-info">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // إغلاق النافذة
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
}

// Portfolio Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                item.classList.add('fade-in');
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Modal Functionality
function openModal(button) {
    const portfolioItem = button.closest('.portfolio-item');
    const image = portfolioItem.querySelector('img');
    const title = portfolioItem.querySelector('h3').textContent;
    const description = portfolioItem.querySelector('p').textContent;
    
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal when clicking on X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        
        // Update active nav link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    // Get all sections
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all portfolio items and sections
document.querySelectorAll('.portfolio-item, section').forEach(item => {
    observer.observe(item);
});

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.remove('loading');
    });
    
    img.addEventListener('error', () => {
        img.src = 'https://via.placeholder.com/400x300/cccccc/666666?text=صورة+غير+متوفرة';
    });
});

// Form validation (if you add a contact form later)
function validateForm(formData) {
    const errors = [];
    
    if (!formData.get('name')) {
        errors.push('الاسم مطلوب');
    }
    
    if (!formData.get('email')) {
        errors.push('البريد الإلكتروني مطلوب');
    } else if (!isValidEmail(formData.get('email'))) {
        errors.push('البريد الإلكتروني غير صحيح');
    }
    
    if (!formData.get('message')) {
        errors.push('الرسالة مطلوبة');
    }
    
    return errors;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add to favorites functionality (optional)
function addToFavorites(portfolioItem) {
    const itemId = portfolioItem.getAttribute('data-id');
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (favorites.includes(itemId)) {
        favorites = favorites.filter(id => id !== itemId);
        portfolioItem.classList.remove('favorited');
    } else {
        favorites.push(itemId);
        portfolioItem.classList.add('favorited');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Initialize favorites on page load
document.addEventListener('DOMContentLoaded', () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    portfolioItems.forEach(item => {
        const itemId = item.getAttribute('data-id');
        if (favorites.includes(itemId)) {
            item.classList.add('favorited');
        }
    });
});

// Search functionality (optional)
function searchPortfolio(query) {
    const searchTerm = query.toLowerCase();
    
    portfolioItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

    
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <div class="video-container">
            <iframe 
                src="${videoUrl}" 
                width="100%" 
                height="400" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="modal-info">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // إغلاق النافذة
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };




// Add search input if needed
function addSearchInput() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" id="searchInput" placeholder="ابحث في الأعمال..." class="search-input">
        <button id="searchBtn" class="search-btn">
            <i class="fas fa-search"></i>
        </button>
    `;
    
    const portfolioSection = document.querySelector('.portfolio');
    const filterButtons = portfolioSection.querySelector('.filter-buttons');
    portfolioSection.insertBefore(searchContainer, filterButtons);
    
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', () => {
        searchPortfolio(searchInput.value);
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchPortfolio(searchInput.value);
        }
    });
}

// Initialize search if needed
// addSearchInput();

// Performance optimization: Lazy loading for images
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

// Initialize lazy loading
// lazyLoadImages();

// Add smooth reveal animation on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add this CSS class for reveal animation
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .reveal.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    .search-container {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        gap: 1rem;
    }
    
    .search-input {
        padding: 0.8rem 1.5rem;
        border: 2px solid #e9ecef;
        border-radius: 25px;
        font-size: 1rem;
        width: 300px;
        max-width: 100%;
    }
    
    .search-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .search-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
    
    .favorited {
        border: 2px solid #ff6b6b;
    }
    
    .favorited::before {
        content: '❤️';
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1.5rem;
        z-index: 10;
    }
`;

document.head.appendChild(style);

// Medical Modal Functions
function openMedicalModal() {
    const modal = document.getElementById('medicalModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Close modal when clicking on close button
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    
    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
}

function downloadMedicalReport() {
    // Simulate download
    const link = document.createElement('a');
    link.href = `#`;
    link.download = 'medical-report-2024.pdf';
    link.click();
    
    showNotification('تم بدء تحميل التقرير الطبي بنجاح', 'success');
}

function contactAboutMedical() {
    // Redirect to contact section
    window.location.href = '#contact';
}

// Islamic Modal Functions
function openIslamicModal() {
    const modal = document.getElementById('islamicModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Close modal when clicking on close button
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    
    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
}

function visitIslamicPlatform() {
    showNotification('سيتم إرسال رابط المنصة الإسلامية قريباً', 'info');
}

function contactAboutIslamic() {
    // Redirect to contact section
    window.location.href = '#contact';
}

// Notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

console.log('Portfolio website loaded successfully! 🚀');

