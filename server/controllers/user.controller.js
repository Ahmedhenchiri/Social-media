const UserModel = require("../models/user")
const ValidateLogin = require("../validation/Login")
const ValidateRegister = require("../validation/Register")
const bcrypt =  require("bcryptjs") 
const jwt = require ("jsonwebtoken")
const { exists } = require("../models/user")
const Login = async (req,res)=>{
    const {error,isValid} = ValidateLogin(req.body)
     try{
      if(!isValid){
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
                if (!isMatch){
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
      res.status(404).json(error.message)
     }

}
const Register = async (req,res)=>{
    const {error, isValid}= ValidateRegister (req.body);
    try{
      if(!isValid){
        res.status(404).json(error)
      }else {
        UserModel.findOne({email:req.body.email})
        .then(async(exist)=>{
            if(exist){
                error.email= "user exist"
                res.status(404).json(error)
            }else {
                const hash = bcrypt.hashSync(req.body.password,10)
                req.body.password= hash
               await UserModel.create(req.body)
               res.status(200).json({message:"success"})
            }
        })
      }
    }catch(error){
    res.status(404).json(error.message)
    }
}
module.exports={Login,Register}