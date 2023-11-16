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
        src=" https://virtusgroup.ca/wp-content/uploads/2022/01/AdobeStock_447466327-scaled.jpeg"
        alt="Budget"
      />

      <div className="green-container">
        <h1>𑁍DDJ Budget Hub </h1>

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
