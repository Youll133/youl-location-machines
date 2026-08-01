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
      <section
  style={{
    maxWidth: "1200px",
    margin: "80px auto",
    padding: "30px",
    lineHeight: "1.8",
  }}
>
  <h2>Nos machines de chantier disponibles en Côte d'Ivoire</h2>

  <p>
    YOUL LOCATION MACHINES met à votre disposition une large gamme d'engins de
    chantier pour tous vos projets de construction, terrassement, démolition,
    voirie et travaux publics en Côte d'Ivoire. Toutes nos machines sont
    entretenues régulièrement afin de garantir des performances optimales et une
    sécurité maximale sur vos chantiers.
  </p>

  <p>
    Nous proposons la location de pelles hydrauliques, bulldozers, chargeuses,
    tractopelles, niveleuses, compacteurs, camions et de nombreux matériels BTP
    adaptés aussi bien aux petits qu'aux grands chantiers.
  </p>

  <h2>Location d'engins partout en Côte d'Ivoire</h2>

  <p>
    Nos équipes interviennent rapidement à Abidjan, Bouaké, Yamoussoukro, San
    Pedro, Korhogo, Daloa, Man et dans toutes les régions de Côte d'Ivoire.
    Nous livrons les machines directement sur votre chantier afin de vous faire
    gagner du temps.
  </p>

  <h2>Pourquoi louer chez YOUL LOCATION MACHINES ?</h2>

  <p>
    En choisissant YOUL LOCATION MACHINES, vous bénéficiez de machines fiables,
    d'un accompagnement professionnel, de tarifs compétitifs, d'une grande
    disponibilité ainsi que d'un devis gratuit. Notre objectif est de fournir
    des solutions adaptées à tous les professionnels du BTP et aux particuliers
    recherchant une location d'engins de chantier en Côte d'Ivoire.
  </p>
</section>
    </main>
  );
}