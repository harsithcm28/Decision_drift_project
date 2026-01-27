export default function TopBar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-end",
      gap: "12px",
      marginBottom: "20px"
    }}>
      <span className="badge live">● Live Monitoring</span>
      <span className="badge prototype">Prototype</span>
    </div>
  );
}
