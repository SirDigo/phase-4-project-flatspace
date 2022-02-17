import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

import "../skeleton.css"
import "../normalize.css"

function Home( { profiles } ) {

    const profileItems = profiles.map(user => {
        const path = `/${user.id}`
        return (
            <div key={user.id} >
              <ul key={user.id} className="button">
                  <Link key={user.id} to={path} className="profile-link">{user.username}</Link>
              </ul>
            </div>
        )
    })

    function splitArray(arr, num){
      const x = arr.filter((element, index) => {
        return index % 3 - num === 0;
      })
      return x
    }

    const profiles1 = splitArray(profileItems, 2)
    const profiles2 = splitArray(profileItems, 1)
    const profiles3 = splitArray(profileItems, 0)

    return (
      <div className="container">
        <div className="row">
          <div className="six columns">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="four columns">{profiles1}</div>
          <div className="four columns">{profiles2}</div>
          <div className="four columns">{profiles3}</div>
        </div>
      </div>
    );
}

export default Home;