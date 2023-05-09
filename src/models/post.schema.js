import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  profileName: { type: String, required: true },
  profileImage: { type: String, required: true },
  imageUrl: { type: String, required: true },
  duration: { type: String, type: String, required: true },
  distance: { type: Number, required: true },
  date: { type: String, required: true },
  title: { type: String },
  description: { type: String },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
