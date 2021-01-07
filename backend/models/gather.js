'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gather extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Gather.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    secret: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Gather',
  });
  return Gather;
};