import { getPosts, createPost } from "./posts.service";

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

  try {
    const newPost = await createPost(post);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).send(err);
  }
};
