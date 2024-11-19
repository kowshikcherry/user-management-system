import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserManagement from "./pages/UserManagement";

const App = () => (
  <Router
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
  >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="*" element={<null />} />
    </Routes>
  </Router>
);

export default App;
