#!/bin/bash

echo "========================================"
echo "   نشر الموقع على GitHub Pages"
echo "========================================"
echo ""

echo "هل تريد نشر موقعك على GitHub Pages؟"
echo ""
echo "1. تأكد من أنك قمت بإنشاء حساب على GitHub"
echo "2. تأكد من إنشاء مستودع باسم: yourusername.github.io"
echo "3. تأكد من أن المستودع عام (Public)"
echo ""
read -p "اضغط Enter للمتابعة..."

echo ""
echo "جاري تهيئة Git..."
git init

echo ""
echo "جاري إضافة الملفات..."
git add .

echo ""
echo "جاري حفظ التغييرات..."
git commit -m "إطلاق الموقع الأولي"

echo ""
echo "جاري تغيير اسم الفرع..."
git branch -M main

echo ""
echo "========================================"
echo "   الخطوة التالية:"
echo "========================================"
echo ""
echo "1. اذهب إلى مستودعك على GitHub"
echo "2. اضغط على Settings"
echo "3. ابحث عن Pages في القائمة اليسرى"
echo "4. اختر Source: Deploy from a branch"
echo "5. اختر Branch: main"
echo "6. اضغط Save"
echo ""
echo "بعد 2-5 دقائق، سيكون موقعك متاح على:"
echo "https://yourusername.github.io"
echo ""
read -p "اضغط Enter للخروج..."
