import React from 'react'

function Buttons({type}:any) {
  return (
    <div>
        <button className='button' type={type} >Submit</button>
    </div>
  )
}

export default Buttons