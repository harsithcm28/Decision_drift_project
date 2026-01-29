import { useState } from "react";
import "../styles/dashboard.css";

export default function PatternAnalysis() {
  const [result, setResult] = useState(null);

  const analyzePattern = () => {
    // 🔹 Mocked backend-style response
    setResult({
      baseline_drift: 0.32,
      current_drift: 0.78,
      bias_signals: ["Stress Bias", "Overconfidence Decay"],
      stability: 0.41,
      risk_assessment: {
        risk_level: "High",
        drift_score: 0.78,
        model_prediction: 0.26
      },
      insights: [
        "Current drift is significantly higher than baseline behavior",
        "Repeated high-stress decisions are destabilizing judgment patterns",
        "Confidence degradation detected across recent decisions",
        "Decision-making shows reduced consistency over time",
        "Immediate intervention is recommended to reduce drift"
      ]
    });
  };

  return (
    <div className="dashboard-container">
      <h1>📈 Pattern Analysis</h1>

      {/* INPUT */}
      <div className="card">
        <p style={{ color: "#94a3b8" }}>
          Analyze long-term behavioral patterns based on your tracked decisions.
        </p>
        <button className="primary-btn" onClick={analyzePattern}>
          Run Pattern Analysis
        </button>
      </div>

      {result && (
        <>
          {/* BASELINE VS CURRENT */}
          <div className="card">
            <h3>🔄 Drift Comparison</h3>

            <PatternBar
              title="Baseline Drift"
              value={result.baseline_drift * 100}
              color="green"
            />

            <PatternBar
              title="Current Drift"
              value={result.current_drift * 100}
              color="red"
            />
          </div>

          {/* SIGNALS */}
          <div className="grid-2">
            <div className="card">
              <h3>⚡ Bias Signals</h3>
              <ul className="analysis-list">
                {result.bias_signals.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>📊 Stability Index</h3>
              <h2 className="yellow">
                {(result.stability * 100).toFixed(1)}%
              </h2>
              <div className="bar-bg">
                <div
                  className="bar-fill yellow"
                  style={{ width: `${result.stability * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* RISK ASSESSMENT */}
          <div className="card">
            <h3>⚠️ Risk Assessment</h3>
            <div className="grid-3">
              <Stat title="Risk Level" value={result.risk_assessment.risk_level} danger />
              <Stat title="Drift Score" value={result.risk_assessment.drift_score} />
              <Stat
                title="Model Prediction"
                value={`${(result.risk_assessment.model_prediction * 100).toFixed(1)}%`}
                success
              />
            </div>
          </div>

          {/* INSIGHTS */}
          <div className="card">
            <h3>🧠 Pattern Insights</h3>
            <ul className="analysis-list">
              {result.insights.map((i, idx) => (
                <li key={idx}>• {i}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

const PatternBar = ({ title, value, color }) => (
  <div style={{ marginBottom: "15px" }}>
    <p>{title}: {value.toFixed(1)}%</p>
    <div className="bar-bg">
      <div className={`bar-fill ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const Stat = ({ title, value, danger, success }) => (
  <div className="stat-card">
    <p>{title}</p>
    <h2 className={danger ? "red" : success ? "green" : ""}>{value}</h2>
  </div>
);
