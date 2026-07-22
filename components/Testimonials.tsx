export default function Testimonials() {
  const avis = [
    {
      nom: "Entreprise BTP Abidjan",
      texte:
        "Excellent service. Les machines sont en très bon état et livrées rapidement.",
    },
    {
      nom: "M. Koné",
      texte:
        "Très satisfait de la location. Personnel professionnel et prix compétitifs.",
    },
    {
      nom: "Société Ivoire Construction",
      texte:
        "Nous recommandons YOUL Location Machines pour tous les travaux de chantier.",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "46px",
          marginBottom: "20px",
        }}
      >
        ⭐ Avis de nos clients
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "20px",
          marginBottom: "50px",
        }}
      >
        La satisfaction de nos clients est notre priorité.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {avis.map((client, index) => (
          <div
            key={index}
            style={{
              background: "#f9fafb",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "15px",
              }}
            >
              ⭐⭐⭐⭐⭐
            </h3>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "30px",
              }}
            >
              {client.texte}
            </p>

            <h4
              style={{
                marginTop: "25px",
                color: "#ca8a04",
              }}
            >
              {client.nom}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}