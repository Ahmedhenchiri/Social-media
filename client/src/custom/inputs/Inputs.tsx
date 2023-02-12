import React from 'react'
import classnames from "classnames"

type InputsType = {
  placeholder:string,
  name:string,
  type:string,
  className:string,
  errors:string
  onChange :React.ChangeEventHandler<HTMLInputElement> | undefined
}

const Inputs=({placeholder,name,type,onChange,errors}:InputsType)=> {
  return (
    <div>
      <input
       className={classnames('form-control', { 'is-invalid': errors })}
       placeholder={placeholder} 
       name={name} 
       type={type}
       onChange={onChange}
       />
       {errors && <div >{errors}</div>}
    </div>
  )
}

export default Inputs