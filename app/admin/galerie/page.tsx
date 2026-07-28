"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";

export default function AdminGalerie() {
  const [image, setImage] = useState<File | null>(null);
  const [titre, setTitre] = useState("");
const [ville, setVille] = useState("");
const [machine, setMachine] = useState("");
const [photos, setPhotos] = useState<any[]>([]);

useEffect(() => {
  chargerPhotos();
}, []);

async function chargerPhotos() {
  const { data } = await supabase
    .from("galerie")
    .select("*")
    .order("id", { ascending: false });

  setPhotos(data || []);
}

async function supprimerPhoto(id: number) {
  if (!confirm("Supprimer cette photo ?")) return;

  await supabase
    .from("galerie")
    .delete()
    .eq("id", id);

  chargerPhotos();
}
  async function ajouterPhoto() {
    if (!image) {
      alert("Choisissez une image");
      return;
    }

    const fileName = Date.now() + "-" + image.name;

    const { error: uploadError } = await supabase.storage
      .from("galerie")
      .upload(fileName, image);

    if (uploadError) {
      alert(uploadError.message);
      return;
    }

    const imageUrl = supabase.storage
      .from("galerie")
      .getPublicUrl(fileName).data.publicUrl;

   const { error } = await supabase.from("galerie").insert([
  {
    image: imageUrl,
    titre,
    ville,
    machine,
  },
]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Photo ajoutée !");

chargerPhotos();

setImage(null);
setTitre("");
setVille("");
setMachine("");
  }

  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "120px auto",
        padding: "30px",
      }}
    >
      <h1>📸 Gérer la galerie</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.length) {
            setImage(e.target.files[0]);
          }
        }}
      />

      <br />
      <br />
<input
  type="text"
  placeholder="Titre de la réalisation"
  value={titre}
  onChange={(e) => setTitre(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  }}
/>

<input
  type="text"
  placeholder="Ville"
  value={ville}
  onChange={(e) => setVille(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  }}
/>

<input
  type="text"
  placeholder="Machine utilisée"
  value={machine}
  onChange={(e) => setMachine(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
  }}
/>
      <button onClick={ajouterPhoto}>
        ➕ Ajouter la photo
      </button>
      <hr style={{ margin: "40px 0" }} />

<h2>📸 Photos enregistrées</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
  }}
>
  {photos.map((photo) => (
    <div
      key={photo.id}
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <img
        src={photo.image}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
<h3>{photo.titre}</h3>

<p>📍 {photo.ville}</p>

<p>🚜 {photo.machine}</p>
      <button
        onClick={() => supprimerPhoto(photo.id)}
        style={{
          width: "100%",
          marginTop: "10px",
          background: "#dc2626",
          color: "white",
          border: "none",
          padding: "12px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        🗑️ Supprimer
      </button>
    </div>
  ))}
</div>
    </main>
  );
}