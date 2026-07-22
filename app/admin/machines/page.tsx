"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function AdminMachinesPage() {
  const [machines, setMachines] = useState<any[]>([]);

  useEffect(() => {
    chargerMachines();
  }, []);

  async function chargerMachines() {
    const { data, error } = await supabase
      .from("machines")
      .select("*")
      .order("id", { ascending: true });

    if (!error) {
      setMachines(data || []);
    }
  }

  async function supprimerMachine(id: number) {
    const confirmation = confirm(
      "Voulez-vous vraiment supprimer cette machine ?"
    );

    if (!confirmation) return;

    const { error } = await supabase
      .from("machines")
      .delete()
      .eq("id", id);

    if (error) {
      alert("❌ " + error.message);
      return;
    }

    alert("✅ Machine supprimée !");

    chargerMachines();
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
          marginBottom: "30px",
        }}
      >
        🚜 Gestion des machines
      </h1>

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
            <th style={th}>Prix</th>
            <th style={th}>Ville</th>
            <th style={th}>Type</th>
            <th style={th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {machines.map((machine) => (
            <tr key={machine.id}>
              <td style={td}>{machine.nom}</td>
              <td style={td}>{machine.prix}</td>
              <td style={td}>{machine.ville}</td>
              <td style={td}>{machine.type}</td>

              <td style={td}>
                <Link
  href={`/admin/modifier-machine/${machine.id}`}
  style={{
    ...editButton,
    textDecoration: "none",
    display: "inline-block",
  }}
>
  ✏️ Modifier
</Link>

                <button
                  style={deleteButton}
                  onClick={() => supprimerMachine(machine.id)}
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

const editButton = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
};

const deleteButton = {
  background: "#dc2626",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "8px",
  cursor: "pointer",
};