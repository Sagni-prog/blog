const User = require('./../Models/User');
const UserFactory = require('./../Factories/UserFactory');

exports.create = async (req,res,next) => {
   const user = await UserFactory.addUser(req.body);
}