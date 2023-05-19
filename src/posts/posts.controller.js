import { getPosts, createPost, editPost, deletePost } from "./posts.service.js";

export const findAll = async (req, res) => {
  try {
    const posts = await getPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const create = async (req, res) => {
  const post = req.body;
  console.log(post);
  try {
    const newPost = await createPost(post);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const edit = async (req, res) => {
  const post = req.body;
  const id = req.params.id;
  console.log(post);
  try {
    const newPost = await editPost(post, id);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const hide = async (req, res) => {
  const post = req.body;
  const id = req.params.id;
  try {
    const newPost = await deletePost(post, id);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).send(err);
  }
};
