class StudentRouter {
  constructor(express, studentController) {
    this.express = express;
    this.controller = studentController;
  }

  routes = () => {
    const router = this.express.Router();

    // router working with controller
    router.get("/", this.controller.getStudents);
    // router.get("/addresses/:userId", this.controller.getStudentsAddress);
    // router.post("/addresses/:userId", this.controller.addStudentsAddress);

    router.post("/", this.controller.addStudent);
    // router.put("/", this.controller.editStudent);
    // router.delete("/", this.controller.deleteStudent);

    return router;
  };
}

module.exports = StudentRouter;
