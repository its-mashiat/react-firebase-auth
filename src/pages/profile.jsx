import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const initial = user?.email ? user.email.charAt(0).toUpperCase() : "U";

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
    <div className="page-container">
      <div className="avatar-circle">{initial}</div>
      <h1>User Profile</h1>
      <p>Manage your personal account details and active session.</p>

      <div className="info-grid">
        <div className="info-row">
          <span className="info-label">Email</span>
          <span className="info-value">{user?.email}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Account Created</span>
          <span className="info-value">
            {user?.metadata?.creationTime || "N/A"}
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">Provider</span>
          <span className="info-value">Email / Password</span>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="logout-btn"
        style={{ marginTop: "24px", width: "100%", padding: "11px" }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;