import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
    const [profile, setProfile] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

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

  return (
    <div className="profile-display">
        <h1>{profile.username}</h1>
        {profile.posts.map(post => {
          return (
            <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            </div>
          )
        })}
    </div>
  );
}

export default Profile;