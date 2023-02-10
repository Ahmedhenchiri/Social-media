import React from 'react'

type parametre = {
  placeholder:string,
  name:string
  type:string
}
function Inputs({placeholder,name,type}:parametre) {
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