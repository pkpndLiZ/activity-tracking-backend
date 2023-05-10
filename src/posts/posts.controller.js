import { getPosts, createPost } from "./posts.service";

export const findAll = async (req, res) => {
  const posts = await getPosts();

  // อันนี้เขียนให้ return เป็น string ไปก่อน ต้องไปเขียน รับเป็น json มาเองจาก service นะ อย่าลืมเปลี่ยน send เป็น ่json ด้วย
  res.send(posts);
};

export const create = async (req, res) => {
  const post = req.body;
  let error;
  try {
    const newPost = await createPost(post);
    res.status(201).json(newPost);
  } catch (err) {
    error = err;
    res.status(400).send(error);
  }
};
