import express from "express";
import { findAll } from "./posts.controller";
import { getPosts } from "./posts.service";

const router = express.Router();

// GET all posts
router.get("/", async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
});

export default router;
