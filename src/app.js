import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express";
import connectDbOrThrowError from "./config/db.js";
import routers from "./route/index.js";
//แปลงข้อมูลให้อ่านกับJS
import bodyParser from "body-parser";
//Cross-Origin Resource Sharing ส่งข้อมูลข้ามDomain
import cors from "cors";

const app = express();
const PORT = process.env.API_PORT || 3002;
//ปรับให้รับตามipที่ตั้งเอาไว้ ให่สิทธิ์ผ่านตลอด(cookie,auth)
const corsOptions = {
  // origin: "http://localhost:3000",
  credentials: true,
};

//set function run
async function run() {
  //jsonparser middleware
  //body parser middleware
  //ใส่พวก lib ระดับ app
  await connectDbOrThrowError();
  //เซ็ตcorsOptionsลงcors
  app.use(cors(corsOptions));
  //รับเป็นJSON
  app.use(bodyParser.json({ limit: "50mb" }));
  //แปลงcode
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  routers(app);
  //เปิด server
  app.listen(PORT, () => console.log("Server listening on port: " + PORT));
}

run();
