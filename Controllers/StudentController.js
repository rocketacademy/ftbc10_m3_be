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
    try {
      const data = await this.client.query(
        `INSERT INTO students (first_name, last_name, gender, course) VALUES ('${student.first_name}','${student.last_name}', true, '${student.course}' )`
      );
    } catch (e) {
      console.log(e);
      console.log("error when  adding new data");
    }

    try {
      const newData = await this.client.query("SELECT * FROM students;");
      console.log(newData);
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
}

module.exports = StudentController;
