export default function Stats() {
  const stats = [
    {
      nombre: "12+",
      titre: "Machines disponibles",
    },
    {
      nombre: "150+",
      titre: "Clients satisfaits",
    },
    {
      nombre: "24h",
      titre: "Réponse rapide",
    },
    {
      nombre: "10+",
      titre: "Villes desservies",
    },
  ];

  return (
    <section
      style={{
        background: "#111827",
        color: "white",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "46px",
          marginBottom: "60px",
        }}
      >
        Nos chiffres
      </h2>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "30px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              background: "#1f2937",
              padding: "35px",
              borderRadius: "18px",
            }}
          >
            <h3
              style={{
                fontSize: "50px",
                color: "#FFD400",
                marginBottom: "15px",
              }}
            >
              {item.nombre}
            </h3>

            <p
              style={{
                fontSize: "22px",
              }}
            >
              {item.titre}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}