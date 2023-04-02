import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/Api";
import { Post, PostContextType, ChildrenType,postDataType } from "../types/types";

const PostContext = createContext<PostContextType>({
  posts: [],
  onePost:[],
  getAllPosts: async () => {},
  getOne: async ()=>{},
  deletePost:async()=>{},
  updatePost:async()=>{}
});

const PostProvider = ({ children }: ChildrenType) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [onePost,setOnePost]= useState<any>([])

  
  const getAllPosts = async () => {
    try {
      const response = await api.get("/post/");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getOne = async(postId:number)=>{
    try{
     const response = await api.get(`/post/getOne/${postId}`)
     setOnePost(response.data)
    }catch(error){
      console.log(error)
    }
  }
  const deletePost = async (postId:number )=>{
     try{
     await api.delete(`/post/deletePost/${postId}`)
     setPosts(posts.filter((post)=>post._id !== postId))
     }catch(error){
      console.log(error)
     }
  }
  const updatePost = async(postId:number,postData:postDataType) =>{
    try{
      await api.put(`/post/update/${postId}`,postData)
      setPosts(posts.map(post => post._id === postId ? {...post, ...postData} : post));
    }catch(error){
      console.log(error)
    }
  }


  useEffect(() => {
    getAllPosts(),
    getOne(onePost._id)
  }, []);

  return (
    <PostContext.Provider value={{ posts, getAllPosts ,deletePost,getOne,onePost,updatePost}}>
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => useContext(PostContext);

export { PostProvider, usePost };
