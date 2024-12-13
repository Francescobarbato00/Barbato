import Headers from "./components/Headers";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot"; // Importa il ChatBot
import IntroductionSection from "./components/IntroductionSection";
import TabbedSection from "./components/TabbedSection";
import ValuesSection from "./components/ValuesSection";



export default function Work() {
  return (
    <div className="m-0 p-0">
      {/* Header Section */}
      <Headers />

       <IntroductionSection />
       <ValuesSection />
       <TabbedSection />
    
      <Footer />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}
