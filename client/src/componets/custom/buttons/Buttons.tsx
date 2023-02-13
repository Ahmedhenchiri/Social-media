import React from 'react'
type buttonType ={
    type?: "button" | "submit" | "reset" | undefined
    // name:string
}
const Buttons=({type}:buttonType) =>{
  return (
    <div>
    <button type={type} className="btn btn-outline-primary">
   save <i className="fa-solid fa-floppy-disk"></i>
   </button>
  </div>
  )
}

export default Buttons