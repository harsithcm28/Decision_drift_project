export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>DriftAI</h2>
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("tracker")}>Decision Tracker</button>
      <button onClick={() => setPage("patterns")}>Pattern Analysis</button>
      <button onClick={() => setPage("alerts")}>Alerts</button>
      <button onClick={() => setPage("simulator")}>Simulator</button>
    </div>
  );
}
