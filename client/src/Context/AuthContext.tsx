import React,{createContext,useState} from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/Api"
type User = {
    email: string;
    password: string;
  };
  
  type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => void;
    logout: () => void;
    register: (email: string, password: string) => void;
  };
export  const AuthContext= createContext(null)

export const  AuthProvider : React.FC =({children}:any)=> {
const [user,setUser] = useState<User | null>(null)
const navigate = useNavigate();
 
const login = async(form:any)=>{
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
const authValues: AuthContextType = { user, login };

return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>

}