import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserManagement from "./pages/UserManagement";
import "./styles.css";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <Router
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
  >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
