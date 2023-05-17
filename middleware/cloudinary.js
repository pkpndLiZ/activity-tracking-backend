import "dotenv/config.js";
import { v2 as cloudinary } from "cloudinary";

//กำหนดkeyแก้config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// console.log(cloudinary)
export default cloudinary;
