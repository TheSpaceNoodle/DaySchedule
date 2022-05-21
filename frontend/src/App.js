import React, { useState } from "react";
import { FaRegStickyNote } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddActivity from "./components/AddActivity";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Router>
        <Header>
          <li>
            <button onClick={openModal}>
              <FaRegStickyNote />
              Add Activity
            </button>
          </li>
        </Header>
        <div className="container">
          <AddActivity showModal={showModal} setShowModal={setShowModal} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
