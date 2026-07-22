export default function ServicesPage() {
  const services = [
    {
      titre: "🚜 Location d'engins",
      description:
        "Location de pelles hydrauliques, bulldozers, chargeuses, compacteurs et autres machines de chantier.",
    },
    {
      titre: "👷 Chauffeurs qualifiés",
      description:
        "Nous pouvons fournir des opérateurs expérimentés pour conduire les machines.",
    },
    {
      titre: "🚚 Livraison sur chantier",
      description:
        "Nous livrons les engins directement sur votre chantier partout en Côte d'Ivoire.",
    },
    {
      titre: "🔧 Maintenance",
      description:
        "Toutes nos machines sont entretenues régulièrement pour garantir leur fiabilité.",
    },
    {
      titre: "📞 Assistance",
      description:
        "Notre équipe est disponible pour répondre rapidement à vos besoins.",
    },
    {
      titre: "📄 Devis gratuit",
      description:
        "Recevez rapidement un devis personnalisé selon votre chantier.",
    },
  ];

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "120px auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "52px",
          marginBottom: "20px",
        }}
      >
        Nos Services
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          color: "#555",
          marginBottom: "50px",
        }}
      >
        Découvrez tous les services proposés par YOUL Location Machines.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 10px 25px rgba(0,0,0,.1)",
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>
              {service.titre}
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "30px",
                color: "#555",
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}