import express from "express";
import verifyUser from "../middleware/verifyUser.js";

import { findAll, findId, create, edit, hide,findPostsByType } from "./posts.controller.js";
const router = express.Router();


router.get("/:id", findId);

router.get("/", findPostsByType);

router.get("/", findAll);

//รับverifyUserก่อนเพิ่มแก้ไขข้อมูล
router.post("/", verifyUser, create);

router.put("/:id", verifyUser, edit);


router.delete("/:id", verifyUser, hide);

export default router;
