import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    email: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    birthDate: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
    city: { type: String },
    height: { type: Number },
    weight: { type: Number },
    username: { type: String },
    userImage: { type: String },
  },
  { timestamps: true }
);
//เก็บในcollaction User
const User = mongoose.model("User", userSchema);

export default User;
