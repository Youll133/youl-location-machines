import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

type Devis = {
  nom: string;
  telephone: string;
  machine: string;
  ville: string;
  date_debut: string;
  date_fin: string;
  jours: number;
  prix_total: number;
  description: string;
};

export function genererPDF(devis: Devis) {
  const doc = new jsPDF();

  // =========================
  // EN-TÊTE
  // =========================
  doc.setFillColor(17, 24, 39);
  doc.rect(0, 0, 210, 35, "F");

  doc.setTextColor(255, 212, 0);
  doc.setFontSize(24);
  doc.text("YOUL LOCATION MACHINES", 20, 18);

  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text(
    "Location d'engins de chantier partout en Côte d'Ivoire",
    20,
    28
  );

  // =========================
  // NUMÉRO DU DEVIS
  // =========================
  const numero =
    "YLM-" +
    new Date().getFullYear() +
    "-" +
    Math.floor(Math.random() * 100000);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);

  doc.text("DEVIS OFFICIEL", 20, 45);
  doc.text(`N° ${numero}`, 140, 45);

  doc.text(
    `Date : ${new Date().toLocaleDateString("fr-FR")}`,
    20,
    55
  );

  // =========================
  // TABLEAU
  // =========================
  autoTable(doc, {
    startY: 65,
    head: [["Information", "Valeur"]],
    body: [
      ["Nom", devis.nom],
      ["Téléphone", devis.telephone],
      ["Machine", devis.machine],
      ["Ville", devis.ville],
      ["Date début", devis.date_debut],
      ["Date fin", devis.date_fin],
      ["Nombre de jours", String(devis.jours)],
      [
        "Prix total",
        `${Number(devis.prix_total || 0).toLocaleString("fr-FR")} FCFA`,
      ],
    ],
  });

  const y = (doc as any).lastAutoTable.finalY + 15;

  // =========================
  // DESCRIPTION
  // =========================
  doc.setDrawColor(180);

  doc.roundedRect(20, y, 170, 45, 3, 3);

  doc.setFontSize(15);
  doc.text("DESCRIPTION DU CHANTIER", 25, y + 10);

  doc.setFontSize(12);

  doc.text(
    devis.description || "-",
    25,
    y + 20,
    {
      maxWidth: 155,
    }
  );

  // =========================
  // TOTAL
  // =========================
  doc.setFillColor(22, 163, 74);

  doc.roundedRect(20, y + 55, 170, 25, 4, 4, "F");

  doc.setTextColor(255, 255, 255);

  doc.setFontSize(22);

  doc.text(
    `TOTAL : ${Number(devis.prix_total || 0).toLocaleString("fr-FR")} FCFA`,
    30,
    y + 72
  );

  // =========================
  // PIED DE PAGE
  // =========================
  doc.setTextColor(0, 0, 0);

  doc.setDrawColor(220);

  doc.line(20, 265, 190, 265);

  doc.setFontSize(11);

  doc.text("YOUL LOCATION MACHINES", 20, 275);

  doc.text("Yamoussoukro - Côte d'Ivoire", 20, 282);

  doc.text("youlles133@gmail.com", 20, 289);

  doc.text("Ce devis est valable 15 jours.", 120, 289);

  // =========================
  // TÉLÉCHARGEMENT
  // =========================
  doc.save(`Devis-${devis.nom}.pdf`);
}