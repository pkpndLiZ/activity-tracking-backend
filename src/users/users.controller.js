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
