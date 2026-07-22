"use client";

import { useState } from "react";



export default function ReservationPage() {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [machine, setMachine] = useState("");
  const [ville, setVille] = useState("");
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");
  const [description, setDescription] = useState("");


  let nbJours = 0;

  if (debut && fin) {
    const dateDebut = new Date(debut);
    const dateFin = new Date(fin);

    const difference = dateFin.getTime() - dateDebut.getTime();

    nbJours = Math.ceil(difference / (1000 * 60 * 60 * 24)) + 1;

    
  }

  const message = `Bonjour, je souhaite demander un devis.

Nom : ${nom}

Téléphone : ${telephone}

Machine : ${machine}

Ville : ${ville}

Date de début : ${debut}

Date de fin : ${fin}

Nombre de jours : ${nbJours}

Nombre de jours : ${nbJours}

Description :

${description}`;

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
        onChange={(e) => setDebut(e.target.value)}
        style={input}
      />

      <label style={label}>Date de fin</label>

      <input
        type="date"
        value={fin}
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
          
        </div>
      )}

      <a
        href={`https://wa.me/33780260603?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          width: "100%",
          padding: "18px",
          background: "#22c55e",
          color: "#fff",
          textAlign: "center",
          textDecoration: "none",
          borderRadius: "12px",
          fontSize: "20px",
          fontWeight: "bold",
          boxSizing: "border-box",
        }}
      >
        📲 Envoyer la demande sur WhatsApp
      </a>
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