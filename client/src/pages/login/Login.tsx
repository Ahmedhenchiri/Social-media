import React from 'react'
import Buttons from '../../custom/buttons/Buttons'
import Inputs from '../../custom/inputs/Inputs'

function Login() {
  return (
    <div className='container'>
      <h1>Login</h1>
      <form>
        <Inputs className="input" placeholder='ENTER YOUR EMAIL' type='text' name='email'/>
        <Inputs className="input" placeholder='ENTER YOUR PASSWORD' type='password' name='password'/>
        <Buttons type="submit"/>
      </form>

    </div>
  )
}

export default Login