import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ModalTwoType } from "../../../types/types";
import { usePost } from "../../../Context/PostContext";
import { useLocaleStorge } from "../../../Context/LocalStorageContext";
import api from "../../../api/Api";

const Modaltwo = ({ name, Name, Title, image, Content ,postId}: ModalTwoType) => {
  const { upladImage,getOne ,onePost,updatePost} = usePost();
  const { myData } = useLocaleStorge();
  const Data = JSON.parse(myData);
  const id = Data._id;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [file, setFile] = useState<any>("");
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")

  useEffect(() => {
    if (show) {
      if (postId !== undefined) {
        // postId is defined, so we can safely pass it to the function
        getOne(postId);
      } else {
        // postId is undefined, so we need to handle this case
        console.log('postId is undefined');
      }
      
    }
  }, [show]);
  useEffect(() => {
    if (onePost) {
      setTitle(onePost?.title);
      setFile(onePost?.image);
      setContent(onePost?.content);
    }
  }, [onePost]);
  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };
  const handleTitleChange = (e:any) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e:any) => {
    setContent(e.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Name === "Change your Photo"){
    try {
      const imageURl = await upladImage(file);
      await api.put(`/user/updatePhoto/${id}`, { image: imageURl });
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  }
  if (Name === "Add Post"){
    try {
      const imageUrl = await upladImage(file)
      await api.post("/post/add", {title,content,image:imageUrl,user:id});
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  }
  if( Name === "Update Post"){
    updatePost( onePost._id, { title, content }).then(()=>{
      handleClose()
    })
  }
  };
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {name}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{Name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {Title && (
                  <>
                    <Form.Label>{Title}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="What is your title  "
                      name="title"
                      value={title}
                      onChange={handleTitleChange}
                    />
                  </>
                )}
                {image && (
                  <>
                    <Form.Label>{image}</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="What is your image "
                      name="image"
                      // value={file}
                      onChange={handleFileInputChange}
                    />
                  </>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {Content && (
                  <>
                    <Form.Label>{Content}</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="content"
                      value={content}
                        onChange={handleContentChange}
                      placeholder="What is your content "
                    />
                  </>
                )}
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

export default Modaltwo;
