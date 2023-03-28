const User = require('./../Models/User');

exports.create = async (req,res,next) => {
   const user = await User.create({
      name: "Me",
      email: "me@gmail.com",
      password: "123"
   });
   
   await user.save();
   
    return res.json({
      data:  {
      user
      }
     
   });
   
//    next()
}