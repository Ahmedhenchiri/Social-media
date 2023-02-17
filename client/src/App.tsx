import {Routes , Route} from 'react-router-dom'
import routes from './Config/routes'
import Navba from './componets/navbar/Navbar'


const App : React.FC =() =>{
  return (
   
    <div >
      <Navba />
      <Routes>
        {routes.map((route)=>(
          <Route  
           key={route.path}
           path={route.path}
           element={route?.element()}
          />
        ))}
      </Routes>
    </div>
    
  )
}

export default App
