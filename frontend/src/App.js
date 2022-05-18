import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
