import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    registerUser(email, password)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="page-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="auth-form">
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
            placeholder="Minimum 6 characters"
            required
          />
        </div>

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;