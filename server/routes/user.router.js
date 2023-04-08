const express = require ("express")
const router = express.Router();
const {Login,Register,getAllPost,getOneUser,createPost,updateProfilePhoto} = require('../controllers/user.controller')
//  const {authenticateToken} = require("../middleware/middlewareAuth");



router.post("/register",Register)
router.post("/login",Login)
router.get("/getAll/posts",getAllPost)
router.get("/getOne/:id",getOneUser)
router.post("/add",createPost)
router.put("/updatePhoto/:id",updateProfilePhoto)


module.exports=router