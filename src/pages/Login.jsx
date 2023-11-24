import { useState } from "react";
import { login } from "../services/users.js";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await login(form);
      setUser(user);
      navigate("/budget");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
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
          Sign In
        </button>
      );
    }
  };

  const { email, password } = form;

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
        <form className="form-container" onSubmit={onSignIn}>
          <div className="input-container">
            <label htmlFor="email"></label>
            <input
              required
              type="text"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>

          {renderError()}
        </form>
        <p className="small-text">
          Don't have an account? <a href="/">Sign Up!!</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
