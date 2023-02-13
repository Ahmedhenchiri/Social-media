import {Routes , Route} from 'react-router-dom'
import routes from './Config/routes'



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
    </div>
    
  )
}

export default App
