import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Home( {profiles} ) {

    const profileItems = profiles.map(user => {
        const path = `/${user.id}`
        return (
            <div key={user.id} className="profile-cards">
            <ul key={user.id} className="profile-card">
                <Link key={user.id} to={path} className="profile-link">{user.username}</Link>
            </ul>
            </div>
        )
    })

  return (
    <div className="homepage">
    <Header />
    {profileItems}
    </div>
  );
}

export default Home;