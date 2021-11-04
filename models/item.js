'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Item.init({
    description: DataTypes.STRING,
    is_completed: DataTypes.BOOLEAN,
    completed_at: DataTypes.STRING,
    due: DataTypes.STRING,
    urgency: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    assignee_id: DataTypes.STRING,
    task_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};