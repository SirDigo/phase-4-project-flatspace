import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <h1 id="main-header">flatspace</h1>
        <div id="header-links">
            <span><Link to="/about">about</Link></span>
            <span><Link to="/login">login</Link></span>
            <span><Link to="/signup">sign up</Link></span>
        </div>
    </header>
  );
}

export default Header;