const isEmpty = require("./isEmpty")
const validator = require("validator")

module.exports= function ValidateRegister(data){
    let error={}
    data.name = !isEmpty(data.name) ? data.name : ""
    data.email = !isEmpty(data.email) ? data.email :""
    data.password = !isEmpty(data.password) ? data.password :""
    data.confirm = !isEmpty(data.confirm) ? data.password: ""

    if (validator.isEmpty(data.name)){
        error.name ="Required name"
        }
        if (!validator.isEmail(data.email)){
          error.email ="Required format email "
         }
         if (validator.isEmpty(data.email)){
          error.email ="Required email"
         }
         if (validator.isEmpty(data.password)){
          error.password ="Required password"
         }
         if (!validator.equals(data.password ,data.confirm)){
          error.confirm ="Passwords not matches"
         }
         if (validator.isEmpty(data.confirm)){
          error.confirm ="Required confirm"
         }
        
      
         return {
          error,
          isValid: isEmpty(error)
         }
}