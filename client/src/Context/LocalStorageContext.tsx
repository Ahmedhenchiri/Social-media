import React,{createContext} from 'react'
import {LocaleStorageContextType} from "../types/types"


export const LocalStorageContext = createContext <LocaleStorageContextType> ({
myData:"",
setMyData: () => {},
})