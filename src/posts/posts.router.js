import express from "express";
import verifyUser from "../middleware/verifyUser.js";
import { findAll, create, edit, hide } from "./posts.controller.js";
const router = express.Router();

router.get("/", findAll);

router.post("/", verifyUser, create);

router.put("/:id", verifyUser, edit);

router.delete("/:id", verifyUser, hide);

export default router;
