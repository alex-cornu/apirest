"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class USER extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.USER.hasMany(models.MESSAGE); // define association here
    }
  }
  USER.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      bio: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "USER",
    }
  );
  return USER;
};
