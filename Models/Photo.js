const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('./../database/database');
const User = require('./User');

const Photo = sequelize.define('photo',{
   id: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true,
       allowNull: false
   },
   photo_name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   photo_path: {
      type: DataTypes.STRING
   },
   photo_url: {
       type: DataTypes.STRING
   },
   width: {
      type: DataTypes.INTEGER
   },
   height: {
       type: DataTypes.INTEGER
    }
});

// Photo.belongsTo(User);
module.exports = Photo;