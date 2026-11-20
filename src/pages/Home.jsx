import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="page-container">
      <span className="hero-badge">React + Firebase Authentication</span>
      <h1>Welcome to AuthApp</h1>
      <p>
        A secure authentication portal with protected routing and persistent
        user sessions.
      </p>

      {user ? (
        <>
          <p className="status-text">
            Signed in as: <strong>{user.email}</strong>
          </p>
          <div className="action-group">
            <Link to="/dashboard" className="primary-link-btn">
              Go to Dashboard
            </Link>
            <Link to="/profile" className="secondary-link-btn">
              View Profile
            </Link>
          </div>
        </>
      ) : (
        <>
          <p className="status-text">
            You are currently browsing as a guest. Sign in to access your
            dashboard.
          </p>
          <div className="action-group">
            <Link to="/login" className="primary-link-btn">
              Login
            </Link>
            <Link to="/register" className="secondary-link-btn">
              Create Account
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;