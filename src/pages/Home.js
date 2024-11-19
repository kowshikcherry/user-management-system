import React from "react";
import { Link } from "react-router-dom";
import './Home.css'


const Home = () => (
  <div>
    <h1>Welcome to the User Management Dashboard</h1>
    <Link className="nav-link" to="/users">Manage Users</Link>
  </div>
);

export default Home;
