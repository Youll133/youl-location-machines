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
      "Oui, nous proposons la location d'engins de chantier partout en Côte d'Ivoire, notamment à Abidjan, Bouaké, Yamoussoukro, San Pedro, Korhogo et dans toutes les régions.",
  },
  {
    question: "Peut-on louer une machine avec un chauffeur ?",
    reponse:
      "Oui, nous pouvons mettre à disposition un opérateur qualifié selon la machine choisie.",
  },
  {
    question: "Comment obtenir un devis ?",
    reponse:
      "Il suffit de remplir notre formulaire ou de nous contacter directement. Le devis est gratuit.",
  },
  {
    question: "Quels sont les moyens de paiement ?",
    reponse:
      "Nous acceptons les virements bancaires, Mobile Money et d'autres moyens de paiement.",
  },
  {
    question: "Les machines sont-elles entretenues ?",
    reponse:
      "Oui, toutes nos machines sont entretenues régulièrement afin de garantir leur sécurité et leurs performances.",
  },
  {
    question: "Quels types d'engins proposez-vous ?",
    reponse:
      "Nous proposons des pelles hydrauliques, bulldozers, chargeuses, niveleuses, compacteurs, tractopelles et de nombreux matériels BTP.",
  },
  {
    question: "Combien coûte la location d'un engin ?",
    reponse:
      "Le prix dépend du type de machine, de la durée de location et du chantier. Contactez-nous pour un devis personnalisé.",
  },
  {
    question: "Combien de temps faut-il pour livrer une machine ?",
    reponse:
      "Nous faisons le maximum pour intervenir rapidement selon la disponibilité de la machine et la localisation du chantier.",
  },
  {
    question: "Pourquoi choisir YOUL LOCATION MACHINES ?",
    reponse:
      "Parce que nous proposons des machines fiables, un service professionnel, une intervention rapide et des tarifs compétitifs partout en Côte d'Ivoire.",
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