import React from "react";

function Login() {
  return (
    <div className="login-container">
      <img
        className="background-image"
        src="https://images.unsplash.com/photo-1625225233840-695456021cde?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Budget"
      />

      <div className="green-container">
        <h1>DDJ Budget Hub</h1>
        <p>Create an account</p>
        <p className="small-text">Let's get started</p>

        <form className="form-container">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="button" className="sign-up-button">
            Sign Up
          </button>

          <button type="button" className="continue-button">
            Continue with Email
          </button>
        </form>

        <p className="small-text">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
