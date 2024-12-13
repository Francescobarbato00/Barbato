import { useEffect, useRef, useState } from "react";

export default function ValuesSection() {
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
      { threshold: 0.2 } // Triggera quando il 20% della sezione è visibile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Box 1 */}
          <div
            className={`flex flex-col items-center transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Icona */}
            <div className="w-20 h-20 flex items-center justify-center bg-gray-900 rounded-lg shadow-lg mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3.5L7.5 21h9L12 3.5z"
                />
              </svg>
            </div>
            {/* Titolo */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Excellence</h3>
            {/* Descrizione */}
            <p className="text-gray-600 leading-relaxed">
              I deliver high-quality, reliable solutions with a focus on clean
              code and efficient performance.
            </p>
          </div>

          {/* Box 2 */}
          <div
            className={`flex flex-col items-center transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Icona */}
            <div className="w-20 h-20 flex items-center justify-center bg-gray-900 rounded-lg shadow-lg mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3.75l7.5 6.75M21 3.75l-7.5 6.75M3 20.25l7.5-6.75M21 20.25l-7.5-6.75"
                />
              </svg>
            </div>
            {/* Titolo */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Innovation</h3>
            {/* Descrizione */}
            <p className="text-gray-600 leading-relaxed">
              I build innovative and scalable solutions leveraging the latest
              technologies and trends in the industry.
            </p>
          </div>

          {/* Box 3 */}
          <div
            className={`flex flex-col items-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Icona */}
            <div className="w-20 h-20 flex items-center justify-center bg-gray-900 rounded-lg shadow-lg mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.75v14.5M5.75 12h12.5"
                />
              </svg>
            </div>
            {/* Titolo */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Growth</h3>
            {/* Descrizione */}
            <p className="text-gray-600 leading-relaxed">
              I drive business growth by transforming ideas into functional,
              impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
