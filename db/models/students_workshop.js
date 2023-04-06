"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Students_Workshops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.student);
      this.belongsTo(models.workshop);
    }
  }
  Students_Workshops.init(
    {
      studentId: DataTypes.INTEGER,
      workshopId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "students_workshops",
      underscored: true,
    }
  );
  return Students_Workshops;
};
