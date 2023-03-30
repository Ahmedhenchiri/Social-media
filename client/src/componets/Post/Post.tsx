import { usePost } from "../../Context/PostContext";
import Buttons from "../custom/buttons/Buttons";
import "./Post.css";
import CostomModal from "../custom/Modal/CustomModal";
const Post = () => {
  const { posts ,deletePost} = usePost();
  
  return (
    <div>
      {posts.map((post) => (
        <div className="post-list-item" key={post._id} >

          <div className="post-list-item-title">{post.title}</div>
          <div className="post-list-item-byline">
            <span className="post-list-item-byline-author">
              {" "}
              {post.content}{" "}
            </span>
          </div>
          <div className="post-list-item-lede">
            <img src={post.image} alt="no image" />
          </div>
         <Buttons   name="Delete" onClick={() => deletePost(post._id)} />
         <CostomModal name="Update"  />
       {/* <Buttons   name="Update"   />
          <Link  to="/modal/"> UPDATE</Link> */}
        </div>
      ))}
    </div>
  );
};

export default Post;
