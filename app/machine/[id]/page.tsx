import FormulaireAvis from "../../../components/FormulaireAvis";
import Avis from "../../../components/Avis";
import Gallery from "../../../components/Gallery";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MachineDetails({ params }: Props) {
 const { id } = await params;

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
        Cette machine est entretenue régulièrement et est disponible pour tous
        vos travaux de chantier, terrassement, nivellement, construction,
        voirie et grands projets partout en Côte d'Ivoire.
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

</main>
  );
}