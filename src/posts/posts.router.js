import express from "express";
import { findAll, create } from "./posts.controller";
const router = express.Router();

router.get("/", findAll);

router.post("/", create);

export default router;
