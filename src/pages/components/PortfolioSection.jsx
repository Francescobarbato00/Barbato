import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Digitalizzazione Capri",
      description:
        "The team and I worked with Digitalizzazione Capri to create a website for their event focused on integrating technology and AI into the judicial system. The site provided resources and hosted virtual events for professionals in the legal field, offering webinars, roundtables, and interactive sessions on using digital tools in justice.",
      image: "/capri.png",
      link: "https://www.digitalizzazionecapri.com/",
    },
    {
      id: 2,
      title: "Zendata AI",
      description:
        "I collaborated on the dynamic front-end development of an innovative startup focused on creating AI-powered software modules. The project emphasized the development of intelligent chatbot solutions using advanced natural language processing (NLP) techniques, enabling businesses to automate customer interactions effectively.",
      image: "/zendata.png",
      link: "https://zendata.it/",
    },
   
   
    {
      id: 3,
      title: "Fondazione Castel Capuano",
      description:
        "We developed a modern website for Fondazione Castel Capuano. Fondazione Castel Capuano is a historic foundation in the heart of Naples, dedicated to law, the preservation of legal heritage, and the promotion of legal culture through events, exhibitions, and research activities. .",
      image: "/fondazione.png",
      link: "https://castelcapuano.vercel.app/",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage + 1 < Math.ceil(projects.length / projectsPerPage) ? prevPage + 1 : 0
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage - 1 >= 0 ? prevPage - 1 : Math.ceil(projects.length / projectsPerPage) - 1
    );
  };

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    currentPage * projectsPerPage + projectsPerPage
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Scatta quando il 20% della sezione è visibile
  });

  return (
    <section ref={ref} className="py-16 bg-[#f8f9fa]">
      <div className={`max-w-screen-xl mx-auto px-4 ${inView ? "fade-in" : "opacity-0"}`}>
        {/* Titolo */}
        <div className="mb-8 text-center">
          <p className="text-[16px] font-semibold text-gray-800 mb-2">PORTFOLIO</p>
          <h2 className="text-[24px] sm:text-[32px] font-normal text-gray-800">
            Featured Work
          </h2>
          <div className="w-16 h-1 bg-black mx-auto mt-4"></div>
        </div>

        {/* Griglia Progetti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transform transition-all duration-500 hover:scale-105 ${
                inView ? "fade-up" : "opacity-0"
              }`}
            >
              {/* Immagine */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              {/* Contenuto */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                  ▶️ WATCH
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Frecce di Navigazione */}
        <div className="flex justify-center mt-8 space-x-4">
          <button onClick={prevPage} className="text-black text-3xl">
            &lt;
          </button>
          <button onClick={nextPage} className="text-black text-3xl">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
