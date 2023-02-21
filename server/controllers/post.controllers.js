const PostUser = require ("../models/post")

module.exports={
// createPost: async (req,res) =>{
//   const {title,content,image} = req.body
  
//   const post = await PostUser.create({
//     title,content,image
//   })
//   await post.save()

// }
   getAll: async (req,res) =>{
    const allPost = await PostUser.find({}) 
    try{
      res.status(201).json(allPost)
    }catch(error){
      res.status(404).json(error)
    }
   }
}