import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => (
  <Router future={{
    v7_relativeSplatPath: true,
    v7_startTransition: true,
  }}
>
    <Navbar />
    <Routes>
      <Route path="/" element={null} />
      <Route path="/users" element={null} />
      <Route path="*" element={null} />
    </Routes>
  </Router>
);

export default App;
