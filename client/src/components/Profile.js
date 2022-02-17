import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Profile() {
    const [profile, setProfile] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        fetch(`/users`)
        .then((r) => r.json())
        .then(data => console.log(data))
    }, [id])

    // const postItems = profile.posts.map((post) => {console.log(post)
        // return (
        //     <card className="post-container">
        //         <h2>{post.title}</h2>
        //         <p>{post.content}</p>
        //     </card>
        // )
    // })

  return (
    <div className="profile">
        <div className="posts">
            {/* {postItems} */}
        </div>
    </div>
  );
}

export default Profile;