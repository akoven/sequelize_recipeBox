'use strict';
module.exports = (sequelize, DataTypes) => {
  const instructions = sequelize.define('instructions', {
    specification: DataTypes.TEXT,
    listOrder: DataTypes.INTEGER
  }, {});
  instructions.associate = function(models) {
    // associations can be defined here
  };
  return instructions;
};