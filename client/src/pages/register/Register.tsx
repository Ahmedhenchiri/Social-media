import React from 'react'
import Buttons from '../../custom/buttons/Buttons'
import Inputs from '../../custom/inputs/Inputs'
import "./register.css"
function Register() {
  return (
  <div className='container'>
   <h1 className='register'>Register</h1><br/>
   <form >
     <Inputs name="email" placeholder="ENTER YOUR NAME" type="text"/><br/> {"           "}
     <Inputs name="email" placeholder="ENTER YOUR EMAIL" type="text"/><br/> {"           "}
     <Inputs name="email" placeholder="ENTER YOUR PASSWORD" type="password"/><br/> {"           "}
     <Inputs name="email" placeholder="CONFIRM YOUR PASSWORD" type="password"/><br/> {"           "}
     <Buttons  type="submit" />
     </form>
   </div>
  )
}

export default Register