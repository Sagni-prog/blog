const { Sequelize } = require('sequelize');


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const sequelize = new Sequelize(database, username, password, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_CONNECTION
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}