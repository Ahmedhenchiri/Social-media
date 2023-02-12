import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../../custom/buttons/Buttons'
import Inputs from '../../custom/inputs/Inputs'
import "./login.css"
function Login() {
  return (
    <div className='container'>
      <h1 className='login'>Login</h1>
      <form>
        <Inputs className="input" placeholder='ENTER YOUR EMAIL' type='text' name='email'/>
        <Inputs className="input" placeholder='ENTER YOUR PASSWORD' type='password' name='password'/><br></br>
        <Buttons type="submit"/>
      </form>
      <Link  to={"/register"} >I dont have account</Link>
    </div>
  )
}

export default Login