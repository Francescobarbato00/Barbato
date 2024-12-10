import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/solid"; // Icona
import Flag from "react-world-flags"; // Libreria bandiere
import { useState } from "react";

export default function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Stato per il menu mobile

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-none border-b border-transparent will-change-transform"
      style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
    >
      {/* Container Header */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo e Nome */}
        <div className="flex items-center space-x-2">
          <CodeBracketIcon className="w-6 h-6 text-gray-800" />
          <h1 className="text-lg font-semibold text-gray-800">
            ING. Francesco Barbato
          </h1>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#work" className="text-gray-700 hover:text-gray-900 font-medium">
            WORK
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
            ABOUT
          </Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-gray-900 font-medium">
            TESTIMONIALS
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">
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
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <Link
                href="#work"
                className="text-gray-700 hover:text-gray-900 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                WORK
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-gray-700 hover:text-gray-900 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className="text-gray-700 hover:text-gray-900 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                TESTIMONIALS
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-gray-900 text-lg"
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
