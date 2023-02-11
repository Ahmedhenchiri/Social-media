import React from 'react'
type parametre ={
    type:any 
}
const Buttons=({type}:parametre) =>{
  return (
    <div>
        <button className='button' type={type} >Submit</button>
    </div>
  )
}

export default Buttons