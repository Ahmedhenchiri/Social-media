import {Routes , Route} from 'react-router-dom'
import routes from './Config/Routes'
import Navba from './componets/navbar/Navbar'
import Footer from './componets/footer/Footer'
import { useEffect, useState } from 'react'
import { LocalStorageContext } from './Context/LocalStorageContext'
import { PostProvider } from './Context/PostContext'

const App : React.FC =() =>{
  const [myData, setMyData] = useState<string>(() => {
    // Load saved data from local storage on initial render
    const savedData = localStorage.getItem('user');
    return savedData ? savedData : '';
  });
 
  const logout = () => {
    localStorage.clear();
    setMyData('');
  };
  const contextValue = { myData, setMyData,logout };
  return (
      <div>
        <PostProvider>
      <LocalStorageContext.Provider value={contextValue}>
        <Navba />
      <Routes>
        {routes.map((route)=>(
          <Route  
           key={route.path}
           path={route.path}
           element={route.element}
          />
        ))}
      </Routes>
      <Footer />
      </LocalStorageContext.Provider>
      </PostProvider>
      </div>
  )
}

export default App
