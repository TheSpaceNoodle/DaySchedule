import React from "react";
import { FaAccessibleIcon, FaRegUser, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">
            Accessible
            <FaAccessibleIcon />
            Schedule
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/register">
              <FaRegUser />
              Registration
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FaSignInAlt />
              Login
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
