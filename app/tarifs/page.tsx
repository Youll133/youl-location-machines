import machines from "../../data/machines";
import Link from "next/link";

export default function TarifsPage() {
  return (
    <main
      style={{
        maxWidth: "1300px",
        margin: "120px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          color: "#111827",
          marginBottom: "15px",
        }}
      >
        💰 Nos tarifs
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          color: "#666",
          marginBottom: "50px",
        }}
      >
        Consultez nos tarifs de location pour nos principales machines.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
          gap: "30px",
        }}
      >
        {machines.map((machine) => (
          <div
            key={machine.id}
            style={{
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,.12)",
            }}
          >
            <img
              src={machine.image}
              alt={machine.nom}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h2>{machine.nom}</h2>

              <p
                style={{
                  color: "#ca8a04",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {machine.prix}
              </p>

              <p>🚜 <strong>Type :</strong> {machine.type}</p>
              <p>⚙️ <strong>Puissance :</strong> {machine.puissance}</p>
              <p>🏋️ <strong>Poids :</strong> {machine.poids}</p>
              <p>📍 <strong>Zone :</strong> {machine.ville}</p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginTop: "20px",
                }}
              >
                <Link
                  href={`/machine/${machine.id}`}
                  style={{
                    background: "#FFD400",
                    color: "#111",
                    textAlign: "center",
                    padding: "14px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Voir les détails
                </Link>

                <a
                  href="tel:+2250748416657"
                  style={{
                    background: "#2563eb",
                    color: "white",
                    textAlign: "center",
                    padding: "14px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  📞 Appeler
                </a>

                <a
                  href="https://wa.me/330780260603"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#22c55e",
                    color: "white",
                    textAlign: "center",
                    padding: "14px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  📲 WhatsApp
                </a>

                <Link
                  href="/reservation"
                  style={{
                    background: "#111827",
                    color: "white",
                    textAlign: "center",
                    padding: "14px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  📄 Demander un devis
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}