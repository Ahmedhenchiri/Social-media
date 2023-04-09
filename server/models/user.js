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
     coverPhoto:{
        type:String,
        default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC"
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