const PostUser = require ("../models/post")

module.exports={

   getAll: async (req,res) =>{
    const allPost = await PostUser.find({}) 
    try{
      res.status(201).json(allPost)
    }catch(error){
      res.status(404).json(error)
    }
   },
   getallPostOfUser:async(req,res) =>{
    const all =await PostUser.find({user:req.body.user})
    try{
      res.status(201).json(all)
    }catch(error){
    res.status(404).json(error)
    }
   },
   addPost: async (req,res) => {
    console.log("🚀 ~ file: post.controllers.js:20 ~ addPost: ~ req:", req.user)
  
    const userID = "63ef8dd9ab827c66bd5ec8f3"    
      const newPost = new PostUser ({
        ...req.body,
        userID: userID
      })
      try {
       const result = await newPost.save()
        res.status(201).json(result)
    
      }catch(error){
       res.status(404).json(error)
      }
   } 
}