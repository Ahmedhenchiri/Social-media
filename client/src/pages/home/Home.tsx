import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import api from '../../api/Api';
import Modal from '../../componets/custom/Modal/Modal'

const  Home = () => {
 const [datas,setData] = useState<any>([]) 
 let data = ["abc", "cde"];
 const [comments, setComments] = useState(["c1", "c2"]);

 const onCommentButtonPressed = (event):any => {
   console.log("pressed");
   event.preventDefault();
 };
 const getAllData = async () => {
  try{
  const response = await api.get("/post/")  
  setData(response.data)
}catch(error){
  console.log(error)
}
 }
 useEffect(()=>{
  getAllData()
 },[])

  return (
      <div>
       <div
      style={{
        marginLeft: 50,
        alignContent: "center",
        alignItems: "center"
      }}
    >
      <h1>Facebook Post</h1>
      {data.map(post => {
        return (
          <div className="card home-card">
            <div>
              <span style={{ position: "absolute" }}>
                <i className="material-icons large">person</i>
              </span>
              <span
                style={{
                  position: "absolute",
                  color: "blue",
                  marginTop: "10px",
                  marginLeft: "100px"
                }}
              >
                Avator Person
              </span>
              <span
                style={{
                  position: "absolute",
                  color: "grey",
                  marginTop: "40px",
                  marginLeft: "100px"
                }}
              >
                12hrs <i className="material-icons tiny">public</i>
              </span>
            </div>
            <br />
            <div style={{ flex: 1, background: "", marginTop: "70px" }}>
              <span className="card-title">
                Enjoy Life! No matter what you have!!
              </span>
              <div className="card-image" style={{}}>
                <img
                  alt="Post"
                  src="https://images.unsplash.com/photo-1545155277-5d5075713c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
              </div>
              <div className="card-content">
                <p style={{ fontSize: "bold" }}>
                  This is the life. Enjoy every bit of it. #Sand #Enjoy #life
                </p>
              </div>
              <div style={{ background: "" }}>
                <div
                  style={{
                    background: "",
                    borderBottom: "1px solid #DADDD5",
                    borderBottomWidth: "thin",
                    margin: "0px 20px 10px 20px",
                    padding: "0px 0px 5px 0px"
                  }}
                >
                  <div
                    style={{
                      background: "",
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 20,
                      position: "absolute"
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "row"
                      }}
                    >
                      <i className="material-icons blue-text">thumb_up</i>
                      <i className="material-icons red-text">favorite</i>
                      <i className="material-icons blue-text">mood</i>
                    </span>
                  </div>
                  <div
                    style={{
                      background: "",
                      display: "flex",
                      flexDirection: "row-reverse",
                      marginRight: 20,
                      marginLeft: 20
                    }}
                  >
                    16 comments 6 shares
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: "",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "space-evenly"
                }}
              >
                <a href="#asd" onClick={e => onCommentButtonPressed(e)}>
                  <span style={{ position: "absolute" }}>
                    <i className="material-icons">thumb_up</i>
                  </span>
                  <span style={{ marginLeft: 30 }}>Like</span>
                </a>

                <a href="#asd" onClick={e => onCommentButtonPressed(e)}>
                  <span style={{ position: "absolute" }}>
                    <i className="material-icons">comment</i>
                  </span>
                  <span style={{ marginLeft: 30 }}>Comment</span>
                </a>

                <a href="#asd" onClick={e => onCommentButtonPressed(e)}>
                  <span style={{ position: "absolute" }}>
                    <i className="material-icons">comment</i>
                  </span>
                  <span style={{ marginLeft: 30 }}>Share</span>
                </a>
              </div>
              {comments.length > 0
                ? comments.map(c => {
                    return <div>{c}</div>;
                  })
                : ""}

              <form
                onSubmit={e => {
                  e.preventDefault();
                  // console.log(e.target[0].value);
                  const val = e?.target[0]?.value;
                  setComments(val);
                  console.log(comments);
                }}
              >
                <input type="text" placeholder="add a comment" />
              </form>
            </div>
          </div>
        );
      })}
    </div>
      <Modal />
      </div>
  )
}

export default Home