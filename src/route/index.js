import UserRouter from "../users/users.router";
import PostRouter from "../posts/posts.router";

function routers(app) {
  app.get("/", (req, res) => res.send("API ok kk"));
  app.use("/users", UserRouter);
  app.use("/posts", PostRouter);

  return app;
}

export default routers;
