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
      const newPost = new PostUser (req.body)
      try {
      await newPost.save()
      .then((result)=>{
        res.status(201).json(result)
      })
      }catch(error){
       res.status(404).json(error)
      }
   }
}