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
    YOUL LOCATION MACHINES est votre spécialiste de la location d'engins de
    chantier en Côte d'Ivoire. Nous accompagnons les entreprises, les
    professionnels du BTP, les collectivités ainsi que les particuliers dans
    leurs projets de terrassement, construction, voirie, démolition,
    manutention et travaux publics. Grâce à une flotte de machines modernes,
    entretenues et performantes, nous intervenons rapidement sur tous types de
    chantiers.
  </p>

  <p>
    Notre entreprise propose la location de pelles hydrauliques, bulldozers,
    chargeuses, tractopelles, niveleuses, compacteurs, camions et de nombreux
    autres équipements destinés aux travaux de génie civil et de construction.
    Chaque machine est contrôlée régulièrement afin de garantir sécurité,
    fiabilité et rendement optimal sur vos chantiers.
  </p>

  <h2>Des machines disponibles partout en Côte d'Ivoire</h2>

  <p>
    Nos équipes interviennent à Abidjan, Bouaké, Yamoussoukro, San Pedro,
    Korhogo, Daloa, Man et dans toutes les régions de Côte d'Ivoire. Nous
    assurons une livraison rapide des engins directement sur votre chantier afin
    de vous permettre de commencer vos travaux dans les meilleurs délais.
  </p>

  <h2>Des solutions adaptées à tous vos chantiers</h2>

  <p>
    Que vous réalisiez des travaux de terrassement, de construction de routes,
    de bâtiments, de lotissements, de plateformes industrielles ou de grands
    projets de travaux publics, YOUL LOCATION MACHINES dispose des équipements
    adaptés à vos besoins. Nos équipes vous accompagnent dans le choix de
    l'engin le plus efficace selon votre projet.
  </p>

  <h2>Pourquoi choisir YOUL LOCATION MACHINES ?</h2>

  <p>
    Notre priorité est la satisfaction de nos clients. Nous proposons des
    machines entretenues, des tarifs compétitifs, une assistance rapide, des
    devis gratuits et un accompagnement personnalisé. Notre expérience dans la
    location d'engins de chantier en Côte d'Ivoire nous permet de répondre aux
    besoins des petits comme des grands chantiers avec professionnalisme.
  </p>

  <p>
    Si vous recherchez une entreprise fiable pour la location d'engins de
    chantier en Côte d'Ivoire, faites confiance à YOUL LOCATION MACHINES.
    Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et bénéficier
    d'un service rapide, professionnel et adapté à votre chantier.
  </p>
</section>
    </main>
  );
}