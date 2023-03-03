import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../api/Api";

type Post = {
  id: number;
  title: string;
  content: string;
  image:string;
};

type PostContextType = {
  posts: Post[];
  getAllPosts: () => Promise<void>;
};
type PostProviderProps = {
    children: React.ReactNode;
  };

const PostContext = createContext<PostContextType>({
  posts: [],
  getAllPosts: async () => {},
});

const PostProvider = ({ children }:PostProviderProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getAllPosts = async () => {
    try {
      const response = await api.get("/post/");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, getAllPosts }}>
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => useContext(PostContext);

export { PostProvider, usePost };
