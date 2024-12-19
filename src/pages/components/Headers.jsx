import Link from "next/link";
import { CodeBracketIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Flag from "react-world-flags";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "/lib/firebase";

export default function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Stato per il popup di ricerca
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Funzione per cercare articoli in Firestore
  const searchArticles = async () => {
    if (query.trim() === "") return;
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const filteredResults = querySnapshot.docs
        .map((doc) => doc.data())
        .filter((post) =>
          post.title.toLowerCase().includes(query.toLowerCase())
        );
      setResults(filteredResults);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

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

          {/* Icona di Ricerca */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-gray-700 hover:text-gray-500"
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Icona di Ricerca Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-gray-700 hover:text-gray-500"
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-800 focus:outline-none"
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
      </div>

      {/* Popup di Ricerca */}
      {isSearchOpen && (
  <div
    className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-4 transition-all duration-500 ease-out transform ${
      isSearchOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    {/* Close Button */}
    <button
      onClick={() => setIsSearchOpen(false)}
      className="absolute top-6 right-6 text-gray-700 hover:text-gray-900 text-3xl"
    >
      &times;
    </button>
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Search the Site</h2>
    <input
      type="text"
      placeholder="Search my blog posts or topics..."

      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full max-w-xl p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={searchArticles}
      className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
    >
      Search
    </button>

          {/* Risultati della Ricerca */}
          <div className="mt-6 w-full max-w-xl">
            {results.length > 0 ? (
              <ul>
                {results.map((post, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:underline"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              query && <p className="text-gray-500">No results found.</p>
            )}
          </div>
        </div>
      )}

      {/* Menu Mobile Fullscreen */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center animate-fade-in">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-700 hover:text-gray-900 text-3xl"
          >
            &times;
          </button>
          <nav className="flex flex-col space-y-8 items-center">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
              HOME
            </Link>
            <Link href="/work" onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
              WORK
            </Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
              BLOG
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
