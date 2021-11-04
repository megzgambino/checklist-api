'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Checklists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      object_domain: {
        type: Sequelize.STRING
      },
      object_id: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      is_completed: {
        type: Sequelize.BOOLEAN
      },
      completed_at: {
        type: Sequelize.STRING
      },
      updated_by: {
        type: Sequelize.STRING
      },
      due: {
        type: Sequelize.STRING
      },
      urgency: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Checklists');
  }
};