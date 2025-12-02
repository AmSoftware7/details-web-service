FROM node:18-alpine

# مجلد العمل داخل الكونتينر
WORKDIR /usr/src/app

# نسخ ملفات الباكدج
COPY package*.json ./

# تثبيت البكجات
RUN npm install

# نسخ باقي المشروع
COPY . .

# متغير البيئة (اختياري)
ENV NODE_ENV=production

# البورت اللي يسمعه السيرفر
EXPOSE 3000

# أمر التشغيل
CMD ["npm", "start"]
