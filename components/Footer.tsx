export default function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "white",
        padding: "60px 20px 30px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        <div>
          <h2 style={{ color: "#FFD400" }}>YOUL LOCATION MACHINES</h2>
          <p>
            Spécialiste de la location d'engins de chantier partout en Côte d'Ivoire.
          </p>
        </div>

        <div>
          <h3>Nos machines</h3>
          <p>🚜 Chargeuse Caterpillar 966</p>
          <p>🚜 Tractopelle Caterpillar 428</p>
          <p>🚜 Niveleuse Caterpillar 14E</p>
          <p>🚜 Bulldozer Caterpillar D8</p>
        </div>

        <div>
          <h3>Zone d'intervention</h3>
          <p>📍 Abidjan</p>
          <p>📍 Bouaké</p>
          <p>📍 Yamoussoukro</p>
          <p>📍 Partout en Côte d'Ivoire</p>
        </div>
      </div>

      <hr
        style={{
          margin: "40px 0 20px",
          borderColor: "#333",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#bbb",
        }}
      >
        © 2026 YOUL LOCATION MACHINES — Tous droits réservés.
      </p>
    </footer>
  );
}