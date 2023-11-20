import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/users.js";

const SignUp = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    income: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      navigate("/budget");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      );
    }
  };

  const { username, email, income, password, passwordConfirmation } = form;

  return (
    <div className="login-container">
      <img
        className="background-image"
        src="https://images.unsplash.com/photo-1625225233840-695456021cde?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  "
        alt="Budget"
      />

      <div className="green-container">
        <h1>𑁍DDJ Budget Hub</h1>

        <p>Create an account</p>
        <p className="small-text-login">Let's get started</p>
        <form className="form-container" onSubmit={onSignUp}>
          <div className="input-container">
            <label htmlFor="username"></label>
            <input
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter username"
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="email"></label>
            <input
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="income"></label>
            <input
              required
              type="text"
              name="income"
              placeholder="Enter Budget"
              value={income}
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="password"></label>
            <input
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="Password Confirmation"></label>
            <input
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>

          {renderError()}
        </form>
        <p className="small-text">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
