const Sequelize = require('sequelize');
const sequelize = require('./../database/database');

const User = sequelize.define('user',{
     id: {
         type: Sequelize.INTEGER,
         autoIncrement:true,
         allowNull: false,
         primaryKey: true
         
     },
     name: {
        type: Sequelize.SMALLINT,
        allowNull: false
     },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
     }
});

module.exports = User;

// module.exports = User;