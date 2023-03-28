const mongoose = require('mongoose');
const promisify = require('util');
const db = require('./Models/User');
const app = require('./app');



// db.sequelize.sync({ force: true }).then(result => {
//     console.log(result);
// }).catch(err => {
//    console.log(err);
// });

const port = process.env.PORT;
app.listen(port, () => {
   console.log(`App on ${process.env.NODE_ENV} running on port: ${port}`);
});