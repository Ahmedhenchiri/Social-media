import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import NotFond from "../pages/not fond/NotFond"
import Register from '../pages/register/Register'

const routes = [
  {
    path:"/",
    element:Home,
  },
  {
    path:"/login",
    element:Login,
  },
  {
    path:"/register",
    element:Register,
  },
  {
    path:"/*",
    element:NotFond,
  },
]
  


export default routes