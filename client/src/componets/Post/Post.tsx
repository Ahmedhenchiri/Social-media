import React, { useEffect } from 'react'
import { usePost } from '../../Context/PostContext'

const Post = () => {
const {posts,getAllPosts} = usePost()
console.log("🚀 ~ file: Post.tsx:6 ~ Post ~ posts:", posts)
useEffect(()=>{
    getAllPosts()

},[])
  return (
    <div>
     {posts.map((post)=>(
    <div className="blog-list-item" >
    <div className="blog-list-item-title">{post.title}</div>
    <div className="blog-list-item-byline">
      <span className="blog-list-item-byline-author"> {post.content} </span>
   
    </div>
   
    <div className="blog-list-item-lede">
      <img src={post.image} alt="no content" />
     
    </div>
  </div>
  ))}
  </div>
  )
}

export default Post