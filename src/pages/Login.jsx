import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log("submitted");
    navigate("/budget");
  }

  return (
    <div className="login-container">
      <img
        className="background-image"
        src="https://images.unsplash.com/photo-1625225233840-695456021cde?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Budget"
      />

      <div className="green-container">
        <h1>𑁍DDJ Budget Hub</h1>

        <p className="small-text-login">Welcome</p>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email"></label>
            <input type="email" id="email" placeholder="Email" />
          </div>

          <div className="input-container">
            <label htmlFor="password"></label>
            <input type="password" id="password" placeholder="Password" />
          </div>

          <button type="submit" className="sign-up-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
