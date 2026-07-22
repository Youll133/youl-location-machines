import { supabase } from "../../lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("machines")
    .select("*");

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "120px auto",
        padding: "30px",
      }}
    >
      <h1>🚜 Test de connexion Supabase</h1>

      {error ? (
        <div
          style={{
            background: "#fee2e2",
            color: "#991b1b",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <strong>Erreur :</strong> {error.message}
        </div>
      ) : (
        <div
          style={{
            background: "#dcfce7",
            color: "#166534",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          ✅ Connexion réussie !
          <br />
          Nombre de machines dans la base : <strong>{data?.length ?? 0}</strong>
        </div>
      )}

      <pre
        style={{
          marginTop: "30px",
          background: "#f3f4f6",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}