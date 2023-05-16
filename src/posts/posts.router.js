import express from "express";
import { findAll, create, edit, hide } from "./posts.controller.js";
const router = express.Router();

router.get("/", findAll);

router.post("/", create);

router.put("/:id", edit);

router.delete("/:id", hide);

export default router;
