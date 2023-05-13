import UserRouter from "../users/users.router";
import PostRouter from "../posts/posts.router";
import { posts } from "../fixture/mock-data";

function routers(app) {
  app.get("/", (req, res) => res.send(posts));
  app.use("/users", UserRouter);
  app.use("/posts", PostRouter);

  return app;
}

export default routers;
