import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1>User Management</h1>
    <div>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/users" className="nav-link">
        Manage Users
      </Link>
    </div>
  </nav>
);

export default Navbar;
