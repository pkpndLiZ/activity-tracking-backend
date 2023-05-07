import { getUsers, createUser, getUserById } from "./users.service";

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

export const create = async (req, res) => {
  const name = req.body.name;
  const user = await createUser(name);
  res.json(user);
};
