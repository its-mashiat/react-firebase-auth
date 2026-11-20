import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="page-container">
      <span className="hero-badge">Protected Route</span>
      <h1>Welcome to Dashboard</h1>
      <p>Your account session is active and verified via Firebase.</p>

      <div className="info-grid">
        <div className="info-row">
          <span className="info-label">Account Status</span>
          <span className="badge-active">Authenticated</span>
        </div>
        <div className="info-row">
          <span className="info-label">Email Address</span>
          <span className="info-value">{user?.email}</span>
        </div>
        <div className="info-row">
          <span className="info-label">User ID (UID)</span>
          <span className="info-value">{user?.uid}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Last Sign In</span>
          <span className="info-value">
            {user?.metadata?.lastSignInTime || "Active now"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;