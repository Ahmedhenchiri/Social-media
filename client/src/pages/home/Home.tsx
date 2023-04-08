import CostomModal from '../../componets/custom/Modal/CustomModal';
import Modal from '../../componets/custom/Modal/Modal'
import Modaltwo from '../../componets/custom/Modal/Modaltwo';
import Post from '../../componets/Post/Post';



const  Home = () => {
  return (
      <> 
      {/* <Modal /> */}
      <Modaltwo name='Add Post' Name='Add Post' Title='Title'image='image'Content='Content'/>
      <Post />
      </>
  )
}

export default Home