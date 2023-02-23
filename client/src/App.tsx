import {Routes , Route} from 'react-router-dom'
import routes from './Config/routes'
import Navba from './componets/navbar/Navbar'
import Footer from './componets/footer/Footer'
import { AuthProvider } from './Context/AuthContext'

const App : React.FC =() =>{
  return (

      // <AuthProvider>
      <div>
      <Routes>
        {routes.map((route)=>(
          <Route  
           key={route.path}
           path={route.path}
           element={route?.element()}
          />
        ))}
      </Routes>
      <Footer />
      </div>
      // </AuthProvider>

    
  )
}

export default App
