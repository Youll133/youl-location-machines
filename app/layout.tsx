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
  metadataBase: new URL("https://www.youllocationmachines.com"),

  title: "YOUL LOCATION MACHINES | Location d'engins de chantier en Côte d'Ivoire",

  description:
  "YOUL LOCATION MACHINES est votre spécialiste de la location d'engins de chantier en Côte d'Ivoire. Bulldozers, pelles hydrauliques, chargeuses, tractopelles, niveleuses, compacteurs et matériels BTP disponibles partout en Côte d'Ivoire.",

 keywords: [
  "YOUL LOCATION MACHINES",
  "location engins Côte d'Ivoire",
  "location machines Côte d'Ivoire",
  "location pelle hydraulique",
  "location bulldozer",
  "location chargeuse",
  "location niveleuse",
  "location tractopelle",
  "location compacteur",
  "location camion",
  "location engins Abidjan",
  "location engins Bouaké",
  "location engins Yamoussoukro",
  "engins BTP",
  "entreprise BTP Côte d'Ivoire",
  "matériel chantier",
  "travaux publics",
  "terrassement",
  "chantier Côte d'Ivoire",
],

  authors: [
    {
      name: "YOUL LOCATION MACHINES",
    },
  ],
creator: "YOUL LOCATION MACHINES",

publisher: "YOUL LOCATION MACHINES",

category: "Location d'engins de chantier",

  openGraph: {
    title: "YOUL LOCATION MACHINES",
    description:
      "Location d'engins de chantier partout en Côte d'Ivoire.",
    url: "https://www.youllocationmachines.com",
    siteName: "YOUL LOCATION MACHINES",
    locale: "fr_FR",
    type: "website",

    images: [
      {
        url: "/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "YOUL LOCATION MACHINES",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YOUL LOCATION MACHINES",
    description:
      "Location d'engins de chantier partout en Côte d'Ivoire.",
    images: ["/logos/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
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
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "YOUL LOCATION MACHINES",
      image: "https://www.youllocationmachines.com/logos/logo.png",
      url: "https://www.youllocationmachines.com",
      telephone: "+2250748416657",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CI",
      },
      areaServed: "Côte d'Ivoire",
      description:
        "Location d'engins de chantier partout en Côte d'Ivoire : bulldozers, pelles hydrauliques, chargeuses, niveleuses, tractopelles, compacteurs et matériels BTP.",
    }),
  }}
/>
      </body>
    </html>
  );
}