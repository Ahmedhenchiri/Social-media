import React from 'react'
import Inputs from '../custom/Inputs'
import "./register.css"
function Register() {
  return (
  <div className='container'>
   <h1 className='register'>Register</h1><br/>
     <Inputs name="email" placeholder="ENTER YOUR NAME"/><br/> {"           "}
     <Inputs name="email" placeholder="ENTER YOUR EMAIL"/><br/> {"           "}
     <Inputs name="email" placeholder="ENTER YOUR PASSWORD"/><br/> {"           "}
     <Inputs name="email" placeholder="CONFIRM YOUR PASSWORD"/><br/> {"           "}
   
     <button className='button'>Submit</button>
   </div>
  )
}

export default Register