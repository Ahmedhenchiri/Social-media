import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import api from "../../../api/Api";
import { useLocaleStorge } from "../../../Context/LocalStorageContext";

const Modale = () => {
  const { myData } = useLocaleStorge();
  const Data = JSON.parse(myData);
  const userId =Data._id
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState({});
  const [file,setFile] = useState<any>({})
  const onChangeHandler = (event: any) => {
    setForm({
      ...form,
      [event?.target?.name]: event?.target?.value as string,
    });
  };
  const handleFileInputChange=(event: React.ChangeEvent<HTMLInputElement>) =>{
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  }
  const upladImage = async(file:File)=>{
    const forms = new FormData()
    forms.append('file',file)
    forms.append('upload_preset',"ahmedhen")
    const response = await api.post("https://api.cloudinary.com/v1_1/dxpnslfmc/image/upload",forms)
    return response.data.secure_url
   
    
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const imageUrl = await upladImage(file)
      await api.post("/post/add", {...form,image:imageUrl,user:userId});
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
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Create Post</Modal.Title>
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
