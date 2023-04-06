"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.students_addresses);
      this.belongsToMany(models.workshop, {
        through: models.students_workshops,
      });
    }
  }
  Student.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      course: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "student",
      underscored: true,
    }
  );
  return Student;
};
