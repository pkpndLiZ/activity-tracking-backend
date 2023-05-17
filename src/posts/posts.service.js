import Post from "../models/post.schema.js";
import cloudinary from "../../middleware/cloudinary.js";

export async function getPosts() {
  return Post.find();
}

export async function createPost(post) {
  try {
    //รับค่าimageUrl
    const postImg = post.imageUrl;
    //ส่งขึ้นcloud
    const uploadedResponse = await cloudinary.uploader.upload(postImg, {
      folder: "post_pic",
      format: "webp"
    });
    //ดึงมาจากDataBase
    const postModel = new Post(post);
    //ส่งurlเข้าไป
    postModel.profileImage = uploadedResponse.url;
    //บันทึกค่ากลับ
    return postModel.save();
  } catch (err) {
    console.error(`Failed to create `, err);
    throw err;
  }
}

export async function editPost(post, id) {
  try {
    //ใช้การหาด้วย id และอัพเดตด้วย post  และคืนค่ากลับมาจาก new: true
    //รับค่าimageUrl
    const postImg = post.imageUrl;
    //ส่งขึ้นcloud
    const uploadedResponse = await cloudinary.uploader.upload(postImg, {
      folder: "post_pic",
      format: "webp"
    });
    //ดึงมาจากDataBaseและเปลี่ยนแปลงค่า
    const updatedPost = await Post.findByIdAndUpdate(id._id, post, {
      new: true,
    });
    //ส่งurlเข้าไป
    postModel.profileImage = uploadedResponse.url; //สั่งบันทึกลงdbและคืนค่ากลับ
    return updatedPost.save();
  } catch (err) {
    console.error(`Failed to delete user with ID: ${post._id}`, err);
    throw err;
  }
}

export async function deletePost(post, id) {
  try {
    //ใช้การหาด้วย id และอัพเดตด้วย post  และคืนค่ากลับมาจาก new: true
    const updatedPost = await Post.findByIdAndUpdate(id._id, post, {
      new: true,
    });
    updatedPost.post_status = false;
    //เช็คข้อมูล
    console.log(updatedUser);
    //สั่งบันทึกลงdbและคืนค่ากลับ
    return updatedPost.save();
  } catch (err) {
    console.error(`Failed to delete user with ID: ${post._id}`, err);
    throw err;
  }
}
