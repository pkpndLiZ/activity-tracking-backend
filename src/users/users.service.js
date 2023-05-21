import User from "../models/user.schema.js";

export async function getUsers() {
  return users;
}

export function createUser(user) {
  const userModel = new User(user);
  return userModel.save();
}

// export async function getUserById(id) {
//   const user = users.find((user) => user.id === id);

//   return user;
// }

export async function editUser(user, id) {
  try {
    //ดึงมาจากDataBaseและเปลี่ยนแปลงค่า
    const updateUser = await Post.findByIdAndUpdate(id, user, { new: true });
    if (user.imageUrl) {
      const userImage = user.userImage;
      const uploadedResponse = await cloudinary.uploader.upload(userImage, {
        folder: "user_pic",
        format: "webp",
      });
      //ส่งurlเข้าไป
      updateUser.userImage = uploadedResponse.url;
    }
    //สั่งบันทึกลงdbและคืนค่ากลับ

    return updateUser.save();
  } catch (err) {
    console.error(`Failed to edit with ID: ${id}`, err);
    throw err;
  }
}
