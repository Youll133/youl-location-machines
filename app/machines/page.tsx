import Machines from "../../components/Machines";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location d'engins de chantier en Côte d'Ivoire | YOUL LOCATION MACHINES",

  description:
    "Découvrez toutes nos machines de chantier disponibles à la location partout en Côte d'Ivoire : pelles hydrauliques, bulldozers, chargeuses, tractopelles, niveleuses, compacteurs et matériels BTP.",

  alternates: {
    canonical: "https://www.youllocationmachines.com/machines",
  },

  openGraph: {
    title: "Location d'engins de chantier en Côte d'Ivoire | YOUL LOCATION MACHINES",
    description:
      "Découvrez toutes nos machines de chantier disponibles partout en Côte d'Ivoire.",
    url: "https://www.youllocationmachines.com/machines",
    type: "website",
  },
};
export default function MachinesPage() {
  return (
    <main
      style={{
        paddingTop: "100px",
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <Machines />
    </main>
  );
}