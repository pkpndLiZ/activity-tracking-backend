import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express";
import routers from "./route";

const app = express();
const PORT = process.env.API_PORT || 3002;

//jsonparser middleware
//body parser middleware
//ใส่พวก lib ระดับ app
app.use(express.json());
routers(app);

app.listen(PORT, () => console.log("Server listening on port: " + PORT));
