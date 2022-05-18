import React from "react";

function Registration() {
  return (
    <>
      <form>
        <h2>Create Account</h2>
        <label>
          <input type="text" name="name" placeholder="Enter your name" />
        </label>
        <label>
          <input type="email" name="email" placeholder="Enter email" />
        </label>
        <label>
          <input type="password" name="password" placeholder="Enter password" />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Confirm password"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Registration;
