import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


function Header() {
  return (
    <nav className="header">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/chat">Chat</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
