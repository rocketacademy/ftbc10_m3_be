const express = require("express");
const cors = require("cors");

const db = require("./db/models/index");
const { student, students_addresses } = db;

// const { Client } = require("pg");

// If using dotenv = install dotenv and use the line below
require("dotenv").config();
// required for postgres connection no sequelize
// const client = new Client({
//   user: process.env.USER,
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   password: "",
//   port: process.env.PORT,
// });

// client.connect();

const app = express();

const UserController = require("./Controllers/UsersController");
const CartRouter = require("./Routers/CartRouter");
const UserRouter = require("./Routers/UsersRouter");
const StudentController = require("./Controllers/StudentController");

const studentController = new StudentController(student, students_addresses);

const StudentRouter = require("./Routers/StudentRouter");
const studentRouter = new StudentRouter(express, studentController);

let cache = [];
let requestArray = [];

// middeware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// middleware function
const logger = (req, res, next) => {
  let method = req.method;
  let path = req.path;
  const obj = {
    method: method,
    path: path,
  };
  requestArray.push(obj);
  console.log(requestArray);
  next();
};

const isAuthenticated = (req, res, next) => {
  if (req.header.token) {
    next();
  } else {
    res.send("You cannot accces this page");
  }
};

// apply my middleware function
app.use(logger);

// route handler
app.get("/", (request, response) => {
  console.log(request);
  response.send("Hello World");
});

app.get("/products", (request, response) => {
  response.send(products);
});

app.get("/products/:id", (request, response) => {
  response.send(products);
});

const userController = new UserController();

const cartRouter = new CartRouter(express);
const userRouter = new UserRouter(express, userController);

app.use("/cart", cartRouter.routes());
app.use("/users", userRouter.routes());
app.use("/students", studentRouter.routes());

app.listen(8000, () => {
  console.log("Application running at port 8000");
});
