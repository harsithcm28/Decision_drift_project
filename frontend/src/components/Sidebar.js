function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>Decision Drift</h2>

      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("tracker")}>Decision Tracker</button>
      <button onClick={() => setPage("patterns")}>Pattern Analysis</button>
      <button onClick={() => setPage("alerts")}>Alerts</button>

      {/* 🔥 THIS IS IMPORTANT */}
      <button onClick={() => setPage("simulator")}>
        Decision Simulator
      </button>
    </div>
  );
}

export default Sidebar;
