'use strict';
module.exports = (sequelize, DataTypes) => {
  const instructions = sequelize.define('instructions', {
    specification: DataTypes.TEXT,
    listOrder: DataTypes.INTEGER
  }, {});
  instructions.associate = function(models) {
    // associations can be defined here
    instructions.belongsTo(models.recipes, { foreignKey: 'recipeId' });
  };
  return instructions;
};
