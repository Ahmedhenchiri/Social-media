import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api/Api';
import { errorType } from '../Config/types/types';
interface MyContextValues {
    // stateValue: string;
    // setStateValue: React.Dispatch<React.SetStateAction<string>>;
  }
function loginContext({children}:any) {
    const MyContext = React.createContext<MyContextValues | undefined>(undefined)
  const [errors, setErrors] = useState<errorType>({ email: "", password: "" });
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  
  const providerValues = {
    stateValue:  errors,
    setStateValue: setErrors
  };
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
  return (
    <MyContext.Provider value={{providerValues ,handleSubmit ,onChangeHandler}}>
      {children}
    </MyContext.Provider>
  );
}

export default loginContext