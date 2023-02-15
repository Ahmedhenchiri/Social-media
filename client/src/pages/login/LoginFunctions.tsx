import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../api/Api';
import { errorType } from '../../Config/types/types';

 export const LoginFunction = ()=>{


    const [form, setForm] = useState({});
    const [errors, setErrors] = useState<errorType>({ email: "", password: "" });
    const navigate = useNavigate();
   
   
    const onChangeHandler = (event: any) => {
      setForm({
        ...form,
        [event?.target?.name]: event?.target?.value as string,
      });
    };
   const handleSubmit = async (event: any) => {
      event.preventDefault();
  
      try {
        const response = await api.post("/user/login", form);
        alert("welcom to your home page ");
        navigate("/");
        // console.log(response)
      } catch (error: any | undefined) {
        setErrors(error.response.data);
      }
    };
  
  }

