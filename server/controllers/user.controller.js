const UserModel = require("../models/user")
const ValidateLogin = require("../validation/Login")
const ValidateRegister = require("../validation/Register")
const bcrypt =  require("bcryptjs") 
const jwt = require ("jsonwebtoken")
const Login = async (req,res)=>{
    const {error,isVallid} = ValidateLogin(req.body)
     try{
      if(!isVallid){
        res.status(404).json(error)
      }else{
        UserModel.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                error.email="not fond email"
                res.status(404).json(error)
            }else {
            bcrypt.compare(req.body.password,user.password)
            .then(isMatch=>{
                if (isMatch){
                error.password = "is incorrect"
                res.status(404).json(error)
            }else {
                var token = jwt.sign({
                    id:user._id,
                    name:user.name,
                    email:user.email
                },process.env.PRIVETE_KEY,{expiresIn:'1h'})
                res.status(200).json({
                    message:'succses',
                    token
                })
            }
            })
            }
        })
      }
     }catch(error){
      res.status(404).json(error)
     }

}