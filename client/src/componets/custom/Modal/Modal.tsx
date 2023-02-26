import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import api from '../../../api/Api';

const Modale = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [form,setForm] = useState({})
    console.log("🚀 ~ file: Modal.tsx:11 ~ Modale ~ form:", form)
    const onChangeHandler = (event: any) => {
       
        setForm({
          ...form,
          [event?.target?.name]: event?.target?.value as string,
        });
      };
    const handleSubmit= async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        try{
          const response = await api.post("/post/add")
           alert("yeyyyyyeyyy")
        }catch(error){
        console.log(error)
        }
    }
   

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Add Post
      </Button>
      <form onSubmit={handleSubmit}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="What is your title "
                autoFocus
                onChange={onChangeHandler}
              />
                <Form.Label>image</Form.Label>
              <Form.Control
                type="text"
                placeholder="What is your image "
                autoFocus
                onChange={onChangeHandler}

              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={onChangeHandler}

            >
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}  type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </form>
    </>
  )
}

export default Modale