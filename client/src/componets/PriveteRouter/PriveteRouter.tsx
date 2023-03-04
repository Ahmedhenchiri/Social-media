import { Navigate } from 'react-router-dom'
import { useLocaleStorge } from '../../Context/LocalStorageContext'



const PriveteRouter = ({children}:any) => {
    const {myData} = useLocaleStorge()
     if(myData.length === 0){
      return <Navigate to="/login"  replace />
     }
     return children
}

export default PriveteRouter