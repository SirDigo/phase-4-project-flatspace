import React from "react";
import { Link } from "react-router-dom";

function Header( {state} ) {
  return (
    <div style={{backgroundColor: "#CFDECF"}}>
      <div className="container">
        <div className="row">
          <h2 className="six columns u-pull-left" style={{color: "#3A553A"}}>Flatspace</h2>
          <br></br>
          <h5 className="two columns"><Link to="/about">About</Link></h5>
          <h5 className="two columns"><Link to="/login">Login</Link></h5>
          <h5 className="two columns"><Link to="/signup">SignUp</Link></h5>
        </div>
      </div>
    </div>
  );
}

export default Header;