const User = require('./../Models/User');

exports.create = async (req,res,next) => {
   const user = await User.create({
      name: "Mem",
      email: "mop@gmail.com",
      password: "123"
   });
   
    return res.json({
      data:  {
      user
      }
     
   });
   
//    next()
}