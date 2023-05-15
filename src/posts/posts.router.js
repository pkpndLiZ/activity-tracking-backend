import express from "express";
import { findAll, create, edit, hide } from "./posts.controller";
const router = express.Router();

router.get("/", findAll);

router.post("/", create);

router.put("/", edit);

router.delete("/", hide);

export default router;
