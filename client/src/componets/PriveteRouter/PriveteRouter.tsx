import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LocalStorageContext } from '../../Context/LocalStorageContext'
import { ChildrenType } from '../../types/types'

const PriveteRouter = ({children}:any) => {
    const {myData} = useContext(LocalStorageContext)
     if(myData.length === 0){
      return <Navigate to="/login"  replace />
     }
     return children
}

export default PriveteRouter