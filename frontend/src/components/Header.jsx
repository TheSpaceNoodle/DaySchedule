import React from "react";
import {
  FaAccessibleIcon,
  FaRegUser,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

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
          {user ? (
            <li>
              <button onClick={onLogout}>
                <FaSignOutAlt />
                Sign Out
              </button>
            </li>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </header>
    </>
  );
}

export default Header;
