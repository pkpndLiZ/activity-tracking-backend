import express from "express";
import { findAll, findId, create, edit, hide } from "./posts.controller.js";
const router = express.Router();

router.get("/", findAll);

router.get("/:id", findId);

router.post("/", create);

router.put("/:id", edit);

router.delete("/:id", hide);

export default router;
