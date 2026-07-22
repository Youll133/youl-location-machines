import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YOUL LOCATION MACHINES | Location d'engins de chantier en Côte d'Ivoire",

  description:
    "YOUL LOCATION MACHINES est spécialisé dans la location d'engins et de machines de chantier partout en Côte d'Ivoire : pelles hydrauliques, bulldozers, chargeuses, niveleuses, compacteurs, camions et matériels BTP.",

  keywords: [
    "location machine",
    "location machines",
    "location engins",
    "engins de chantier",
    "location pelle hydraulique",
    "bulldozer",
    "chargeuse",
    "niveleuse",
    "compacteur",
    "BTP",
    "Côte d'Ivoire",
    "Abidjan",
    "YOUL LOCATION MACHINES",
  ],

  authors: [
    {
      name: "YOUL LOCATION MACHINES",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        style={{
          margin: 0,
          background: "#f3f4f6",
          color: "#111827",
        }}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}