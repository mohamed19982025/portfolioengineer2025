// Research Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize research page functionality
    initializeResearchPage();
});

function initializeResearchPage() {
    // Initialize category filters
    initializeCategoryFilters();
    
    // Initialize research modal
    initializeResearchModal();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add intersection observer for animations
    addIntersectionObserver();
}

// Category Filtering
function initializeCategoryFilters() {
    const filterButtons = document.querySelectorAll('.category-filter');
    const researchItems = document.querySelectorAll('.research-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter research items
            filterResearchItems(category, researchItems);
        });
    });
}

function filterResearchItems(category, items) {
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

// Research Modal
function initializeResearchModal() {
    const modal = document.getElementById('researchModal');
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

function openResearchModal(button) {
    const researchItem = button.closest('.research-item');
    const modal = document.getElementById('researchModal');
    
    // Get research data
    const title = researchItem.querySelector('.research-title').textContent;
    const abstract = researchItem.querySelector('.research-abstract').textContent;
    const type = researchItem.querySelector('.research-type').textContent;
    const date = researchItem.querySelector('.research-date').textContent;
    const quotes = researchItem.querySelector('.research-stats span:first-child').textContent.match(/\d+/)[0];
    const downloads = researchItem.querySelector('.research-stats span:last-child').textContent.match(/\d+/)[0];
    
    // Update modal content
    document.getElementById('researchModalTitle').textContent = title;
    document.getElementById('researchModalAbstract').textContent = abstract;
    document.getElementById('researchModalQuotes').textContent = quotes;
    document.getElementById('researchModalDownloads').textContent = downloads;
    
    // Update modal meta
    document.querySelector('.research-modal-type').textContent = type;
    document.querySelector('.research-modal-date').textContent = date;
    
    // Generate detailed content based on research type
    generateDetailedContent(type, title);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function generateDetailedContent(type, title) {
    const methodologyElement = document.getElementById('researchModalMethodology');
    const resultsElement = document.getElementById('researchModalResults');
    
    // Generate methodology content
    let methodology = '';
    let results = '';
    
    switch(type) {
        case 'بحث علمي':
            methodology = `تم استخدام منهجية البحث العلمي التجريبي مع تطبيق النماذج الرياضية والمحاكاة الحاسوبية. شملت الدراسة تحليل البيانات الإحصائية واختبار الفرضيات باستخدام أحدث التقنيات المتاحة.`;
            results = `أظهرت النتائج تحسناً بنسبة 25% في كفاءة النظام، مع تقليل استهلاك الطاقة بنسبة 30%. تم التحقق من صحة النتائج من خلال اختبارات متعددة وتطبيقها على نماذج حقيقية.`;
            break;
        case 'بحث تقني':
            methodology = `استخدم البحث منهجية التطوير التقني المتدرج مع تطبيق مبادئ الذكاء الاصطناعي والتعلم الآلي. تم جمع البيانات من مصادر متعددة وتحليلها باستخدام خوارزميات متقدمة.`;
            results = `تم تطوير نظام ذكي يحسن إدارة المشاريع بنسبة 40%، مع تقليل الوقت المستغرق في التخطيط بنسبة 35%. النظام قابل للتطوير والتكيف مع مختلف أنواع المشاريع.`;
            break;
        case 'بحث ابتكاري':
            methodology = `تم استخدام منهجية الابتكار المفتوح مع التركيز على الحلول المستدامة. شملت الدراسة تحليل المواد المحلية المتوفرة وتطوير تقنيات بناء مبتكرة.`;
            results = `تم تطوير 5 تقنيات بناء جديدة باستخدام المواد المحلية، مما أدى إلى تقليل التكلفة بنسبة 45% والآثار البيئية بنسبة 60%. التقنيات قابلة للتطبيق في المناطق المختلفة.`;
            break;
        case 'بحث استدامة':
            methodology = `استخدم البحث منهجية التصميم المستدام المتكامل مع التركيز على كفاءة الطاقة والموارد المتجددة. تم تطبيق معايير الاستدامة العالمية في التصميم.`;
            results = `تم تطوير نظام طاقة متكامل يحقق كفاءة بنسبة 85% مع استخدام 70% من الطاقة المتجددة. النظام يقلل انبعاثات الكربون بنسبة 50% مقارنة بالأنظمة التقليدية.`;
            break;
        default:
            methodology = `تم استخدام منهجية بحثية شاملة تجمع بين التحليل النظري والتطبيق العملي. شملت الدراسة مراجعة الأدبيات والتحليل التجريبي والتحقق من النتائج.`;
            results = `أظهرت النتائج تحسناً ملحوظاً في الأداء مع تحقيق الأهداف المطلوبة. البحث يفتح آفاقاً جديدة للتطوير والتحسين في المجال المحدد.`;
    }
    
    methodologyElement.textContent = methodology;
    resultsElement.textContent = results;
}

// Download Research Function
function downloadResearch(filename) {
    // Simulate download (in real implementation, this would trigger actual file download)
    const link = document.createElement('a');
    link.href = `#`; // Replace with actual file path
    link.download = filename;
    link.click();
    
    // Show success message
    showNotification('تم بدء تحميل البحث بنجاح', 'success');
}

// Share Research Function
function shareResearch() {
    if (navigator.share) {
        navigator.share({
            title: 'بحث علمي مميز',
            text: 'اكتشف هذا البحث المميز في مجال الهندسة',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        copyToClipboard(window.location.href);
        showNotification('تم نسخ رابط البحث', 'success');
    }
}

// Utility Functions
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

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
    
    // Observe research items
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

// Add loading animation for research items
function addLoadingAnimation() {
    const researchItems = document.querySelectorAll('.research-item');
    
    researchItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('loading-animation');
    });
}

// Initialize loading animation
document.addEventListener('DOMContentLoaded', function() {
    addLoadingAnimation();
});
