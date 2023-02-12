import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../../custom/buttons/Buttons'
import Inputs from '../../custom/inputs/Inputs'
import "./register.css"
const Register = () =>{
  return (
  <div className='container'>
   <h1 className='register'>Register</h1><br/>
   <form className='form'>
     <Inputs className="input" name="name" placeholder="ENTER YOUR NAME" type="text"/>
     <Inputs className="input" name="email" placeholder="ENTER YOUR EMAIL" type="text"/>
     <Inputs className="input" name="password" placeholder="ENTER YOUR PASSWORD" type="password"/>
     <Inputs className="input" name="confirm" placeholder="CONFIRM YOUR PASSWORD" type="password"/><br/> 
     <Buttons  type="submit" />
     </form>
    <Link to={"/login"}>I have account</Link>
   </div>
  )
}

export default Register