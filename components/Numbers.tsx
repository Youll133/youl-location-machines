export default function Numbers() {
  return (
    <section
      style={{
        background: "#FFD400",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "30px",
          textAlign: "center",
        }}
      >
        <div>
          <h2 style={{ fontSize: "52px", margin: 0 }}>4</h2>
          <p>Machines disponibles</p>
        </div>

        <div>
          <h2 style={{ fontSize: "52px", margin: 0 }}>100%</h2>
          <p>Machines entretenues</p>
        </div>

        <div>
          <h2 style={{ fontSize: "52px", margin: 0 }}>24h</h2>
          <p>Réponse rapide</p>
        </div>

        <div>
          <h2 style={{ fontSize: "52px", margin: 0 }}>🇨🇮</h2>
          <p>Intervention partout en Côte d'Ivoire</p>
        </div>
      </div>
    </section>
  );
}