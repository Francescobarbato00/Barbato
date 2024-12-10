export default function ClientsSection() {
  const clients = [
    "LINUX",
    "GITHUB",
    "PHP",
    "VERCEL",
    "SQL",
    "NEXT.JS",
    "DATABASE",
    "TEMPLATE MAKER",
    "AI",
    "VISUAL STUDIO CODE",
    "SUPABASE",
    "HTML",
    "CSS",
    "AZURE",
    "WORDPRESS",
    "PLUGIN ELEMENTOR",
    "PYTHON",
    "WINDOWS",
    "PHPMYADMIN",
    "CHATBOT",
  ];

  return (
    <section className="py-16 bg-white">
      {/* Contenitore principale */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-start">
        {/* Titolo e descrizione */}
        <div className="w-1/2">
          <h2 className="text-[28px] leading-[34px] font-medium text-[rgb(33,37,41)] font-serif mb-4">
            Other Clients and Past Projects
          </h2>
          <p className="text-gray-600 text-[16px] leading-[24px]">
            These are just a few of the amazing clients I've worked with and the diverse projects I've been involved in throughout my career. From startups to well-established organizations, I have worked across multiple industries, helping companies bring their ideas to life, optimize their digital solutions, and improve user experiences.
          </p>

          <p className="text-gray-600 text-[16px] leading-[24px] mt-4">
            Some key areas of my expertise include:
          </p>

          {/* Lista puntata */}
          <ul className="list-disc text-gray-800 text-[16px] leading-[24px] space-y-2 mt-4 ml-5">
            <li>Web Development (React, Next.js, PHP)</li>
            <li>AI and Machine Learning Integration</li>
            <li>Digital Transformation Strategy</li>
            <li>UI/UX Design and Optimization</li>
            <li>Cybersecurity Best Practices</li>
            <li>Project Management and MVP Launches</li>
          </ul>
        </div>

        {/* Griglia clienti */}
        <div className="w-1/2 grid grid-cols-2 gap-y-4 text-[14px] leading-[20px] text-gray-600 text-right">
          {clients.map((client, index) => (
            <span key={index} className="block">{client}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
