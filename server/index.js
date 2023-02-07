const express = require("express")
const cors = require("cors");

const app = express()
app.use(express.json())

const PORT = 6000 ; 

app.listen(PORT,()=>{
    console.log(`your server listening in port ${PORT}`)
})
