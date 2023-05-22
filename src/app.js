import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express";
import connectDbOrThrowError from "./config/db.js";
import routers from "./route/index.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.API_PORT || 3002;

const corsOptions = {
  // origin: "http://localhost:3000",
  credentials: true,
};

async function run() {
  //jsonparser middleware
  //body parser middleware
  //ใส่พวก lib ระดับ app
  await connectDbOrThrowError();
  app.use(cors(corsOptions));
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  routers(app);

  app.listen(PORT, () => console.log("Server listening on port: " + PORT));
}

run();
