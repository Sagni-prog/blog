const User = require('./../Models/User');
const UserFactory = require('./../Factories/UserFactory');
const Response = require('./../Responses/Responses');
const BodyFilter = require('./../Utils/BodyFilter');


  const filterUserInput = () => {
     const fields = BodyFilter(req.body,'name','email','password');  
     return fields;
  } 
   exports.create = UserFactory.add(User,filterUserInput());
   exports.getUser = UserFactory.getUserById();
   exports.index = UserFactory.getAllUser();



