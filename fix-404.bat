@echo off
echo ========================================
echo    حل مشكلة 404 في GitHub Pages
echo ========================================
echo.

echo مشكلة 404 تعني أن GitHub Pages غير مفعل أو هناك خطأ في الإعدادات.
echo.
echo سنقوم بحل المشكلة خطوة بخطوة:
echo.

echo 1. تأكد من أن اسم المستودع هو: yourusername.github.io
echo 2. تأكد من أن المستودع عام (Public)
echo 3. سنقوم بإعادة رفع الملفات
echo.
pause

echo.
echo جاري إضافة جميع الملفات...
git add .

echo.
echo جاري حفظ التغييرات...
git commit -m "إصلاح مشكلة 404 - إعادة رفع الملفات"

echo.
echo جاري رفع الملفات...
git push

echo.
echo ========================================
echo    الخطوات التالية:
echo ========================================
echo.
echo 1. اذهب إلى مستودعك على GitHub
echo 2. اضغط على Settings (الإعدادات)
echo 3. ابحث عن Pages في القائمة اليسرى
echo 4. في Source، اختر "Deploy from a branch"
echo 5. في Branch، اختر "main"
echo 6. اضغط Save
echo.
echo 7. انتظر 5-10 دقائق
echo 8. جرب الرابط مرة أخرى
echo.
echo إذا لم يعمل، جرب Netlify:
echo 1. اذهب إلى netlify.com
echo 2. اسحب مجلد المشروع
echo 3. احصل على الرابط خلال 30 ثانية!
echo.
pause
