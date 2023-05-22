import User from "../models/user.schema.js";
import cloudinary from "../middleware/cloudinary.js";

export async function getUsers() {
  return users;
}
//เลือกuserตามid
export function createUser(user) {
  const userModel = new User(user);
  return userModel.save();
}

export async function getUserById(id) {
  return User.findOne({ userId: id });
}

export async function editUser(user, id) {
  try {
    //ดึงมาจากDataBaseและเปลี่ยนแปลงค่า
    console.log("userId editUser: " + id);
    console.log("userInfo editUser: " + user);
    //หากมีรูปให้อัพขึ้นcloudinary
    if (user.userImage) {
      const userImage = user.userImage;
      const uploadedResponse = await cloudinary.uploader.upload(userImage, {
        folder: "user_pic",
        format: "webp",
      });
      //ส่งurlเข้าไป
      console.log(uploadedResponse.url);
      user.userImage = uploadedResponse.url;
    }
    //หาuserตามidและแทนที่ค่าใหม่
    const updateUser = await User.findOneAndUpdate({ userId: id }, user);

    if (!updateUser) {
      throw new Error("Failed to update user");
    }
    console.log("update user:", updateUser);
    //ส่งค่ากลับคืนเพื่อres
    return updateUser;
  } catch (err) {
    console.error(`Failed to edit with ID: ${id}`, err);
    throw err;
  }
}
