import express from "express";
import { findAll, create, findOne } from "./users.controller";
const router = express.Router();

router.get("/", findAll);
router.get("/:id", findOne);

router.post("/", create);

export default router;
