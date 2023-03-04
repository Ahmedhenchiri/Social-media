import { usePost } from "../../Context/PostContext";
import "./Post.css";

const Post = () => {
  const { posts } = usePost();

  return (
    <div>
      {posts.map((post) => (
        <div className="blog-list-item">
          <div className="blog-list-item-title">{post.title}</div>
          <div className="blog-list-item-byline">
            <span className="blog-list-item-byline-author">
              {" "}
              {post.content}{" "}
            </span>
          </div>
          <div className="blog-list-item-lede">
            <img src={post.image} alt="no image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
