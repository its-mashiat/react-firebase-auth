import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="page-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Don&apos;t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;