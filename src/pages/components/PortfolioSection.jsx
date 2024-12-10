import { useState } from "react";
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
      title: "eCommerce Barber Shop",
      description:
        "We developed an eCommerce platform for a local barbershop that allows customers to easily purchase hair care products and book services online. The platform features automated inventory management, seamless payment processing, and a user-friendly booking system for appointments.",
      image: "/barber.png",
      link: "https://fichera.vercel.app/",
    },
    // Added 3 more fake projects
    {
      id: 4,
      title: "Studio Legale Berardi",
      description:
        "We developed a dynamic website for Studio Legale Berardi, a law firm specializing in notarial services. The site features a sophisticated chatbot for client inquiries, an easy-to-navigate legal resource center, and a booking system for consultations. The firm also utilizes automated document generation for contracts, agreements, and legal notices, improving efficiency and client satisfaction.",
      image: "/avvberardi.png",
      link: "https://avvberardi.vercel.app/",

    },
    {
      id: 5,
      title: "Edilges",
      description:
        "We created a dynamic website for Edilges, a construction company specializing in renovation and restructuring projects. The site showcases their expertise in residential, commercial, and industrial construction, with detailed project galleries, client testimonials, and a cost estimator tool. Additionally, the website features an integrated contact form and a project request system to help clients easily get in touch and request quotes.",
      image: "/edilges.png",
      link: "https://edoardo.vercel.app/",

    },
    {
      id: 6,
      title: "Studio Legale Compagno",
      description:
        "We developed a modern website for Studio Legale Compagno, a law firm specializing in civil and corporate law. The site features an interactive consultation booking system, detailed service descriptions, and an integrated legal advice chatbot to assist clients in real-time. It also includes a secure client portal for document sharing, case tracking, and legal updates, improving communication and transparency between clients and attorneys.",
      image: "/avvcompagno.png",
      link: "https://arianna.vercel.app/",
      
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

  return (
    <section className="py-16 bg-[#f8f9fa]">
      {/* Contenitore principale */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Titolo */}
        <div className="mb-8">
          <p className="text-[16px] font-semibold leading-none text-[rgb(33,37,41)] mb-2">
            PORTFOLIO
          </p>
          <h2 className="text-[32px] font-normal leading-[24px] text-[rgb(33,37,41)]">
            Featured Work
          </h2>
          <div className="w-16 h-1 bg-black mt-4"></div>
        </div>

        {/* Griglia progetti */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 duration-500"
            >
              {/* Immagine */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              {/* Contenuto */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-[rgb(33,37,41)]">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="w-full border-t border-gray-200 my-4"></div>
                {/* Pulsanti */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md">
                      <span className="text-xs text-gray-600">CODE</span>
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded-md">
                      <span className="text-xs text-gray-600">DEMO</span>
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700"
                  >
                    ▶️ WATCH
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frecce per navigazione */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevPage}
            className="text-black text-3xl hover:opacity-80 transition duration-300"
          >
            &lt;
          </button>
          <button
            onClick={nextPage}
            className="text-black text-3xl hover:opacity-80 transition duration-300"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
