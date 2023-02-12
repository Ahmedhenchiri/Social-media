import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../../custom/buttons/Buttons'
import Inputs from '../../custom/inputs/Inputs'
import "./register.css"
import api from '../../api/Api'
import { useNavigate } from 'react-router-dom'
type ErrorsType = {
  name:string
  email:string
  password:string
  confirm:string
}
const Register = () =>{
  const [form ,setForm] = useState({})
  const [errors ,setErrors] = useState<ErrorsType>({name:'',email:'',password:'',confirm:''})

const navigate = useNavigate()

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
    alert("your register successfully")
    navigate("/")
    }catch(error:any){
      setErrors(error.response.message)
    }

  }
  return (
    <div className="container p-4 mt-4">
      <div className="row justify-content-evenly mt-4">
        <div className="col-lg-6 col-md-12 mt-4">
          <div className="d-flex">
            <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i>{' '}
            <h2>Register</h2>
          </div>
          <div
            className="p-6 shadow-lg p-3 mb-5 bg-body rounded"
            style={{ backgroundColor: 'black' }}
          >
            <form onSubmit={handleSubmit}>
              <Inputs
                name="name"
                label="Name"
                type="text"
                icon="fa-solid fa-user"
                onChange={onChangeHandler}
                errors={errors.name}
              />
              <Inputs
                name="email"
                label="Email"
                type="text"
                icon="fa-solid fa-user"
                onChange={onChangeHandler}
                errors={errors.email}
              />
              <Inputs
                name="password"
                label="Password"
                type="password"
                icon="fa-solid fa-key"
                onChange={onChangeHandler}
                errors={errors.password}
              />
              <Inputs
                name="confirm"
                label="Confirm password"
                type="text"
                icon="fa-solid fa-key"
                onChange={onChangeHandler}
                errors={errors.confirm}
              />
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-primary">
                  Save <i className="fa-solid fa-floppy-disk"></i>
                </button>
                <Link to="/login">I have account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register