import { useLocaleStorge } from '../../Context/LocalStorageContext'
import { usePost } from '../../Context/PostContext'
import Modale from '../custom/Modal/Modal'
import "./PostProfile.css"

const PostProfile = () => {
    const {userPosts} = usePost()
    const {myData} = useLocaleStorge();
    const Data = JSON.parse(myData);
    const id = Data._id;
  return (
    <div>
    {userPosts.map((post)=>(
    <div className="post-list-item" key={post._id}>
          <div className="post-list-item-lede">
            <img src={post.user.image} alt="no image"  style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
          <div className="post-list-item-title" style={{marginTop:"-8%",marginLeft:"10%"}}>{post.user.name}</div>
          <div className="post-list-item-timestamp" style={{marginTop:"-2%",marginLeft:"10%"}}>{new Date(post.createdAt).toLocaleString()}</div>

          </div>
          <div className="post-list-item-title">{post.title}</div>
          <div className="post-list-item-byline">
            <span className="post-list-item-byline-author">
              {" "}
              {post.content}{" "}
            </span>
          </div>
          <div className="post-list-item-lede">
            <img src={post.image} alt="no image" width="800"
            height="600"/>
          </div>
          {id === post.user._id &&(
         <div style={{  border: "3px outset #00000069",marginLeft:"%50",display:"flex",justifyContent:"end" }}>
         
          <Modale
            name="Delete"
            Name="Are you sure to delete this Post"
            postId={post._id}
            modalContent="Are you sure to delete this Post ?
            this process cannot be undone"
            buttonDanger="Delete "
            buttonColor="primary"

          />
          <Modale
            name="Update"
            Name="Update Post"
            postId={post._id}
            Title="Title"
            image="image"
            Content="content"
            buttonSubmit="Save Change"
            buttonColor="primary"
          />
         </div>
          )}
          </div>
          ))}
          </div>
  )
}

export default PostProfile