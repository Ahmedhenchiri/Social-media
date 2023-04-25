const express = require ("express")
const router = express.Router();
const {Login,Register,getAllPost,getOneUser,createPost,updateProfilePhoto,updateCoverPhoto} = require('../controllers/user.controller')
 const {authenticateToken} = require("../middleware/middlewareAuth");



router.post("/register",Register)
router.post("/login",Login)
router.get("/getAll/posts",getAllPost)
router.get("/getOne/:id",getOneUser)
router.post("/add",createPost)
router.put("/updatePhoto/:id",updateProfilePhoto)
router.put("/updateCover/:id",updateCoverPhoto)


module.exports=router