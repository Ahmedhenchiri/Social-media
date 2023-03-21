const express = require("express")
const router = express.Router()
const {getAll,addPost,getallPostOfUser} = require("../controllers/post.controllers")



router.get("/",getAll)
router.post("/add",addPost)
router.get("/getAll/:id",getallPostOfUser)
module.exports=router
