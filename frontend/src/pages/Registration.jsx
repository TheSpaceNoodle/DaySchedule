import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { register, reset } from "../features/auth/authSlice";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Password do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <h2>Create Account</h2>
        <label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={onChange}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={onChange}
          />
        </label>
        <label>
          <input
            type="password"
            name="password2"
            value={password2}
            placeholder="Confirm password"
            onChange={onChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Registration;
