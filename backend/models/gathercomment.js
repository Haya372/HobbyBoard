'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GatherComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GatherComment.init({
    gather_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    good: DataTypes.INTEGER,
    bad: DataTypes.INTEGER,
    secret: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'GatherComment',
  });
  return GatherComment;
};