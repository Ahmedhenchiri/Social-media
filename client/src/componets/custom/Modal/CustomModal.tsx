import {useEffect, useState} from "react"
import { Button, Form, Modal } from "react-bootstrap";
import api from "../../../api/Api";
import { usePost } from "../../../Context/PostContext";
import { CostomModalType, Post } from "../../../types/types";

const CostomModal = ({name,Name,postId}:CostomModalType) =>{
  const {getOne,onePost,updatePost,upladImage} = usePost();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("")
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState("")

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
  const handleTitleChange = (e:any) => {
    setTitle(e.target.value);
  };

  // Update the state variable 'image' when the input value changes
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };
  // const handleImageChange=(event: React.ChangeEvent<HTMLInputElement>) =>{
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setFile(file);
  //   }
  // }

  // Update the state variable 'content' when the input value changes
  const handleContentChange = (e:any) => {
    setContent(e.target.value);
  };
  useEffect(() => {
    if (onePost) {
      setTitle(onePost?.title);
      setImage(onePost?.image);
      setContent(onePost?.content);
    }
  }, [onePost]);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updatePost( onePost._id, { title, content }).then(()=>{
      handleClose()
    })
  };
  // const addPost = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   try {
  //     const imageUrl = await upladImage(image)
  //     await api.post("/post/add", {...form,image:imageUrl,user:userId});
  //     setShow(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return(
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
          <Form >
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
              type="text"
              placeholder="What is your title"
              value={title}
              onChange={handleTitleChange}
              />
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="What is your image "
                name="image"
                // value={image}
                onChange={handleImageChange}
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
                value={content}
                onChange={handleContentChange}
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
  )
}
export default CostomModal