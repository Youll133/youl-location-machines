"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function AjouterMachinePage() {
 const [image2, setImage2] = useState<File | null>(null);
const [image3, setImage3] = useState<File | null>(null);
const [image4, setImage4] = useState<File | null>(null);
const [image5, setImage5] = useState<File | null>(null);
const [image6, setImage6] = useState<File | null>(null);
const [image7, setImage7] = useState<File | null>(null);
  const [nom, setNom] = useState("");
const [prix, setPrix] = useState("");
const [ville, setVille] = useState("");
const [type, setType] = useState("");
const [puissance, setPuissance] = useState("");
const [poids, setPoids] = useState("");
const [image, setImage] = useState<File | null>(null);
const [description, setDescription] = useState("");
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
        ➕ Ajouter une machine
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#666",
          marginBottom: "40px",
        }}
      >
        Complétez les informations de la nouvelle machine.
      </p>

      <form
  onSubmit={async (e) => {
  e.preventDefault();

  let imageUrl = "";
  let image2Url = "";
  let image3Url = "";
  let image4Url = "";
  let image5Url = "";
let image6Url = "";
let image7Url = "";
  async function uploadImage(file: File | null) {
    if (!file) return "";

    const fileName = Date.now() + "-" + Math.random() + "-" + file.name;

    const { error } = await supabase.storage
      .from("machines")
      .upload(fileName, file);

    if (error) {
      throw error;
    }

    return supabase.storage
      .from("machines")
      .getPublicUrl(fileName).data.publicUrl;
  }

  try {
    imageUrl = await uploadImage(image);
    image2Url = await uploadImage(image2);
    image3Url = await uploadImage(image3);
    image4Url = await uploadImage(image4);
    image5Url = await uploadImage(image5);
image6Url = await uploadImage(image6);
image7Url = await uploadImage(image7);
    const { error } = await supabase.from("machines").insert([
      {
        nom,
        prix,
        ville,
        type,
        puissance,
        poids,
        image: imageUrl,
        image2: image2Url,
        image3: image3Url,
        image4: image4Url,
        image5: image5Url,
        image6: image6Url,
image7: image7Url,
        description,
        disponible: true,
      },
    ]);

    if (error) {
      alert("❌ " + error.message);
      return;
    }

    alert("✅ Machine ajoutée avec succès !");

    setNom("");
    setPrix("");
    setVille("");
    setType("");
    setPuissance("");
    setPoids("");
    setDescription("");

    setImage(null);
    setImage2(null);
    setImage3(null);
    setImage4(null);
    setImage5(null);
    setImage6(null);
setImage7(null);
  } catch (err: any) {
    alert("❌ Erreur upload : " + err.message);
  }
}}
  style={{
    display: "grid",
    gap: "20px",
  }}
>
        <input
  type="text"
  placeholder="🚜 Nom de la machine"
  value={nom}
  onChange={(e) => setNom(e.target.value)}
  style={input}
/>

       <input
  type="text"
  placeholder="💰 Prix / jour"
  value={prix}
  onChange={(e) => setPrix(e.target.value)}
  style={input}
/>

        <input
  type="text"
  placeholder="📍 Ville"
  value={ville}
  onChange={(e) => setVille(e.target.value)}
  style={input}
/>

        <input
  type="text"
  placeholder="🏷️ Type"
  value={type}
  onChange={(e) => setType(e.target.value)}
  style={input}
/>

        <input
  type="text"
  placeholder="⚙️ Puissance"
  value={puissance}
  onChange={(e) => setPuissance(e.target.value)}
  style={input}
/>

        <input
  type="text"
  placeholder="⚖️ Poids"
  value={poids}
  onChange={(e) => setPoids(e.target.value)}
  style={input}
/>

        <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  }}
  style={input}
/>
<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage2(e.target.files[0]);
    }
  }}
  style={input}
/>

<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage3(e.target.files[0]);
    }
  }}
  style={input}
/>

<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage4(e.target.files[0]);
    }
  }}
  style={input}
/>

<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage5(e.target.files[0]);
    }
  }}
  style={input}
/>
<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage6(e.target.files[0]);
    }
  }}
  style={input}
/>

<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage7(e.target.files[0]);
    }
  }}
  style={input}
/>
        <textarea
  placeholder="📝 Description de la machine"
  rows={6}
  value={description}
  onChange={(e) => setDescription(e.target.value)}
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
          ➕ Ajouter la machine
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