import {
  getPosts,
  getPostById,
  createPost,
  editPost,
  deletePost,
} from "./posts.service.js";

//function สำหรับดูข้อมูลfeed
export const findAll = async (req, res) => {
  try {
    const posts = await getPosts();
    console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};

//function สำหรับดูข้อมูลให้หน้าprofile
export const findId = async (req, res) => {
  
  //รับuserIdจากparams
  const id = req.params.id;
  console.log(id);
  try {
    const posts = await getPostById(id);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};

//function สำหรับสร้างCard
export const create = async (req, res) => {

  //รับค่าจากinputมา
  const post = req.body;
  console.log(post);
  try {
    const newPost = await createPost(post);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).send(err);
  }
};

//function สำหรับแก้ไขCard
export const edit = async (req, res) => {

  //รับuserIdจากparamsและค่าจากinputมา
  const post = req.body;
  const id = req.params.id;
  console.log(post);
  try {
    const newPost = await editPost(post, id);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).send(err);
  }
};

//function สำหรับซ่อนCard
export const hide = async (req, res) => {

  //รับuserIdจากparamsและค่าจากinputมา
  const post = req.body;
  const id = req.params.id;
  try {
    const newPost = await deletePost(post, id);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).send(err);
  }
};
