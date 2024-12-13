import { useEffect, useState, useRef } from "react";

export default function VisionMissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ferma l'osservazione dopo l'attivazione
        }
      },
      { threshold: 0.3 } // Attiva l'effetto quando il 30% della sezione è visibile
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 px-6 md:px-12 transition-all duration-700"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Titolo */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-blue-600 mb-6 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Vision and Mission
        </h2>

        {/* Vision Text */}
        <p
          className={`text-lg text-gray-700 leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Our vision is to constantly explore new technological boundaries, standing out for
          our <strong>curiosity</strong> and <strong>execution speed</strong>. We aim to be
          leaders in creating innovative solutions that generate a positive, sustainable,
          and tangible impact for businesses worldwide.
        </p>

        {/* Mission Text */}
        <p
          className={`text-lg text-gray-700 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Our mission is to develop <strong>advanced technological solutions</strong> that
          address current market challenges while anticipating future needs. We focus on{" "}
          <strong>operational agility</strong>, delivering fast and valuable results,
          transforming innovation into a <strong>competitive advantage</strong> for our
          clients.
        </p>
      </div>
    </section>
  );
}
