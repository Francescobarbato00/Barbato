import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disattiva dopo aver visto la sezione
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
      className={`w-full bg-gray-900 text-white py-16 px-6 transition-all duration-1000 ${
        isVisible ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Titolo Contatto */}
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
          CONTACT
        </p>

        {/* Titolo Principale */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk</h2>

        {/* Testo Intro Motivazionale */}
        <p className="text-lg leading-relaxed mb-6">
          I'm always open to new opportunities and collaborations. Let's create
          something impactful together! Whether it's for a project or a casual
          discussion, I believe that every conversation is a stepping stone
          toward success.
        </p>

        {/* Frase Motivazionale */}
        <p className="text-lg italic text-gray-300 mb-8">
          "Great achievements start with a single step and a meaningful
          conversation."
        </p>

        {/* Pulsante LinkedIn */}
        <div>
          <a
            href="https://www.linkedin.com/in/francesco-barbato-a79b92250/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-medium px-6 py-3 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM8 19H5V9h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7c1 0 1.7.8 1.7 1.7s-.7 1.7-1.7 1.7zm13.5 11.3h-3v-5.6c0-1.3-.5-2.2-1.8-2.2-1 0-1.6.7-1.8 1.4-.1.2-.1.5-.1.8V19h-3V9h3v1.4c.5-.8 1.4-1.5 3-1.5 2.2 0 3.7 1.5 3.7 4.4V19z" />
            </svg>
            CONNECT ON LINKEDIN
          </a>
        </div>
      </div>
    </section>
  );
}
