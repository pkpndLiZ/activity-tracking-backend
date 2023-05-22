import {
  getUsers,
  createUser,
  getUserById,
  editUser,
} from "./users.service.js";

//function สำหรับดูข้อมูลuser
export const findAll = async (req, res) => {
  const users = await getUsers();
  res.json(users);
};

//function สำหรับดูข้อมูลuser ตามid
export const findOne = async (req, res) => {

  //รับuserIdจากparams
  const id = req.params.id;
  const user = await getUserById(id);

  if (user) {
    return res.json(user);
  } else {
    return res.status(404).send("User not found");
  }
};

//function สำหรับสร้างUser
export const create = async (req, res) => {

  //รับค่าจากinputมา
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

//function สำหรับแก้ไขUser
export const edit = async (req, res) => {

  //รับuserIdจากparamsและค่าจากinputมา
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
