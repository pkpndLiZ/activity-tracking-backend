import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  city: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  profileName: { type: String, required: true },
  profileImage: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
