export default function ContactPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "120px auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          marginBottom: "20px",
        }}
      >
        📞 Contactez-nous
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#555",
          marginBottom: "50px",
        }}
      >
        Notre équipe est disponible pour répondre à toutes vos demandes.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 10px 25px rgba(0,0,0,.1)",
          }}
        >
          <h2>📍 Adresse</h2>
          <p>Yamoussoukro, Côte d'Ivoire</p>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 10px 25px rgba(0,0,0,.1)",
          }}
        >
          <h2>📞 Téléphone</h2>
          <p>+225 07 48 41 66 57</p>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 10px 25px rgba(0,0,0,.1)",
          }}
        >
          <h2>📧 Email</h2>
          <p>youlles133@gmail.com</p>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 10px 25px rgba(0,0,0,.1)",
          }}
        >
          <h2>🕒 Horaires</h2>
          <p>Lundi - Samedi</p>
          <p>08h00 - 18h00</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "60px",
        }}
      >
        <a
          href="https://wa.me/33780260603"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#22c55e",
            color: "white",
            textDecoration: "none",
            padding: "18px 35px",
            borderRadius: "12px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          💬 Nous contacter sur WhatsApp
        </a>
      </div>
    </main>
  );
}