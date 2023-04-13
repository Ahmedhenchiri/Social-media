import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/Api";
import {
  Post,
  PostContextType,
  ChildrenType,
  postDataType,
  formType,
} from "../types/types";

const PostContext = createContext<PostContextType>({
  posts: [],
  onePost: [],
  getAllPosts: async () => {},
  getOne: async () => {},
  deletePost: async () => {},
  updatePost: async () => {},
  upladImage: async () => {},
  addPost: async () => {},
});

const PostProvider = ({ children }: ChildrenType) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [onePost, setOnePost] = useState<any>([]);

  const getAllPosts = async () => {
    try {
      const response = await api.get("/post/");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getOne = async (postId: number) => {
    try {
      const response = await api.get(`/post/getOne/${postId}`);
      setOnePost(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = async (postId: number) => {
    console.log("🚀 ~ file: PostContext.tsx:43 ~ deletePost ~ postId:", postId)
    try {
      const result = await api.delete(`/post/deletePost/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId));
      console.log("🚀 ~ file: PostContext.tsx:47 ~ deletePost ~ result:", result)
    } catch (error) {
      console.log(error);
    }
  };
  const updatePost = async (postId: number, postData: postDataType) => {
    try {
      await api.put(`/post/update/${postId}`, postData);
      setPosts(
        posts.map((post) =>
          post._id === postId ? { ...post, ...postData } : post
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
  const upladImage = async (file: File) => {
    const forms = new FormData();
    forms.append("file", file);
    forms.append("upload_preset", "ahmedhen");
    const response = await api.post(
      "https://api.cloudinary.com/v1_1/dxpnslfmc/image/upload",
      forms
    );
    return response.data.secure_url;
  };
  const addPost = async ({title,content,image,user}: formType) => {

    try {
      await api.post("/post/add", {title,content,image,user});
    
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts(), getOne(onePost._id);
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        getAllPosts,
        deletePost,
        getOne,
        onePost,
        updatePost,
        upladImage,
        addPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => useContext(PostContext);

export { PostProvider, usePost };
