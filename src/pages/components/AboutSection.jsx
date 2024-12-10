export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-start">
        {/* Immagine con posizione sticky */}
        <div className="w-full md:w-1/3 md:pr-8 sticky top-8 self-start">
          {/* Titolo superiore */}
          <p className="text-sm uppercase text-gray-600 mb-2">About</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            I am Francesco Barbato
          </h2>
          {/* Divisore */}
          <div className="w-12 h-0.5 bg-gray-800 mb-6"></div>
          {/* Immagine */}
          <img
            src="/profile.png"
            alt="About"
            className="rounded-full shadow-lg w-64 h-64 object-cover mx-auto md:mx-0"
          />
        </div>

        {/* Testo della sezione */}
        <div className="w-full md:w-2/3">
          {/* Testo allineato con l'immagine */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-relaxed">
            Actively writing code and building high- <br />
            functioning teams.
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            I am a passionate software engineer with a focus on crafting innovative solutions. With experience in full-stack development, I specialize in JavaScript, PHP, and Python to create high-performance web applications. I have had the opportunity to work on various complex projects, including e-commerce platforms and AI implementations, and I thrive in collaborative environments where I can contribute my problem-solving and leadership skills.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            I believe that leadership is a choice, not a title, and I take pride in making that choice every day. Currently, I am working on projects that integrate AI technologies, enhance user experiences, and drive businesses forward. I also dedicate my time to mentoring and supporting startup founders and junior developers in their growth journey.
          </p>

          {/* Lista degli strumenti preferiti */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Favorite Tools:
            </h4>
            <ul className="list-disc pl-5 text-gray-600">
              <li>JavaScript (React, Next.js)</li>
              <li>PHP (Laravel, Symfony)</li>
              <li>Python</li>
              <li>Databases (MySQL, PostgreSQL, MongoDB)</li>
              <li>Node.js</li>
              <li>TailwindCSS</li>
              <li>AWS (Amazon Web Services)</li>
              <li>Git/GitHub</li>
            </ul>
          </div>

          {/* Pulsante LinkedIn */}
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/francesco-barbato-a79b92250/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white font-medium px-5 py-3 rounded hover:bg-blue-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM8 19H5V9h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7c1 0 1.7.8 1.7 1.7s-.7 1.7-1.7 1.7zm13.5 11.3h-3v-5.6c0-1.3-.5-2.2-1.8-2.2-1 0-1.6.7-1.8 1.4-.1.2-.1.5-.1.8V19h-3V9h3v1.4c.5-.8 1.4-1.5 3-1.5 2.2 0 3.7 1.5 3.7 4.4V19z" />
              </svg>
              CONNECT ON LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
