class StudentRouter {
  constructor(express, studentController) {
    this.express = express;
    this.controller = studentController;
  }

  routes = () => {
    const router = this.express.Router();

    // router working with controller
    router.get("/", this.controller.getStudents);
    router.post("/", this.controller.addStudent);
    router.put("/", this.controller.editStudent);
    router.delete("/:id", this.controller.deleteStudent);

    router.get("/addresses/:userId", this.controller.getStudentsAddress);
    router.post("/addresses/:userId", this.controller.addStudentsAddress);

    router.get("/workshops", this.controller.getWorkshops);
    router.get("/workshops/:userId", this.controller.getUserWorkshops);

    return router;
  };
}

module.exports = StudentRouter;
