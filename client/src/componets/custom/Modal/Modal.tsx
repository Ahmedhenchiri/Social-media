import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import cloudinary from "cloudinary";
import api from "../../../api/Api";

const Modale = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState({});
  const [file,setFile] = useState({})
  // dxpnslfmc 
  // https://api.cloudinary.com/v1_1/
  // ahmedhen
  const onChangeHandler = (event: any) => {
    setForm({
      ...form,
      [event?.target?.name]: event?.target?.value as string,
    });
  };
  function handleFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file.name);
    }
  }
  const upladImage = async()=>{
    const forms = new FormData()
    forms.append('file',file)
    forms.append('upload_preset',"ahmedhen")
   await api.post("https://api.cloudinary.com/v1_1/dxpnslfmc/upload",forms)

  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await api.post("/post/add", form,file);
      alert("yeyyyyyeyyy");
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Post
      </Button>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit,upladImage}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
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
                  onChange={onChangeHandler}
                />
                <Form.Label>image</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="What is your image "
                  name="image"
                  onChange={handleFileInputChange}
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
                  onChange={onChangeHandler}
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
        </form>
      </Modal>
    </>
  );
};

export default Modale;
