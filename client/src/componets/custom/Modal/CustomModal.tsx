import {useEffect, useState} from "react"
import { Button, Form, Modal } from "react-bootstrap";
import { usePost } from "../../../Context/PostContext";
import { CostomModalType, Post } from "../../../types/types";

const CostomModal = ({name,Name,postId}:CostomModalType) =>{
  const {getOne,onePost} = usePost();
  console.log("🚀 ~ file: CustomModal.tsx:8 ~ CostomModal ~ onePost:", onePost)
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState<string>(onePost.title )
    useEffect(() => {
      if (show) {
        getOne(postId);
      }
    }, [show]);

    console.log("🚀 ~ file: CustomModal.tsx:14 ~ CostomModal ~ title:", title)
  return(
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
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="What is your title  "
                name="title"
                value={title}
                onChange={(e)=>e.target.value}
              />
              <Form.Label>image</Form.Label>
              <Form.Control
                type="file"
                placeholder="What is your image "
                name="image"


                // onChange={handleFileInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="content"
                // onChange={onChangeHandler}
                placeholder="What is your content "
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      {/* </form> */}
    </Modal>
  </>
  )
}
export default CostomModal