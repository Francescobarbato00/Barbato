import { FlagIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const timelineData = [
  {
    id: 1,
    quarter: "Sept 2019 - Present",
    title: "Full Stack Developer",
    company: "Freelancer",
    description:
      "Specialized in JavaScript, Next.js, TailwindCSS, PHP, and Python. Developed complex and high-performance web applications, showcase websites, and e-commerce solutions for medium-sized businesses. Focused on delivering tailored solutions using custom code and cutting-edge technologies to enhance performance and user experience.",
    completed: true,
  },
  {
    id: 2,
    quarter: "May 2022 - Jun 2023",
    title: "IT Assistant",
    company: "Ministero della Giustizia",
    description:
      "Implemented digitalization protocols, provided hardware/software support, managed Ministry applications, oversaw video surveillance, network administration, and served as administrator for the National Active Directory domain.",
    completed: true,
  },
  {
    id: 3,
    quarter: "Jun 2023 - Dec 2024",
    title: "Computer Engineer",
    company: "Scuola Superiore della Magistratura",
    description:
      "Managed IT operations for judicial training programs, including training for judicial trainees, judges, and office managers. Handled troubleshooting, hardware/software integration, and coordination of technological resources to ensure smooth program operations.",
    completed: true,
  },
  {
    id: 4,
    quarter: "Dec 2024 - Present",
    title: "Cyber Security Analyst",
    company: "AGID - Agenzia per l'Italia Digitale",
    description:
      "Analyzing and mitigating cyber threats, managing data breaches, and overseeing intrusion detection systems. Conducted audits, risk assessments, and collaborated with national and international partners to protect critical infrastructure and sensitive government data.",
    completed: false,
  },
];

export default function WorkExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-gray-50 py-10">
      {/* Titolo principale */}
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-4">
        Professional Experience Timeline
      </h2>

      {/* Testo guida */}
      <p className="text-center text-gray-600 mb-16 italic">
        Explore my experiences by hovering over the icons below.
      </p>

      {/* Contenitore Timeline */}
      <div className="relative flex justify-between items-start max-w-6xl mx-auto px-4">
        {/* Linea orizzontale */}
        <div className="absolute top-10 left-0 right-0 h-1 bg-blue-600 z-0"></div>

        {/* Icone e Sezioni */}
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center text-center z-10 group"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Icona */}
            <div
              className={`flex items-center justify-center w-14 h-14 rounded-full shadow-md cursor-pointer transition-transform duration-300 ${
                activeIndex === index ? "scale-125" : "scale-100"
              } ${item.completed ? "bg-blue-600" : "bg-gray-300"}`}
            >
              {item.completed ? (
                <CheckCircleIcon className="w-6 h-6 text-white" />
              ) : (
                <FlagIcon className="w-6 h-6 text-blue-600" />
              )}
            </div>

            {/* Titolo e Sottotitolo sotto l'icona */}
            <div className="mt-4">
              <h3 className="text-gray-700 font-bold text-lg">{item.title}</h3>
              <p className="text-blue-600 text-sm italic">{item.company}</p>
            </div>

            {/* Testo al passaggio del mouse */}
            {activeIndex === index && (
              <div className="absolute top-20 w-64 bg-white shadow-lg rounded-md p-4 animate-fadeIn">
                <span className="block font-semibold text-blue-600 text-sm">
                  {item.quarter}
                </span>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
