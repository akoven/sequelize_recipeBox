'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredients = sequelize.define('ingredients', {
    amount: DataTypes.DECIMAL,
    measurementUnitId: DataTypes.INTEGER,
    foodStuff: DataTypes.STRING,
    recipeId: DataTypes.INTEGER
  }, {});
  ingredients.associate = function(models) {
    // associations can be defined here
    ingredients.hasMany(models.measurementUnits, {foreignKey:measurementUnitId})
  };
  return ingredients;
};
