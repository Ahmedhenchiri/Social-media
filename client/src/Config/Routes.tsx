import ForceRedirect from '../componets/ForceRedirect/ForceRedirect'
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
    element : (
      <ForceRedirect>
      <Login />
      </ForceRedirect>
    ),
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