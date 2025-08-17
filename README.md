# Portfolio Website - موقع الملف الشخصي

موقع شخصي شامل لعرض الأعمال والمشاريع في مختلف المجالات الهندسية والتقنية.

## 🚀 نشر الموقع

### النشر على GitHub Pages (مجاني)

#### الخطوات:

1. **إنشاء حساب على GitHub**
   - اذهب إلى [github.com](https://github.com)
   - أنشئ حساب جديد

2. **إنشاء مستودع جديد**
   - اضغط على "New repository"
   - اسم المستودع: `your-username.github.io`
   - اختر "Public"
   - اضغط "Create repository"

3. **رفع الملفات**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```

4. **تفعيل GitHub Pages**
   - اذهب إلى Settings > Pages
   - اختر Source: "Deploy from a branch"
   - اختر Branch: "main"
   - اضغط "Save"

5. **الرابط النهائي**
   - سيكون: `https://your-username.github.io`

### النشر على Netlify (مجاني)

#### الخطوات:

1. **إنشاء حساب على Netlify**
   - اذهب إلى [netlify.com](https://netlify.com)
   - سجل دخول باستخدام GitHub

2. **رفع الموقع**
   - اسحب مجلد الموقع إلى Netlify
   - أو اربط مستودع GitHub

3. **الرابط النهائي**
   - سيكون: `https://random-name.netlify.app`
   - يمكنك تغيير الرابط لاسم مخصص

### النشر على Vercel (مجاني)

#### الخطوات:

1. **إنشاء حساب على Vercel**
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل دخول باستخدام GitHub

2. **استيراد المشروع**
   - اضغط "New Project"
   - اختر مستودع GitHub
   - اضغط "Deploy"

3. **الرابط النهائي**
   - سيكون: `https://project-name.vercel.app`

## 📁 هيكل الملفات

```
portfolio-website/
├── index.html              # الصفحة الرئيسية
├── styles.css              # ملف التصميم
├── script.js               # ملف التفاعلية
├── engineering.html        # صفحة الأعمال الهندسية
├── engineering-script.js   # سكريبت صفحة الهندسة
├── research.html           # صفحة الأبحاث
├── research-script.js      # سكريبت صفحة الأبحاث
├── reports.html            # صفحة التقارير
├── reports-script.js       # سكريبت صفحة التقارير
├── design.html             # صفحة التصاميم
├── design-script.js        # سكريبت صفحة التصاميم
├── other.html              # صفحة الأعمال الأخرى
├── other-script.js         # سكريبت صفحة الأعمال الأخرى
└── README.md               # دليل الاستخدام
```

## 🛠️ كيفية الاستخدام

### 1. تشغيل الموقع
- افتح ملف `index.html` في أي متصفح ويب
- أو ارفع الملفات على خادم ويب

### 2. إضافة أعمالك
لتغيير الصور والنصوص:

#### تغيير الصور:
```html
<img src="path/to/your/image.jpg" alt="وصف الصورة">
```

#### تغيير النصوص:
```html
<h3>عنوان عملك</h3>
<p>وصف تفصيلي للعمل</p>
```

#### إضافة عمل جديد:
```html
<div class="portfolio-item" data-category="engineering">
    <div class="portfolio-image">
        <img src="صورة_عملك.jpg" alt="وصف العمل">
        <div class="portfolio-overlay">
            <h3>عنوان العمل</h3>
            <p>وصف العمل</p>
            <button class="view-btn" onclick="openModal(this)">
                <i class="fas fa-eye"></i>
            </button>
        </div>
    </div>
</div>
```

#### إضافة فيديو جديد:
```html
<div class="portfolio-item" data-category="videos">
    <div class="portfolio-image">
        <img src="صورة_مصغرة_للفيديو.jpg" alt="وصف الفيديو">
        <div class="portfolio-overlay">
            <h3>عنوان الفيديو</h3>
            <p>وصف الفيديو</p>
            <button class="view-btn" onclick="openVideoLink('رابط_الفيديو')">
                <i class="fas fa-play"></i>
            </button>
        </div>
    </div>
</div>
```

### 3. تخصيص الألوان
في ملف `styles.css`، يمكنك تغيير الألوان:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ff6b6b;
}
```

### 4. إضافة قسم جديد
لإضافة قسم جديد:

1. أضف زر التصفية:
```html
<button class="filter-btn" data-filter="new-category">اسم القسم الجديد</button>
```

2. أضف الأعمال مع `data-category="new-category"`

3. أضف الأنماط المخصصة في `styles.css`:
```css
.portfolio-item[data-category="new-category"] .portfolio-overlay {
    background: rgba(ر, ج, ب, 0.95);
}
```

### 5. إضافة صفحة جديدة
لإضافة صفحة جديدة:

1. أنشئ ملف HTML جديد (مثل `new-page.html`)
2. أنشئ ملف JavaScript جديد (مثل `new-page-script.js`)
3. أضف الرابط في قائمة التنقل
4. استخدم نفس هيكل الصفحات الموجودة

## 🎨 تخصيص التصميم

### الألوان المتاحة
- **الأزرق المتدرج**: `#667eea` إلى `#764ba2`
- **الأحمر**: `#ff6b6b`
- **الرمادي الفاتح**: `#f8f9fa`
- **الرمادي الداكن**: `#333`

### الخطوط
- الخط الأساسي: Segoe UI
- خطوط احتياطية: Tahoma, Geneva, Verdana

## 📱 اختبار التجاوب

يمكنك اختبار التجاوب باستخدام:
- أدوات المطور في المتصفح (F12)
- تغيير حجم النافذة
- استخدام أجهزة مختلفة

## 🚀 نشر الموقع

### الخيارات المتاحة:
1. **GitHub Pages** (مجاني)
2. **Netlify** (مجاني)
3. **Vercel** (مجاني)
4. **استضافة ويب تقليدية**

### خطوات النشر على GitHub Pages:
1. ارفع الملفات إلى مستودع GitHub
2. اذهب إلى Settings > Pages
3. اختر Source: Deploy from a branch
4. اختر Branch: main
5. اضغط Save

## 🔧 استكشاف الأخطاء

### مشاكل شائعة:
1. **الصور لا تظهر**: تأكد من صحة مسار الصورة
2. **التصميم لا يعمل**: تأكد من وجود ملف `styles.css`
3. **التفاعلية لا تعمل**: تأكد من وجود ملف `script.js`

### حلول:
- تحقق من وحدة تحكم المتصفح (F12) للأخطاء
- تأكد من أن جميع الملفات في نفس المجلد
- تأكد من دعم المتصفح للتقنيات المستخدمة

## 📞 الدعم

إذا واجهت أي مشاكل أو لديك أسئلة:
- تحقق من هذا الدليل
- راجع الكود في الملفات
- استخدم أدوات المطور في المتصفح

## 📝 الترخيص

هذا المشروع متاح للاستخدام الشخصي والتجاري.

---

**تم إنشاء هذا الموقع باستخدام HTML5, CSS3, و JavaScript النقي**

🎉 **استمتع بعرض أعمالك بشكل جميل ومهني!**

