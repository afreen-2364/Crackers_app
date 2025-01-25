import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <h1>Skill Swap</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/chat">Chat</Link>
      </div>
    </nav>
  );
}

export default Header;
