export default function PatternAnalysis() {
  return (
    <>
      <h1>Pattern Analysis</h1>
      <p className="page-sub">
        Compare baseline behavior to current cognitive state
      </p>

      <div className="grid">
        <div className="card">
          <h3>Baseline Drift</h3>
          <h1>18%</h1>
        </div>

        <div className="card">
          <h3>Current Drift</h3>
          <h1>50%</h1>
        </div>

        <div className="card">
          <h3>Bias Signals</h3>
          <h1>3</h1>
        </div>

        <div className="card">
          <h3>Stability</h3>
          <h1>50%</h1>
        </div>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Emotion & State Timeline</h3>
        <p>(Chart placeholder – backend-ready)</p>
      </div>
    </>
  );
}
