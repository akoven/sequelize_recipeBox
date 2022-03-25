'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false
      },
      measurementUnitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'MeasurementUnits'}
      },
      foodStuff: {
        type: Sequelize.STRING(500)
      },
      recipeId: {
        type: Sequelize.INTEGER,
        references:{ model: 'recipes'},
        allowNull: false
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ingredients');
  }
};
