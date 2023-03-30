class UsersController {
  constructor() {
    this.users = [];
  }

  getUsers = (req, res) => {
    res.send(this.users);
  };

  addUser = (req, res) => {
    let name = req.body.name;
    this.users.push(name);
    res.send(this.users);
  };

  editUser = (req, res) => {
    let nameToEdit = req.body.name;
    let newName = req.body.newName;
    let index = this.users.indexOf(nameToEdit);
    this.users.splice(index, 1, newName);
    res.send(this.users);
  };

  deleteUser = (req, res) => {
    let nameToDelete = req.body.name;
    let index = this.users.indexOf(nameToDelete);
    this.users.splice(index, 1);
    res.send(this.users);
  };
}

module.exports = UsersController;
