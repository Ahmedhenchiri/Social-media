import React,{createContext,useState} from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/Api"


export  const AuthContext= createContext(null)

export const  AuthProvider :React.FC =({children})=> {
const [user,setUser] = useState(null)
const navigate = useNavigate();
 
const Login = async(form:any)=>{
    try {
        const response = await api.post("/user/login", form);
        const token = response.data.token
        const user = response.data.user
       localStorage.setItem("user-token",JSON.stringify(token))
       localStorage.setItem("user",JSON.stringify(user))
        alert("welcom to your home page ");
        navigate("/");
      } catch (error: any | undefined) {
        // setErrors(error.response.data);
      }
}

}