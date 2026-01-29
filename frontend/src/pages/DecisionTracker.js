import { useEffect, useState } from "react";
import "../styles/dashboard.css";

export default function DecisionTracker() {
  const [decisionText, setDecisionText] = useState("");
  const [decisions, setDecisions] = useState([]);

  // Load saved decisions
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("decisions")) || [];
    setDecisions(stored);
  }, []);

  // Save decisions
  const saveDecision = () => {
    if (!decisionText.trim()) return;

    const newDecision = {
      text: decisionText,
      timestamp: new Date().toISOString()
    };

    const updated = [newDecision, ...decisions];
    setDecisions(updated);
    localStorage.setItem("decisions", JSON.stringify(updated));
    setDecisionText("");
  };

  // Stats calculation
  const now = new Date();

  const total = decisions.length;
  const thisWeek = decisions.filter(d =>
    (now - new Date(d.timestamp)) / (1000 * 60 * 60 * 24) <= 7
  ).length;

  const thisMonth = decisions.filter(d =>
    new Date(d.timestamp).getMonth() === now.getMonth()
  ).length;

  return (
    <div className="dashboard-container">
      <h1>📌 Decision Tracker</h1>

      {/* INPUT */}
      <div className="card">
        <textarea
          placeholder="Write and save your decision..."
          value={decisionText}
          onChange={(e) => setDecisionText(e.target.value)}
        />
        <button className="primary-btn" onClick={saveDecision}>
          Save Decision
        </button>
      </div>

      {/* STATS */}
      <div className="grid-3">
        <Stat title="Total Decisions" value={total} />
        <Stat title="This Month" value={thisMonth} />
        <Stat title="This Week" value={thisWeek} />
      </div>

      {/* LIST */}
      <div className="card">
        <h3>🧾 Saved Decisions</h3>
        {decisions.length === 0 && (
          <p style={{ color: "#94a3b8" }}>No decisions saved yet.</p>
        )}

        <ul className="decision-list">
          {decisions.map((d, i) => (
            <li key={i}>
              <p>{d.text}</p>
              <span>
                {new Date(d.timestamp).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const Stat = ({ title, value }) => (
  <div className="stat-card">
    <p>{title}</p>
    <h2>{value}</h2>
  </div>
);
