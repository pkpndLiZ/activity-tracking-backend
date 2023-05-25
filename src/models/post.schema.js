import mongoose, { Schema } from "mongoose";
//Schemaย่อยของduration
const durationSchema = new mongoose.Schema({
  hr: { type: Number, required: true },
  min: { type: Number, required: true },
});

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      ref: "User",
      required: true,
    },
    imageUrl: { type: String },
    type: {
      type: String,
      enum: ["Biking", "Walking", "Swimming", "Hiking", "Running"],
    },
    distance: { type: Number, required: true },
    duration: { type: durationSchema, required: true },
    date: { type: String, required: true },
    title: { type: String },
    description: { type: String },
    post_status: { type: Boolean, required: true },
  },
  { timestamps: true }
);
//เก็บในcollaction Post
const Post = mongoose.model("Post", postSchema);

export default Post;
