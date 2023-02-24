import React, { Children, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LocalStorageContext } from '../../Context/LocalStorageContext'

const ForceRedirect = ({children}:any) => {
    const {myData} = useContext(LocalStorageContext)
    if (myData){
      return <Navigate  to="/" replace/>
    }
    return children
}

export default ForceRedirect