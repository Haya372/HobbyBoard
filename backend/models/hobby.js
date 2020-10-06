'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hobby extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Hobby.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    good: DataTypes.INTEGER,
    bad: DataTypes.INTEGER,
    secret: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Hobby',
  });
  return Hobby;
};