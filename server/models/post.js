const mongoose = require ("mongoose")


const PostUser = new mongoose.Schema({
    content:{ 
      type:"string"
    },
    image:{
        type:"string"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
 },
   {
    timestamps:true
   },
)
module.exports =  mongoose.model("posts",PostUser)