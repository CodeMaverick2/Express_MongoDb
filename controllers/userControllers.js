const userModel = require("../models/user")


exports.createUser = async (req, res) => {
    await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
   });
 
   return res.status(201).json({ message: "User Created" });
 }


 exports.getallusers = async(req , res)=>{
    const allUsers = await userModel.find({})
 
    return res.json(allUsers)
 }


 exports.getById = async(req , res)=>{
    const user = await userModel.findById(req.params.id)
   
    return res.json(user)
   }


   exports.updateuser = async(req , res)=>{
    const updateduser = await userModel.findByIdAndUpdate(req.params.id , req.body)
    return res.json(updateduser)
  }

  exports.deleteuser = async(req , res)=>{
    const deleteduser = await userModel.findByIdAndDelete(req.params.id)
  
    res.json(deleteduser)
  }