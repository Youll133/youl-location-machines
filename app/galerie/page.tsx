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
  alt={`${photo.machine} sur un chantier en Côte d'Ivoire - YOUL LOCATION MACHINES`}
  loading="lazy"
  decoding="async"
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
      <hr style={{ margin: "60px 0" }} />

<h2>Location d'engins de chantier en Côte d'Ivoire</h2>

<p
  style={{
    fontSize: "20px",
    lineHeight: "35px",
  }}
>
Cette galerie présente quelques réalisations de YOUL LOCATION MACHINES sur
différents chantiers en Côte d'Ivoire. Nos équipes interviennent régulièrement
pour des travaux de terrassement, de construction, de voirie, de démolition
et de travaux publics avec des machines performantes et entretenues.
</p>

<p
  style={{
    fontSize: "20px",
    lineHeight: "35px",
  }}
>
Nous proposons la location de pelles hydrauliques, bulldozers, chargeuses,
tractopelles, niveleuses, compacteurs et autres matériels BTP à Abidjan,
Yamoussoukro, Bouaké, San Pedro, Korhogo ainsi que dans toutes les régions
de Côte d'Ivoire.
</p>

<p
  style={{
    fontSize: "20px",
    lineHeight: "35px",
  }}
>
Grâce à notre expérience et à notre réactivité, YOUL LOCATION MACHINES
accompagne les entreprises et les particuliers avec des solutions adaptées à
chaque chantier. Cette galerie illustre la qualité de nos interventions et la
fiabilité de notre parc de machines.
</p>
    </main>
  );
}