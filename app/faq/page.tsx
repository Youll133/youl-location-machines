export default function FaqPage() {
  const questions = [
    {
      question: "Comment réserver une machine ?",
      reponse:
        "Vous pouvez réserver directement depuis notre page de réservation ou nous contacter par téléphone ou WhatsApp.",
    },
    {
      question: "Intervenez-vous partout en Côte d'Ivoire ?",
      reponse:
        "Oui, nous proposons nos services sur l'ensemble du territoire ivoirien.",
    },
    {
      question: "Peut-on louer une machine avec un chauffeur ?",
      reponse:
        "Oui, selon la machine choisie, nous pouvons mettre à disposition un opérateur qualifié.",
    },
    {
      question: "Comment obtenir un devis ?",
      reponse:
        "Remplissez le formulaire de devis sur notre site. Nous vous répondrons rapidement.",
    },
    {
      question: "Quels sont les moyens de paiement ?",
      reponse:
        "Nous acceptons les virements bancaires, Mobile Money et d'autres moyens de paiement selon votre situation.",
    },
    {
      question: "Les machines sont-elles entretenues ?",
      reponse:
        "Oui, toutes nos machines sont régulièrement entretenues afin de garantir leur fiabilité et leur sécurité.",
    },
  ];

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "120px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        ❓ Questions fréquentes
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "20px",
          marginBottom: "50px",
        }}
      >
        Retrouvez les réponses aux questions les plus fréquentes.
      </p>

      {questions.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "16px",
            marginBottom: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <h2
            style={{
              color: "#111827",
              fontSize: "24px",
            }}
          >
            {item.question}
          </h2>

          <p
            style={{
              color: "#555",
              fontSize: "18px",
              lineHeight: "30px",
            }}
          >
            {item.reponse}
          </p>
        </div>
      ))}
    </main>
  );
}