// Design Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize design page functionality
    initializeDesignPage();
});

function initializeDesignPage() {
    // Initialize category filters
    initializeCategoryFilters();
    
    // Initialize design modal
    initializeDesignModal();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add intersection observer for animations
    addIntersectionObserver();
}

// Category Filtering
function initializeCategoryFilters() {
    const filterButtons = document.querySelectorAll('.category-filter');
    const designItems = document.querySelectorAll('.research-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter design items
            filterDesignItems(category, designItems);
        });
    });
}

function filterDesignItems(category, items) {
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            item.classList.add('fade-in');
        } else {
            item.style.display = 'none';
            item.classList.remove('fade-in');
        }
    });
}

// Design Modal
function initializeDesignModal() {
    const modal = document.getElementById('designModal');
    const closeBtn = modal.querySelector('.close');
    
    // Close modal when clicking on close button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

function openDesignModal(button) {
    const designItem = button.closest('.research-item');
    const modal = document.getElementById('designModal');
    
    // Get design data
    const title = designItem.querySelector('.research-title').textContent;
    const description = designItem.querySelector('.research-abstract').textContent;
    const type = designItem.querySelector('.research-type').textContent;
    const date = designItem.querySelector('.research-date').textContent;
    
    // Update modal content
    document.getElementById('designModalTitle').textContent = title;
    document.getElementById('designModalDescription').textContent = description;
    
    // Update modal meta
    document.querySelector('.research-modal-type').textContent = type;
    document.querySelector('.research-modal-date').textContent = date;
    
    // Generate detailed content based on design type
    generateDesignDetails(type, title);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function generateDesignDetails(type, title) {
    const technologiesElement = document.getElementById('designModalTechnologies');
    const resultsElement = document.getElementById('designModalResults');
    
    // Generate technologies content
    let technologies = '';
    let results = '';
    
    switch(type) {
        case 'تصميم واجهات':
            if (title.includes('إدارة المهام')) {
                technologies = `تم استخدام Figma كأداة تصميم رئيسية مع تطبيق مبادئ Material Design. تم إنشاء نظام تصميم متكامل مع 50+ مكون قابل لإعادة الاستخدام. تم تطبيق اختبارات المستخدم مع 20+ مشارك.`;
                results = `حقق التصميم معدل رضا 95% من المستخدمين مع تقليل وقت التعلم بنسبة 40%. تم اختيار التصميم كأفضل تصميم تطبيق في مسابقة التصميم المحلية.`;
            } else if (title.includes('تعلم اللغات')) {
                technologies = `تم استخدام Sketch للتصميم الأساسي مع InVision للنماذج التفاعلية. تم تطبيق اختبارات المستخدم مع 200+ مستخدم وتم جمع البيانات من خلال Google Analytics.`;
                results = `حقق التصميم تقييم 4.9/5 من المستخدمين مع زيادة معدل الاحتفاظ بنسبة 60%. تم تطبيق التصميم بنجاح في 3 تطبيقات مختلفة.`;
            }
            break;
        case 'تصميم جرافيكي':
            technologies = `تم استخدام Adobe Illustrator للرسوم المتجهية مع تطبيق نظرية الألوان المتقدمة. تم إنشاء 15+ نسخة مختلفة قبل الوصول للتصميم النهائي. تم استخدام Typography متقدم مع خطوط مخصصة.`;
            results = `حقق الملصق 2K+ مشاهدة مع 150+ مشاركة على وسائل التواصل الاجتماعي. تم اختيار التصميم من قبل 5 منظمات بيئية مختلفة.`;
            break;
        case 'تصميم مواقع':
            technologies = `تم استخدام Adobe XD للتصميم مع إنشاء نماذج تفاعلية متقدمة. تم تطبيق مبادئ UX/UI مع اختبارات قابلية الاستخدام. تم إنشاء 20+ شاشة مع انتقالات متقدمة.`;
            results = `حقق التصميم معدل تحويل 25% مع تقليل معدل الارتداد بنسبة 30%. تم تطبيق التصميم بنجاح في 3 مواقع مختلفة.`;
            break;
        case 'هوية بصرية':
            technologies = `تم إنشاء 50+ عنصر تصميم مع دليل هوية بصرية شامل. تم استخدام Adobe Creative Suite مع تطبيق مبادئ Branding المتقدمة. تم إنشاء نظام ألوان متكامل مع خطوط مخصصة.`;
            results = `تم تطبيق الهوية البصرية بنجاح في جميع وسائل التواصل مع زيادة التعرف على العلامة التجارية بنسبة 80%. تم اختيار الهوية كأفضل هوية بصرية في القطاع.`;
            break;
        default:
            technologies = `تم استخدام مجموعة من أدوات التصميم المتقدمة المناسبة لنوع التصميم. شملت الأدوات برامج تصميم حديثة وتقنيات متطورة.`;
            results = `تم إنشاء تصميم متكامل يحقق جميع الأهداف المطلوبة. التصميم يفتح آفاقاً جديدة للإبداع والابتكار في المجال المحدد.`;
    }
    
    technologiesElement.textContent = technologies;
    resultsElement.textContent = results;
}

// Design Actions
function downloadDesign(filename) {
    // Simulate download
    const link = document.createElement('a');
    link.href = `#`;
    link.download = filename;
    link.click();
    
    showNotification('تم بدء تحميل ملف التصميم بنجاح', 'success');
}

function viewPrototype(url) {
    window.open(url, '_blank');
}

function downloadBrandGuide(filename) {
    // Simulate download
    const link = document.createElement('a');
    link.href = `#`;
    link.download = filename;
    link.click();
    
    showNotification('تم بدء تحميل دليل الهوية بنجاح', 'success');
}

function viewUserTesting(url) {
    window.open(url, '_blank');
}

function viewFullDesign() {
    showNotification('سيتم إرسال رابط التصميم كاملاً قريباً', 'info');
}

function contactAboutDesign() {
    // Redirect to contact page
    window.location.href = 'index.html#contact';
}

// Utility Functions
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

function addSmoothScrolling() {
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
}

function addIntersectionObserver() {
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
    
    // Observe design items
    document.querySelectorAll('.research-item').forEach(item => {
        observer.observe(item);
    });
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
});

// Add loading animation for design items
function addLoadingAnimation() {
    const designItems = document.querySelectorAll('.research-item');
    
    designItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('loading-animation');
    });
}

// Initialize loading animation
document.addEventListener('DOMContentLoaded', function() {
    addLoadingAnimation();
});
