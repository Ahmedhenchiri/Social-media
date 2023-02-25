const express = require("express")
const router = express.Router()
const {getAll,addPost} = require("../controllers/post.controllers")



router.get("/",getAll)
router.post("/add",addPost)

module.exports=router
