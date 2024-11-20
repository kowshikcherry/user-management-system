import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="notfound-container">
      <img
        className="notfound-image"
        src="https://img.freepik.com/premium-vector/error-404-concept-design-landing-page_108061-65.jpg?w=740"
        alt="404 Not Found"
      />
      <h1 className="notfound-message">
        Oops! The page you're looking for doesn't exist.
      </h1>
      <Link className="notfound-link" to="/">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Dashboard;
