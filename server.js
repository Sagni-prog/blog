const mongoose = require('mongoose');
const promisify = require('util');
const { Sequelize } = require('sequelize');
const app = require('./app');
const sequelize = require('./database/database');
// const User = reqiure('./Models/User');


sequelize.sync().then(result => {
    console.log(result);
}).catch(err => {
   console.log(err);
});

const port = process.env.PORT;
app.listen(port, () => {
   console.log(`App on ${process.env.NODE_ENV} running on port: ${port}`);
});