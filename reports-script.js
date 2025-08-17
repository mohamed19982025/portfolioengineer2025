// Reports Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize reports page functionality
    initializeReportsPage();
});

function initializeReportsPage() {
    // Initialize category filters
    initializeCategoryFilters();
    
    // Initialize report modal
    initializeReportModal();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add intersection observer for animations
    addIntersectionObserver();
}

// Category Filtering
function initializeCategoryFilters() {
    const filterButtons = document.querySelectorAll('.category-filter');
    const reportItems = document.querySelectorAll('.research-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter report items
            filterReportItems(category, reportItems);
        });
    });
}

function filterReportItems(category, items) {
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

// Report Modal
function initializeReportModal() {
    const modal = document.getElementById('reportModal');
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

function openReportModal(button) {
    const reportItem = button.closest('.research-item');
    const modal = document.getElementById('reportModal');
    
    // Get report data
    const title = reportItem.querySelector('.research-title').textContent;
    const description = reportItem.querySelector('.research-abstract').textContent;
    const type = reportItem.querySelector('.research-type').textContent;
    const date = reportItem.querySelector('.research-date').textContent;
    
    // Update modal content
    document.getElementById('reportModalTitle').textContent = title;
    document.getElementById('reportModalDescription').textContent = description;
    
    // Update modal meta
    document.querySelector('.research-modal-type').textContent = type;
    document.querySelector('.research-modal-date').textContent = date;
    
    // Generate detailed content based on report type
    generateReportDetails(type, title);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function generateReportDetails(type, title) {
    const methodologyElement = document.getElementById('reportModalMethodology');
    const resultsElement = document.getElementById('reportModalResults');
    
    // Generate methodology content
    let methodology = '';
    let results = '';
    
    switch(type) {
        case 'تقرير تقني':
            if (title.includes('الطاقة المتجددة')) {
                methodology = `تم استخدام منهجية البحث العلمي مع تحليل البيانات التقنية والاقتصادية. شملت الدراسة مراجعة الأدبيات والتحليل المقارن ودراسات الحالة. تم تطبيق نماذج رياضية متقدمة لتحليل الكفاءة والتكلفة.`;
                results = `أظهر التقرير أن أنظمة الطاقة المتجددة تحقق توفيراً بنسبة 40% في التكاليف التشغيلية مع تقليل الانبعاثات الكربونية بنسبة 70%. تم تقديم 15 توصية عملية للتنفيذ.`;
            } else if (title.includes('الذكاء الاصطناعي')) {
                methodology = `تم استخدام منهجية التحليل التقني المتقدم مع دراسة حالات عملية من 20+ شركة صناعية. تم تطبيق تحليل SWOT وتحليل المخاطر والتقييم الاقتصادي.`;
                results = `أظهر التقرير أن تطبيق الذكاء الاصطناعي يحسن الإنتاجية بنسبة 35% ويقلل التكاليف بنسبة 25%. تم تحديد 10 مجالات للتطبيق الفوري.`;
            }
            break;
        case 'دراسة جدوى':
            methodology = `تم استخدام منهجية دراسة الجدوى الشاملة مع تحليل السوق والتحليل المالي والتحليل التقني. تم تطبيق نماذج التنبؤ الاقتصادي وتحليل الحساسية. شملت الدراسة استطلاعات رأي وتحليل المنافسين.`;
            results = `أظهرت الدراسة أن المشروع يحقق معدل عائد داخلي 18% مع فترة استرداد 5 سنوات. تم تقديم خطة تنفيذ مفصلة مع جدول زمني واقعي.`;
            break;
        case 'تقرير مشروع':
            methodology = `تم استخدام منهجية إدارة المشاريع المعيارية (PMBOK) مع تطبيق أدوات التخطيط والمراقبة. تم إنشاء نظام متابعة شامل مع مؤشرات الأداء الرئيسية. شمل التقرير تحليل المخاطر وإدارة التغيير.`;
            results = `تم إنجاز المشروع بنسبة 100% ضمن الميزانية المحددة مع تحقيق جميع الأهداف. تم تطبيق 8 ابتكارات تقنية جديدة وتم تدريب 50+ موظف.`;
            break;
        case 'تقرير تحليل':
            methodology = `تم استخدام منهجية التحليل الإحصائي المتقدم مع جمع بيانات من 50+ مبنى. تم تطبيق تحليل الانحدار والتحليل المقارن ودراسات الارتباط. تم استخدام أدوات تحليل البيانات المتقدمة.`;
            results = `أظهر التحليل أن المباني الخضراء تحقق توفيراً في الطاقة بنسبة 45% مع تحسين جودة الهواء الداخلي بنسبة 60%. تم تقديم 20 توصية للتحسين.`;
            break;
        default:
            methodology = `تم استخدام منهجية بحثية شاملة تجمع بين التحليل النظري والتطبيق العملي. شملت الدراسة مراجعة الأدبيات والتحليل التجريبي والتحقق من النتائج.`;
            results = `تم إنجاز التقرير بنجاح مع تحقيق جميع الأهداف المطلوبة. التقرير يفتح آفاقاً جديدة للتطوير والتحسين في المجال المحدد.`;
    }
    
    methodologyElement.textContent = methodology;
    resultsElement.textContent = results;
}

// Report Actions
function downloadReport(filename) {
    // Simulate download
    const link = document.createElement('a');
    link.href = `#`;
    link.download = filename;
    link.click();
    
    showNotification('تم بدء تحميل التقرير بنجاح', 'success');
}

function downloadFullReport() {
    showNotification('سيتم إرسال التقرير كاملاً قريباً', 'info');
}

function contactAboutReport() {
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
    
    // Observe report items
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

// Add loading animation for report items
function addLoadingAnimation() {
    const reportItems = document.querySelectorAll('.research-item');
    
    reportItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('loading-animation');
    });
}

// Initialize loading animation
document.addEventListener('DOMContentLoaded', function() {
    addLoadingAnimation();
});
