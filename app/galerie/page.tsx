"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function GaleriePage() {
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

  return (
    <main
      style={{
        maxWidth: "1300px",
        margin: "120px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        📸 Galerie de nos réalisations
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          color: "#666",
          marginBottom: "60px",
        }}
      >
        Découvrez quelques réalisations de YOUL LOCATION MACHINES.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "30px",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,.12)",
            }}
          >
            <img
              src={photo.image}
              alt={photo.titre}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "20px",
              }}
            >
              <h2>{photo.titre}</h2>

              <p>📍 {photo.ville}</p>

              <p>🚜 {photo.machine}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}