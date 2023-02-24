import React, { Children, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LocalStorageContext } from '../../Context/LocalStorageContext'

const ForceRedirect = ({children}:any) => {
    const {myData} = useContext(LocalStorageContext)
    console.log("🚀 ~ file: ForceRedirect.tsx:7 ~ ForceRedirect ~ myData:", myData.length)
    if (myData.length > 0){
      return <Navigate  to="/" replace/>
    }
    return children
}

export default ForceRedirect