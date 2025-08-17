// Engineering Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize engineering page functionality
    initializeEngineeringPage();
});

function initializeEngineeringPage() {
    // Initialize category filters
    initializeCategoryFilters();
    
    // Initialize project modal
    initializeProjectModal();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add intersection observer for animations
    addIntersectionObserver();
}

// Category Filtering
function initializeCategoryFilters() {
    const filterButtons = document.querySelectorAll('.category-filter');
    const projectItems = document.querySelectorAll('.research-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter project items
            filterProjectItems(category, projectItems);
        });
    });
}

function filterProjectItems(category, items) {
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

// Project Modal
function initializeProjectModal() {
    const modal = document.getElementById('projectModal');
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

function openProjectModal(button) {
    const projectItem = button.closest('.research-item');
    const modal = document.getElementById('projectModal');
    
    // Get project data
    const title = projectItem.querySelector('.research-title').textContent;
    const description = projectItem.querySelector('.research-abstract').textContent;
    const type = projectItem.querySelector('.research-type').textContent;
    const date = projectItem.querySelector('.research-date').textContent;
    
    // Update modal content
    document.getElementById('projectModalTitle').textContent = title;
    document.getElementById('projectModalDescription').textContent = description;
    
    // Update modal meta
    document.querySelector('.research-modal-type').textContent = type;
    document.querySelector('.research-modal-date').textContent = date;
    
    // Generate detailed content based on project type
    generateProjectDetails(type, title);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function generateProjectDetails(type, title) {
    const technologiesElement = document.getElementById('projectModalTechnologies');
    const resultsElement = document.getElementById('projectModalResults');
    
    // Generate technologies content
    let technologies = '';
    let results = '';
    
    switch(type) {
        case 'تطوير ويب':
            if (title.includes('معرض السيارات')) {
                technologies = `تم استخدام React.js للواجهة الأمامية مع Node.js للخادم الخلفي، وMongoDB لقاعدة البيانات. تم تطبيق Material-UI للتصميم المتجاوب وSocket.io للاتصال المباشر.`;
                results = `تم تطوير منصة متكاملة تدعم 500+ مستخدم مع معدل رضا 4.8/5. النظام يحقق كفاءة 95% في إدارة المخزون ويقلل وقت الاستجابة بنسبة 60%.`;
            } else if (title.includes('منصة تعليمية')) {
                technologies = `تم استخدام Vue.js للواجهة الأمامية مع Laravel للخادم الخلفي، وMySQL لقاعدة البيانات. تم تطبيق WebRTC للمؤتمرات المباشرة وRedis للتخزين المؤقت.`;
                results = `تم تطوير منصة تعليمية شاملة تدعم 1000+ طالب و50+ مدرس. النظام يحقق معدل نجاح 92% في التعلم عن بعد ويقلل التكاليف بنسبة 40%.`;
            }
            break;
        case 'تطبيق جوال':
            technologies = `تم استخدام Flutter للتطوير المتعدد المنصات مع Firebase للخادم الخلفي، وCloud Firestore لقاعدة البيانات. تم تطبيق Flutter Bloc لإدارة الحالة وProvider للتبعية.`;
            results = `تم تطوير تطبيق جوال متطور يحقق 10K+ تحميل مع معدل رضا 4.6/5. التطبيق يحسن الإنتاجية بنسبة 35% ويقلل الوقت الضائع بنسبة 45%.`;
            break;
        case 'ذكاء اصطناعي':
            technologies = `تم استخدام Python مع TensorFlow للتعلم العميق، وOpenCV لمعالجة الصور، وKeras لبناء النماذج العصبية. تم تطبيق Transfer Learning لتحسين الأداء.`;
            results = `تم تطوير نظام ذكي يحقق دقة 95% في تحليل الصور الطبية. النظام يساعد في التشخيص المبكر ويقلل الأخطاء الطبية بنسبة 70%.`;
            break;
        case 'إنترنت الأشياء':
            technologies = `تم استخدام Arduino وESP32 للمتحكمات، وMQTT للاتصال، وNode.js للخادم الخلفي. تم تطبيق WebSocket للاتصال المباشر وREST API للتحكم.`;
            results = `تم تطوير نظام منزل ذكي متكامل يدير 50+ جهاز. النظام يحقق توفير في الطاقة بنسبة 30% ويحسن الأمان بنسبة 80%.`;
            break;
        default:
            technologies = `تم استخدام مجموعة من التقنيات المتقدمة المناسبة لنوع المشروع. شملت التقنيات أدوات تطوير حديثة وأطر عمل متطورة.`;
            results = `تم تطوير مشروع متكامل يحقق جميع الأهداف المطلوبة. المشروع يفتح آفاقاً جديدة للتطوير والتحسين في المجال المحدد.`;
    }
    
    technologiesElement.textContent = technologies;
    resultsElement.textContent = results;
}

// Project Actions
function openProjectDemo(url) {
    if (url === 'current-project') {
        showNotification('سيتم إرسال رابط المشروع قريباً', 'info');
    } else {
        window.open(url, '_blank');
    }
}

function downloadApp(filename) {
    // Simulate download
    const link = document.createElement('a');
    link.href = `#`;
    link.download = filename;
    link.click();
    
    showNotification('تم بدء تحميل التطبيق بنجاح', 'success');
}

function downloadDocumentation(filename) {
    // Simulate download
    const link = document.createElement('a');
    link.href = `#`;
    link.download = filename;
    link.click();
    
    showNotification('تم بدء تحميل الدليل بنجاح', 'success');
}

function requestDemo() {
    showNotification('تم إرسال طلب العرض التوضيحي، سنتواصل معك قريباً', 'success');
}

function contactAboutProject() {
    // Redirect to contact page or show contact form
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
    
    // Observe project items
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

// Add loading animation for project items
function addLoadingAnimation() {
    const projectItems = document.querySelectorAll('.research-item');
    
    projectItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('loading-animation');
    });
}

// Initialize loading animation
document.addEventListener('DOMContentLoaded', function() {
    addLoadingAnimation();
});
