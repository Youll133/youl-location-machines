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

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
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

  const imageUrl =
    typeof machine.image === "string" && machine.image.startsWith("http")
      ? machine.image
      : "";

  const canonicalUrl = `https://www.youllocationmachines.com/machine/${machine.id}`;

  return {
    title: `Location ${machine.nom} en Côte d'Ivoire | YOUL LOCATION MACHINES`,

    description: `Louez ${machine.nom} partout en Côte d'Ivoire avec YOUL LOCATION MACHINES. Machines fiables, disponibilité rapide et devis gratuit.`,

    alternates: {
      canonical: canonicalUrl,
    },

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
      url: canonicalUrl,
      type: "website",

      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: machine.nom,
            },
          ]
        : [],
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

  if (!machine) {
    return (
      <main
        style={{
          marginTop: "120px",
          textAlign: "center",
          padding: "30px",
        }}
      >
        <h1>Machine introuvable</h1>
      </main>
    );
  }

  // Compteur de vues
  await supabase.rpc("increment_machine_views", {
    machine_id: machine.id,
  });

  // Machines similaires
  const { data: machines } = await supabase
    .from("machines")
    .select("*");

  // Avis de cette machine
  const { data: avis } = await supabase
    .from("avis")
    .select("*")
    .eq("machine_id", machine.id)
    .order("created_at", { ascending: false });

  // Images
  const images = [
    machine.image,
    machine.image2,
    machine.image3,
    machine.image4,
    machine.image5,
    machine.image6,
    machine.image7,
  ].filter(Boolean);

  // URL principale de l'image
  const imageUrl =
    typeof machine.image === "string" &&
    machine.image.startsWith("http")
      ? machine.image
      : "";

  // URL canonique
  const canonicalUrl = `https://www.youllocationmachines.com/machine/${machine.id}`;

  // --------------------------------------------------
  // PRIX POUR GOOGLE
  // --------------------------------------------------

  /*
   * Google attend un nombre dans offers.price.
   *
   * Exemple :
   * "50 000 FCFA / jour" -> "50000"
   */

  const priceMatch = String(machine.prix ?? "").match(/[\d\s.,]+/);

  const numericPrice = priceMatch
    ? priceMatch[0].replace(/[^\d]/g, "")
    : "";

  // --------------------------------------------------
  // AVIS VALIDES
  // --------------------------------------------------

  const avisValides = (avis || []).filter(
    (a) =>
      typeof Number(a.note) === "number" &&
      Number(a.note) >= 1 &&
      Number(a.note) <= 5 &&
      typeof a.nom === "string" &&
      a.nom.trim() !== "" &&
      typeof a.commentaire === "string" &&
      a.commentaire.trim() !== ""
  );

  const reviewCount = avisValides.length;

  const ratingTotal = avisValides.reduce(
    (total, a) => total + Number(a.note),
    0
  );

  const ratingValue =
    reviewCount > 0
      ? Number((ratingTotal / reviewCount).toFixed(2))
      : 0;

  // --------------------------------------------------
  // DONNÉES STRUCTURÉES GOOGLE
  // --------------------------------------------------

  const structuredData: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: machine.nom,

    description:
      machine.description ||
      `Location de ${machine.nom} partout en Côte d'Ivoire.`,

    image: imageUrl ? [imageUrl] : [],

    brand: {
      "@type": "Brand",
      name: "YOUL LOCATION MACHINES",
    },

    offers: {
      "@type": "Offer",

      url: canonicalUrl,

      availability: machine.disponible
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",

      priceCurrency: "XOF",
    },
  };

  // Ajouter le prix uniquement s'il est réellement numérique
  if (numericPrice) {
    structuredData.offers.price = numericPrice;
  }

  // Ajouter les avis uniquement s'il existe réellement des avis
  if (reviewCount > 0) {
    structuredData.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      bestRating: 5,
      worstRating: 1,
      reviewCount,
    };

    structuredData.review = avisValides.map((a) => ({
      "@type": "Review",

      author: {
        "@type": "Person",
        name: a.nom,
      },

      datePublished: a.created_at
        ? new Date(a.created_at).toISOString().split("T")[0]
        : undefined,

      reviewRating: {
        "@type": "Rating",
        ratingValue: Number(a.note),
        bestRating: 5,
        worstRating: 1,
      },

      reviewBody: a.commentaire,
    }));
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
          color: machine.disponible ? "green" : "#dc2626",
          fontWeight: "bold",
          fontSize: "22px",
        }}
      >
        {machine.disponible
          ? "✅ Disponible immédiatement"
          : "❌ Actuellement indisponible"}
      </p>

      <p
        style={{
          fontSize: "20px",
          color: "#6b7280",
          marginTop: "10px",
        }}
      >
        👀 {machine.vues ?? 0} vue{(machine.vues ?? 0) > 1 ? "s" : ""}
      </p>

      <hr style={{ margin: "35px 0" }} />

      <h2>Description</h2>

      <p
        style={{
          fontSize: "21px",
          lineHeight: "36px",
        }}
      >
        {machine.nom} est disponible à la location partout en Côte d'Ivoire
        pour tous vos travaux de terrassement, construction, voirie,
        démolition, manutention et grands chantiers.
        <br />
        <br />
        Chez YOUL LOCATION MACHINES, toutes nos machines sont entretenues
        régulièrement afin de garantir une excellente fiabilité, de hautes
        performances et une sécurité maximale sur vos chantiers.
        <br />
        <br />
        Que votre projet soit situé à Abidjan, Bouaké, Yamoussoukro, San
        Pedro, Korhogo ou dans toute autre région de Côte d'Ivoire, notre
        équipe peut intervenir rapidement avec cette machine.
        <br />
        <br />
        Nous proposons également un accompagnement personnalisé afin de vous
        aider à choisir l'engin le mieux adapté à votre chantier.
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
        <br />
        <br />
        YOUL LOCATION MACHINES met cette machine à votre disposition pour
        tous vos travaux BTP, terrassement, voirie et construction avec une
        disponibilité rapide, des tarifs compétitifs et un accompagnement
        professionnel.
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
        Notre équipe est disponible pour répondre rapidement à votre demande
        de location de {machine.nom}. Nous intervenons partout en Côte
        d'Ivoire avec des machines fiables, entretenues et prêtes à travailler
        sur vos chantiers.
        <br />
        <br />
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
      </div>

      <hr style={{ margin: "60px 0" }} />

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
          __html: JSON.stringify(structuredData),
        }}
      />
    </main>
  );
}