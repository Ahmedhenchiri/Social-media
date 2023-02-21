const express = require("express")
const router = express.Router()
const {getAll} = require("../controllers/post.controllers")



router.get("/",getAll)


module.exports=router
