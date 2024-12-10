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
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll space-x-8 w-max">
          {/* Duplichiamo i loghi per lo scorrimento infinito */}
          {logos.concat(logos).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index}`}
              className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* Stile Inline per Animazione */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite; /* Velocità di scorrimento adattabile */
        }
      `}</style>
    </section>
  );
};

export default Technologies;
