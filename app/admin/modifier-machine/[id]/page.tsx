"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import { useParams, useRouter } from "next/navigation";

export default function ModifierMachinePage() {
  const { id } = useParams();
  const router = useRouter();

  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [ville, setVille] = useState("");
  const [type, setType] = useState("");
  const [puissance, setPuissance] = useState("");
  const [poids, setPoids] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    chargerMachine();
  }, []);

  async function chargerMachine() {
    const { data, error } = await supabase
      .from("machines")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      alert("❌ Machine introuvable");
      return;
    }

    setNom(data.nom || "");
    setPrix(data.prix || "");
    setVille(data.ville || "");
    setType(data.type || "");
    setPuissance(data.puissance || "");
    setPoids(data.poids || "");
    setImage(data.image || "");
    setDescription(data.description || "");
  }

  async function modifierMachine(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase
      .from("machines")
      .update({
        nom,
        prix,
        ville,
        type,
        puissance,
        poids,
        image,
        description,
      })
      .eq("id", id);

    if (error) {
      alert("❌ " + error.message);
      return;
    }

    alert("✅ Machine modifiée avec succès !");

    router.push("/admin/machines");
  }

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "120px auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "15px",
          color: "#111827",
        }}
      >
        ✏️ Modifier une machine
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#666",
          marginBottom: "40px",
        }}
      >
        Modifiez les informations de cette machine.
      </p>

      <form
        onSubmit={modifierMachine}
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        <input
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="🚜 Nom de la machine"
          style={input}
        />

        <input
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          placeholder="💰 Prix / jour"
          style={input}
        />

        <input
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          placeholder="📍 Ville"
          style={input}
        />

        <input
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="🏷️ Type"
          style={input}
        />

        <input
          value={puissance}
          onChange={(e) => setPuissance(e.target.value)}
          placeholder="⚙️ Puissance"
          style={input}
        />

        <input
          value={poids}
          onChange={(e) => setPoids(e.target.value)}
          placeholder="🏋️ Poids"
          style={input}
        />

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="📸 Image"
          style={input}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="📝 Description"
          rows={6}
          style={input}
        />

        <button
          type="submit"
          style={{
            background: "#FFD400",
            color: "#111",
            border: "none",
            padding: "18px",
            borderRadius: "12px",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          💾 Enregistrer les modifications
        </button>
      </form>
    </main>
  );
}
const input = {
  width: "100%",
  padding: "16px",
  borderRadius: "10px",
  border: "2px solid #ddd",
  fontSize: "18px",
  boxSizing: "border-box" as const,
};