
import Link from "next/link";

import LogoutButton from "../../components/LogoutButton";
import { createClient } from "../../lib/server";

export default async function AdminPage() {
 

  const supabase = await createClient();

  const { data: machines } = await supabase
    .from("machines")
    .select("*");

  const { data: devis } = await supabase
    .from("devis")
    .select("*");

  const { data: avis } = await supabase
    .from("avis")
    .select("*");

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "120px auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "15px",
          color: "#111827",
        }}
      >
        🛠️ Administration
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#666",
          marginBottom: "40px",
        }}
      >
        Tableau de bord de YOUL LOCATION MACHINES
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        <Link
          href="/admin/machines"
          style={{
            ...card,
            textDecoration: "none",
            color: "inherit",
            display: "block",
          }}
        >
          <h2>🚜 Machines</h2>
          <p>{machines?.length ?? 0} machines</p>
        </Link>

        <Link
          href="/admin/devis"
          style={{
            ...card,
            textDecoration: "none",
            color: "inherit",
            display: "block",
          }}
        >
          <h2>📄 Devis</h2>
          <p>{devis?.length ?? 0} demande(s)</p>
        </Link>

        <div style={card}>
          <h2>⭐⭐ Avis clients</h2>
          <p>{avis?.length ?? 0} avis</p>
        </div>

        <div style={card}>
          <h2>👀 Vues</h2>
          <p>
            {machines?.reduce(
              (total, machine) => total + (machine.vues ?? 0),
              0
            ) ?? 0}{" "}
            vues
          </p>
        </div>
      </div>

      <div
        style={{
          ...card,
          marginTop: "30px",
        }}
      >
        <h2>⭐ Note moyenne</h2>

        <p>
          {avis && avis.length > 0
            ? (
                avis.reduce((total, avis) => total + avis.note, 0) /
                avis.length
              ).toFixed(1)
            : "0"}{" "}
          /5
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "60px",
          marginBottom: "25px",
        }}
      >
        <h2>Gestion</h2>

        <LogoutButton />
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/admin/ajouter-machine"
          style={{
            ...button,
            textDecoration: "none",
            color: "#111",
            display: "inline-block",
          }}
        >
          ➕ Ajouter une machine
        </Link>

        <Link
          href="/admin/machines"
          style={{
            ...button,
            textDecoration: "none",
            color: "#111",
            display: "inline-block",
          }}
        >
          ✏️ Gérer les machines
        </Link>

        <Link
          href="/admin/devis"
          style={{
            ...button,
            textDecoration: "none",
            color: "#111",
            display: "inline-block",
          }}
        >
          📄 Gérer les devis
        </Link>

        <Link
          href="/machines"
          style={{
            ...button,
            textDecoration: "none",
            color: "#111",
            display: "inline-block",
          }}
        >
          🌍 Voir le site
        </Link>
      </div>
    </main>
  );
}

const card = {
  background: "#fff",
  borderRadius: "18px",
  padding: "30px",
  boxShadow: "0 10px 25px rgba(0,0,0,.12)",
};

const button = {
  background: "#FFD400",
  border: "none",
  padding: "16px 25px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "18px",
};