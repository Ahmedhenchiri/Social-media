import Modale from "../../componets/custom/Modal/Modal";
import Post from "../../componets/Post/Post";

const Home = () => {
  return (
    <>
  
      <Modale
        name="Add Post"
        Name="Add Post"
        Title="Title"
        image="image"
        Content="Content"
        buttonSubmit="Add Post "
        buttonColor="primary"
      />
      <Post />
      </>
  );
};

export default Home;
