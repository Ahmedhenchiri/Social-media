import React from 'react'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

const routes =[
{
  path:"/",
  element: Home
},
{
  path:"/login",
  element:Login
},
{
  path:"/register",
  element:Register
}
]
  


export default routes