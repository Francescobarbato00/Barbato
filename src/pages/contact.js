import Headers from "./components/Headers";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot"; // Importa il ChatBot
import InfoSection from "./components/InfoSection";
import SoftSkillsSection from "./components/SoftSkillsSection";

export default function Contact() {
  return (
    <div className="m-0 p-0">
      {/* Header Section */}
      <Headers />

      <InfoSection />
      <SoftSkillsSection />
      <Footer />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}
