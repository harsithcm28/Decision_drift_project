/*import { useEffect, useState } from "react";

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
*/
import { useState } from "react";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [form, setForm] = useState({
    userId: "",
    decision: "",
    description: "",
    stress: 5,
    confidence: 5,
    pastRisk: 0.5,
    riskTolerance: 5
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const analyze = () => {
    // 🔹 MOCK RESPONSE (backend-ready)
    setResult({
      stress_level: form.stress,
      confidence_level: form.confidence,
      drift_risk: 0.9,
      model_risk: 0.233,
      overall_risk: 0.566,
      behavioral_metrics: {
        stability: 0.6,
        quality: 1,
        model_confidence: 0.767
      },
      drift_score: 0.9,
      risk_level: "High",
      model_prediction: 0.233,
      decisions_tracked: 2,
      analysis_details: [
        "Very high stress level (9/10) significantly increases drift",
        "Very low confidence (1/10) indicates uncertainty",
        "Stress level exceeds risk tolerance — decision timing may be poor",
        "ML Model Risk Assessment: 23.3% probability of negative outcome",
        "Based on previous decisions, this follows your typical pattern"
      ]
    });
  };

  return (
    <div className="dashboard-container">
      <h1>🧠 Decision Health Dashboard</h1>

      {/* INPUT FORM */}
      <div className="card">
        <div className="grid-3">
          <input name="userId" placeholder="User ID" onChange={handleChange} />
          <input name="decision" placeholder="Decision" onChange={handleChange} />
          <input
            name="pastRisk"
            type="number"
            step="0.01"
            min="0"
            max="1"
            placeholder="Past Risk Score"
            onChange={handleChange}
          />
        </div>

        <textarea
          name="description"
          placeholder="Decision description..."
          onChange={handleChange}
        />

        <div className="grid-3">
          <Range label="Stress Level" name="stress" value={form.stress} onChange={handleChange} />
          <Range label="Confidence Level" name="confidence" value={form.confidence} onChange={handleChange} />
          <Range label="Risk Tolerance" name="riskTolerance" value={form.riskTolerance} onChange={handleChange} />
        </div>

        <button className="primary-btn" onClick={analyze}>
          Run Risk Analysis
        </button>
      </div>

      {/* RESULTS */}
      {result && (
        <>
          {/* STRESS / CONFIDENCE */}
          <div className="grid-2">
            <Bar title="Stress Level" value={result.stress_level} color="red" />
            <Bar title="Confidence Level" value={result.confidence_level} color="green" />
          </div>

          {/* RISK GAUGE */}
          <div className="card">
            <h3>⚠️ Risk Assessment Gauge</h3>
            <div className="grid-3">
              <RiskCard title="Drift Risk" value={result.drift_risk * 100} color="red" />
              <RiskCard title="Model Risk" value={result.model_risk * 100} color="green" />
              <RiskCard title="Overall Risk" value={result.overall_risk * 100} color="yellow" highlight />
            </div>
          </div>

          {/* BEHAVIORAL METRICS */}
          <div className="card">
            <h3>🔵 Behavioral Metrics</h3>
            <div className="grid-3">
              <Metric title="Decision Stability" value={result.behavioral_metrics.stability * 100} />
              <Metric title="Decision Quality" value={`${result.behavioral_metrics.quality}/10`} />
              <Metric title="Model Confidence" value={result.behavioral_metrics.model_confidence * 100} />
            </div>
          </div>

          {/* CORE STATS */}
          <div className="grid-2">
            <Stat title="Drift Score" value={result.drift_score} />
            <Stat title="Risk Level" value={result.risk_level} danger />
            <Stat title="Model Prediction" value={`${(result.model_prediction * 100).toFixed(1)}%`} success />
            <Stat title="Decisions Tracked" value={result.decisions_tracked} />
          </div>

          {/* ANALYSIS DETAILS */}
          <div className="card">
            <h3>📋 Analysis Details</h3>
            <ul className="analysis-list">
              {result.analysis_details.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

const Range = ({ label, name, value, onChange }) => (
  <div>
    <label>{label}: {value}</label>
    <input type="range" min="0" max="10" name={name} value={value} onChange={onChange} />
  </div>
);

const Bar = ({ title, value, color }) => (
  <div className="card">
    <h4>{title}: {value}/10</h4>
    <div className="bar-bg">
      <div className={`bar-fill ${color}`} style={{ width: `${value * 10}%` }} />
    </div>
  </div>
);

const RiskCard = ({ title, value, color, highlight }) => (
  <div className={`risk-card ${highlight ? "highlight" : ""}`}>
    <p>{title}</p>
    <h2 className={color}>{value.toFixed(1)}%</h2>
    <div className="bar-bg">
      <div className={`bar-fill ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const Metric = ({ title, value }) => (
  <div className="metric-card">
    <p>{title}</p>
    <h2>{value}%</h2>
  </div>
);

const Stat = ({ title, value, danger, success }) => (
  <div className="stat-card">
    <p>{title}</p>
    <h2 className={danger ? "red" : success ? "green" : ""}>{value}</h2>
  </div>
);
