import { useState, useEffect, useRef } from "react";

export default function WhatIDo() {
  const [activeTab, setActiveTab] = useState("webDev");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Effetto Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Contenuto dinamico
  const tabContent = {
    webDev: (
      <div className="mt-6 text-gray-700 leading-relaxed">
        <h3 className="font-bold text-gray-800 mb-2">Web Developing</h3>
        <p>
          I specialize in building responsive and high-performance websites and web applications
          using modern technologies such as{" "}
          <span className="font-semibold">HTML</span>,{" "}
          <span className="font-semibold">CSS</span>,{" "}
          <span className="font-semibold">JavaScript</span>, and frameworks like{" "}
          <span className="font-semibold">React</span> and{" "}
          <span className="font-semibold">Next.js</span>.
        </p>
        <p>
          I integrate secure and scalable{" "}
          <span className="font-semibold">databases</span> such as{" "}
          <span className="font-semibold">MongoDB</span>,{" "}
          <span className="font-semibold">PostgreSQL</span>, and optimize backend solutions with{" "}
          <span className="font-semibold">Node.js</span> to deliver complete full-stack solutions.
        </p>
        <p>
          My goal is to deliver dynamic, fast, and accessible digital products that provide an{" "}
          <span className="font-semibold">exceptional user experience</span>.
        </p>
      </div>
    ),
    aiExpert: (
      <div className="mt-6 text-gray-700 leading-relaxed">
        <h3 className="font-bold text-gray-800 mb-2">AI Expert</h3>
        <p>
          As an expert in <span className="font-semibold">Artificial Intelligence</span>, I design
          and develop intelligent solutions that automate workflows and enhance decision-making.
        </p>
        <p>
          I have extensive experience in building{" "}
          <span className="font-semibold">chatbots</span>, virtual assistants, and{" "}
          <span className="font-semibold">recommendation systems</span> using technologies such as{" "}
          <span className="font-semibold">TensorFlow</span>,{" "}
          <span className="font-semibold">PyTorch</span>, and natural language processing (NLP)
          tools.
        </p>
        <p>
          My AI-driven solutions empower businesses to optimize operations, improve efficiency, and
          deliver personalized experiences to customers.
        </p>
      </div>
    ),
    cyberSec: (
      <div className="mt-6 text-gray-700 leading-relaxed">
        <h3 className="font-bold text-gray-800 mb-2">Cybersecurity</h3>
        <p>
          I am a professional <span className="font-semibold">Cyber Security Analyst</span> focused
          on protecting systems, networks, and applications against modern cyber threats.
        </p>
        <p>
          My skills include <span className="font-semibold">vulnerability assessments</span>,{" "}
          <span className="font-semibold">threat analysis</span>, and the implementation of{" "}
          <span className="font-semibold">secure coding practices</span> to mitigate risks and
          ensure compliance with industry standards.
        </p>
        <p>
          I continuously monitor and enhance system security through tools like{" "}
          <span className="font-semibold">SIEM systems</span> and penetration testing to safeguard
          data and maintain resilience against potential attacks.
        </p>
      </div>
    ),
  };

  return (
    <section
      ref={sectionRef}
      className={`py-12 bg-gray-50 px-4 transition-all duration-1000 ${
        isVisible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Titolo */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What I Do</h2>

        {/* Menu Testuale */}
        <div className="grid grid-cols-3 border-b text-center">
          <div
            className={`pb-2 cursor-pointer text-sm font-medium ${
              activeTab === "webDev"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("webDev")}
          >
            Web Developing
          </div>
          <div
            className={`pb-2 cursor-pointer text-sm font-medium ${
              activeTab === "aiExpert"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("aiExpert")}
          >
            AI Expert
          </div>
          <div
            className={`pb-2 cursor-pointer text-sm font-medium ${
              activeTab === "cyberSec"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("cyberSec")}
          >
            Cybersecurity
          </div>
        </div>

        {/* Contenuto delle Tab */}
        <div>{tabContent[activeTab]}</div>
      </div>
    </section>
  );
}
