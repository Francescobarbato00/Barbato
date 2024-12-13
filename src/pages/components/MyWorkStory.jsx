import { useState, useEffect } from "react";

export default function MyWorkStory() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const workExperiences = [
    {
      title: "Full Stack Developer (Freelancer)",
      subtitle: "Self-Employed",
      location: "Remote",
      period: "Sept 2019 - Present",
      description: `As a freelance Full Stack Developer with a VAT number, I specialize in 
      JavaScript, Next.js, TailwindCSS, PHP, and Python. My work involves developing complex and 
      high-performance web applications, creating showcase websites and e-commerce solutions. 
      I integrate cutting-edge technologies to deliver dynamic and tailored solutions.`,
    },
    {
      title: "IT Assistant",
      subtitle: "Ministero della Giustizia",
      location: "Milan, Italy",
      period: "May 2022 - Jun 2023",
      description: `At the Department of Penitentiary Administration (DAP), I implemented 
      digitalization protocols, provided hardware/software support, managed Ministry applications, 
      oversaw video surveillance systems, and served as administrator for the National Active Directory.`,
    },
    {
      title: "Computer Engineer",
      subtitle: "Scuola Superiore della Magistratura",
      location: "Florence, Italy",
      period: "Jun 2023 - Dec 2024",
      description: `I managed IT operations for judicial training programs, ensuring hardware/software 
      integration, troubleshooting, and coordination of resources. Programs included professional 
      development for judges and international training courses.`,
    },
    {
      title: "Cyber Security Analyst",
      subtitle: "AGID - Agenzia per l'Italia Digitale",
      location: "Rome, Italy",
      period: "Dec 2024 - Present",
      description: `At CERT-AGID, I analyze and mitigate cyber threats such as malware and phishing, 
      manage data breaches, and conduct risk assessments. I implement intrusion detection systems 
      and collaborate with national and international partners to protect critical infrastructure.`,
    },
  ];

  // Effetto Fade-In al caricamento della sezione
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("work-story");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="work-story" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titolo */}
        <h2
          className={`text-4xl font-bold text-gray-900 mb-12 text-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          My Work Story
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Linea di Progresso */}
          <div className="absolute top-10 left-0 w-full h-1 bg-gray-200 z-0">
            <div
              className="h-1 bg-blue-600 transition-all duration-500"
              style={{ width: `${(activeStep + 1) * 25}%` }}
            ></div>
          </div>

          {/* Stepper */}
          <div className="relative flex justify-between items-center mb-10">
            {workExperiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col items-center w-1/4 text-center">
                {/* Cerchio indipendente */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ${
                    activeStep === index
                      ? "bg-blue-600 shadow-lg border-4 border-blue-600"
                      : "bg-gray-300 border-4 border-gray-100"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {index + 1}
                </div>
                {/* Periodo */}
                <p className="text-gray-600 text-sm mt-2">{exp.period.split(" - ")[0]}</p>
              </div>
            ))}
          </div>

          {/* Contenuto Dinamico */}
          <div
            className={`relative z-10 mt-12 text-gray-700 bg-white p-6 shadow-md rounded-lg animate-fadeInUp`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {workExperiences[activeStep].title}
            </h3>
            <h4 className="text-lg text-blue-600 mb-2">
              {workExperiences[activeStep].subtitle} |{" "}
              <span className="text-gray-700">{workExperiences[activeStep].location}</span>
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              {workExperiences[activeStep].period}
            </p>
            <p className="leading-relaxed">{workExperiences[activeStep].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
