const express = require ("express")
const router = express.Router();
const {Login,Register,getAllPost,getOneUser,createPost} = require('../controllers/user.controller')
 const {authenticateToken} = require("../middleware/middlewareAuth");



router.post("/register",Register)
router.post("/login",Login)
router.get("/getAll/posts",authenticateToken,getAllPost)
router.get("/getOne/:id",authenticateToken,getOneUser)
router.post("/add",authenticateToken,createPost)



module.exports=router