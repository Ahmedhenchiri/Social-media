
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import "./Search.css"
const Search = () => {
    const [show,setShow]= useState(false)
  return (
    <>
    <Form className="d-flex">
    <Form.Control
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
    onClick={()=>setShow(true)}
    />
  <Button variant="outline-success">Search</Button>
 </Form>
 {show && (
<div className='show'>

</div>
 )}
</>
  )
}

export default Search