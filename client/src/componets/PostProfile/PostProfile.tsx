import React from 'react'
import { usePost } from '../../Context/PostContext'
const PostProfile = () => {
    const {userPosts} = usePost()
    console.log("🚀 ~ file: PostProfile.tsx:5 ~ PostProfile ~ userPosts:", userPosts)
  return (
    <div>
    {userPosts.map((post)=>(
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
        
          </div>
          ))}
          </div>
  )
}

export default PostProfile