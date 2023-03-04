import {Routes , Route} from 'react-router-dom'
import routes from './Config/Routes'
import Navba from './componets/navbar/Navbar'
import Footer from './componets/footer/Footer'
import { PostProvider } from './Context/PostContext'
import { LocalStorage } from './Context/LocalStorageContext'

const App : React.FC =() =>{

  return (
      <div>
      <PostProvider>
     <LocalStorage>
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
      </LocalStorage>
      </PostProvider>
      </div>
  )
}

export default App
