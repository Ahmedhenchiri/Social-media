import React,{createContext, useContext, useState} from 'react'
import {ChildrenType, LocaleStorageContextType} from "../types/types"


const LocalStorageContext = createContext <LocaleStorageContextType> ({
myData:"",
setMyData: () => {},
logout:()=>{}
})
const LocalStorage =({children}:ChildrenType)=>{
const [myData, setMyData] = useState<string>(() => {
    // Load saved data from local storage on initial render
    const savedData = localStorage.getItem('user');
    return savedData ? savedData : '';
  });
 
  const logout = () => {
    localStorage.clear();
    setMyData('');
   
  };
  return(
    <LocalStorageContext.Provider value={{myData, setMyData,logout }}>
       {children}
    </LocalStorageContext.Provider>
  )

}
const useLocaleStorge =()=> useContext(LocalStorageContext)
export {useLocaleStorge,LocalStorage}

