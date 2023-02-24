import {Routes , Route} from 'react-router-dom'
import routes from './Config/routes'
import Navba from './componets/navbar/Navbar'
import Footer from './componets/footer/Footer'
import { useState } from 'react'


const App : React.FC =() =>{
  const [myData, setMyData] = useState<string>(() => {
    const savedData = localStorage.getItem('user');
    return savedData ? savedData : '';
  });

  return (
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
  )
}

export default App
