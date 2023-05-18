import Post from "../models/post.schema.js";
import cloudinary from "../middleware/cloudinary.js";

export async function getPosts() {
  return Post.find().sort({ createdAt: "desc" });
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
    const postId = {
      _id: id,
    };
    const updatedPost = await Post.findByIdAndUpdate(postId._id, post);
    if (post.imageUrl) {
      const postImg = post.imageUrl;
      const uploadedResponse = await cloudinary.uploader.upload(
        postImg,
        {
          folder: "post_pic",
          format: "webp",
          //สั่งบันทึกลงdbและคืนค่ากลับ
        },
        (post.imageUrl = uploadedResponse.url)
      );
    }
    //ดึงมาจากDataBaseและเปลี่ยนแปลงค่า
    //ส่งurlเข้าไป
    return updatedPost.save();
  } catch (err) {
    console.error(`Failed to delete edit with ID: ${postId._id}`, err);
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
