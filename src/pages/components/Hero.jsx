export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center px-4 py-16 bg-white">
        {/* Titolo superiore */}
        <h2 className="text-[16px] font-semibold leading-[0px] text-[rgb(33,37,41)] uppercase mb-4">
          ING. FRANCESCO BARBATO
        </h2>
  
        <h1 className="font-[530] text-[65px] leading-[78px] text-[rgb(33,37,41)] font-serif mb-6">
        Combining <span className="text-blue-600 underline">technology</span> <br />
        and creative <br /> <span className="text-blue-600 underline">problem-solving</span> to <br />
        positively impact <br />
        others.
        </h1>


  
        {/* Descrizione */}
        <p className="text-[18px] leading-[30px] font-light text-[rgb(33,37,41)] max-w-2xl mb-8">
          I use technology to connect people and help others reach their full potential.
        </p>
  
        {/* Pulsante LinkedIn */}
        <a
          href="https://www.linkedin.com/in/francesco-barbato-a79b92250/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white text-[18px] font-medium px-6 py-3 rounded hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center"
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
      </section>
    );
  }
  