//รับdotenv mongoose ดึงค่าDB
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import mongoose from "mongoose";

const uri = process.env.DATABASE_URL;

//ต่อDB
const connectDb = async (req, res) => {
  console.log("connecting to database");
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected.");
  } catch (err) {
    console.error("connect db failed", err.message);
    process.exit(1);
  }
};
export default connectDb;
