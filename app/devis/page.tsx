"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function DevisPage() {
  const [nom, setNom] = useState("");
const [telephone, setTelephone] = useState("");
const [email, setEmail] = useState("");
const [machine, setMachine] = useState("");
const [jours, setJours] = useState("");
const [message, setMessage] = useState("");
async function envoyerDevis(e: React.FormEvent) {
  e.preventDefault();
  const { data, error } = await supabase
    .from("devis")
    .insert([
      {
        nom,
        telephone,
        email,
        machine,
        jours: Number(jours),
        message,
      },
    ]);
console.log(data);
console.log(error);
  if (error) {
    alert("❌ " + error.message);
    return;
  }

  alert("✅ Votre demande a été envoyée avec succès !");

  setNom("");
  setTelephone("");
  setEmail("");
  setMachine("");
  setJours("");
  setMessage("");
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
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        📄 Demander un devis
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#555",
          marginBottom: "40px",
        }}
      >
        Remplissez ce formulaire et nous vous répondrons rapidement.
      </p>

      <form
  onSubmit={envoyerDevis}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
       <input
  type="text"
  value={nom}
  onChange={(e) => setNom(e.target.value)}
  placeholder="Nom complet"
  required
          style={{
            padding: "18px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

       <input
  type="tel"
  value={telephone}
  onChange={(e) => setTelephone(e.target.value)}
  placeholder="Téléphone"
  required
          style={{
            padding: "18px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"
  required
  style={{
    padding: "18px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  }}
/>

<input
  type="text"
  value={machine}
  onChange={(e) => setMachine(e.target.value)}
  placeholder="🚜 Machine souhaitée (ex : Pelle Caterpillar 320, Bulldozer D8...)"
  required
  style={{
    padding: "18px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  }}
/>
<p
  style={{
    marginTop: "-10px",
    color: "#666",
    fontSize: "14px",
  }}
>
  Vous ne connaissez pas le nom exact ? Décrivez simplement la machine recherchée.
</p>
<input
  type="number"
  value={jours}
  onChange={(e) => setJours(e.target.value)}
  placeholder="Nombre de jours"
  required
  style={{
    padding: "18px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  }}
/>

<textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Décrivez votre besoin..."
  rows={6}
  style={{
    padding: "18px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  }}
/>

        <button
          type="submit"
          style={{
            background: "#facc15",
            border: "none",
            padding: "18px",
            borderRadius: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          📩 Envoyer la demande
        </button>
      </form>
    </main>
  );
}