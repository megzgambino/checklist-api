'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      due: {
        type: Sequelize.STRING
      },
      urgency: {
        type: Sequelize.STRING
      },
      updated_by: {
        type: Sequelize.STRING
      },
      assignee_id: {
        type: Sequelize.STRING
      },
      task_id: {
        type: Sequelize.NUMBER
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
    await queryInterface.dropTable('Items');
  }
};