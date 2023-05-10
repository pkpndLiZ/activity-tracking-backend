import Post from "../models/post.schema";

export async function getPosts() {
  return "This is allPosts that you want ^^";
}

export function createPost(post) {
  const postModel = new Post(post);
  return postModel.save();
}
