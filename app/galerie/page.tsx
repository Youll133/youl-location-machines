export default function GaleriePage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "120px auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          color: "#111827",
          marginBottom: "20px",
        }}
      >
        📸 Galerie de nos réalisations
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#555",
          marginBottom: "60px",
          maxWidth: "850px",
          marginInline: "auto",
          lineHeight: "1.7",
        }}
      >
        Nos équipes interviennent sur différents chantiers de terrassement,
        d'aménagement et de construction en Côte d'Ivoire.
        <br />
        <br />
        📷 Les photos de nos réalisations seront prochainement disponibles afin
        de vous présenter la qualité de notre travail et de nos machines sur le
        terrain.
      </p>

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "60px 30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          border: "2px dashed #FFD400",
        }}
      >
        <div
          style={{
            fontSize: "90px",
            marginBottom: "20px",
          }}
        >
          🚜📷
        </div>

        <h2
          style={{
            fontSize: "34px",
            color: "#111827",
            marginBottom: "15px",
          }}
        >
          Galerie en préparation
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#666",
            lineHeight: "1.8",
          }}
        >
          De nouvelles photos de nos chantiers seront ajoutées très bientôt.
          <br />
          Merci de votre confiance et de votre visite.
        </p>
      </div>
    </main>
  );
}