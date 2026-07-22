export default function WhyChooseUs() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "90px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Pourquoi choisir YOUL LOCATION MACHINES ?
      </h2>

      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          color: "#666",
          maxWidth: "900px",
          margin: "0 auto 60px",
          lineHeight: "38px",
        }}
      >
        Nous mettons à votre disposition des machines performantes, entretenues
        et prêtes à intervenir sur tous vos chantiers partout en Côte d'Ivoire.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "30px",
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        {[
          {
            icon: "🚜",
            title: "Machines performantes",
            text: "Des engins fiables pour tous les types de chantiers.",
          },
          {
            icon: "⚡",
            title: "Réponse rapide",
            text: "Nous répondons rapidement à toutes vos demandes.",
          },
          {
            icon: "📍",
            title: "Partout en Côte d'Ivoire",
            text: "Nous intervenons sur l'ensemble du territoire.",
          },
          {
            icon: "🤝",
            title: "Service professionnel",
            text: "Une équipe sérieuse pour accompagner vos projets.",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#f8fafc",
              padding: "35px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                fontSize: "60px",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                fontSize: "28px",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontSize: "19px",
                color: "#555",
                lineHeight: "32px",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}