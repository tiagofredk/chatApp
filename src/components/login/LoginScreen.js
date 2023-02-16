import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import { Context } from "../../context/ContextProvider";

export default function LoginScreen({ history }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const { user, setUser, token, setToken } = React.useContext(Context);
  const navigate = useNavigate()

  // React.useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     // history.push("/chat");
  //     navigate("/chat");
  //   }
  // }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    const config = {
      withCredentials: true,
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const data = await axios.post(
        "/api/login",
        { email, password },
        config
      );
      setToken(data.data.session.token);
      // localStorage.setItem("authToken", data.token);
      // history.push("/");
      if (data.data.session.authenticated) {
        navigate("/chat");
      }else{
        setError("Something wehnt wrong try again");
      }
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-screen">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title">Login</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:{" "}
            <Link to="/forgotpassword" className="login-screen__forgotpassword">
              Forgot Password?
            </Link>
          </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <span className="login-screen__subtext">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};
