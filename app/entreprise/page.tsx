export default function EntreprisePage() {
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
        🏢 À propos de YOUL LOCATION MACHINES
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          color: "#555",
          lineHeight: "36px",
          marginBottom: "60px",
        }}
      >
        YOUL LOCATION MACHINES est une entreprise spécialisée dans la location
        d'engins de chantier en Côte d'Ivoire. Notre objectif est d'offrir des
        machines fiables, performantes et entretenues pour accompagner les
        entreprises, les particuliers et les professionnels du BTP dans tous
        leurs projets.
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
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.10)",
          }}
        >
          <h2>🎯 Notre mission</h2>
          <p style={{ lineHeight: "30px" }}>
            Fournir des engins de chantier performants avec un service rapide,
            fiable et professionnel partout en Côte d'Ivoire.
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.10)",
          }}
        >
          <h2>👁️ Notre vision</h2>
          <p style={{ lineHeight: "30px" }}>
            Devenir une référence nationale dans la location de matériels de
            chantier grâce à la qualité de nos services et à la satisfaction de
            nos clients.
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.10)",
          }}
        >
          <h2>💎 Nos valeurs</h2>

          <ul style={{ lineHeight: "34px", paddingLeft: "20px" }}>
            <li>Professionnalisme</li>
            <li>Fiabilité</li>
            <li>Sécurité</li>
            <li>Réactivité</li>
            <li>Satisfaction client</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          marginTop: "60px",
          background: "#111827",
          color: "white",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <h2 style={{ color: "#FFD400" }}>
          🚜 Pourquoi choisir YOUL LOCATION MACHINES ?
        </h2>

        <ul
          style={{
            lineHeight: "36px",
            fontSize: "19px",
          }}
        >
          <li>✅ Machines modernes et entretenues.</li>
          <li>✅ Intervention partout en Côte d'Ivoire.</li>
          <li>✅ Prix compétitifs.</li>
          <li>✅ Assistance rapide.</li>
          <li>✅ Devis personnalisé.</li>
          <li>✅ Équipe professionnelle.</li>
        </ul>
      </div>
    </main>
  );
}