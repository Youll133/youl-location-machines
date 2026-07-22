"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Props = {
  machineId: number;
};

export default function Avis({ machineId }: Props) {
  const [avis, setAvis] = useState<any[]>([]);

  useEffect(() => {
    chargerAvis();
  }, []);

  async function chargerAvis() {
    const { data } = await supabase
      .from("avis")
      .select("*")
      .eq("machine_id", machineId)
      .order("created_at", { ascending: false });

    setAvis(data || []);
  }

  return (
    <div style={{ marginTop: "60px" }}>
      <h2>⭐⭐⭐⭐⭐ Avis des clients</h2>

      {avis.length === 0 && (
        <p>Aucun avis pour cette machine.</p>
      )}

      {avis.map((a) => (
        <div
          key={a.id}
          style={{
            background: "#fff",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "12px",
            border: "1px solid #ddd",
          }}
        >
          <h3>{a.nom}</h3>

          <p>
            {"⭐".repeat(a.note)}
          </p>

          <p>{a.commentaire}</p>
        </div>
      ))}
    </div>
  );
}