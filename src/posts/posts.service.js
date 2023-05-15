import Post from "../models/post.schema";

export async function getPosts() {
  return Post.find();
}

export function createPost(post) {
  const postModel = new Post(post);
  return postModel.save();
}

export async function editPost(post) {
  try {
    //ใช้การหาด้วย post._id และอัพเดตด้วย post  และคืนค่ากลับมาจาก new: true
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    //ใส่ค่าวันที่ใหม่ไปให้
    updatedPost.edit_post_date = new Date()
    //เช็คข้อมูล
    console.log(updatedPost)
    //สั่งบันทึกลงdbและคืนค่ากลับ
    return updatedPost.save();
  } catch (err) {
    console.error(`Failed to delete user with ID: ${post._id}`, err);
    throw err;
  }
}

export async function deletePost(post) {
  try {
    //ใช้การหาด้วย post._id และอัพเดตด้วย post  และคืนค่ากลับมาจาก new: true
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    //ใส่ค่าวันที่ใหม่ไปให้
    updatedPost.edit_post_date = new Date()
    //ใส่สถานะโพสใหม่
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
