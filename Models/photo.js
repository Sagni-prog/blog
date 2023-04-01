'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    
    static associate(models) {
     
    }
  }
  Photo.init({
    photo_name: DataTypes.STRING,
    photo_path: DataTypes.STRING,
    photo_url: DataTypes.STRING,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};