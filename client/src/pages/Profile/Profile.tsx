import { useEffect, useState } from "react";
import api from "../../api/Api";
import Modale from "../../componets/custom/Modal/Modal";
import { useLocaleStorge } from "../../Context/LocalStorageContext";
import { usePost } from "../../Context/PostContext";
import "./Profile.css";
const Profile = () => {
  const { myData } = useLocaleStorge();
  const { upladImage } = usePost();
  const [data, setData] = useState({
    name: "",
    image: "",
    email: "",
    coverPhoto: "",
  });

  const [file, setFile] = useState("");
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
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // setFile(file);
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
            <Modale
              name="change your photo"
              Name="Change your Cover Photo"
              image="image "
              buttonSubmit="Change your Cover Photo"
            />
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

            {/* <h1>{data.email}</h1> */}
          </div>
        </div>

        {/* <img src={data.coverPhoto} alt="no image" width="500"
            height="500"/> */}
        <Modale
          name="change your photo"
          Name="Change your Photo"
          image="image "
          buttonSubmit="Change Photo Profile "
        />
      </div>
    </div>
  );
};

export default Profile;
