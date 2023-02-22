import {Routes , Route} from 'react-router-dom'
import routes from './Config/routes'
import Navba from './componets/navbar/Navbar'
import Footer from './componets/footer/Footer'


const App : React.FC =() =>{
  return (
    <div >
      <Routes>
        {routes.map((route)=>(
          <Route  
           key={route.path}
           path={route.path}
           element={route?.element()}
          />
        ))}
      </Routes>
      <div>
      <Footer />
      </div>
    </div>
    
  )
}

export default App
