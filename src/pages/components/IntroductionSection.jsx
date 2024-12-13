export default function IntroductionSection() {
    return (
      <section className="w-full bg-white py-12 px-4 md:px-16 mt-20 md:mt-32">
        <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto">
          {/* Titolo allineato alla prima riga */}
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4 md:mb-0">
              Who I Am
            </h2>
          </div>
  
          {/* Testo allineato a Destra */}
          <div className="w-full md:w-2/3 text-gray-700 leading-relaxed">
            <p className="text-lg mb-4">
              I am a <strong className="font-semibold text-gray-900">Computer Engineer</strong> and 
              <strong className="font-semibold text-gray-900"> Web Developer</strong>, specialized in 
              building <strong className="font-semibold text-gray-900">high-performance web applications</strong> and delivering 
              advanced <strong className="font-semibold text-gray-900">AI-driven solutions</strong>. 
              My goal is to transform complex challenges into scalable and efficient products.
            </p>
            <p className="text-lg">
              I am passionate about <strong className="font-semibold text-gray-900">digital transformation</strong> and 
              <strong className="font-semibold text-gray-900"> innovation</strong>, empowering businesses to grow by integrating 
              modern technologies and improving their overall digital presence.
            </p>
  
            {/* Link per i Servizi */}
            <div className="mt-6">
              <a
                href="#services"
                className="text-blue-600 font-semibold hover:underline inline-flex items-center"
              >
                Discover My Services
                <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  