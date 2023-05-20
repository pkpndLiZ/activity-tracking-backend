import UserRouter from "../users/users.router.js";
import PostRouter from "../posts/posts.router.js";
import logger from "../middleware/logger.js";
import verifyUser from "../middleware/verifyUser.js";

function routers(app) {
  //เรียกใช้ middleware

  app.use(logger);
  app.get("/", (req, res) => res.status(200).send());
  app.use("/api/users", verifyUser, UserRouter);
  app.use("/api/posts", PostRouter);

  return app;
}

export default routers;
