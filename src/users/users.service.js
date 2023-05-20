import User from "../models/user.schema.js";

export async function getUsers() {
  return users;
}

export function createUser(user) {
  const userModel = new User(user);
  return userModel.save();
}

export async function getUserById(id) {
  const user = users.find((user) => user.id === id);

  return user;
}
