const { findOneAndDelete } = require("../models/post")
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

  
    const userID = req.body.user    
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
   } ,
  //  addPost: async (req, res) => {
  //   try {
  //     const { userId } = req.user; // Extract the user ID from the request object
  //     const newPost = new PostUser({
  //       ...req.body,
  //       userID: userId // Associate the post with the user who created it
  //     });
  //     const result = await newPost.save();
  //     res.status(201).json(result);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Failed to create post.' });
  //   }
  // }
  deletePost:async(req,res)=>{
     try{
      const result = await PostUser.findOneAndDelete({id:req.params.id})
      res.status(201).json(result)
     }catch(error){
      res.status(500).json(error)
     }
  }
}