import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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

    const profileItems = profile.posts.map(post => {
      const path = `/${id}/${post.id}`;
      return (
      <div key={post.id}>
        {/* <Post userId={id} postId={post.id}/> */}
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <Link to={path}>view</Link>
      </div>
      );
    });


  return (
    <div>
      <div className="profile-display">
        <h1>{profile.username}</h1>
        {profileItems}
      </div>
      {/* <div>
          {profile.posts.map(post => {
          // const path = `/${id}/${post.id}`
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p> */}
              {/* <Post userId={id} postId={post.id}/> */}
              {/* <Routes>
                <Route path="/:id/:postId" element={<Post userId={id} postId={post.id}/>}/>
              </Routes>
              <Link to={Post(id, post.id)}>view</Link>  */}
            {/* </div> */}
          {/* )
        })}
      </div> */}
    {/* <Post userId={profile.id}/> */}
    </div>
  );

}

export default Profile;