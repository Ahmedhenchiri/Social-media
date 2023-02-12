import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api/Api'
import Buttons from '../../custom/buttons/Buttons'
import Inputs from '../../custom/inputs/Inputs'
import "./login.css"
import { useNavigate } from 'react-router-dom'

function Login() {
  const [form,setForm] = useState({})
 const navigate = useNavigate()
  const onChangeHandler = (event: any)=>{
    setForm({
      ...form,
      [event?.target?.name]:event?.target?.value
    })
  }
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    
    try{
      const response = await api.post("/user/login",form)
      alert("welcom to your home page ")
      navigate("/")
      console.log(response)
    }catch(error){
      console.log(error)
    }
  } 
  return (
    <div className='container'>
      <h1 className='login'>Login</h1>
      <form onSubmit={handleSubmit}>
        <Inputs className="input" placeholder='ENTER YOUR EMAIL' type='text' name='email'onChange={onChangeHandler}/>
        <Inputs className="input" placeholder='ENTER YOUR PASSWORD' type='password' name='password' onChange={onChangeHandler}/><br></br>
        <Buttons type="submit"/>
      </form>
      <Link  to={"/register"} >I dont have account</Link>
    </div>
  )
}

export default Login