import Partners from "../components/Partners";
import TrustBanner from "../components/TrustBanner";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Numbers from "../components/Numbers";
import WhyChooseUs from "../components/WhyChooseUs";
import Features from "../components/Features";
import Machines from "../components/Machines";
import Realisations from "../components/Realisations";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBanner />
      <Stats />
      <Numbers />
      <WhyChooseUs />
      <Features />
      <Machines />
      <Realisations />
      <Services />
      <Partners />
      <Testimonials />
      <WhatsAppButton />
      <CallButton />
      <Footer />
      <section
  style={{
    maxWidth: "1200px",
    margin: "80px auto",
    padding: "30px",
    lineHeight: "1.8",
  }}
>
  <h2>Location d'engins de chantier en Côte d'Ivoire</h2>

  <p>
    YOUL LOCATION MACHINES est spécialisée dans la location d'engins de
    chantier partout en Côte d'Ivoire. Nous mettons à disposition des
    entreprises, particuliers et professionnels du BTP une large flotte de
    machines adaptées à tous les travaux de terrassement, construction,
    nivellement, démolition et manutention.
  </p>

  <h2>Nos machines disponibles</h2>

  <p>
    Nous proposons la location de pelles hydrauliques, bulldozers,
    chargeuses, niveleuses, compacteurs, tractopelles, camions et plusieurs
    autres engins de chantier pour tous vos projets.
  </p>

  <h2>Nos zones d'intervention</h2>

  <p>
    Nos équipes interviennent à Abidjan, Bouaké, Yamoussoukro, San Pedro,
    Korhogo, Daloa, Man et partout en Côte d'Ivoire.
  </p>

  <h2>Pourquoi choisir YOUL LOCATION MACHINES ?</h2>

  <p>
    Nous proposons des machines fiables, des opérateurs qualifiés, des prix
    compétitifs, un service rapide et un accompagnement personnalisé pour
    tous vos chantiers.
  </p>
</section>
    </main>
  );
}