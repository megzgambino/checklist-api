'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Template extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Template.belongsTo(models.Checklist, { foreignKey: 'checklist_id' })
     Template.belongsTo(models.Item, { foreignKey: 'item_id' })
    }
  };
  Template.init({
    name: DataTypes.STRING,
    checklist_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Template',
  });
  return Template;
};