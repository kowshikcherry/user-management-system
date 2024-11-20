import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navbar";

const Home = () => (
  <div>
    <Navbar />
    <h1>Welcome to the User Management Dashboard</h1>
    <div className="center-container">
      <Link className="nav-link-In-HomePage" to="/users">
        Manage Users
      </Link>
    </div>
  </div>
);

export default Home;
