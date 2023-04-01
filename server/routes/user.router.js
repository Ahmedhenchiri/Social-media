const express = require ("express")
const router = express.Router();
const {Login,Register,getAllPost,getOneUser} = require('../controllers/user.controller')

router.post("/register",Register)
router.post("/login",Login)
router.get("/getAll/posts",getAllPost)
router.get("/getOne/:id",getOneUser)
module.exports=router