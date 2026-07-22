"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function AdminDevisPage() {
  const [devis, setDevis] = useState<any[]>([]);

  useEffect(() => {
    chargerDevis();
  }, []);

  async function chargerDevis() {
    
    const { data, error } = await supabase
      .from("devis")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert(error.message);
      return;
    }

    setDevis(data || []);
  }
async function supprimerDevis(id: number) {
  const confirmation = confirm(
    "Voulez-vous vraiment supprimer cette demande ?"
  );

  if (!confirmation) return;

  const { error } = await supabase
    .from("devis")
    .delete()
    .eq("id", id);

  if (error) {
    alert(error.message);
    return;
  }

  setDevis((prev) => prev.filter((devis) => devis.id !== id));

  alert("✅ Demande supprimée !");
}
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
          fontSize: "42px",
          marginBottom: "15px",
        }}
      >
        📄 Demandes de devis
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
          fontSize: "20px",
        }}
      >
        Total : {devis.length} demande(s)
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,.10)",
        }}
      >
        <thead>
          <tr style={{ background: "#FFD400" }}>
            <th style={th}>Nom</th>
            <th style={th}>Téléphone</th>
            <th style={th}>Machine</th>
            <th style={th}>Jours</th>
            <th style={th}>Message</th>
<th style={th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {devis.map((item) => (
            <tr key={item.id}>
              <td style={td}>{item.nom}</td>
              <td style={td}>{item.telephone}</td>
              <td style={td}>{item.machine}</td>
              <td style={td}>{item.jours}</td>
              <td style={td}>{item.message}</td>

<td style={td}>
  <button
    onClick={() => supprimerDevis(item.id)}
    style={{
      background: "#dc2626",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    🗑️ Supprimer
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

const th = {
  padding: "18px",
  textAlign: "left" as const,
};

const td = {
  padding: "18px",
  borderBottom: "1px solid #eee",
};