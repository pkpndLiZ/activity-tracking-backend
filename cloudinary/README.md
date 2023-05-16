*** ตัวอย่างนี้ ยังไม่ได้ตั่งค่าvalidation, ไม่ได้ส่งไปdb ***

1.ใน .env ให้ใส่
API_IPADDRESS= ipของserver
API_PORT=portของserver

CLOUDINARY_NAME= ชื่อ CLOUD จาก CLOUDINARY
CLOUDINARY_API_KEY= API KEY จาก CLOUDINARY
CLOUDINARY_API_SECRET= code SECRET จาก CLOUDINARY

2.ส่วนcilnet ให้ลง
npm
ตัวไฟล์หลักอยู่ที่
App.jsx
แล้วเปิดไฟล์ด้วย 
npm run dev

3.ส่วนserver ให้ลง
npm i
ตัวไฟล์หลักอยู่ที่
index.js
แล้วเปิดไฟล์ด้วย 
npm start