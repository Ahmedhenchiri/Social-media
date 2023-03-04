import { Navigate } from 'react-router-dom'
import {  useLocaleStorge } from '../../Context/LocalStorageContext'


const ForceRedirect = ({children}:any) => {
    const {myData} = useLocaleStorge()
    if (myData.length > 0){
      return <Navigate  to="/" replace/>
    }
    return children
}

export default ForceRedirect