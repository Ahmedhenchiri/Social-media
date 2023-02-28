import React from 'react'
import { buttonType } from '../../../types/types'

const Buttons=({type,name}:buttonType) =>{
  return (
    <div>
    <button type={type} className="btn btn-outline-primary">
   {name} <i className="fa-solid fa-floppy-disk"></i>
   </button>
  </div>
  )
}

export default Buttons