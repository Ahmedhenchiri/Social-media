import { useEffect, useState } from "react";
import api from "../../api/Api";
import Modaltwo from "../../componets/custom/Modal/Modaltwo";
import { useLocaleStorge } from "../../Context/LocalStorageContext";
import { usePost } from "../../Context/PostContext";
import "./Profile.css";
const Profile = () => {
  const { myData } = useLocaleStorge();
  const {upladImage} = usePost()
  const [data, setData] = useState({ name: "", image: "", email: "" });
  const  [file,setFile] = useState("")
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
  const handleImageChange=(event: React.ChangeEvent<HTMLInputElement>) =>{
    const file = event.target.files?.[0];
    if (file) {
      // setFile(file);
    }
    
  }
  
 

  return (
    <div className="profile">
      <div className="image">
        <svg viewBox="0 0 100 100" width="200" height="200">
          <circle cx="50" cy="50" r="50" />
          <clipPath id="circle-mask">
            <circle cx="50" cy="50" r="50" />
          </clipPath>
          <image
            className="pro"
            xlinkHref={data.image}
            width="100"
            height="100"
            clipPath="url(#circle-mask)"
          />
         
        </svg>
        <input  
               type="file"   
                placeholder="What is your image "
                name="image"
                // value={image}
                onChange={handleImageChange} />
                <Modaltwo name='change your photo' Name="Change your Photo" image="image "/>
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
      </div>
    </div>
  );
};

export default Profile;
