"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Props = {
  machineId: number;
};

export default function FavoriteButton({ machineId }: Props) {
  const [favori, setFavori] = useState(false);

  useEffect(() => {
    let sessionId = localStorage.getItem("session_id");

    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem("session_id", sessionId);
    }

    verifierFavori(sessionId);
  }, []);

  async function verifierFavori(sessionId: string) {
    const { data } = await supabase
      .from("favoris")
      .select("*")
      .eq("machine_id", machineId)
      .eq("session_id", sessionId)
      .maybeSingle();

    setFavori(!!data);
  }

  async function toggleFavori() {
    const sessionId = localStorage.getItem("session_id")!;

    if (favori) {
      await supabase
        .from("favoris")
        .delete()
        .eq("machine_id", machineId)
        .eq("session_id", sessionId);

      setFavori(false);
    } else {
      await supabase.from("favoris").insert({
        machine_id: machineId,
        session_id: sessionId,
      });

      setFavori(true);
    }
  }

  return (
    <button
      onClick={toggleFavori}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "34px",
      }}
    >
      {favori ? "❤️" : "🤍"}
    </button>
  );
}