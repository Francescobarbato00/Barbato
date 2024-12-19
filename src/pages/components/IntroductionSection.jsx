import { useEffect, useRef, useState } from "react";

export default function IntroductionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ferma l'osservazione dopo aver attivato l'animazione
        }
      },
      {
        threshold: 0.3, // Triggera quando almeno il 30% della sezione è visibile
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 px-4 md:px-16 mt-20 md:mt-32"
    >
      <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto">
        {/* Titolo con Effetto Ingresso */}
        <div
          className={`w-full md:w-1/3 transform transition-transform duration-700 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "mobile-translate-left -translate-x-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 md:mb-0 leading-tight">
            Who I Am
          </h2>
        </div>

        {/* Testo con Effetto Ingresso */}
        <div
          className={`w-full md:w-2/3 text-gray-700 leading-relaxed transform transition-transform duration-700 ease-out delay-300 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "mobile-translate-right translate-x-10 opacity-0"
          }`}
        >
          <p className="text-lg mb-6 md:mb-4">
            I am a{" "}
            <strong className="font-semibold text-gray-900">
              Computer Engineer
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-gray-900">
              Web Developer
            </strong>
            , specialized in building{" "}
            <strong className="font-semibold text-gray-900">
              high-performance web applications
            </strong>{" "}
            and delivering advanced{" "}
            <strong className="font-semibold text-gray-900">
              AI-driven solutions
            </strong>
            . My goal is to transform complex challenges into scalable and
            efficient products.
          </p>
          <p className="text-lg">
            I am passionate about{" "}
            <strong className="font-semibold text-gray-900">
              digital transformation
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-gray-900">innovation</strong>,
            empowering businesses to grow by integrating modern technologies and
            improving their overall digital presence.
          </p>

          {/* Link Estetico per i Servizi */}
          <div className="mt-8">
            <a
              href="#services"
              className="text-blue-600 font-semibold hover:underline inline-flex items-center group"
            >
              Discover My Services
              <span className="ml-2 transition-transform transform group-hover:translate-x-2">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
