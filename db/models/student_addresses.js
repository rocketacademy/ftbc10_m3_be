"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudentAddresses extends Model {
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
  StudentAddresses.init(
    {
      address: DataTypes.STRING,
      studentId: {
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
  return StudentAddresses;
};
