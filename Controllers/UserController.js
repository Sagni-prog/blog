const User = require('./../Models/User');
const UserFactory = require('./../Factories/UserFactory');
const Response = require('./../Responses/Responses');

 
   exports.create = UserFactory.addUser();
   exports.index = UserFactory.getAll(User);
   exports.getById = UserFactory.getById(User);



