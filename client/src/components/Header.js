import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header( {isAuthenticated, user, setIsAuthenticated, setUser} ) {
  const navigate = useNavigate();
  // console.log(user);

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
      <div style={{backgroundColor: "#87AB88"}}>
        <div className="container">
          <div className="row">
            <h1 className="six columns u-pull-left"><a href="/" style={{color: "#3A553A"}}>Flatspace</a></h1>
            {isAuthenticated === true ? (
            <>
              <h1 className="two columns"><Link to="/about" style={{color: "#3A553A"}}>about</Link></h1>
              {/* <h1 className="two columns"><a href={`/${user.id}`} style={{color: "#3A553A"}}>profile</a></h1> */}
              <h1 className="two columns"><Link to="/" onClick={logout} style={{color: "#3A553A"}}>logout</Link></h1>
              {/* <h1 className="two columns"><Link to="/addpost">post</Link></h1> */}
            </>
            ) : (
            <>
              <h1 className="two columns"><Link to="/about" style={{color: "#3A553A"}}>about</Link></h1>
              <h1 className="two columns"><Link to="/login" style={{color: "#3A553A"}}>login</Link></h1>
              <h1 className="two columns"><Link to="/signup" style={{color: "#3A553A"}}>sign up</Link></h1>
            </>
            )
            }
          </div>
        </div>
      </div>
    )
}

export default Header;