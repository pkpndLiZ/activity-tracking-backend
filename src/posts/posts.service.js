import Post from "../models/post.schema.js";
import User from "../models/user.schema.js";
import cloudinary from "../middleware/cloudinary.js";

//เลือกCardที่มีสถานะเป็นtrueและเรียงด้วยcreatedAtจากเวลาล่าสุด
// export async function getPosts() {
//   return Post.find({ post_status: true }).sort({ createdAt: "desc" });
// }

export async function getPosts() {
  try {
    const result = await User.aggregate([
      {
        $lookup: {
          from: "posts", // The name of the Post collection
          localField: "userId",
          foreignField: "userId",
          as: "posts",
        },
      },
      {
        $unwind: "$posts",
      },
      {
        $project: {
          userId: 1,
          username: 1,
          userImage: 1,
          "posts._id": 1,
          "posts.type": 1,
          "posts.distance": 1,
          "posts.duration": 1,
          "posts.date": 1,
          "posts.title": 1,
          "posts.description": 1,
          "posts.post_status": 1,
        },
      },
      {
        $sort: {
          "posts.createdAt": -1,
        },
      },
    ]);
    console.log(result);
    return result;
  } catch (err) {
    console.error(`Failed to query posts:`, err);
    throw err;
  }
}

export async function getPostByUserId(id) {
  try {
    return Post.find({ userId: id, post_status: true }).sort({
      updatedAt: "desc",
    });
  } catch (err) {
    console.error(`Failed to get post with ID: ${id}`, err);
    throw err;
  }
}

export async function createPost(post) {
  try {
    const postModel = new Post(post);
    //หากมีรูปให้อัพขึ้นcloudinary
    if (post.imageUrl) {
      const postImg = post.imageUrl;
      const uploadedResponse = await cloudinary.uploader.upload(postImg, {
        folder: "post_pic",
        format: "webp",
      });
      //คืนค่าเป็นurl
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
