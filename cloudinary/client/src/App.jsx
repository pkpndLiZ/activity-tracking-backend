//รับ react axios
import { useState } from "react";
import Axios from "axios";

import "./App.css";

export default function App() {
  //set axios ให้เปิดใช้งานการรวมข้อมูลรับรอง cookie,auth
  Axios.defaults.withCredentials = true;
  //สร้าง useState 2ชุด เพื่อส่งค่าimg1ชุด และทำpreview1ชุด
  const [imageFile, setImageFile] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  //function ทำงานเมื่อรับไฟล์
  const handleFileInputChange = (e) => {
    //รับค่าจาก event file
    const file = e.target.files[0];
    //สร้างค่ามารับ objectFileReader ใช้อ่านไฟล์
    const reader = new FileReader();
    //อ่านไฟล์แล้วคืนค่าเป็น url
    reader.readAsDataURL(file);
    //listener จากการอ่านไฟล์ แล้วส่งค่าresult
    reader.onloadend = () => {
      setImageFile(reader.result);
      setPreviewImage(reader.result);
    };
  };

  //function ทำงานเมื่อกดsubmit
  const handleSubmitFile = (e) => {
    //ให้ event ทำงานต่อ ไม่ให้รีเฟรชหน้าใหม่
    e.preventDefault();
    //เช็คข้อมูลที่จะยิงไป
    console.log(imageFile)

    if (!imageFile) return;

    //ใช้ axios ยิงdataเข้าserver โดยมีbodyเป็นข้อมูลที่รัับมา (imageFile State )
    Axios.post("http://127.0.0.1:3001", { data: imageFile }).then(() => {
      //หลังจากยิงdata ให้ทำอะไรต่อ
      //ทำpreviewImage and setImageFileให้เป็นค่าว่าง เพื่อลบ<img> and file ทิ้ง
      setPreviewImage(null);
      setImageFile("");
    });
  };

  return (
    <>
      <form onSubmit={handleSubmitFile}>
        {/* ถ้าpreviewImageมีค่า จะสร้าง<img> */}
        {previewImage && <img src={previewImage} alt="Preview" />}

        {/* รับinput ไฟล์มา แล้วเรียกใช้ function  */}
        <input type="file" onChange={handleFileInputChange} />

        {/* กดเพื่อส่ง submit ให้ function ทำงานต่อ*/}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
