const User = require('../Models/User');

exports.addUser = async(data) => { 
       return async (req,res,next) => {
         const user = await User.create({
             name: data.name,
             email: data.email,
             password: data.password
         });
          return user;
      }
  }   