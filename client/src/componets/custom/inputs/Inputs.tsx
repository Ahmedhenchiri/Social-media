import React from 'react'
import classnames from "classnames"
import { InputsType } from '../../../types/types'


const Inputs=({name,type,onChange,label,icon,errors}:InputsType)=> {
  return (
    <div className=" mb-3 bg-white">
      <label className="form-label">{label}</label>
      <div className="input-group ">
        <span className="input-group-text">
          <i className={icon}></i>
        </span>
        <input
          type={type}
          name={name}
          onChange={onChange}
          className={classnames('form-control', { 'is-invalid': errors })}
        />
        {errors && <div className="invalid-feedback">{errors}</div>}
      </div>
    </div>
  )
}

export default Inputs