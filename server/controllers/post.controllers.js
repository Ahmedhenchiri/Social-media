const { findOneAndDelete } = require("../models/post")
const PostUser = require ("../models/post")

module.exports={

   getAll: async (req,res) =>{
    const allPost = await PostUser.find({}).populate('user','name image') 
    try{
      res.status(201).json(allPost)
    }catch(error){
      res.status(404).json(error)
    }
   },

   getallPostOfUser :async (req, res) => {
    try {
      const userId = req.params.id;
      const allPosts = await PostUser.find({ user: userId }).populate('user', 'name email image');
      res.status(200).json(allPosts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
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
        res.status(500).json({ message: "Error fetching post", error });

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
      const result = await PostUser.findOneAndDelete({ _id: req.params.id })
      res.status(201).json(result)
     }catch(error){
      res.status(500).json({ message: "Error fetching post", error });

     }
  },
  // updatePost :async(req,res)=>{
  //   const update = await PostUser.findOneAndUpdate(req.params.id,req.body)
  //   try{
  //      res.status(201).json(update)
  //   }catch(error){
  //     res.status(500).json({ message: "Error fetching post", error });

  //   }
  // },
  updatePost: async (req, res) => {
    try {
      const post = await PostUser.findById(req.params.id);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      // Validate input data
      const { title, content } = req.body;
  
      // if (!title || !content) {
      //   return res.status(400).json({ message: "Title and content are required" });
      // }
  
      post.title = title;
      post.content = content;
  
      // Save updated post
      const updatedPost = await post.save();
  
      res.status(200).json({ message: "Post updated successfully", data: updatedPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating post" });
    }
  },
  findOnePost:async(req,res)=>{

      try {
        const post = await PostUser.findById(req.params.id);
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ message: "Error fetching post", error });
      }
  }

};
