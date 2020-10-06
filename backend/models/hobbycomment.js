'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HobbyComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HobbyComment.init({
    hobby_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    good: DataTypes.INTEGER,
    bad: DataTypes.INTEGER,
    secret: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'HobbyComment',
  });
  return HobbyComment;
};