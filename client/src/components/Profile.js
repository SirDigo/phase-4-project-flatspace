import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defualtAvatar from '../assets/images.png'

function Profile( {user} ) {
    const [profile, setProfile] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    console.log(user)

    const { id } = useParams();

    useEffect(() => {
      fetch(`/users/${id}`)
      .then((r) => r.json())
      .then(profile => {
      setProfile(profile);
      setIsLoaded(true)
      })
    }, [id])

    if (!isLoaded) return <h2>Loading...</h2>;

    const profileItems = profile.posts.map(post => {
      const path = `/${id}/${post.id}`;
      return (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.content.slice(0, 25)}...</p>
        <a href={path} className="button button-first ">view</a>
      </div>
      );
    });

    // if (user === true) {
      return (
        <div className="container" style={{color: "#87AB88"}}>
          <div className="row">
            <div className="six columns">
              <h1>{profile.username}</h1>
              <img src={defualtAvatar} alt="Defualt avatar"></img>
              {
                profile.bio ?
                <p>{profile.bio}</p> :
                <p>404 Bio not found.</p>
              }
            </div>
            <div className="six columns">
              <h1>Posts:</h1>
              {profileItems}
            </div>
          </div>
        </div>
      );    
    // } else {
    //   return (
    //   <div>
    //     there is nothing here
    //   </div>
    //   )
    // }
}

export default Profile;