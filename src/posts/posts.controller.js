import { getPosts } from "./posts.service";

export const findAll = async (req, res) => {
  const posts = await getPosts();

  // อันนี้เขียนให้ return เป็น string ไปก่อน ต้องไปเขียน รับเป็น json มาเองจาก service นะ อย่าลืมเปลี่ยน send เป็น ่json ด้วย
  res.send(posts);
};
