const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express() ; 

app.use(express.json()) ; 
app.use(cors()) ;
const PORT = 6000 ; 
const db ="mongodb://localhost:27017/"
mongoose.set('strictQuery', true);
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log('your database is connect ..');
  })
  .catch((err) => console.log(err));


  app.listen(PORT,()=>{
    console.log(`your server listening in port ${PORT}`)
})
