const mongoose = require ("mongoose")


const PostUser = new mongoose.Schema({
    content:{ 
      type:"string"
    },
    image:{
        type:"string"
    },
 },
   {
    timestamps:true
   },
)
module.exports =  mongoose.model("posts",PostUser)