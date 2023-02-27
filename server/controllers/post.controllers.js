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
   addPost: async (req,res) => {
    const userId = req.user._id;
      const newPost = new PostUser ({
        ...req.body,
        user:  userId
      })
      try {
       const result = await newPost.save()
        res.status(201).json(result)
    
      }catch(error){
       res.status(404).json(error)
      }
   }
}