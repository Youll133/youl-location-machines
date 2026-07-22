"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function seConnecter(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("❌ " + error.message);
      return;
    }

    alert("✅ Connexion réussie !");

    // Rafraîchit le routeur pour prendre en compte la session
    router.refresh();

    // Redirige vers l'administration
    router.replace("/admin");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 15px 35px rgba(0,0,0,.12)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "38px",
            color: "#111827",
          }}
        >
          🔐 Connexion Admin
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "35px",
          }}
        >
          Connectez-vous à YOUL LOCATION MACHINES
        </p>

        <form
          onSubmit={seConnecter}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="📧 Adresse e-mail"
            style={input}
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="🔒 Mot de passe"
            style={input}
            required
          />

          <button
            type="submit"
            style={{
              background: "#FFD400",
              color: "#111",
              border: "none",
              padding: "16px",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Se connecter
          </button>
        </form>

        <div
          style={{
            marginTop: "25px",
            textAlign: "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}

const input = {
  width: "100%",
  padding: "15px",
  borderRadius: "10px",
  border: "2px solid #ddd",
  fontSize: "17px",
  boxSizing: "border-box" as const,
};