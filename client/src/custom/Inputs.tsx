import React from 'react'

function Inputs({placeholder,name,type}:any) {
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