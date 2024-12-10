export default function ContactSection() {
  return (
    <section className="py-16" style={{ backgroundColor: "rgb(33, 37, 41)" }}>
      <div className="max-w-3xl mx-auto text-center px-4">
        {/* Titolo Contact */}
        <p className="text-[16px] font-semibold leading-[0px] text-white mb-4">
          CONTACT
        </p>

        {/* Titolo Let's Talk */}
        <h2
          className="font-serif text-[45px] font-medium leading-[54px] text-white mb-6"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Let's Talk
        </h2>

        {/* Testo Descrittivo */}
        <p className="text-[20px] font-light leading-[30px] text-white mb-8">
          Every great journey starts with a single conversation. <br />
          Let's connect, share ideas, and explore new opportunities <br />
          together. Whether you have a project in mind or just want <br />
          to chat about the latest trends, I’m always open to new <br />
          discussions.
        </p>
        {/* Pulsante LinkedIn */}
        <div>
          <a
            href="https://www.linkedin.com/in/francesco-barbato-a79b92250/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white text-[16px] font-medium px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
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
    </section>
  );
}
