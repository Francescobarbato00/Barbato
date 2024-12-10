import React from "react";

const Technologies = () => {
  const logos = [
    "/javascript-.svg",
    "/next.svg",
    "/react.svg",
    "/linux-mint.svg",
    "/linux.svg",
    "/microsoftazure.svg",
    "/php.svg",
    "/phpmyadmin.svg",
    "/python.svg",
    "/sql.svg",
    "/github.svg",
    "/vagrant.svg",
    "/vercel.svg",
    "/wordpress.svg",
    "/vs-code.svg",
    "/windows.svg",
  ];

  return (
    <section className="py-16 bg-white">
      {/* Titolo */}
      <div className="text-center mb-8">
        <h2 className="text-[14px] font-semibold text-gray-600 uppercase tracking-wide">
          TECHNOLOGIES USED
        </h2>
      </div>

      {/* Slider Container */}
      <div className="logo-slider overflow-hidden relative">
        <div className="logo-track flex">
          {/* Duplichiamo i loghi per lo scorrimento infinito */}
          {logos.concat(logos).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index}`}
              className="logo w-12 h-12 object-contain mx-6 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Stile per scorrimento infinito */}
      <style jsx>{`
        .logo-slider {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
        .logo-track {
          animation: scroll 40s linear infinite;
          width: calc(200%); /* Doppio contenuto per scorrimento continuo */
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Responsività per dispositivi mobili */
        @media (max-width: 768px) {
          .logo {
            width: 8rem; /* Loghi più piccoli sui dispositivi mobili */
            height: 8rem;
          }

          .logo-track {
            animation: scroll 10s linear infinite; /* Scorrimento più lento sui dispositivi mobili */
          }
        }

        /* Loghi più piccoli sui tablet */
        @media (max-width: 1024px) {
          .logo {
            width: 10rem;
            height: 10rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Technologies;
