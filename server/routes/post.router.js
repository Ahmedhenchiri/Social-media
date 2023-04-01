const express = require("express")
const router = express.Router()
const {getAll,addPost,getallPostOfUser,deletePost,updatePost,findOnePost} = require("../controllers/post.controllers")



router.get("/",getAll)
router.get("/getAll/:id",getallPostOfUser)
router.get("/getOne/:id",findOnePost)
router.post("/add",addPost)
router.delete("/deletePost/:id",deletePost)
router.put("/update/:id",updatePost)
module.exports=router
