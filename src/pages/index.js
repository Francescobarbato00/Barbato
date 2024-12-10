import Headers from "./components/Headers";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import PortfolioSection from "./components/PortfolioSection";
import ClientsSection from "./components/ClientsSection";
import AboutSection from "./components/AboutSection";
import CaseStudies from "./components/CaseStudies";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <div className="m-0 p-0">
      {/* Header Section */}
      <Headers />

      {/* Hero Section */}
      <div className="pt-[100px]"> {/* Spaziatura per compensare l'Header fisso */}
        <Hero />
      </div>

      {/* Altre Sezioni */}
      <Technologies />
      <PortfolioSection />
      <ClientsSection />
      <AboutSection />
      <ExperienceSection />
      <CaseStudies />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
