import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <h1 className="main-header">flatspace</h1>
        <ul className="header-links">
            <li className="header-link"><Link to="/about">about</Link></li>
            <li className="header-link"><Link to="/login">login</Link></li>
            <li className="header-link"><Link to="/signup">sign up</Link></li>
            <li className="header-link"><Link to="/addpost">add post</Link></li>
        </ul>
    </header>
  );
}

export default Header;