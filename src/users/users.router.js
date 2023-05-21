import express from "express";
import { findAll, create, findOne, edit } from "./users.controller.js";
const router = express.Router();

router.get("/", findAll);
router.get("/:id", findOne);

router.post("/", create);

router.put("/:id", edit);

export default router;
