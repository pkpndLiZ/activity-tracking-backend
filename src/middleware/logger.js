//libประมวลผลวันที่และเวลา
import dayjs from "dayjs";

export default function logger(req, res, next) {
  //req method และ url ที่ใช้งาน
  console.log(
    `[Logger]: [${dayjs().toISOString()}] Requesting to ${req.method} ${
      req.url
    } from ${req.ip}`
  );
  //สั่งให้ไปรันfunctionต่อ
  next();
}
