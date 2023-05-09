import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  birthDate: String,
  gender: String,
  city: String,
  height: Number,
  weight: Number,
  profileName: String,
  profileImage: String,
});

const User = mongoose.model("User", userSchema);

export default User;
