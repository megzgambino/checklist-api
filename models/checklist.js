'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Checklist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Checklist.belongsToMany(models.Item, {foreignKey: 'checklist_id', through: 'Template'  })
    }
  };
  Checklist.init({
    object_domain: DataTypes.STRING,
    object_id: DataTypes.STRING,
    description: DataTypes.STRING,
    is_completed: DataTypes.BOOLEAN,
    completed_at: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    due: {
      type: DataTypes.STRING,
      validate: {
        isDate: true
      }
    },
    urgency: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Checklist',
  });
  return Checklist;
};