export default function AproposPage() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "120px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          color: "#111827",
          marginBottom: "20px",
        }}
      >
        À propos de YOUL LOCATION MACHINES
      </h1>

      <p
        style={{
          fontSize: "22px",
          lineHeight: "1.8",
          color: "#555",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto 60px",
        }}
      >
        YOUL LOCATION MACHINES est une entreprise spécialisée dans la
        location de machines de chantier partout en Côte d'Ivoire.
        Nous mettons à disposition des engins performants, fiables et
        entretenus afin d'accompagner les particuliers, les entreprises
        et les professionnels du BTP dans leurs projets.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,.1)",
          }}
        >
          <h2>🎯 Notre mission</h2>

          <p>
            Fournir des machines fiables avec un service rapide partout
            en Côte d'Ivoire.
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,.1)",
          }}
        >
          <h2>🚜 Notre flotte</h2>

          <p>
            Chargeuse Caterpillar 966<br />
            Tractopelle Caterpillar 428<br />
            Niveleuse Caterpillar 14E<br />
            Bulldozer Caterpillar D8
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,.1)",
          }}
        >
          <h2>🤝 Nos valeurs</h2>

          <p>
            Professionnalisme, disponibilité,
            transparence et satisfaction client.
          </p>
        </div>
      </div>
    </main>
  );
}