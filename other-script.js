// Other Works Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize other works page functionality
    initializeOtherWorksPage();
});

function initializeOtherWorksPage() {
    // Initialize category filters
    initializeCategoryFilters();
    
    // Initialize other works modal
    initializeOtherModal();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add intersection observer for animations
    addIntersectionObserver();
}

// Category Filtering
function initializeCategoryFilters() {
    const filterButtons = document.querySelectorAll('.category-filter');
    const workItems = document.querySelectorAll('.research-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter work items
            filterWorkItems(category, workItems);
        });
    });
}

function filterWorkItems(category, items) {
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

// Other Works Modal
function initializeOtherModal() {
    const modal = document.getElementById('otherModal');
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

function openOtherModal(button) {
    const workItem = button.closest('.research-item');
    const modal = document.getElementById('otherModal');
    
    // Get work data
    const title = workItem.querySelector('.research-title').textContent;
    const description = workItem.querySelector('.research-abstract').textContent;
    const type = workItem.querySelector('.research-type').textContent;
    const date = workItem.querySelector('.research-date').textContent;
    
    // Update modal content
    document.getElementById('otherModalTitle').textContent = title;
    document.getElementById('otherModalDescription').textContent = description;
    
    // Update modal meta
    document.querySelector('.research-modal-type').textContent = type;
    document.querySelector('.research-modal-date').textContent = date;
    
    // Generate detailed content based on work type
    generateWorkDetails(type, title);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function generateWorkDetails(type, title) {
    const featuresElement = document.getElementById('otherModalFeatures');
    const resultsElement = document.getElementById('otherModalResults');
    
    // Generate features content
    let features = '';
    let results = '';
    
    switch(type) {
        case 'أعمال طبية':
            features = `• دراسة شاملة في مجال الطب والعلاج المتقدم
• استخدام أحدث التقنيات والتقنيات الطبية
• تحليل البيانات الطبية والإحصائيات
• تطوير بروتوكولات علاجية جديدة
• تعاون مع خبراء طبيين متخصصين`;
            results = `• تحسين جودة الرعاية الصحية بنسبة 40%
• تقليل وقت التشخيص بنسبة 60%
• زيادة معدل نجاح العلاج إلى 95%
• نشر نتائج الدراسة في مجلات طبية مرموقة
• تطبيق النتائج في 5 مستشفيات رئيسية`;
            break;
        case 'أعمال إسلامية':
            features = `• منصة تعليمية متكاملة للدراسات الإسلامية
• محتوى تعليمي عالي الجودة ومصداقية
• أدوات تفاعلية للطلاب والمهتمين
• دعم متعدد اللغات والثقافات
• تحديث مستمر للمحتوى والإضافات`;
            results = `• وصول المنصة لأكثر من 1000 مستخدم نشط
• معدل رضا المستخدمين 4.9/5
• زيادة الوعي الديني بنسبة 70%
• تعاون مع 10 مراكز إسلامية
• نشر 50+ درس ومحاضرة`;
            break;
        case 'أعمال إبداعية':
            if (title.includes('تصاميم إبداعية')) {
                features = `• مجموعة متنوعة من التصاميم الإبداعية
• مزيج من الفن التقليدي والرقمي
• استخدام ألوان متناسقة وخطوط عصرية
• تصميم متجاوب لجميع الأجهزة
• تركيز على تجربة المستخدم`;
                results = `• إنتاج أكثر من 50 تصميم إبداعي
• حصول 3 تصاميم على جوائز محلية
• استخدام التصاميم في 15 مشروع تجاري
• زيادة الطلبات بنسبة 200%
• تعاون مع 8 شركات تصميم`;
            } else if (title.includes('فيديو تحفيزي')) {
                features = `• فيديو تحفيزي عالي الجودة
• تصميم إبداعي ومؤثر بصرياً
• موسيقى مؤثرة ومتناسقة مع المحتوى
• رسالة قوية ومحفزة للجمهور
• تقنيات إخراج متقدمة`;
                results = `• تحقيق أكثر من 50,000 مشاهدة
• حصول الفيديو على 2,000+ إعجاب
• مشاركة الفيديو في 500+ منصة
• تأثير إيجابي على 80% من المشاهدين
• طلبات لإنتاج فيديوهات مشابهة`;
            } else {
                features = `• مشروع مبتكر لحلول الطاقة المستدامة
• استخدام تقنيات متقدمة ومتجددة
• تصميم مستدام وصديق للبيئة
• كفاءة عالية وتكلفة منخفضة
• قابلية التطبيق على نطاق واسع`;
                results = `• تطوير نموذج أولي ناجح
• تقليل استهلاك الطاقة بنسبة 40%
• توفير في التكاليف بنسبة 60%
• اهتمام 5 شركات استثمارية
• تسجيل براءة اختراع للمشروع`;
            }
            break;
        case 'استشارات مهنية':
            features = `• خدمات استشارية متخصصة في مجال الهندسة
• خبرة 10+ سنوات في المجال
• حلول مبتكرة للمشاريع المعقدة
• ضمان الجودة والكفاءة
• دعم مستمر ومتابعة المشاريع`;
            results = `• خدمة أكثر من 100 عميل
• معدل نجاح المشاريع 85%
• توفير في التكاليف بنسبة 30%
• تسريع إنجاز المشاريع بنسبة 50%
• تقييم إيجابي من 95% من العملاء`;
            break;
        default:
            features = `• عمل متنوع ومبتكر في مجال متخصص
• استخدام تقنيات وأساليب حديثة
• تركيز على الجودة والتميز
• قابلية التطوير والتوسع
• تأثير إيجابي على المجتمع`;
            results = `• إنجاز العمل بنجاح
• تحقيق جميع الأهداف المطلوبة
• تأثير إيجابي على المستفيدين
• فتح آفاق جديدة للتطوير
• نموذج يحتذى به في المجال`;
    }
    
    featuresElement.textContent = features;
    resultsElement.textContent = results;
}

// Work Actions
function downloadMedicalReport() {
    // Simulate download
    const link = document.createElement('a');
    link.href = `#`;
    link.download = 'medical-report-2024.pdf';
    link.click();
    
    showNotification('تم بدء تحميل التقرير الطبي بنجاح', 'success');
}

function visitIslamicPlatform() {
    showNotification('سيتم إرسال رابط المنصة الإسلامية قريباً', 'info');
}

function viewCreativeGallery() {
    showNotification('سيتم فتح معرض التصاميم قريباً', 'info');
}

function requestConsultation() {
    showNotification('تم إرسال طلب الاستشارة، سنتواصل معك قريباً', 'success');
}

function downloadVideo() {
    // Simulate download
    const link = document.createElement('a');
    link.href = `#`;
    link.download = 'tahfez1.mp4';
    link.click();
    
    showNotification('تم بدء تحميل الفيديو بنجاح', 'success');
}

function investInProject() {
    showNotification('شكراً لاهتمامك! سنتواصل معك لمناقشة تفاصيل الاستثمار', 'success');
}

function contactAboutWork() {
    // Redirect to contact page
    window.location.href = 'index.html#contact';
}

function closeOtherModal() {
    const modal = document.getElementById('otherModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Video Modal Function
function openVideoModal(button, videoSrc) {
    const workItem = button.closest('.research-item');
    const title = workItem.querySelector('h3').textContent;
    const description = workItem.querySelector('p').textContent;
    
    // Create video modal content
    const modalContent = `
        <span class="close">&times;</span>
        <div class="video-container">
            <video width="100%" height="400" controls>
                <source src="${videoSrc}" type="video/mp4">
                متصفحك لا يدعم تشغيل الفيديو.
            </video>
        </div>
        <div class="modal-info">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
    
    // Show modal
    const modal = document.getElementById('otherModal');
    const modalContentDiv = modal.querySelector('.modal-content');
    modalContentDiv.innerHTML = modalContent;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Close modal
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
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
    
    // Observe work items
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

// Add loading animation for work items
function addLoadingAnimation() {
    const workItems = document.querySelectorAll('.research-item');
    
    workItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('loading-animation');
    });
}

// Initialize loading animation
document.addEventListener('DOMContentLoaded', function() {
    addLoadingAnimation();
});

console.log('Other Works page loaded successfully! 🚀');

