const User = require('./../Models/User');
const UserFactory = require('./../Factories/UserFactory');
const Response = require('./../Responses/Responses');



   
   exports.create = UserFactory.addUser();
   
// exports.create = async(req,res,next) => {

// try {
//    const fields = FieldFilter(req.body,'name','email','password');
//    const user = await User.create(fields);
    
//     await Response.sucessResponse(res,201,user);
   
// } catch (error) {

//   return res.json({
//       error: error
//   })
//    }
// }



