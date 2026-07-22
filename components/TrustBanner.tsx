export default function TrustBanner() {
  return (
    <section
      style={{
        background: "#111827",
        color: "white",
        padding: "25px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
          textAlign: "center",
        }}
      >
        <div>
          <h3>🚜 Machines récentes</h3>
          <p>Des engins fiables et entretenus.</p>
        </div>

        <div>
          <h3>⚡ Intervention rapide</h3>
          <p>Réponse à votre demande en moins de 24h.</p>
        </div>

        <div>
          <h3>🛠️ Assistance</h3>
          <p>Une équipe disponible pour vous accompagner.</p>
        </div>

        <div>
          <h3>🇨🇮 Partout en Côte d'Ivoire</h3>
          <p>Livraison sur vos chantiers selon disponibilité.</p>
        </div>
      </div>
    </section>
  );
}