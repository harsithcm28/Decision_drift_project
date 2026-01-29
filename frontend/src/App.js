import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Simulator from "./pages/Simulator";
import Alerts from "./pages/Alerts";
import DecisionTracker from "./pages/DecisionTracker";
import PatternAnalysis from "./pages/PatternAnalysis";
import "./styles/dashboard.css";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app">
      <Sidebar setPage={setPage} />
      <div className="main">
        {page === "dashboard" && <Dashboard />}
        {page === "tracker" && <DecisionTracker />}
        {page === "patterns" && <PatternAnalysis />}
        {page === "alerts" && <Alerts />}
        {page === "simulator" && <Simulator />}cd
      </div>
    </div>
  );
}
