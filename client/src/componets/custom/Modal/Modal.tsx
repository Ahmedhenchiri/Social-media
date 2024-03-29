import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ModalTwoType } from "../../../types/types";
import { usePost } from "../../../Context/PostContext";
import { useLocaleStorge } from "../../../Context/LocalStorageContext";
import api from "../../../api/Api";

const Modale = ({
  name,
  Name,
  Title,
  image,
  Content,
  postId,
  modalContent,
  buttonSubmit,
  buttonDanger,
  icon,
  buttonColor,
}: ModalTwoType) => {
  const { upladImage, getOne, onePost, updatePost, deletePost } = usePost();
  const { myData } = useLocaleStorge();
  const Data = JSON.parse(myData);
  const id = Data._id;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [file, setFile] = useState<any>("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (show) {
      if (postId !== undefined) {
        // postId is defined, so we can safely pass it to the function
        getOne(postId);
      } else {
        // postId is undefined, so we need to handle this case
        setTitle("");
        setFile("");
        setContent("");
      //  getOne()
        console.log("postId is undefined");
      }
        console.log("🚀 ~ file: Modal.tsx:45 ~ useEffect ~ postId:", postId)
    }
  }, [show,setShow]);
  useEffect(() => {
    if (onePost) {
      setTitle(onePost?.title);
      setFile(onePost?.image);
      setContent(onePost?.content);
    }
  }, [onePost]);
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };
  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    switch (Name) {
      case "Change your Photo": {
        try {
          const imageURl = await upladImage(file);
          await api.put(`/user/updatePhoto/${id}`, { image: imageURl });
          setShow(false);
        } catch (error) {
          console.log(error);
        }
        break;
      }
      case "Change your Cover Photo": {
        try {
          const imageURl = await upladImage(file);
         await api.put(`/user/updateCover/${id}`, {
            coverPhoto: imageURl,
          });
          setShow(false);

        } catch (error) {
          console.log(error);
        }
        break;
      }
      case "Add Post": {
        try {
          const imageUrl = await upladImage(file);
          await api.post("/post/add", {
            title,
            content,
            image: imageUrl,
            user: id,
          });
          setShow(false);
        } catch (error) {
          console.log(error);
        }
        break;
      }
      case "Update Post": {
        updatePost(onePost._id, { title, content }).then(() => {
          handleClose();
        });
        break;
      }
      case "Are you sure to delete this Post": {
        deletePost(postId);
        break;
      }
      default:
        break;
    }
  };
  return (
    <>
      {buttonColor && (
        <Button variant={buttonColor} onClick={handleShow}>
          <i className={icon}></i>
          {name}
        </Button>
      )}

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
                <Modal.Title>{modalContent}</Modal.Title>

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
            {buttonSubmit && (
              <>
                <Button variant="primary" type="submit">
                  {buttonSubmit}
                </Button>
              </>
            )}
            {buttonDanger && (
              <>
                <Button variant="danger" type="submit">
                  {buttonDanger}
                </Button>
              </>
            )}
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default Modale;
