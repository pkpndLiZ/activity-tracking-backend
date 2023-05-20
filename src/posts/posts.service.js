import Post from "../models/post.schema.js";
import cloudinary from "../middleware/cloudinary.js";

export async function getPosts() {
  return Post.find({post_status: true}).sort({ createdAt: "desc"});
}

export async function getPostById(id) {
  try {
    return Post.find({ userId: id, post_status: true }).sort({ updatedAt: "desc"});
  } catch (err) {
    console.error(`Failed to get post with ID: ${id}`, err);
    throw err;
  }
}

export async function createPost(post) {
  try {
    const postModel = new Post(post);
    if (post.imageUrl) {
      const postImg = post.imageUrl;
      const uploadedResponse = await cloudinary.uploader.upload(postImg, {
        folder: "post_pic",
        format: "webp",
      });

      postModel.imageUrl = uploadedResponse.url;
    }

    postModel.post_status = true;
    console.log(postModel);
    return postModel.save();
  } catch (err) {
    console.error(`Failed to create `, err);
    throw err;
  }
}

export async function editPost(post, id) {
  try {
    //ดึงมาจากDataBaseและเปลี่ยนแปลงค่า
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    if (post.imageUrl) {
      const postImg = post.imageUrl;
      const uploadedResponse = await cloudinary.uploader.upload(postImg, {
        folder: "post_pic",
        format: "webp",
      });
      //ส่งurlเข้าไป
      updatedPost.imageUrl = uploadedResponse.url;
    }
    //สั่งบันทึกลงdbและคืนค่ากลับ
    updatedPost.post_status = true;
    return updatedPost.save();
  } catch (err) {
    console.error(`Failed to edit with ID: ${id}`, err);
    throw err;
  }
}

export async function deletePost(post, id) {
  try {
    //ใช้การหาด้วย id และอัพเดตด้วย post  และคืนค่ากลับมาจาก new: true
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    updatedPost.post_status = false;
    //เช็คข้อมูล
    // console.log(updatedPost);
    //สั่งบันทึกลงdbและคืนค่ากลับ
    return updatedPost.save();
  } catch (err) {
    console.error(`Failed to delete user with ID: ${id}`, err);
    throw err;
  }
}
