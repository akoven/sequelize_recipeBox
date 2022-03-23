'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define('recipes', {
    title: DataTypes.STRING
  }, {});
  recipes.associate = function(models) {
    // associations can be defined here
  };
  return recipes;
};