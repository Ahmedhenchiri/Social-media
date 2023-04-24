import { useEffect, useState } from "react";
import api from "../../api/Api";
import Modale from "../../componets/custom/Modal/Modal";
import PostProfile from "../../componets/PostProfile/PostProfile";
import { useLocaleStorge } from "../../Context/LocalStorageContext";
import { usePost } from "../../Context/PostContext";
import "./Profile.css";
import { useLocation } from 'react-router-dom';
const Profile = () => {
  const location = useLocation();
  const { userId = null } = location.state || {};
  console.log("🚀 ~ file: Profile.tsx:12 ~ Profile ~ userId:", userId)

  const { myData } = useLocaleStorge();
  const { getAllPostOfUser } = usePost();
  const [data, setData] = useState({
    name: "",
    image: "",
    email: "",
    coverPhoto: "",
  });

  const Data = JSON.parse(myData);
  const id = Data._id;

  useEffect(() => {
    getOneUser();
    if(userId === null ){
    getAllPostOfUser(id);}
    else  getAllPostOfUser( userId)
  }, []);
  const getOneUser = async () => {
    if(userId === null){
    try {
      const response = await api.get(`/user/getOne/${id}`);
      setData(response.data);
      console.log("🚀 ~ file: Profile.tsx:33 ~ getOneUser ~ response:", response)
    } catch (error) {
      console.log(error);
    }
  }else {
    try {
      const response = await api.get(`/user/getOne/${userId}`);
      setData(response.data);
      console.log("🚀 ~ file: Profile.tsx:33 ~ getOneUser ~ response:", response)
    } catch (error) {
      console.log(error);
    }
  }
  };

  return (
    <div className="profile">
      <div className="image">
        <div>
          <div
            style={{
              width: "1000px",
              height: "370px",
              backgroundImage: `url(${data.coverPhoto})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "3px solid black",
              borderRadius: "15px",
            }}
          >
            {id === userId  &&(
            <Modale
              name=" Change your Cover Photo"
              Name="Change your Cover Photo"
              image="image "
              buttonSubmit="Change your Cover Photo"
              icon="fa-solid fa-camera"
              buttonColor=" bg-light"
            />
            )}
          </div>

          <div style={{ position: "relative", top: "-50px", left: "20px" }}>
            <img
              src={data.image}
              alt="Profile Picture"
              style={{ width: "180px", height: "180px", borderRadius: "50%" }}
            />

            <h1 style={{ marginTop: "-10%", marginLeft: "19%" }}>
              {data.name}
            </h1>
          </div>
        </div>
        <div
          style={{ marginLeft: "13%", marginTop: "-3%", position: "relative" }}
        >
           {id === userId  &&(
          <Modale
            Name="Change your Photo"
            image="image "
            buttonSubmit="Change Photo Profile "
            icon="fa-solid fa-camera"
            buttonColor=" bg-light"
          /> 
          )}
        </div>
      </div>
      <div
        style={{
          border: "3px outset #00000069",
          marginTop: "5%",
          marginRight: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
    {id === userId  &&(
        <Modale
          name="Add Post"
          Name="Add Post"
          Title="Title"
          image="image"
          Content="Content"
          buttonSubmit="Add Post "
          buttonColor="primary"
        />
        )}
      </div>
      <div className="PostProfile">
        <PostProfile />
      </div>
    </div>
  );
};

export default Profile;
