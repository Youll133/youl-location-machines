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
      <hr style={{ margin: "60px 0" }} />

<h2>Une entreprise spécialisée dans la location d'engins de chantier en Côte d'Ivoire</h2>

<p style={{ fontSize: "20px", lineHeight: "35px" }}>
YOUL LOCATION MACHINES accompagne les entreprises, les collectivités et les
particuliers dans tous leurs projets de construction, de terrassement, de
voirie et de travaux publics. Nous proposons la location de pelles
hydrauliques, bulldozers, chargeuses, niveleuses, compacteurs,
tractopelles et autres matériels BTP partout en Côte d'Ivoire.
</p>

<p style={{ fontSize: "20px", lineHeight: "35px" }}>
Notre entreprise intervient à Abidjan, Yamoussoukro, Bouaké, San Pedro,
Korhogo et dans toutes les régions du pays afin de fournir des machines
fiables, entretenues et disponibles rapidement. Notre objectif est de
garantir à chaque client un matériel performant et un accompagnement
professionnel pour assurer la réussite de son chantier.
</p>

<p style={{ fontSize: "20px", lineHeight: "35px" }}>
Grâce à notre expérience dans la location d'engins de chantier en Côte
d'Ivoire, nous mettons un point d'honneur à proposer des équipements
adaptés à chaque besoin avec des tarifs compétitifs, une intervention
rapide et un service de qualité.
</p>
    </main>
  );
}