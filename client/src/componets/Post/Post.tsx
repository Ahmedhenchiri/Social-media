import { usePost } from "../../Context/PostContext";
import Buttons from "../custom/buttons/Buttons";
import "./Post.css";
import Modale from "../custom/Modal/Modal";

const Post = () => {
  const { posts } = usePost();

  // const data = posts[0].user
  // console.log("🚀 ~ file: Post.tsx:10 ~ Post ~ data:", data)
  return (
    <div>
      {posts.map((post) => (
        <div className="post-list-item" key={post._id}>
          <div className="post-list-item-lede">
            <img src={post.user.image} alt="no image"  style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
          <div className="post-list-item-title" style={{marginTop:"-8%",marginLeft:"10%"}}>{post.user.name}</div>

          </div>
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
            modalContent="Are you sure to delete this Post ?
            this process cannot be undone"
            buttonDanger="Delete "
            buttonColor="primary"

          />
          <Modale
            name="Update"
            Name="Update Post"
            postId={post._id}
            Title="Title"
            image="image"
            Content="content"
            buttonSubmit="Save Change"
            buttonColor="primary"

          />
        </div>
      ))}
    </div>
  );
};

export default Post;
