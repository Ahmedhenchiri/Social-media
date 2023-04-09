import { usePost } from "../../Context/PostContext";
import Buttons from "../custom/buttons/Buttons";
import "./Post.css";
import Modale from "../custom/Modal/Modal";

const Post = () => {
  const { posts } = usePost();

  return (
    <div>
      {posts.map((post) => (
        <div className="post-list-item" key={post._id}>
          <div className="post-list-item-title">{post.title}</div>
          <div className="post-list-item-byline">
            <span className="post-list-item-byline-author">
              {" "}
              {post.content}{" "}
            </span>
          </div>
          <div className="post-list-item-lede">
            <img src={post.image} alt="no image" width="800"
            height="600"/>
          </div>
          <Modale
            name="Delete"
            Name="Are you sure to delete this Post"
            postId={post._id}
            modalContent="Are you sure ?"
            buttonDanger="Delete "
          />
          <Modale
            name="Update"
            Name="Update Post"
            postId={post._id}
            Title="Title"
            image="image"
            Content="content"
            buttonSubmit="Save Change"
          />
        </div>
      ))}
    </div>
  );
};

export default Post;
