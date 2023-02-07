const isEmpty = require("./isEmpty")
const validator = require("validator")

module.exports = function validateLogin(data){
let error={}
data.email= !isEmpty(data.email) ? data.email : ""
data.password = !isEmpty (data.password) ? data.password : ""

 if (!validator.isEmail(data.email)){
    error.email ="Required format email "
   }
   if (validator.isEmpty(data.email)){
    error.email ="Required email"
   }
   if (validator.isEmpty(data.password)){
    error.password ="Required password"
   }

   return {
    error,
    isValid: isEmpty(error)
   }
} 