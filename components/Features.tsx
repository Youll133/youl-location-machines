export default function Features() {
  const boxStyle = {
    background: "white",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center" as const,
  };

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#f5f5f5",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "50px",
        }}
      >
        Pourquoi choisir YOUL Location Machines ?
      </h2>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        <div style={boxStyle}>
          <h3>🚜 Machines modernes</h3>
          <p>Des engins performants pour tous vos chantiers.</p>
        </div>

        <div style={boxStyle}>
          <h3>⚡ Disponible rapidement</h3>
          <p>Réservation simple et intervention rapide.</p>
        </div>

        <div style={boxStyle}>
          <h3>🛠️ Entretien garanti</h3>
          <p>Toutes nos machines sont contrôlées régulièrement.</p>
        </div>

        <div style={boxStyle}>
          <h3>📞 Assistance 24h/24</h3>
          <p>Notre équipe est disponible pour vous accompagner.</p>
        </div>
      </div>
    </section>
  );
}