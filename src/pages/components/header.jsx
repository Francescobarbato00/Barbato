import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/solid"; // Importa l'icona CodeBracketIcon
import Flag from "react-world-flags"; // Importa la libreria delle bandiere
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Stato per il menu mobile

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Nome a sinistra */}
        <div className="flex items-center space-x-2">
          <CodeBracketIcon className="w-6 h-6 text-gray-800" /> {/* Icona */}
          <h1 className="text-[16px] font-semibold text-gray-800">
            ING. Francesco Barbato
          </h1>
        </div>

        {/* Menu per dispositivi desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="#work"
                className="text-[16px] font-medium text-gray-700 hover:text-gray-900"
              >
                WORK
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-[16px] font-medium text-gray-700 hover:text-gray-900"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className="text-[16px] font-medium text-gray-700 hover:text-gray-900"
              >
                TESTIMONIALS
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-[16px] font-medium text-gray-700 hover:text-gray-900"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Pulsanti a destra */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/francesco-barbato-a79b92250/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white text-[16px] font-medium px-4 py-2 rounded hover:bg-blue-700 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM8 19H5V9h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7c1 0 1.7.8 1.7 1.7s-.7 1.7-1.7 1.7zm13.5 11.3h-3v-5.6c0-1.3-.5-2.2-1.8-2.2-1 0-1.6.7-1.8 1.4-.1.2-.1.5-.1.8V19h-3V9h3v1.4c.5-.8 1.4-1.5 3-1.5 2.2 0 3.7 1.5 3.7 4.4V19z" />
            </svg>
            CONNECT ON LINKEDIN
          </a>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 hover:opacity-80 transition">
              <Flag code="GB" className="w-6 h-6" />
            </button>
            <button className="flex items-center space-x-1 hover:opacity-80 transition">
              <Flag code="IT" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Icona Menu per dispositivi mobili */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-800"
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

      {/* Menu mobile con animazione e miglior layout */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg transform transition-all duration-300 ease-in-out">
          <ul className="flex flex-col items-center space-y-6 py-6 px-8">
            <li>
              <Link
                href="#work"
                className="text-[18px] font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                WORK
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-[18px] font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className="text-[18px] font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                TESTIMONIALS
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-[18px] font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
