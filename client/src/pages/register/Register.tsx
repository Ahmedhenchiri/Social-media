import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../../custom/buttons/Buttons'
import Inputs from '../../custom/inputs/Inputs'
import "./register.css"
import api from '../../api/Api'
const Register = () =>{
  const [form ,setForm] = useState({})
  console.log(form)
  const onChangeHandler=(event:any)=>{
    setForm({
      ...form,
    
      [event.target.name]:event.target.value,
    })
  }
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
    const response= await api.post("/user/register",form)
    alert("yeeey te5dem ")
    }catch(error){
      console.log(error)
    }

  }
  return (
  <div className='container'>
   <h1 className='register'>Register</h1><br/>
   <form className='form' onSubmit={handleSubmit}>
     <Inputs className="input" name="name" placeholder="ENTER YOUR NAME" type="text" onChange={onChangeHandler}/>
     <Inputs className="input" name="email" placeholder="ENTER YOUR EMAIL" type="text" onChange={onChangeHandler}/>
     <Inputs className="input" name="password" placeholder="ENTER YOUR PASSWORD" type="password" onChange={onChangeHandler}/>
     <Inputs className="input" name="confirm" placeholder="CONFIRM YOUR PASSWORD" type="password" onChange={onChangeHandler}/><br/> 
     <Buttons  type="submit" />
     </form>
    <Link to={"/login"}>I have account</Link>
   </div>
  )
}

export default Register