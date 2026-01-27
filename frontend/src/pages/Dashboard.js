import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: "demo",
        decision_text: "skip class",
        stress_level: 7,
        confidence_level: 4,
        past_risk_score: 0.5,
        risk_tolerance: 7
      })
    })
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div className="card">
      <h1>Decision Health</h1>
      <p>Drift Score: {data.drift_score}</p>
      <p>Risk: {data.risk_drift_level}</p>
    </div>
  );
}
