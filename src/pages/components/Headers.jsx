import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/solid"; // Icona
import Flag from "react-world-flags"; // Libreria bandiere
import { useState } from "react";

export default function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Stato per il menu mobile

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo e Nome */}
        <Link href="/" passHref>
          <div className="flex items-center space-x-2 cursor-pointer hover:scale-105 transform transition-transform duration-300">
            <CodeBracketIcon className="w-6 h-6 text-gray-800" />
            <h1 className="text-lg font-semibold text-gray-800 hover:text-blue-500">
              ING. Francesco Barbato
            </h1>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
        <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
            HOME
          </Link>
          <Link href="/work" className="text-gray-700 hover:text-gray-900 font-medium">
            WORK
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium">
            BLOG
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
            CONTACT
          </Link>
        </nav>

        {/* Pulsanti Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/francesco-barbato-a79b92250/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center transition-transform transform hover:scale-105"
          >
            CONNECT ON LINKEDIN
          </a>

          {/* Selezione Lingua */}
          <div className="flex space-x-2">
            <button className="hover:opacity-80 transition">
              <Flag code="GB" className="w-6 h-6" />
            </button>
            <button className="hover:opacity-80 transition">
              <Flag code="IT" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Menu Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menu Mobile Fullscreen */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center animate-fade-in">
          {/* Pulsante di chiusura */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-700 hover:text-gray-900 text-3xl"
          >
            &times;
          </button>

          {/* Link del Menu Mobile */}
          <nav className="flex flex-col space-y-8 items-center">
          <Link
              href="/"
              className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            
            
            
            
            <Link
              href="/work"
              className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              WORK
            </Link>
            <Link
              href="/articles"
              className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      )}

      {/* Animazione */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </header>
  );
}
