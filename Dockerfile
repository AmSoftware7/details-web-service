# 1️⃣ استخدم Node.js رسمي
FROM node:18-alpine

# 2️⃣ مجلد العمل داخل الكونتينر
WORKDIR /app

# 3️⃣ نسخ ملفات البكجات فقط (لتسريع build)
COPY package*.json ./

# 4️⃣ تثبيت dependencies
RUN npm install

# 5️⃣ نسخ باقي الملفات (HTML – CSS – JS – server.js – images)
COPY . .

# 6️⃣ البورت اللي السيرفر يسمع عليه
EXPOSE 3000

# 7️⃣ أمر التشغيل الأساسي
CMD ["npm", "start"]
