'use strict';

const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const MeasurementUnit = sequelize.define('MeasurementUnit', {
    name: DataTypes.STRING
  },{
    title: DataTypes.STRING(200)
  }, {
    created: Sequelize.DATE
  },{
    updated: Sequelize.DATE
  },{});
  MeasurementUnit.associate = function(models) {
    // associations can be defined here
  };
  return MeasurementUnit;
};
