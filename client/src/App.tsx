import {Routes , Route} from 'react-router-dom'
import routes from './Config/routes'
import Navba from './componets/navbar/Navbar'
import Footer from './componets/footer/Footer'
import { useState } from 'react'
import { LocalStorageContext } from './Context/LocalStorageContext'

const App : React.FC =() =>{
  const [myData, setMyData] = useState<string>(() => {
    const savedData = localStorage.getItem('user');
    return savedData ? savedData : '';
  });
  const contextValue = { myData, setMyData };
  return (
      <div>
      <LocalStorageContext.Provider value={contextValue}>
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
      </LocalStorageContext.Provider>
      </div>
  )
}

export default App
