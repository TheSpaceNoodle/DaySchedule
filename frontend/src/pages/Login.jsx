import React from "react";

function Login() {
  return (
    <>
      <form>
        <h2>Sign In</h2>
        <label>
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          <input type="password" name="password" placeholder="Password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

export default Login;
