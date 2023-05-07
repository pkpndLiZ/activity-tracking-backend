import UserRouter from "../users/users.router";

function routers(app) {
  app.get("/", (req, res) => res.send("API ok kk"));
  app.use("/users", UserRouter);

  return app;
}

export default routers;
