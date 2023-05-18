import UserRouter from "../users/users.router.js";
import PostRouter from "../posts/posts.router.js";
import logger from "../middleware/logger.js";

function routers(app) {
  //เรียกใช้ middleware

  app.use(logger);
  app.get("/", (req, res) => res.send("API ok kk"));
  app.use("/users", UserRouter);
  app.use("/posts", PostRouter);

  return app;
}

export default routers;
