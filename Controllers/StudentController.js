const student = require("../db/models/student");

class StudentController {
  constructor(model, student_addresses, workshop) {
    this.model = model;
    this.student_addresses = student_addresses;
    this.workshop = workshop;
  }

  getStudents = async (req, res) => {
    // const data = await this.client.query("SELECT * FROM students;");
    // console.log(data);
    // res.json(data.rows);

    // this.client.query("SELECT * FROM students;", (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log(results);
    //   res.json(results.rows);
    // });

    console.log("Getting all students");
    try {
      const students = await this.model.findAll();
      console.log(students);
      res.json(students);
    } catch (e) {
      if (e) {
        console.log(e);
      }
    }

    // console.log("Getting all students");
    // // this code below includes stundets_addresses data with lazy loading.
    // try {
    //   const students = await this.model.findAll({
    //     include: this.student_addresses,
    //   });
    //   console.log(students);
    //   res.json(students);
    // } catch (e) {
    //   if (e) {
    //     console.log(e);
    //   }
    // }
  };

  // replace with new model code
  addStudent = async (req, res) => {
    // const data = await this.client.query("SELECT * FROM students;");
    // console.log(data);
    // res.json(data);

    const student = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      course: req.body.course,
    };
    console.log(student);
    try {
      const data = await this.client.query(
        `INSERT INTO students (first_name, last_name, gender, course) VALUES ('${student.first_name}','${student.last_name}', ${student.gender}, '${student.course}' )`
      );
    } catch (e) {
      console.log(e);
      console.log("error when  adding new data");
    }

    try {
      const newData = await this.client.query("SELECT * FROM students;");
      // console.log(newData);
      res.json(newData.rows);
    } catch (e) {
      console.log(e);
      console.log("error when getting new data");
    }
  };

  // replace with new model code
  editStudent = async (req, res) => {
    const student = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      course: req.body.course,
      id: req.body.id,
    };
    console.log(student);
    try {
      const data = await this.client.query(
        `UPDATE students SET first_name ='${student.first_name}', last_name ='${student.last_name}', gender = ${student.gender}, course ='${student.course}' WHERE students.id = ${student.id}`
      );
    } catch (e) {
      console.log(e);
      console.log("error when  editing new data");
    }

    try {
      const newData = await this.client.query("SELECT * FROM students;");
      // console.log(newData);
      res.json(newData.rows);
    } catch (e) {
      console.log(e);
      console.log("error when getting new data");
    }
  };

  // replace with new model code
  deleteStudent = async (req, res) => {
    console.log(req.body.id);

    try {
      const deleteStudentAddresses = await this.client.query(
        `DELETE FROM students_addresses WHERE student_id = ${req.params.id}`
      );
    } catch (e) {
      console.log("Error when deleting");
      console.log(e);
    }

    try {
      const deleteStudent = await this.client.query(
        `DELETE FROM students WHERE id = ${req.params.id}`
      );
    } catch (e) {
      console.log("Error when deleting");
      console.log(e);
    }

    try {
      const newData = await this.client.query("SELECT * FROM students;");
      // console.log(newData);
      res.json(newData.rows);
    } catch (e) {
      console.log(e);
      console.log("error when getting new data");
    }
  };

  getStudentsAddress = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);

    // try {
    //   const information = await this.client.query(
    //     `SELECT * FROM students join students_addresses on students.id = students_addresses.student_id WHERE students.id = ${userId};`
    //   );

    //   res.json(information.rows);
    // } catch (e) {
    //   console.log(e);
    // }
    console.log(this.student_addresses);

    try {
      const data = await this.student_addresses.findAll({
        where: { student_id: Number(userId) },
      });
      res.json(data);
    } catch (e) {
      if (e) {
        console.log(e);
      }
    }
  };

  // replace with new model code

  addStudentsAddress = async (req, res) => {
    const { address } = req.body;
    const student_id = req.params.userId;

    try {
      const addStudent = await this.client.query(
        `INSERT INTO students_addresses (student_id, address) VALUES (${student_id}, '${address}')`
      );
    } catch (e) {
      console.log(e);
    }

    try {
      const information = await this.client.query(
        `SELECT * FROM students join students_addresses on students.id = students_addresses.student_id WHERE students.id = ${student_id};`
      );

      res.json(information.rows);
    } catch (e) {
      console.log(e);
    }
  };

  getWorkshops = async (req, res) => {
    try {
      const info = await this.workshop.findAll({
        include: this.model,
      });
      res.json(info);
    } catch (e) {
      if (e) {
        console.log(e);
        res.json(e);
      }
    }
  };

  getUserWorkshops = async (req, res) => {
    try {
      let userId = req.params.userId;
      const info = await this.model.findAll({
        where: {
          id: userId,
        },
        include: this.workshop,
      });
      res.json(info);
    } catch (e) {
      if (e) {
        console.log(e);
        res.json(e);
      }
    }
  };
}

module.exports = StudentController;
