import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Testo a sinistra */}
        <div className="text-base text-center md:text-left">
            Built with <span className="font-bold">JavaScript</span> and{" "}
            <span className="font-bold">Next.js</span> by{" "}
            <span className="text-blue-400 hover:text-blue-300 transition duration-300">
                Francesco Barbato
            </span>
        </div>


        {/* Icone Social */}
        <div className="flex space-x-6 text-2xl mt-4 md:mt-0">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://rss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaRss />
          </a>
        </div>
      </div>
    </footer>
  );
}
