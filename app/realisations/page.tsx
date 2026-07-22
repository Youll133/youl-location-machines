export default function RealisationsPage() {
  const realisations = [
    {
      titre: "Terrassement à Abidjan",
      image: "/images/machines/pelle.jpg",
    },
    {
      titre: "Construction de route à Yamoussoukro",
      image: "/images/machines/bulldozer.jpg",
    },
    {
      titre: "Chargement de matériaux à Bouaké",
      image: "/images/machines/chargeuse.jpg",
    },
  ];

  return (
    <main
      style={{
        maxWidth: "1300px",
        margin: "100px auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        🏗️ Nos réalisations
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          color: "#555",
          marginBottom: "50px",
        }}
      >
        Découvrez quelques chantiers réalisés avec nos machines.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "30px",
        }}
      >
        {realisations.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={item.image}
              alt={item.titre}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2
                style={{
                  fontSize: "26px",
                  margin: 0,
                }}
              >
                  {item.titre}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}