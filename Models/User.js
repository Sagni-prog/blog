const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('./../database/database');
const Photo = require('./Photo');

const User = sequelize.define('user',{
     id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
     },
     name: {
        type: DataTypes.STRING,
        allowNull: false
     },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
     },
     password: {
        type: DataTypes.STRING,
        allowNull: false
     },
     role: {
        type: DataTypes.STRING,
        deletedAt: 'user'
     },
     isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
     },
     passwordResetToken: DataTypes.STRING,
     passwordResetTokenExpiresAt: DataTypes.DATE,
     passworsChangedAt: DataTypes.DATE,
     deletedAt: DataTypes.DATE
});

User.hasMany(Photo);
module.exports = User;
