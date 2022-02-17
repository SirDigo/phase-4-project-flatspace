import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header( {isAuthenticated, profile, setIsAuthenticated, setUser} ) {
  const navigate = useNavigate();
  console.log(isAuthenticated);

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setIsAuthenticated(false);
        setUser(null);
        navigate("/")
    })}

    return (
      <div style={{backgroundColor: "#CFDECF"}}>
        <div className="container">
          <div className="row">
            <h2 className="six columns u-pull-left" style={{color: "#3A553A"}}><a href="/">Flatspace</a></h2>
            <br></br>
            {isAuthenticated ? (
            <>
              <h5 className="two columns"><Link to="/about">about</Link></h5>
              <h5 className="two columns"><a href={`/${profile.id}`}>profile</a></h5>
              <h5 className="two columns"><Link to="/" onClick={logout}>logout</Link></h5>
              <h5 className="two columns"><Link to="/addpost">post</Link></h5>
            </>
            ) : (
            <>
              <h5 className="two columns"><Link to="/about">about</Link></h5>
              <h5 className="two columns"><Link to="/login">login</Link></h5>
              <h5 className="two columns"><Link to="/signup">sign up</Link></h5>
            </>
            )
            }
          </div>
        </div>
      </div>
    )
}

export default Header;