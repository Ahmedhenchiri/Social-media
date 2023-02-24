import React,{createContext} from 'react'
type LocaleStorageContextType = {
  myData:string;
  setMyData: React.Dispatch<React.SetStateAction<string>>;
}


export const LocalStorageContext = createContext <LocaleStorageContextType> ({
myData:"",
setMyData: () => {},
})