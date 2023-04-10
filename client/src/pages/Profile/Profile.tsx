import { useEffect, useState } from "react";
import api from "../../api/Api";
import Modale from "../../componets/custom/Modal/Modal";
import { useLocaleStorge } from "../../Context/LocalStorageContext";
import "./Profile.css";

const Profile = () => {
  const { myData } = useLocaleStorge();
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
  }, []);
  const getOneUser = async () => {
    try {
      const response = await api.get(`/user/getOne/${id}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
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
              backgroundColor: "blue",
              border: "3px solid black",
              borderRadius: "15px",
            }}
          >
            {/* <div style={{marginLeft:"13%",marginTop:"-10%",position: "relative" }}> */}
            <Modale
              name=" Change your Cover Photo"
              Name="Change your Cover Photo"
              image="image "
              buttonSubmit="Change your Cover Photo"
              icon="fa-solid fa-camera"
              // buttonColor="secondary"
          buttonColor=" bg-light"
             
            />
            {/* </div> */}
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
        <div style={{marginLeft:"13%",marginTop:"-3%",position: "relative" }}>
          <Modale
            Name="Change your Photo"
            image="image "
            buttonSubmit="Change Photo Profile "
            icon="fa-solid fa-camera"
            buttonColor=" bg-light"
             />
             </div>
       
      </div>
    </div>
  );
};

export default Profile;
