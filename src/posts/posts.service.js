import Post from "../models/post.schema";

export async function getPosts() {
  return Post.find();
}

export function createPost(post) {
  const postModel = new Post(post);
  return postModel.save();
}
