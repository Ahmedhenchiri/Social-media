const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({
    name: "string",
    email: {
        type: "string",
        trim: true,
        unique: true,
    },
    password: "string",
    
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