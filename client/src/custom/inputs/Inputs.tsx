import React from 'react'
import classnames from "classnames"

type InputsType = {
  name: string;
  label: string;
  type: string;
  icon: string;
  placeholder?: string;
  className?: string;
  classts?: any;
  errors: any;
  onChange: (event: any) => void;
}

const Inputs=({placeholder,name,type,onChange,label,icon,errors}:InputsType)=> {
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
          className="form-control"
          onChange={onChange}
          class={classnames('form-control', { 'is-invalid': errors })}
        />
        {errors && <div className="invalid-feedback">{errors}</div>}
      </div>
    </div>
  )
}

export default Inputs