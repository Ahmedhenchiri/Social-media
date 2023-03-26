import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/Api";
import { Post, PostContextType, ChildrenType } from "../types/types";

const PostContext = createContext<PostContextType>({
  posts: [],
  getAllPosts: async () => {},
  deletePost:async()=>{}
});

const PostProvider = ({ children }: ChildrenType) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getAllPosts = async () => {
    try {
      const response = await api.get("/post/");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = async (postId:number )=>{
     try{
     await api.delete(`/post/deletePost/${postId}`)
     setPosts(posts.filter((post)=>post._id !== postId))
     }catch(error){
      console.log(error)
     }
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, getAllPosts ,deletePost}}>
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => useContext(PostContext);

export { PostProvider, usePost };
