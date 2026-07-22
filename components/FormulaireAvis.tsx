"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

type Props = {
  machineId: number;
};

export default function FormulaireAvis({ machineId }: Props) {
  const [nom, setNom] = useState("");
  const [note, setNote] = useState(5);
  const [commentaire, setCommentaire] = useState("");

  async function envoyerAvis(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.from("avis").insert([
      {
        machine_id: machineId,
        nom,
        note,
        commentaire,
      },
    ]);

    if (error) {
      alert("❌ " + error.message);
      return;
    }

    alert("✅ Merci pour votre avis !");

    setNom("");
    setNote(5);
    setCommentaire("");

    window.location.reload();
  }

  return (
    <form
      onSubmit={envoyerAvis}
      style={{
        marginTop: "60px",
        display: "grid",
        gap: "15px",
      }}
    >
      <h2>⭐⭐⭐⭐⭐ Laisser un avis</h2>

      <input
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Votre nom"
        style={input}
      />

      <select
        value={note}
        onChange={(e) => setNote(Number(e.target.value))}
        style={input}
      >
        <option value={5}>⭐⭐⭐⭐⭐ 5</option>
        <option value={4}>⭐⭐⭐⭐ 4</option>
        <option value={3}>⭐⭐⭐ 3</option>
        <option value={2}>⭐⭐ 2</option>
        <option value={1}>⭐ 1</option>
      </select>

      <textarea
        value={commentaire}
        onChange={(e) => setCommentaire(e.target.value)}
        placeholder="Votre commentaire"
        rows={5}
        style={input}
      />

      <button
        type="submit"
        style={{
          background: "#FFD400",
          border: "none",
          padding: "15px",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Envoyer l'avis
      </button>
    </form>
  );
}

const input = {
  width: "100%",
  padding: "15px",
  borderRadius: "10px",
  border: "2px solid #ddd",
  fontSize: "17px",
  boxSizing: "border-box" as const,
};