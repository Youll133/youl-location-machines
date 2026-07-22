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
    </main>
  );
}