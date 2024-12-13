import Link from 'next/link';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Primo Case Study */}
          <Link href="/article" passHref>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 relative group cursor-pointer">
      <img
        src="/security.jpg"
        alt="Understanding Cybersecurity"
        className="w-full h-48 object-cover"
      />
      <div className="p-4 md:p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-white">
          Understanding Cybersecurity: Hashing Algorithms
        </h3>
        <p className="text-sm text-gray-600 mb-4 group-hover:text-white">
          Explore the importance of hashing algorithms like MD5, SHA-1, and SHA-256 in securing sensitive data.
        </p>
        <span className="text-blue-600 hover:text-blue-800 transition duration-300 font-medium group-hover:text-white">
        Read More →
        </span>
      </div>
      {/* Hover Preview Text */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 bg-opacity-80 text-white flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-center text-sm">
          Discover how hashing algorithms protect sensitive information, ensure data integrity, and enhance cybersecurity.
        </p>
      </div>
    </div>
  </Link>

          {/* Secondo Case Study */}
          <Link href="/article2" passHref>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 relative group cursor-pointer">
              <img
                src="/chat.jpg"
                alt="Implementazione Chatbot IA"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-white">
                Case Study: Successful Implementation of AI-Powered Chatbots in Modern Systems
                </h3>
                <p className="text-sm text-gray-600 mb-4 group-hover:text-white">
                  Deployment of AI chatbots for enhancing customer service and real-time responses.
                </p>
                <span className="text-blue-600 hover:text-blue-800 transition duration-300 font-medium group-hover:text-white">
                Read More →
                </span>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 bg-opacity-80 text-white flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center text-sm">
                  Learn about the deployment of AI-powered chatbots to improve customer interactions.
                </p>
              </div>
            </div>
          </Link>

          {/* Terzo Case Study */}
          <Link href="/article3" passHref>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 relative group cursor-pointer">
              <img
                src="/sec.jpg"
                alt="AI e Cybersecurity"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-white">
                AI and Cybersecurity: The Perfect Synergy for Modern Digital Protection
                </h3>
                <p className="text-sm text-gray-600 mb-4 group-hover:text-white">
                  Exploring the integration of AI technologies in cybersecurity, from detection to incident response.
                </p>
                <span className="text-blue-600 hover:text-blue-800 transition duration-300 font-medium group-hover:text-white">
                Read More →
                </span>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 bg-opacity-80 text-white flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center text-sm">
                  Dive into how AI is transforming cybersecurity, ensuring smarter and resilient systems.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
