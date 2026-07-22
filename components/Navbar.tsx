"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setMobile(window.innerWidth < 900);
    };

    checkSize();

    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "rgba(17,24,39,.97)",
        backdropFilter: "blur(12px)",
        zIndex: 999,
        boxShadow: "0 8px 25px rgba(0,0,0,.25)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
          padding: "16px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logos/logo.png"
            alt="YOUL"
            width={60}
            height={60}
          />

          <div>
            <div
              style={{
                color: "#FFD400",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              YOUL LOCATION MACHINES
            </div>

            <div
              style={{
                color: "#d1d5db",
                fontSize: "13px",
              }}
            >
              Côte d'Ivoire
            </div>
          </div>
        </Link>
                {mobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "34px",
              cursor: "pointer",
            }}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        ) : (
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <Link href="/" style={link}>
              Accueil
            </Link>

            <Link href="/machines" style={link}>
              Machines
            </Link>

            <Link href="/services" style={link}>
              Services
            </Link>

            <Link href="/admin" style={link}>
              🛠️ Admin
            </Link>

            <Link href="/entreprise" style={link}>
              Entreprise
            </Link>

            <Link href="/tarifs" style={link}>
              Tarifs
            </Link>

            <Link href="/galerie" style={link}>
              Galerie
            </Link>

            <Link href="/contact" style={link}>
              Contact
            </Link>

            <Link href="/faq" style={link}>
              FAQ
            </Link>

            <Link
              href="/reservation"
              style={{
                background: "#FFD400",
                color: "#111",
                padding: "12px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              📄 Devis
            </Link>
          </nav>
        )}
      </div>
            {mobile && menuOpen && (
        <div
          style={{
            background: "#111827",
            borderTop: "1px solid #374151",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            padding: "25px",
          }}
        >
          <Link href="/" style={link} onClick={() => setMenuOpen(false)}>
            🏠 Accueil
          </Link>

          <Link
            href="/machines"
            style={link}
            onClick={() => setMenuOpen(false)}
          >
            🚜 Machines
          </Link>

          <Link
            href="/services"
            style={link}
            onClick={() => setMenuOpen(false)}
          >
            🛠️ Services
          </Link>

          <Link
            href="/admin"
            style={link}
            onClick={() => setMenuOpen(false)}
          >
            🛠️ Admin
          </Link>

          <Link
            href="/entreprise"
            style={link}
            onClick={() => setMenuOpen(false)}
          >
            🏢 Entreprise
          </Link>

          <Link
            href="/tarifs"
            style={link}
            onClick={() => setMenuOpen(false)}
          >
            💰 Tarifs
          </Link>

          <Link
            href="/galerie"
            style={link}
            onClick={() => setMenuOpen(false)}
          >
            📸 Galerie
          </Link>

          <Link
            href="/contact"
            style={link}
            onClick={() => setMenuOpen(false)}
          >
            📞 Contact
          </Link>

          <Link
            href="/faq"
            style={link}
            onClick={() => setMenuOpen(false)}
          >
            ❓ FAQ
          </Link>

          <Link
            href="/reservation"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "#FFD400",
              color: "#111",
              padding: "14px",
              borderRadius: "10px",
              textDecoration: "none",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            📄 Demander un devis
          </Link>
        </div>
      )}
          </header>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "17px",
  transition: "0.3s",
};