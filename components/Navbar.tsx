export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #222",
      }}
    >
      <h2>General AI</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/">Home</a>
        <a href="/pricing">Pricing</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}
