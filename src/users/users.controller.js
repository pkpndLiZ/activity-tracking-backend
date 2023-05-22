import { getPostByUserId } from "../posts/posts.service.js";
import {
  getUsers,
  createUser,
  getUserById,
  editUser,
} from "./users.service.js";

export const findAll = async (req, res) => {
  const users = await getUsers();
  res.json(users);
};

export const findOne = async (req, res) => {
  const id = req.params.id;
  const user = await getUserById(id);

  if (user) {
    return res.json(user);
  } else {
    return res.status(404).send("User not found");
  }
};

export const findUserPosts = async (req, res) => {
  const userId = req.params.id;
  const posts = await getPostByUserId(userId);
  if (posts) {
    return res.json(posts);
  } else {
    return res.status(404).send("Posts not found");
  }
};

export const create = async (req, res) => {
  const user = req.body;
  let error;
  try {
    const newUser = await createUser(user);
    res.status(201).json(newUser);
  } catch (err) {
    error = err;
    res.status(400).send(error);
  }
};

export const edit = async (req, res) => {
  const user = req.body;
  const id = req.params.id;
  console.log(user);
  try {
    const newUser = await editUser(user, id);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
