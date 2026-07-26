"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function AdminAvisPage() {
  const [avis, setAvis] = useState<any[]>([]);

  useEffect(() => {
    chargerAvis();
  }, []);

  async function chargerAvis() {
    const { data, error } = await supabase
      .from("avis")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert(error.message);
      return;
    }

    setAvis(data || []);
  }

  async function supprimerAvis(id: number) {
    const confirmation = confirm(
      "Voulez-vous vraiment supprimer cet avis ?"
    );

    if (!confirmation) return;

    const { data, error } = await supabase
  .from("avis")
  .delete()
  .eq("id", id)
  .select();

console.log(data);
console.log(error);

    if (error) {
      alert(error.message);
      return;
    }

    setAvis((prev) => prev.filter((a) => a.id !== id));

    alert("✅ Avis supprimé !");
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
        ⭐ Gestion des avis
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
          fontSize: "20px",
        }}
      >
        Total : {avis.length} avis
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
            <th style={th}>Étoiles</th>
            <th style={th}>Commentaire</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {avis.map((item) => (
            <tr key={item.id}>
              <td style={td}>{item.nom}</td>

              <td style={td}>⭐ {item.note}/5</td>

              <td style={td}>{item.commentaire}</td>

              <td style={td}>
                <button
                  onClick={() => supprimerAvis(item.id)}
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