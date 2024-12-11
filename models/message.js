"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MESSAGE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define the association here
      MESSAGE.belongsTo(models.USER, {
        foreignKey: {
          allowNull: false, // Correct spelling of 'allowNull'
        },
      });
    }
  }

  MESSAGE.init(
    {
      idUsers: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      attachement: DataTypes.STRING,
      likes: DataTypes.INTEGER,
    },
    {
      sequelize, // Add sequelize instance to the configuration
      modelName: "MESSAGE", // Define the model name
    }
  );

  return MESSAGE;
};
