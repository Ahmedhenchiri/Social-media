import { usePost } from "../../Context/PostContext";
import Buttons from "../custom/buttons/Buttons";
import "./Post.css";
import CostomModal from "../custom/Modal/CustomModal";
import { useEffect } from "react";
const Post = () => {
  const { posts ,deletePost,getOne} = usePost();
   

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
         <CostomModal name="Update" postId={post._id} Name="Update Post" />
     
        </div>
      ))}
    </div>
  );
};

export default Post;
