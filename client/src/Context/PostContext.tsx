import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/Api";
import { Post, PostContextType, ChildrenType } from "../types/types";

const PostContext = createContext<PostContextType>({
  posts: [],
  getAllPosts: async () => {},
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
