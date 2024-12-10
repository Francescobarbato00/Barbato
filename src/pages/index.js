import Header from './components/Header';
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
    <div>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <div className="mt-32">
        <Hero />
      </div>

      {/* Other Sections */}
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
