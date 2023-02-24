import React, {  useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LocalStorageContext } from '../../Context/LocalStorageContext'

const ForceRedirect : React.FC = ({children}:any) => {
    const {myData} = useContext(LocalStorageContext)
    if (myData.length > 0){
      return <Navigate  to="/" replace/>
    }
    return <>{children}</>
}

export default ForceRedirect