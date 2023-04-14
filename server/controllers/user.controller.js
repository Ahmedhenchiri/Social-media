const UserModel = require("../models/user")
const PostModel = require("../models/post")
const ValidateLogin = require("../validation/Login");
const ValidateRegister = require("../validation/Register");
const bcrypt =  require("bcryptjs"); 
const jwt = require("jsonwebtoken");
const { exists } = require("../models/user")

const Login = async(req,res)=>{
  const {error,isValid} = ValidateLogin(req.body)
try {
  if(!isValid){
      res.status(404).json(error)
  }else{
UserModel.findOne({email:req.body.email})
.then(user=>{
  if(!user){
      error.email = "not found user"
  res.status(404).json(error)
  }else {
      bcrypt.compare(req.body.password ,user.password)
      .then(isMatch =>{
          if(!isMatch){
         error.password = "incorrect password"
         res.status(404).json(error)
          }else{ 
      var token = jwt.sign({
        id :user._id,
        name:user.name,
        email:user.email,
        role:user.role
          },process.env.PRIVETE_KEY ,{expiresIn : '1h'});    
        res.status(200).json({
          message:'success',
          token,
          user
          
        })
      
          }
      })
  }
})
}
}catch(error){
  res.status(404).json(error.message)
}
}


const Register = async (req,res)=>{
    const {error, isValid}= ValidateRegister(req.body);
    try{
      if(!isValid){
        res.status(404).json(error);
      }else {
        UserModel.findOne({email:req.body.email})
        .then(async(exist)=>{
            if(exist){
                error.email= "user exist";
                res.status(404).json(error);
            }else {
                const hash = bcrypt.hashSync(req.body.password,10);
                req.body.password= hash;
               await UserModel.create(req.body);
               res.status(200).json({message:"success"});
            }
        });
      }
    }catch(error){
      res.status(404).json(error.message);
    }
};

const getOneUser = async (req, res) => {
  try {
    let findOne = await UserModel.findById(req.params.id);
    if (!findOne) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(findOne);
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
const updateProfilePhoto=async (req, res) => {

  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Post not found" });
    }
    const { image } = req.body;
    user.image=image 

    const updatedPhoto = await user.save();

    res.status(200).json({ message: "Photo updated successfully", data: updatedPhoto });
  
  } catch (error) {
    
    res.status(404).json({ message: error.message });
  
  }
};
const updateCoverPhoto= async (req, res) => {

  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Post not found" });
    }
    const { coverPhoto} = req.body;
    user.coverPhoto=coverPhoto
    const updatedPhoto = await user.save();

    res.status(200).json({ message: "Photo updated successfully", data: updatedPhoto });
  
  } catch (error) {
    
    res.status(404).json({ message: error.message });
  
  }
};


const getAllPost = async (req, res) => {
  try {
    const posts = await UserModel.find({})
      .populate({
        path: "posts",
        select: "posts",
      });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// const createPost = async (req, res) => {
//   try {
//     const userId = req.body.user; 
//     const user = await UserModel.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     const newPost = {
//       title: req.body.title,
//       content: req.body.content,
//     };
//     user.posts.push(newPost);
//     await user.save();
//     res.status(201).json({ message: 'Post created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };
// const createPost = async (req, res) => {
//   try {
//     const userId = req.body.user; 
//     const user = await UserModel.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     const { title, content } = req.body;
//     const image = req.file ? req.file.path : undefined; // get image path from uploaded file
//     const newPost = {
//       title : req.body.title,
//       content:req.body.content,
//       image,
//       user: user._id,
//     };
//     const post = await PostModel.create(newPost); // create post document
//     user.posts.push(post); // add post to user's posts array
//     console.log("🚀 ~ file: user.controller.js:178 ~ createPost ~ post:", post)
//     await user.save();
//     res.status(201).json({ message: 'Post created successfully', post });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };
const createPost = async (req, res) => {
  try {
    const userId = req.body.user; 
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const newPost = new PostModel({
      title: req.body.title,
      content: req.body.content,
      user: userId
    });
    await newPost.save();
    user.posts.push(newPost);
    await user.save();
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};



module.exports={Login, Register, getAllPost, getOneUser, createPost,updateProfilePhoto,updateCoverPhoto};
