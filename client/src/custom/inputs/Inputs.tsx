import React from 'react'

type InputsType = {
  placeholder:string,
  name:string,
  type:string,
  className:string
}

const Inputs=({placeholder,name,type,className}:InputsType)=> {
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