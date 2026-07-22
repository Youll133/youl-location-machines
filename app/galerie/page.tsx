export default function GaleriePage() {
  const images = [
    {
      image: "/images/realisations/chantier1.jpg",
      titre: "Terrassement à Abidjan",
    },
    {
      image: "/images/realisations/chantier2.jpg",
      titre: "Construction de route",
    },
    {
      image: "/images/realisations/chantier3.jpg",
      titre: "Nivellement de terrain",
    },
    {
      image: "/images/realisations/chantier4.jpg",
      titre: "Travaux de génie civil",
    },
    {
      image: "/images/realisations/chantier5.jpg",
      titre: "Aménagement de chantier",
    },
    {
      image: "/images/realisations/chantier6.jpg",
      titre: "Excavation",
    },
  ];

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "120px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          color: "#111827",
          marginBottom: "15px",
        }}
      >
        📸 Galerie de nos réalisations
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          color: "#666",
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
        {images.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,.12)",
            }}
          >
            <img
              src={item.image}
              alt={item.titre}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2>{item.titre}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}