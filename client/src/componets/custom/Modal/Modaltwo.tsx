import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { ModalTwoType } from '../../../types/types';


const Modaltwo = ({name,Name, Title,image,Content}:ModalTwoType) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {name}
      </Button>
      <Modal show={show} onHide={handleClose}>
        {/* <form onSubmit={handleSubmit}> */}
          <Modal.Header closeButton>
       
           <Modal.Title>{Name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
             
               {Title && <><Form.Label>{Title}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="What is your title  "
                  name="title"
                //   onChange={onChangeHandler}
                />
                </>
              }
               {image && <>
               <Form.Label>{image}</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="What is your image "
                  name="image"
                //   onChange={handleFileInputChange}
                />
                </>
              }
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
               {Content && <> 
               <Form.Label>{Content}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="content"
                //   onChange={onChangeHandler}
                  placeholder="What is your content "
                />
              </>}
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" >
              Save Changes
            </Button>
          </Modal.Footer>
        {/* </form> */}
      </Modal>
    </>
  )
}

export default Modaltwo