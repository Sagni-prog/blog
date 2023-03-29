const User = require('./../Models/User');
const UserFactory = require('./../Factories/UserFactory');
const Response = require('./../Responses/Responses');


const FieldFilter = (obj,...allowedFields) => {

       const newObj = {};
       Object.keys(obj).forEach(el => {
          if(allowedFields.includes(el)) newObj[el] = obj[el];
       });
       
       return newObj;
       
   }
   
exports.create = async(req,res,next) => {

  const fields = FieldFilter(req.body,'name','email','password');
      const user = await User.create(fields);
   
   Response.sucessResponse(res,201,"sucess",user);
}



