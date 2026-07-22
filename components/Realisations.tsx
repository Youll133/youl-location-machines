export default function Realisations() {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "48px",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "20px",
          }}
        >
          🏗️ Nos réalisations
        </h2>

        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "#666",
            maxWidth: "850px",
            margin: "0 auto 60px",
            lineHeight: "35px",
          }}
        >
          Nos machines interviennent sur des chantiers de terrassement,
          construction de routes, bâtiments et travaux publics partout en
          Côte d'Ivoire.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          <img
            src="/realisations/chantier1.jpg"
            alt="Chantier 1"
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          <img
            src="/realisations/chantier2.jpg"
            alt="Chantier 2"
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          <img
            src="/realisations/chantier3.jpg"
            alt="Chantier 3"
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    </section>
  );
}