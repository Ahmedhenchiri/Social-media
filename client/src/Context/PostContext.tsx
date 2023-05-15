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
  userPosts:[],
  onePost: [],
  getAllPosts: async () => {},
  getOne: async () => {},
  deletePost: async () => {},
  updatePost: async () => {},
  upladImage: async () => {},
  addPost: async () => {},
  getAllPostOfUser: async()=>{}
});

const PostProvider = ({ children }: ChildrenType) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [onePost, setOnePost] = useState<any>([]);
  const [userPosts,setUserPosts] = useState<Post[]>([])


  const getAllPosts = async () => {
    try {
      const response = await api.get("/post/");
      const postsWithTimestamp = response.data.map((post: any) => {
        return {
          ...post,
          createdAt: new Date(post.createdAt)
        }
      });
      const sortedPosts = postsWithTimestamp.sort((a: Post, b: Post) => {
        return b.createdAt.getTime() - a.createdAt.getTime();
      });
    
      setPosts(sortedPosts);
      setLoading(false); 
    } catch (error) {
      console.log(error);
      setLoading(false); 
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
  const getAllPostOfUser=async(userID:number)=>{
    try{
     const response = await api.get(`/post/getAll/${userID}`)
     const postsWithTimestamp = response.data.map((post: any) => {
      return {
        ...post,
        createdAt: new Date(post.createdAt)
      }
    });
    const sortedPosts = postsWithTimestamp.sort((a: Post, b: Post) => {
      return b.createdAt.getTime() - a.createdAt.getTime();
    });
     setUserPosts(sortedPosts)
    }catch(error){
      console.log(error)
    }
  }
  const deletePost = async (postId: number) => {
    try {
       await api.delete(`/post/deletePost/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId));
      setUserPosts(userPosts.filter((post) => post._id !== postId));


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
      setUserPosts(
        userPosts.map((post) =>
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
      setLoading(true); 
    const response=  await api.post("/post/add", {title,content,image,user});
       setPosts([...posts, response.data]);
      setLoading(false); 

    
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts(), 
    getOne(onePost._id);
  }, []);

  return (
    <PostContext.Provider
      value={{
        userPosts,
        posts,
        getAllPosts,
        deletePost,
        getOne,
        onePost,
        updatePost,
        upladImage,
        addPost,
        getAllPostOfUser
      }}
    >
      {loading ? (
  <div className="loader">
    <style>
      {`
        .loader {
          border: 5px solid #f3f3f3; /* Light grey */
          border-top: 5px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        body {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
      `}
    </style>
  </div>
) : (
  children
)} 
    </PostContext.Provider>
  );
};

const usePost = () => useContext(PostContext);

export { PostProvider, usePost };
