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
      Item.belongsToMany(models.Checklist, {foreignKey: 'item_id', through: 'Template'  })
    }
  };
  Item.init({
    description: DataTypes.STRING,
    is_completed: DataTypes.BOOLEAN,
    completed_at: DataTypes.STRING,
    due: {
      type: DataTypes.STRING,
      validate: {
        isDate: true
      }
    },
    urgency: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    assignee_id: DataTypes.STRING,
    task_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};