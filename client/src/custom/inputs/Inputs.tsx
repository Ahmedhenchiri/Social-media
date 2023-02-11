import React from 'react'

type InputsType = {
  placeholder:string,
  name:string
  type:string
}
const Inputs=({placeholder,name,type}:InputsType)=> {
  return (
    <div>
      <input
       className='input' 
       placeholder={placeholder} 
       name={name} 
       type={type}
       />
    </div>
  )
}

export default Inputs