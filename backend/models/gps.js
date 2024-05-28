'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  gps.init({
    device_id: DataTypes.STRING,
    device_type: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    location: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'gps',
  });
  return gps;
};