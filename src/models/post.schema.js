import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  userImage: { type: String },
  imageUrl: { type: String },
  type: {
    type: String,
    enum: ["Biking", "Walking", "Swimming", "Hiking", "Running"],
  },
  duration: { type: String, type: String, required: true },
  distance: { type: Number, required: true },
  date: { type: String, required: true },
  title: { type: String },
  description: { type: String },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
