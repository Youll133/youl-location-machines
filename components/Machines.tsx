"use client";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Machines() {

  const [search, setSearch] = useState("");
  const [machines, setMachines] = useState<any[]>([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
  async function loadMachines() {
    const { data, error } = await supabase
      .from("machines")
      .select("*");

    if (error) {
      console.error(error);
    } else {
      setMachines(data || []);
    }

    setLoading(false);
  }

  loadMachines();
}, []);

 
if (loading) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "150px",
        fontSize: "28px",
        fontWeight: "bold",
      }}
    >
      ⏳ Chargement des machines...
    </div>
  );
}
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#f4f6f9",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "bold",
          marginBottom: "15px",
          color: "#111827",
        }}
      >
        🚜 Notre flotte de machines
      </h2>

      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          color: "#555",
          marginBottom: "60px",
        }}
      >
        Nos machines sont disponibles partout en Côte d'Ivoire.
      </p>
      <div
  style={{
    maxWidth: "650px",
    margin: "0 auto 50px",
  }}
>
  <input
    type="text"
    placeholder="🔍 Rechercher une machine..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      width: "100%",
      padding: "18px",
      borderRadius: "14px",
      border: "2px solid #ddd",
      fontSize: "18px",
      outline: "none",
      boxSizing: "border-box",
    }}
  />
</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "35px",
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
       {machines
  .filter((machine) =>
    machine.nom.toLowerCase().includes(search.toLowerCase())
  )
  .slice(0, 6)
  .map((machine) => (
          <div
            key={machine.id}
            style={{
              background: "#fff",
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,0,0,.12)",
              transition: "0.3s",
            }}
          >
            <div
  style={{
    background: "#ffffff",
    height: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    position: "relative",
  }}
>
 <FavoriteButton machineId={machine.id} />
              <img
                src={machine.image}
                alt={machine.nom}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div style={{ padding: "28px" }}>
              <span
                style={{
                  background: "#22c55e",
                  color: "white",
                  padding: "6px 14px",
                  borderRadius: "30px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Disponible
              </span>

              <h3
                style={{
                  fontSize: "30px",
                  marginTop: "18px",
                  marginBottom: "18px",
                  color: "#111827",
                }}
              >
                {machine.nom}
              </h3>

              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#ca8a04",
                  marginBottom: "12px",
                }}
              >
                💰 {machine.prix}
              </p>

              <p
                style={{
                  fontSize: "19px",
                  color: "#555",
                  marginBottom: "25px",
                }}
              >
                📍 {machine.ville}
              </p>
              <div
  style={{
    background: "#f8fafc",
    padding: "14px",
    borderRadius: "12px",
    marginBottom: "20px",
    border: "1px solid #e5e7eb",
  }}
>
  <p style={{ margin: "6px 0", fontSize: "16px" }}>
    🚜 <strong>Type :</strong> {machine.type}
  </p>

  <p style={{ margin: "6px 0", fontSize: "16px" }}>
    ⚙️ <strong>Puissance :</strong> {machine.puissance}
  </p>

  <p style={{ margin: "6px 0", fontSize: "16px" }}>
    🏋️ <strong>Poids :</strong> {machine.poids}
  </p>
</div>

              <Link
                href={`/machine/${machine.id}`}
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#FFD400",
                  color: "#111",
                  padding: "16px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "19px",
                }}
              >
                Voir les détails →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}