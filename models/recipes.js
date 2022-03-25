'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define('recipes', {
    title: DataTypes.STRING
  }, {});
  recipes.associate = function(models) {
    // associations can be defined here
    recipes.hasMany(models.instruction, {foreignKey: 'recipeId'});
  };
  return recipes;
};
