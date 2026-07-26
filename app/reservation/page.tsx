"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";


export default function ReservationPage() {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [machine, setMachine] = useState("");
  const [ville, setVille] = useState("");
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");
  const [description, setDescription] = useState("");
  const [prixJour, setPrixJour] = useState(0);
const [prixTotal, setPrixTotal] = useState(0);


 let nbJours = 0;

if (debut && fin) {
  const dateDebut = new Date(debut);
  const dateFin = new Date(fin);

  const difference = dateFin.getTime() - dateDebut.getTime();

  nbJours = Math.ceil(difference / (1000 * 60 * 60 * 24)) + 1;
}

useEffect(() => {
  async function chargerPrix() {
    if (!machine) return;

    const { data } = await supabase
      .from("machines")
      .select("prix")
      .ilike("nom", machine)
      .maybeSingle();

    if (data) {
      const prix = Number(
        String(data.prix).replace(/[^\d]/g, "")
      );

      setPrixJour(prix);
      setPrixTotal(prix * nbJours);
    } else {
      setPrixJour(0);
      setPrixTotal(0);
    }
  }

  chargerPrix();
}, [machine, nbJours]);
async function envoyerDevis() {
  if (
    !nom.trim() ||
    !telephone.trim() ||
    !machine.trim() ||
    !ville.trim() ||
    !debut ||
    !fin
  ) {
    alert("❌ Veuillez remplir tous les champs obligatoires.");
    return;
  }

  if (new Date(fin) < new Date(debut)) {
    alert("❌ La date de fin doit être après la date de début.");
    return;
  }
  if (telephone.replace(/\D/g, "").length < 8) {
  alert("❌ Numéro de téléphone invalide.");
  return;
}
if (nbJours <= 0) {
  alert("❌ Veuillez choisir des dates valides.");
  return;
}
  const { error } = await supabase.from("devis").insert([
    {
      nom,
      telephone,
      machine,
      ville,
      date_debut: debut,
      date_fin: fin,
      jours: nbJours,
      description,
      prix_total: prixTotal,
    },
  ]);

  if (error) {
    alert("❌ " + error.message);
    return;
  }

  alert("✅ Demande enregistrée !");

  setNom("");
  setTelephone("");
  setMachine("");
  setVille("");
  setDebut("");
  setFin("");
  setDescription("");
  setPrixJour(0);
setPrixTotal(0);
}
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "120px auto",
        padding: "35px",
        background: "#fff",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,.15)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        📅 Demander un devis
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "35px",
        }}
      >
        Remplissez le formulaire pour recevoir votre devis.
      </p>

      <input
        type="text"
        placeholder="Votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        style={input}
      />

      <input
        type="tel"
        placeholder="Téléphone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        style={input}
      />

      <input
  type="text"
  placeholder="Machine souhaitée"
  value={machine}
  onChange={(e) => setMachine(e.target.value)}
  style={input}
/>

      <input
        type="text"
        placeholder="Ville du chantier"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
        style={input}
      />

      <label style={label}>Date de début</label>

      <input
        type="date"
        value={debut}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setDebut(e.target.value)}
        style={input}
      />

      <label style={label}>Date de fin</label>

      <input
  type="date"
  value={fin}
  min={debut || new Date().toISOString().split("T")[0]}
  onChange={(e) => setFin(e.target.value)}
  style={input}
/>

      <textarea
        placeholder="Décrivez votre chantier..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          ...input,
          minHeight: "140px",
          resize: "vertical",
          fontFamily: "inherit",
        }}
      />
            {nbJours > 0 && (
        <div
          style={{
            background: "#f3f4f6",
            padding: "25px",
            borderRadius: "15px",
            marginBottom: "25px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>📋 Récapitulatif</h2>

          <p>
            🚜 Machine : <strong>{machine}</strong>
          </p>

          <p>
            📅 Nombre de jours : <strong>{nbJours}</strong>
          </p>
          <p>
  💰 Prix par jour : <strong>{prixJour.toLocaleString()} FCFA</strong>
</p>

<p
  style={{
    fontSize: "24px",
    fontWeight: "bold",
    color: "#16a34a",
  }}
>
  Total estimé : {prixTotal.toLocaleString()} FCFA
</p>
        </div>
      )}

      <button
  onClick={envoyerDevis}
  style={{
    width: "100%",
    padding: "18px",
    background: "#22c55e",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  📩 Envoyer la demande
</button>
    </main>
  );
}

const input = {
  width: "100%",
  padding: "15px",
  marginBottom: "20px",
  fontSize: "18px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  boxSizing: "border-box" as const,
};

const label = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "bold" as const,
};