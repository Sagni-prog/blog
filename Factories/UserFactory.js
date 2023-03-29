const User = require('../Models/User');

exports.addUser = () =>  
        async (req,res,next) => {
         const user = await User.create({
             name: req.body.name,
             email: req.body.email,
             password: req.body.password
         });
          return user;
      }
      
  