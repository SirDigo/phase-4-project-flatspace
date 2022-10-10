import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AddPostForm from "./AddPostForm";
import DeletePost from "./DeletePost";

function Profile( {user} ) {
    const { id } = useParams();
    const [profile, setProfile] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      fetch(`/users/${id}`)
      .then((r) => r.json())
      .then(profile => {
        setProfile(profile);
        setIsLoaded(true)
        console.log(profile)
      })
    }, [id])

    if(!user) return <div>user is null</div>;
    if (!isLoaded) return <h2>Loading...</h2>;
    // console.log(typeof id);
    // console.log(typeof user.id)



    const po = () => {
      if (profile.posts.length > 0) {
      return profile.posts.map(post => {
        const path = `/posts/${post.id}`;
        const del = () => {
          if (id === user.id.toString()) {
            return (
              <DeletePost user={user} post={post} />
            )
          }
        }
        return (
        <div className="profile-post" style={{color: "#FFFFFF"}} key={post.id}>
          <h3 className="profile-post">{post.title}</h3>
          {post.image?<img className="profile-post" src={post.image} alt="picz" />:null}
          <p className="profile-post">{post.content}</p>
          <a className="profile-post" style={{color: "#FFFFFF", textDecoration: "under"}} href={path}><p className="prof-link" style={{color: "#FFFFFF", textDecoration: "under"}} >view</p></a>
          {del(post)}
        </div>
        );
      });
      } else {
        return (<div style={{color: "#FFFFFF"}}>no posts yet!</div>)
      }
    };

    const header = () => {
      if (id === user.id.toString()) {
        return (
          <h2 className="profile-name" style={{color: "#FFFFFF"}}>{user.username}</h2>
        )
      }
      else {
        return (
          <h2 className="profile-name" style={{color: "#FFFFFF"}}>{profile.username}</h2>
        )
      }
    }

    const priv = () => {
      if (id === user.id.toString()) {
        return (
        <Link to="/addpost" style={{color: "#FFFFFF", textDecoration: "underline", marginLeft: "1em", fontSize: "25px"}} element={<AddPostForm  user={user} />}>add post</Link>
        )
      }
    }

    return (
      <div>
        {header()}
        {po()}
        {priv()}
      </div>
    )
}

export default Profile;