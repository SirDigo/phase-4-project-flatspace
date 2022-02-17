import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Profile() {
    // const [posts, setPosts] = useState(null);
    const [profile, setProfile] = useState(null);

    const { id } = useParams();

    useEffect(() => {
      fetch(`/users/${id}`)
      .then((r) => r.json())
      .then(profile => setProfile(profile))
    })

    // let params = useParams();

  return (
    <div className="profile">
        {/* <div className="posts">{params.profileId}</div> */}
        <h2>{profile.username}</h2>
        <p>{profile.post[0]}</p>
    </div>
  );
}

export default Profile;