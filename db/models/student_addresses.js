"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student_Addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.student, { as: "student" });
    }
  }
  Student_Addresses.init(
    {
      address: DataTypes.STRING,
      StudentId: {
        type: DataTypes.INTEGER,
        references: {
          model: "student",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "students_addresses",
      underscored: true,
    }
  );
  return Student_Addresses;
};
