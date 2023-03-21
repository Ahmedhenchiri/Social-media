const express = require ("express")
const router = express.Router();
const {Login,Register,getAllPost} = require('../controllers/user.controller')

router.post("/register",Register)
router.post("/login",Login)
router.get("/getAll/posts",getAllPost)

module.exports=router