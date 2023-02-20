const PostUser = require ("../models/post")

module.exports={
createPost: async (req,res) =>{
  const {title,content,image} = req.body
  
  const post = await PostUser.create({
    title,content,image
  })
  await post.save()

}

}