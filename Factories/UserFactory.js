const User = require('../Models/User');
const Response = require('./../Responses/Responses');
const BodyFilter = require('./../Utils/BodyFilter');

exports.addUser = () =>  
        async (req,res,next) => {
            const fields = BodyFilter(req.body,'name','email','password');
            const user = await User.create(fields);
          console.log(user)
          Response.sucessResponse(res,201,user);
      }
      
  