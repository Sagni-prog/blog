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
      
// exports.getUserById = () =>
//     async (req,res,next) => {
//        const id = req.params.id;
//        const user = await User.findById(id);
//        if(!user){
       
//        }
//        Response.sucessResponse(res,200,user);
//     }
    
exports.getAllUser = () => 
   async (req,res,next) => {
      try {
         const users = await User.findAll();
         if(!users) {
         
         }
         
         Response.sucessResponse(res,200,users);
      } catch (error) {
        
      }
   }
   
   
  exports.getAll = (model) => 
  async (req,res,next) => {
     try {
        const data = await model.findAll();
        if(!data) {
        
        }
        
        Response.sucessResponse(res,200,data);
     } catch (error) {
       
     }
  }
  
  exports.getById = (model) =>
    async (req,res,next) => {
       const id = req.params.id;
       const data = await model.findOne({ where: {id: id}});
       if(!data){
       
       }
       Response.sucessResponse(res,200,data);
    }
    
