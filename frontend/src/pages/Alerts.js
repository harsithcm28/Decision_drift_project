/*export default function Alerts() {
  return <h1>Alerts Page</h1>;
}*/
import { useEffect, useState } from "react";
import "../styles/dashboard.css";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  // Simulated incoming alert (later replace with backend / websocket)
  useEffect(() => {
    const simulatedStressLevel = 9; // 🔥 simulate high stress

    if (simulatedStressLevel >= 8) {
      const newAlert = {
        title: "High Stress Detected",
        message:
          "Your current stress level is critically high. Decision drift probability has increased.",
        severity: "high",
        timestamp: new Date().toISOString()
      };

      setAlerts([newAlert]);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <h1>🚨 Alerts & Notifications</h1>

      {alerts.length === 0 && (
        <p style={{ color: "#94a3b8" }}>
          No active alerts. Your cognitive state is stable.
        </p>
      )}

      <div className="alerts-container">
        {alerts.map((alert, i) => (
          <AlertCard key={i} alert={alert} />
        ))}
      </div>
    </div>
  );
}

const AlertCard = ({ alert }) => (
  <div className={`alert-card ${alert.severity}`}>
    <div className="alert-header">
      <h3>⚠️ {alert.title}</h3>
      <span className="alert-time">
        {new Date(alert.timestamp).toLocaleString()}
      </span>
    </div>

    <p className="alert-msg">{alert.message}</p>

    <span className={`alert-badge ${alert.severity}`}>
      {alert.severity.toUpperCase()}
    </span>
  </div>
);

