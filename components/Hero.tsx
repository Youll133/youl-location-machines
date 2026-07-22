import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        backgroundImage: "url('/images/machines/niveleuse.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Fond sombre */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          maxWidth: "900px",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "68px",
            fontWeight: "bold",
            color: "#FFD400",
            marginBottom: "25px",
          }}
        >
          YOUL LOCATION MACHINES
        </h1>

        <p
          style={{
            fontSize: "28px",
            marginBottom: "15px",
          }}
        >
          Leader de la location d'engins de chantier en Côte d'Ivoire.
        </p>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "38px",
            marginBottom: "45px",
          }}
        >
          Des machines puissantes, un service rapide et une équipe
          professionnelle à votre disposition.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/machines"
            style={{
              background: "#FFD400",
              color: "black",
              padding: "16px 34px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            🚜 Voir nos machines
          </Link>

          <Link
            href="/reservation"
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid white",
              padding: "16px 34px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            📄 Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}