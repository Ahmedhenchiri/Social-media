import Modal from '../componets/custom/Modal/Modal'
import ForceRedirect from '../componets/ForseRederict/ForceRedirect'
import PriveteRouter from '../componets/PriveteRouter/PriveteRouter'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import NotFond from "../pages/not fond/NotFond"
import Profile from '../pages/Profile/Profile'
import Register from '../pages/register/Register'

const routes = [
  {
    path:"/",
    element: (
    <PriveteRouter>
     <Home />
    </PriveteRouter>
    )
  },
  {
    path:"/login",
    element : (
      <ForceRedirect>
      <Login />
     </ForceRedirect>
    )
  },
  {
    path:"/register",
    element:(
    <ForceRedirect>
    <Register/>
    </ForceRedirect>
    )
  },
  {
    path:"/*",
    element:<NotFond/>
  },
  {
    path:"/profile",
    element:(
      <PriveteRouter>
      <Profile/>
    </PriveteRouter>
    
    )
  },
  {
    path:"/modal",
    element:(
      <PriveteRouter>
      <Modal/>
    </PriveteRouter>
    
    )
  },
] as { path: string; element: React.ReactNode }[];
  


export default routes