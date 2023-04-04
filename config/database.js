require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USER,
    password: null,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "postgres",
  },
};
