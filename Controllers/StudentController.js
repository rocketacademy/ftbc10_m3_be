class StudentController {
  constructor(client) {
    this.client = client;
  }

  getStudents = async (req, res) => {
    const data = await this.client.query("SELECT * FROM students;");
    console.log(data);
    res.json(data.rows);

    // this.client.query("SELECT * FROM students;", (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log(results);
    //   res.json(results.rows);
    // });
  };

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

  deleteStudent = async (req, res) => {
    console.log(req.body.id);
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

    try {
      const information = await this.client.query(
        `SELECT * FROM students join students_addresses on students.id = students_addresses.student_id WHERE students.id = ${userId};`
      );

      res.json(information.rows);
    } catch (e) {
      console.log(e);
    }
  };

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
}

module.exports = StudentController;
