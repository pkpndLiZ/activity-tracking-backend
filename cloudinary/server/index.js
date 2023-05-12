import express from "express";
//รับcorsมาแก้config
import cors from "cors";
//รับค่า.env
import "dotenv/config.js";
//เรียกใช้ obj v2 ในชื่อ cloudinary
import { v2 as cloudinary } from "cloudinary";

//แก้configในแพ็กเกจโดยเรียกใช้งาน.env
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//set ip port ตาม .env
const ipAddress = process.env.API_IPADDRESS;
const port = process.env.API_PORT;

//รับค่าจากexpress
const app = express();

//setค่าcors ให้รับตาม ip
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
//เรียกใช้งานcors
app.use(cors(corsOptions));


//แปลงข้อมูลเป็นjson และ encoded
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));


async function run() {

  app.post("/", async (req, res) => {
    try {

        //รับค่าจากbadyที่ถูกส่งมา
      const fileStr = req.body.data;

      //upload API
      //https://cloudinary.com/documentation/image_upload_api_reference
      //upload ข้อมูลรูปขึ้นcloudinary
      const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
        //กำหนด property ของข้อมูลที่จะupload
        folder: "profile_pic",
        width: "800",
      });

      //เช็คข้อมูลหลังupload
      console.log(uploadedResponse);

      //ส่งข้อความไปหาclient
      res.json({ msg: "Upload complete" });
    } catch (error) {

        //ดักerror
      console.error(error);
      res.status(500).json({ err: "Something went wrong" });
    }
  });

  //เปิดserver
  await app.listen(port, ipAddress, () => {
    console.log(
      `Web Application Server is running on ${ipAddress} port ${port}`
    );
    console.log(`Address: http://${ipAddress}:${port}`);
  });
}
run()
