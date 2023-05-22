import express from "express";
import {
  findAll,
  create,
  findOne,
  edit,
  findUserPosts,
} from "./users.controller.js";
const router = express.Router();

router.get("/", findAll);
router.get("/:id", findOne);
router.get("/:id/posts", findUserPosts);

router.post("/", create);

router.put("/:id", edit);

export default router;
