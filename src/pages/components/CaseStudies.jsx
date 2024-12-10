import Link from 'next/link'; // Importa il componente Link di Next.js

export default function CaseStudies() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Titolo */}
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-gray-900">Case</span>{" "}
          <span className="text-blue-600">Studies</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Discover how innovative technologies are reshaping industries and solving complex problems.
        </p>

        {/* Griglia dei Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Primo Case Study: Utilizzo dell'IA nel Ministero della Giustizia */}
          <Link href="/article" passHref>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 relative group cursor-pointer">
              <img
                src="/AI.webp"
                alt="IA nel Ministero della Giustizia"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-white">
                AI Utilization in the Ministry of Justice

                </h3>
                <p className="text-sm text-gray-600 mb-4 group-hover:text-white">
                  A comprehensive solution implemented in Italy's Justice Ministry to integrate AI for managing legal processes, improving efficiency in case handling, and automating document review processes.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 hover:text-blue-800 transition duration-300 font-medium group-hover:text-white">
                    Leggi di più →
                  </span>
                </div>
              </div>
              {/* Hover Preview Text */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 bg-opacity-80 text-white flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center text-sm">
                  A detailed look into how AI is transforming Italy's judicial process, automating workflows and providing a digital framework for justice.
                </p>
              </div>
            </div>
          </Link>

          {/* Secondo Case Study: Implementazione dei Chatbot IA */}
          <Link href="/article2" passHref>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 relative group cursor-pointer">
              <img
                src="/chat.webp"
                alt="Implementazione Chatbot IA"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-white">
                Implementation of AI Chatbots
                </h3>
                <p className="text-sm text-gray-600 mb-4 group-hover:text-white">
                  Deployment of AI chatbots for enhancing customer service, capable of understanding and responding to complex queries in real-time, implemented in both public and private sectors.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 hover:text-blue-800 transition duration-300 font-medium group-hover:text-white">
                    Leggi di più →
                  </span>
                </div>
              </div>
              {/* Hover Preview Text */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 bg-opacity-80 text-white flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center text-sm">
                  Learn about the deployment of AI-powered chatbots to improve user engagement, streamline customer interactions, and offer real-time assistance.
                </p>
              </div>
            </div>
          </Link>

          {/* Terzo Case Study: Connubio AI e Cybersecurity */}
          <Link href="/article3" passHref>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 relative group cursor-pointer">
              <img
                src="/security.jpg"
                alt="AI e Cybersecurity"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-white">
                  Connubio AI e Cybersecurity
                </h3>
                <p className="text-sm text-gray-600 mb-4 group-hover:text-white">
                  Exploring the integration of AI technologies in cybersecurity measures, from threat detection to automated incident response, ensuring a smarter and more resilient defense system.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 hover:text-blue-800 transition duration-300 font-medium group-hover:text-white">
                    Leggi di più →
                  </span>
                </div>
              </div>
              {/* Hover Preview Text */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 bg-opacity-80 text-white flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center text-sm">
                  Dive into how AI is transforming cybersecurity, from proactive threat identification to fast and accurate incident responses in critical sectors.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
