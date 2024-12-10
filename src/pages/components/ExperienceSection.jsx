export default function ExperienceSection() {
    const experiences = [
      {
        id: 1,
        title: "Full Stack Developer (Freelancer)",
        company: "Self-Employed",
        duration: "Sept 2019 - Present",
        description:
          "As a freelance Full Stack Developer with a VAT number, I specialize in JavaScript, Next.js, TailwindCSS, PHP, and Python. My work involves developing complex and high-performance web applications, creating showcase websites and e-commerce solutions for medium-sized companies across various industries. I focus on delivering tailored solutions by writing custom code and integrating cutting-edge technologies to enhance performance and user experience."
      },
      {
        id: 2,
        title: "IT assistant",
        company: "Ministero della Giustizia",
        duration: "May 2022 - Jun 2023",
        description:
          "As an IT Assistant at the Department of Penitentiary Administration (DAP), I am responsible for the following tasks: Implementing digitalization protocols in compliance with new IT guidelines, providing hardware and software support, managing key Ministry applications, overseeing video surveillance and image extraction from DVRs, administering and testing the network, and serving as an administrator for the National Active Directory domain of the Justice Ministry."
      },
      {
        id: 3,
        title: "Computer Engineer",
        company: "Scuola Superiore della Magistratura",
        duration: "Jun 2023 - Dec 2024",
        description:
          "As the IT Manager at the Castel Pulci branch, I am responsible for overseeing and managing IT operations related to a range of judicial training programs. These include initial training for judicial trainees, continuous professional development for both regular and honorary judges, and managing training programs for office managers, as well as international training courses. I ensure that the IT infrastructure supports these programs and handle troubleshooting, hardware/software integration, and coordination of technological resources to ensure smooth operations for all involved."
      },
      {
        id: 4,
        title: "Cyber Security Analyst",
        company: "AGID - Agenzia per l'Italia Digitale",
        duration: "Dec 2024 - Present",
        description:
          "As a Cyber Security Analyst at CERT-AGID, my responsibilities involve analyzing and mitigating various cyber threats, including malware and phishing attempts, while managing data breaches that affect Italy's public administration. I am involved in the detection, analysis, and response to security incidents, and collaborate with national and international partners to ensure compliance with cyber security regulations. In addition, I implement and oversee intrusion detection systems (IDS), conduct regular audits, and manage risk assessments to protect critical national infrastructure from cyber attacks and vulnerabilities. My role ensures the protection of sensitive data across governmental systems and contributes to the resilience of Italy's public sector in the face of evolving cyber threats."
      }
    ];
  
    const education = [
      {
        id: 1,
        title: "Diploma Informatico",
        institution: "ITC Vincenzo Arangio Ruiz",
        duration: "Set 2014 - Giugno 2019",
        description:
          "I completed my high school diploma in Computer Science at ITC Vincenzo Arangio Ruiz. My studies included HTML, CSS, databases, and foundational programming skills, providing me with a solid understanding of web development and IT systems. Additionally, I was involved in extracurricular activities, serving as the representative of the provincial student council during the 2018/19 school year, where I focused on political and student advocacy issues."
      },
      {
        id: 2,
        title: "Laurea Triennale in Informatica",
        institution: "Università degli Studi La Sapienza",
        duration: "Set 2021 - Set 2023",
        description:
          "I began my Bachelor's in Computer Science at La Sapienza University, focusing on programming, algorithms, data structures, and software engineering. In my third year, I transferred to Computer Engineering, gaining expertise in hardware/software integration, network security, and engineering principles applied to IT systems. I gained proficiency in languages like Java, Python, and C++, and developed skills in AI and machine learning, laying the foundation for my engineering specialization."
      },
      {
        id: 3,
        title: "Laurea Triennale in Ingegneria Informatica",
        institution: "Università degli Studi Guglielmo Marconi",
        duration: "Set 2023 - Ott 2024",
        description:
          "I am currently pursuing a Bachelor's degree in Computer Engineering at the University of Guglielmo Marconi. The program focuses on the integration of hardware and software, network security, and systems engineering. My thesis is focused on experimental research in artificial intelligence, specifically developing and optimizing chatbot solutions using advanced natural language processing (NLP) techniques and reinforcement learning (RL). I aim to enhance conversational capabilities and improve automation efficiency, bridging the gap between people and technology through AI-driven solutions."
      },
      {
        id: 4,
        title: "Master Degree in Cybersecurity",
        institution: "Università degli Studi La Sapienza",
        duration: "Oct 2024 - Present",
        description:
          "Currently pursuing a Master's degree in Cybersecurity at the University of La Sapienza. The program focuses on securing information systems, network security, ethical hacking, and the management of cyber threats. It covers critical areas such as malware analysis, intrusion detection systems (IDS), cryptography, and risk management. The curriculum is designed to equip me with the skills needed to respond effectively to emerging cybersecurity challenges. I am gaining hands-on experience with advanced techniques for identifying vulnerabilities, protecting critical infrastructure, and preventing cyber attacks, which will enable me to protect sensitive data and information across both public and private sectors. Additionally, I am learning to implement strategies that safeguard organizations from cyber threats while adhering to regulatory requirements."
      }
    ];
  
    return (
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-[16px] font-semibold leading-none text-[rgb(33,37,41)] mb-2">
              EXPERIENCES & EDUCATION
            </p>
            <h2 className="text-[32px] font-normal leading-[24px] text-[rgb(33,37,41)]">Career & Education</h2>
            <div className="w-16 h-1 bg-black mt-4"></div>
          </div>
  
          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[20px] font-bold text-[rgb(33,37,41)] mb-4">Experience</h3>
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="card bg-white rounded-lg shadow-lg p-6 mb-6 border-t-4 border-blue-600"
                >
                  <div className="content">
                    <h4 className="text-lg font-semibold text-[rgb(33,37,41)]">{exp.title}</h4>
                    <p className="text-sm text-gray-500">{exp.company}</p>
                    <p className="text-xs text-gray-400">{exp.duration}</p>
                    <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Education Grid */}
            <div>
              <h3 className="text-[20px] font-bold text-[rgb(33,37,41)] mb-4">Education</h3>
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="card bg-white rounded-lg shadow-lg p-6 mb-6 border-t-4 border-blue-600"
                >
                  <div className="content">
                    <h4 className="text-lg font-semibold text-[rgb(33,37,41)]">{edu.title}</h4>
                    <p className="text-sm text-gray-500">{edu.institution}</p>
                    <p className="text-xs text-gray-400">{edu.duration}</p>
                    <p className="text-sm text-gray-600 mt-2">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  