export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "100px auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        À propos de YOUL Location Machines
      </h1>

      <p
        style={{
          fontSize: "22px",
          lineHeight: "40px",
          color: "#444",
        }}
      >
        YOUL Location Machines est une entreprise spécialisée dans la location
        d'engins de chantier en Côte d'Ivoire.

        <br /><br />

        Nous mettons à la disposition des entreprises et des particuliers des
        machines modernes, fiables et entretenues pour tous types de travaux :
        terrassement, construction, démolition, routes et travaux publics.

        <br /><br />

        Notre objectif est d'offrir un service rapide, professionnel et de
        qualité partout en Côte d'Ivoire.
      </p>

      <div
        style={{
          marginTop: "60px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "#facc15",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h2>🚜 12+ Machines</h2>
          <p>Une flotte disponible pour vos chantiers.</p>
        </div>

        <div
          style={{
            background: "#22c55e",
            color: "white",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h2>📍 Côte d'Ivoire</h2>
          <p>Livraison sur tout le territoire.</p>
        </div>

        <div
          style={{
            background: "#2563eb",
            color: "white",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h2>⭐ Service de qualité</h2>
          <p>Des engins entretenus et un accompagnement professionnel.</p>
        </div>
      </div>
    </main>
  );
}