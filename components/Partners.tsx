import Image from "next/image";

export default function Partners() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#fff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "15px",
          color: "#111827",
        }}
      >
        Nos partenaires
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "50px",
          fontSize: "20px",
        }}
      >
        Nous travaillons avec les plus grandes marques d'engins de chantier.
      </p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "60px",
        }}
      >
        <Image
          src="/partners/caterpillar.png"
          alt="Caterpillar"
          width={150}
          height={70}
        />

        <Image
          src="/partners/komatsu.png"
          alt="Komatsu"
          width={150}
          height={70}
        />
      </div>
    </section>
  );
}