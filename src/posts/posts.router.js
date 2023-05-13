import express from "express";
import { findAll } from "./posts.controller";
const router = express.Router();

router.get("/", findAll);

export default router;
