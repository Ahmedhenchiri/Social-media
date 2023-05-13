import { usePost } from "../../Context/PostContext";
import Buttons from "../custom/buttons/Buttons";
import "./Post.css";
import Modale from "../custom/Modal/Modal";
import { useLocaleStorge } from "../../Context/LocalStorageContext";
import { useNavigate } from 'react-router-dom';

import { useState } from "react";
const Post = () => {

  const navigate = useNavigate();
  const { posts } = usePost();
  const {myData} = useLocaleStorge();
  const Data = JSON.parse(myData);
  const id = Data._id;
  const handleProfileClick = (userId?:number|undefined) => {
    navigate(`/profile`,{ state: { userId } });
  };
  return (
    <div>
      {posts.map((post) => (
        <div className="post-list-item" key={post._id}>
         
          <div className="post-list-item-lede">
            <img src={post.user.image} alt="no image"  style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            onClick={()=>handleProfileClick(post.user._id)}
            />
          <div className="post-list-item-title" style={{marginTop:"-8%",marginLeft:"10%"}}>{post.user.name}</div>
          <div className="post-list-item-timestamp">{new Date(post.createdAt).toLocaleString()}</div>
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
          {id === post.user._id && (
            <div style={{  border: "3px outset #00000069",marginLeft:"%50",display:"flex",justifyContent:"end" }}>
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
          )}
        </div>
      ))}
    </div>
  );
};

export default Post;
