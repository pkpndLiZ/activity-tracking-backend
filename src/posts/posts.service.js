import Post from "../models/post.schema.js";

export async function getPosts() {
  return Post.find();
}

export function createPost(post) {
  const postModel = new Post(post);
  return postModel.save();
}

export async function editPost(post,id) {
  try {
    //ใช้การหาด้วย id และอัพเดตด้วย post  และคืนค่ากลับมาจาก new: true
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    //สั่งบันทึกลงdbและคืนค่ากลับ
    return updatedPost.save();
  } catch (err) {
    console.error(`Failed to delete user with ID: ${post._id}`, err);
    throw err;
  }
}

export async function deletePost(post,id) {
  try {
    //ใช้การหาด้วย id และอัพเดตด้วย post  และคืนค่ากลับมาจาก new: true
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    updatedPost.post_status = false;
    //เช็คข้อมูล
    console.log(updatedUser)
    //สั่งบันทึกลงdbและคืนค่ากลับ
    return updatedPost.save();
  } catch (err) {
    console.error(`Failed to delete user with ID: ${post._id}`, err);
    throw err;
  }
}
