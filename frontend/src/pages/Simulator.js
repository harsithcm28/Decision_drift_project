import { useState } from "react";
import "../styles/dashboard.css";

export default function Simulator() {
  const [text, setText] = useState("");
  const [stress, setStress] = useState(5);
  const [confidence, setConfidence] = useState(5);
  const [result, setResult] = useState(null);

  const analyzeDecision = () => {
    if (!text.trim()) {
      alert("Please enter a decision.");
      return;
    }

    setResult({
      drift: (Math.random() * 0.9).toFixed(2),
      bias: "Confirmation Bias",
      risk: "Moderate",
      explanation:
        "Analysis indicates decision drift influenced by stress and cognitive bias."
    });
  };

  return (
    <div className="dashboard-container">
      <h2>🧠 Decision Drift Simulator</h2>

      <textarea
        className="decision-box"
        placeholder="Enter your decision or thought pattern..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="slider">
        <label>Stress Level: {stress}</label>
        <input
          type="range"
          min="0"
          max="10"
          value={stress}
          onChange={(e) => setStress(e.target.value)}
        />
      </div>

      <div className="slider">
        <label>Confidence Level: {confidence}</label>
        <input
          type="range"
          min="0"
          max="10"
          value={confidence}
          onChange={(e) => setConfidence(e.target.value)}
        />
      </div>

      <button className="primary-btn" onClick={analyzeDecision}>
        Analyze Decision Drift
      </button>

      {result && (
        <div className="result-box">
          <h3>📊 Analysis Result</h3>
          <p><b>Drift Score:</b> {result.drift}</p>
          <p><b>Detected Bias:</b> {result.bias}</p>
          <p><b>Risk Level:</b> {result.risk}</p>
          <p className="explanation">{result.explanation}</p>
        </div>
      )}
    </div>
  );
}
