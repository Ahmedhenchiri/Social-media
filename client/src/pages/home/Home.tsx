import CostomModal from '../../componets/custom/Modal/CustomModal';
import Modal from '../../componets/custom/Modal/Modal'
import Post from '../../componets/Post/Post';



const  Home = () => {
  return (
      <> 
      <Modal />
      {/* <CostomModal name="Add Post" Name='Create Post' /> */}

      <Post />
      
      </>
  )
}

export default Home