import React from 'react'

type InputsType = {
  placeholder:string,
  name:string,
  type:string,
  className:string
  onChange :React.ChangeEventHandler<HTMLInputElement> | undefined
}

const Inputs=({placeholder,name,type,className,onChange}:InputsType)=> {
  return (
    <div>
      <input
       className='input' 
       placeholder={placeholder} 
       name={name} 
       type={type}
       onChange={onChange}
       />
    </div>
  )
}

export default Inputs