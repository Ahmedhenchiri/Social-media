const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({
    name: "string",
    email: {
        type: "string",
        trim: true,
        unique: true,
    },
    password: "string",
    image:{
    type: String,default:"https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg"
     },
    number:"string",
    
    posts:[{
     type:mongoose.Schema.Types.ObjectId,
     ref:"posts"
    }],
  },
  
    {
        timestamps: true
    },

)
module.exports = mongoose.model("users", UserModel) 


//https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg