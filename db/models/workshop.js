"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Workshop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.student, {
        through: models.students_workshops,
      });
    }
  }
  Workshop.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      fullDay: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "workshop",
      underscored: true,
    }
  );
  return Workshop;
};
