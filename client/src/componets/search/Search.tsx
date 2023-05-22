
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import AllUsersSearch from './AllUsersSearch/AllUsersSearch'
import "./Search.css"
import { usePost } from '../../Context/PostContext'
const Search = () => {
  const {users} = usePost()
  const [show,setShow]= useState(false)
    // console.log("🚀 ~ file: Search.tsx:8 ~ Search ~ show:", show)
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
 {show == true&&(
<>
     {/* <AllUsersSearch />  */}
</>
)}

</>
  )
}

export default Search