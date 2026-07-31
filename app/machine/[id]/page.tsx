import FormulaireAvis from "../../../components/FormulaireAvis";
import Avis from "../../../components/Avis";
import Gallery from "../../../components/Gallery";
import Link from "next/link";
import { createClient } from "../../../lib/server";
import type { Metadata } from "next";
type Props = {
  params: Promise<{
    id: string;
  }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const supabase = await createClient();

  const { data: machine } = await supabase
    .from("machines")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (!machine) {
    return {
      title: "Machine introuvable | YOUL LOCATION MACHINES",
    };
  }

  return {
  title: `Location ${machine.nom} en Côte d'Ivoire | YOUL LOCATION MACHINES`,
  description: `Louez ${machine.nom} partout en Côte d'Ivoire avec YOUL LOCATION MACHINES. Machines fiables, disponibilité rapide et devis gratuit.`,
  keywords: [
    `location ${machine.nom}`,
    `location ${machine.nom} Côte d'Ivoire`,
    `location ${machine.nom} Abidjan`,
    "location machine BTP",
    "location engins",
    "YOUL LOCATION MACHINES",
  ],
  openGraph: {
  title: `Location ${machine.nom} en Côte d'Ivoire | YOUL LOCATION MACHINES`,
  description: `Louez ${machine.nom} partout en Côte d'Ivoire avec YOUL LOCATION MACHINES.`,
  url: `https://www.youllocationmachines.com/machine/${id}`,
type: "website",
  images: [
    {
      url: `https://www.youllocationmachines.com${machine.image}`,
      width: 1200,
      height: 630,
      alt: machine.nom,
    },
  ],
},
};
}
export default async function MachineDetails({ params }: Props) {
 const { id } = await params;
const supabase = await createClient();
const { data: machine } = await supabase
  .from("machines")
  .select("*")
  .eq("id", Number(id))
  .single();
await supabase
  .from("machines")
  .update({
    vues: (machine?.vues ?? 0) + 1,
  })
  .eq("id", Number(id));
const { data: machines } = await supabase
  .from("machines")
  .select("*");

const images = [
  machine?.image,
  machine?.image2,
  machine?.image3,
  machine?.image4,
  machine?.image5,
  machine?.image6,
  machine?.image7,
].filter(Boolean);

if (!machine) {
  return (
    <main style={{ marginTop: "120px", textAlign: "center" }}>
      <h1>Machine introuvable</h1>
    </main>
  );
}

return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "120px auto",
        padding: "30px",
      }}
    >
     <Gallery images={images} />

      <h1
        style={{
          fontSize: "48px",
          marginTop: "30px",
        }}
      >
        {machine.nom}
      </h1>

      <h2
        style={{
          color: "#ca8a04",
          fontSize: "32px",
        }}
      >
        💰 {machine.prix}
      </h2>

      <p style={{ fontSize: "22px" }}>
        📍 Disponible partout en Côte d'Ivoire
      </p>
      <div
  style={{
    marginTop: "35px",
    background: "#f8fafc",
    borderRadius: "18px",
    padding: "25px",
    border: "1px solid #e5e7eb",
  }}
>
  <h2
    style={{
      marginTop: 0,
      color: "#111827",
    }}
  >
    📋 Fiche technique
  </h2>

  <p style={{ fontSize: "20px" }}>
    🚜 <strong>Type :</strong> {machine.type}
  </p>

  <p style={{ fontSize: "20px" }}>
    ⚙️ <strong>Puissance :</strong> {machine.puissance}
  </p>

  <p style={{ fontSize: "20px" }}>
    🏋️ <strong>Poids :</strong> {machine.poids}
  </p>

  <p style={{ fontSize: "20px" }}>
    📍 <strong>Zone :</strong> {machine.ville}
  </p>
</div>

      <p
        style={{
          color: "green",
          fontWeight: "bold",
          fontSize: "22px",
        }}
      >
        ✅ Disponible immédiatement
      </p>
<p
  style={{
    fontSize: "20px",
    color: "#6b7280",
    marginTop: "10px",
  }}
>
  👀 {machine.vues} vue{machine.vues > 1 ? "s" : ""}
</p>
      <hr style={{ margin: "35px 0" }} />

     <h2>Description</h2>

<p
  style={{
    fontSize: "21px",
    lineHeight: "36px",
  }}
>
  {machine.nom} est disponible à la location partout en Côte d'Ivoire pour
  tous vos travaux de terrassement, construction, voirie, démolition,
  manutention et grands chantiers.

  Chez YOUL LOCATION MACHINES, toutes nos machines sont entretenues
  régulièrement afin de garantir une excellente fiabilité, de hautes
  performances et une sécurité maximale sur vos chantiers.

  Que votre projet soit situé à Abidjan, Bouaké, Yamoussoukro, San Pedro,
  Korhogo ou dans toute autre région de Côte d'Ivoire, notre équipe peut
  intervenir rapidement avec cette machine.

  Nous proposons également un accompagnement personnalisé afin de vous aider
  à choisir l'engin le mieux adapté à votre chantier.
</p>

      <h2 style={{ marginTop: "40px" }}>
        Pourquoi choisir YOUL LOCATION MACHINES ?
      </h2>

      <ul
        style={{
          fontSize: "20px",
          lineHeight: "38px",
        }}
      >
        <li>✅ Machines fiables et entretenues</li>
        <li>✅ Intervention partout en Côte d'Ivoire</li>
        <li>✅ Tarifs compétitifs</li>
        <li>✅ Réponse rapide</li>
        <li>✅ Service professionnel</li>
      </ul>
      <h2 style={{ marginTop: "50px" }}>
  Location de {machine.nom} en Côte d'Ivoire
</h2>

<p
  style={{
    fontSize: "20px",
    lineHeight: "35px",
  }}
>
  Vous recherchez une location de {machine.nom} à Abidjan, Bouaké,
  Yamoussoukro, San Pedro ou partout en Côte d'Ivoire ?

  YOUL LOCATION MACHINES met cette machine à votre disposition pour tous vos
  travaux BTP, terrassement, voirie et construction avec une disponibilité
  rapide, des tarifs compétitifs et un accompagnement professionnel.
</p>
<h2 style={{ marginTop: "50px" }}>
  Besoin de louer cette machine ?
</h2>

<p
  style={{
    fontSize: "20px",
    lineHeight: "35px",
  }}
>
Notre équipe est disponible pour répondre rapidement à votre demande de
location de {machine.nom}. Nous intervenons partout en Côte d'Ivoire avec
des machines fiables, entretenues et prêtes à travailler sur vos chantiers.
Contactez-nous dès maintenant pour obtenir un devis gratuit.
</p>

     <div
  style={{
    display: "flex",
    gap: "20px",
    marginTop: "40px",
    flexWrap: "wrap",
  }}
>
  <Link
    href="/reservation"
    style={{
      background: "#FFD400",
      padding: "18px 35px",
      borderRadius: "12px",
      textDecoration: "none",
      color: "black",
      fontWeight: "bold",
      fontSize: "20px",
    }}
  >
    📅 Réserver cette machine
  </Link>

  <a
    href="https://wa.me/330780260603"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: "#22c55e",
      color: "white",
      padding: "18px 35px",
      borderRadius: "12px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "20px",
    }}
  >
    💬 WhatsApp
  </a>

  <a
    href="tel:+2250748416657"
    style={{
      background: "#2563eb",
      color: "white",
      padding: "18px 35px",
      borderRadius: "12px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "20px",
    }}
  >
    📞 Appeler
  </a>
</div>      <hr style={{ margin: "60px 0" }} />

<h2
  style={{
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "34px",
  }}
>
  🚜 Machines similaires
</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "25px",
  }}
>
 {(machines || [])
  .filter((m) => m.id !== machine.id)
  .slice(0, 3)
  .map((m) => (
      
      <div
        key={m.id}
        style={{
          background: "#fff",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,.10)",
        }}
      >
        <img
          src={m.image}
          alt={m.nom}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "20px" }}>
          <h3>{m.nom}</h3>

          <p
            style={{
              color: "#ca8a04",
              fontWeight: "bold",
            }}
          >
            {m.prix}
          </p>

          <Link
            href={`/machine/${m.id}`}
            style={{
              display: "inline-block",
              marginTop: "10px",
              background: "#FFD400",
              color: "#111",
              padding: "10px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Voir les détails
          </Link>
        </div>
      </div>
    ))}
</div>
<FormulaireAvis machineId={machine.id} />

<Avis machineId={machine.id} />
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: machine.nom,
      image: `https://www.youllocationmachines.com${machine.image}`,
      description: `Location de ${machine.nom} partout en Côte d'Ivoire.`,
      brand: {
        "@type": "Organization",
        name: "YOUL LOCATION MACHINES",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "XOF",
        price: machine.prix,
      },
    }),
  }}
/>
</main>
  );
}