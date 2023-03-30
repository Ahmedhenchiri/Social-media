import CostomModal from '../../componets/custom/Modal/CustomModal';
import Modal from '../../componets/custom/Modal/Modal'
import Post from '../../componets/Post/Post';


const  Home = () => {
  return (
      <> 
      <Modal />
      <Post />
      <CostomModal name="update" Name="update"/>
      </>
  )
}

export default Home