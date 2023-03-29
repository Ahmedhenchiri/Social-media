const express = require("express")
const router = express.Router()
const {getAll,addPost,getallPostOfUser,deletePost,updatePost} = require("../controllers/post.controllers")



router.get("/",getAll)
router.post("/add",addPost)
router.get("/getAll/:id",getallPostOfUser)
router.delete("/deletePost/:id",deletePost)
router.put("/update/:id",updatePost)
module.exports=router
