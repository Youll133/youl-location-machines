"use client";

import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await supabase.auth.signOut();

    router.replace("/login");
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      style={{
        background: "#dc2626",
        color: "white",
        border: "none",
        padding: "14px 22px",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "16px",
      }}
    >
      🚪 Déconnexion
    </button>
  );
}