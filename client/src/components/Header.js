import React from "react";
import { Link } from "react-router-dom";

function Header( {isAuthenticated, user, setIsAuthenticated, setUser} ) {
  // const navigate = useNavigate();
  // console.log(user.id);

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setIsAuthenticated(false);
        setUser(null);
        // navigate("/")
    })
  }

 // debugger

    return (
      <div style={{backgroundColor: "#510D0A"}}>
        <div className="container">
          <div className="row">
            <h2 className="six columns u-pull-left" style={{color: "#19282F"}}><a href="/" style={{textDecoration: "none"}}>flatspace</a></h2>
            <br></br>
            {
            (isAuthenticated && user)? (
            <>
              <h5 className="two columns"><Link to="/about">about</Link></h5>
              <h5 className="two columns"><a href={`/${user.id}`}>profile</a></h5>
              <h5 className="two columns"><Link to="/" onClick={logout}>logout</Link></h5>
              {/* <h5 className="two columns"><Link to="/addpost">post</Link></h5> */}
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