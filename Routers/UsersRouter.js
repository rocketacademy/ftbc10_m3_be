class UsersRouter {
  constructor(express, userController) {
    this.express = express;
    this.controller = userController;
  }

  routes = () => {
    const router = this.express.Router();

    // router working with controller
    router.get("/", this.controller.getUsers);
    router.post("/", this.controller.addUser);
    router.put("/", this.controller.editUser);
    router.delete("/", this.controller.deleteUser);

    return router;
  };
}

module.exports = UsersRouter;
