import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Register from './pages/register/Register'
import { BrowserRouter,Routes , Route} from 'react-router-dom'
import Login from './pages/login/Login'

const App =() =>{
  return (
    <BrowserRouter>
    <div >
      <Routes>
        <Route path='register' element={ <Register /> }/>
        <Route path='login' element={ <Login /> }/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
