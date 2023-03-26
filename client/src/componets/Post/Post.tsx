import { usePost } from "../../Context/PostContext";
import "./Post.css";

const Post = () => {
  const { posts ,deletePost} = usePost();

  const handleDeletePost = (postId:number) => {
    deletePost(postId);
  };
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
         <button onClick={() => handleDeletePost(post._id)}>delete</button> 
         <button >update</button> 

        </div>
      ))}
    </div>
  );
};

export default Post;
