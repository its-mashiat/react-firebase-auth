import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">AuthApp</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>

        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;