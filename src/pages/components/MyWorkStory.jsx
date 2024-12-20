import { useState, useEffect } from "react";

export default function MyWorkStory() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const workExperiences = [
    {
      title: "Full Stack Developer (Freelancer)",
      subtitle: "Self-Employed",
      location: "Remote",
      period: "Sept 2019 - Present",
      description: `After graduating from high school, I decided to establish myself as a freelance Full Stack Developer 
by opening a VAT-registered business in May 2020. I launched my digital marketing campaign, focusing on creating 
aesthetic and functional websites for small to medium-sized enterprises (SMEs) and developing e-commerce solutions.

During this period, I managed both the website development process and social media marketing strategies. This 
included designing and running targeted advertising campaigns to help businesses expand their digital presence. 
I primarily used Content Management Systems (CMS) like WordPress combined with Elementor and WooCommerce to build 
visually appealing showcase websites and user-friendly e-commerce platforms.

Over time, I transitioned into full-code development, honing my skills in **JavaScript**, **Next.js**, and 
**TailwindCSS** for creating dynamic and high-performance web applications. I further expanded my stack to include 
**PHP** and **Python**, enabling me to develop custom, scalable backend solutions and APIs.

The VAT-registered business operated until December 2020, when I successfully exceeded the flat-rate taxation 
threshold, marking a significant milestone in my professional growth as a developer and entrepreneur.`
,
    },
    {
      title: "IT Assistant",
      subtitle: "Ministero della Giustizia",
      location: "Milan, Italy",
      period: "May 2022 - Jun 2023",
      description: `While attending my first year of university, I successfully passed the competitive exam 
to join the Ministry of Justice as an IT Assistant. The selection process included a preliminary test, 
two specialized exams in **IT** and **penitentiary law**, and an oral examination.

On May 16, 2022, I began my service at the **Department of Penitentiary Administration (DAP)** in Milan, 
assigned to the **CED (Data Processing Center)** of the Opera Penitentiary Institute. My responsibilities 
included providing comprehensive **hardware and software support** for workstations (PDLs), managing 
and maintaining **video surveillance systems**, and configuring **DVR** and **NVR** solutions for monitoring 
and security purposes.

Additionally, I worked as an administrator for the **National Microsoft Active Directory**, managing user 
accounts, permissions, and ensuring proper access controls across the network. My role also involved 
working with **Microsoft SQL databases** to maintain critical systems and assist with data queries and management.

Other key duties included:
- Troubleshooting network and system issues to ensure seamless operations.
- Implementing and maintaining digitalization protocols for administrative efficiency.
- Overseeing Ministry-specific applications to support operational workflows.
- Ensuring compliance with security standards and performing routine system audits.

This role provided me with hands-on experience in IT infrastructure, system administration, and 
network management within a highly structured and secure environment.`
,
    },
    {
      title: "Computer Engineer",
      subtitle: "Scuola Superiore della Magistratura",
      location: "Florence, Italy",
      period: "Jun 2023 - Dec 2024",
      description: `As the IT Manager at the Castel Pulci headquarters of the **Scuola Superiore della Magistratura** 
(SSM), I was responsible for overseeing all technological aspects related to the training programs for magistrates. 
My role involved ensuring seamless **hardware and software integration**, troubleshooting technical issues, and 
coordinating IT resources to support the delivery of professional development courses.

The programs I managed included:
- **Initial Training** for magistrates in judicial apprenticeship (tirocinio).
- **Permanent Training** for both ordinary and honorary magistrates.
- **Leadership Training** for court and office directors.
- **International Training Courses** for judicial professionals and foreign legal delegations.

In addition to day-to-day IT operations, I implemented and managed **Microsoft Azure** services to ensure scalability 
and secure cloud-based solutions for document storage, resource sharing, and collaboration among participants. I was 
also responsible for maintaining the **Microsoft Active Directory** infrastructure to handle user authentication and 
role-based permissions for magistrates and administrative staff.

Key responsibilities included:
- Setting up and managing **workstations (PDLs)**, projectors, and **AV equipment** in training halls.
- Ensuring network stability and providing **on-site troubleshooting** for real-time technical issues during training sessions.
- Facilitating the integration of **e-learning platforms** and digital tools for course delivery.
- Coordinating video conferencing systems for remote and international sessions.
- Assisting with **data management** for participant records and course materials.

My role required close collaboration with judicial trainers, administrative personnel, and external IT vendors to 
ensure the smooth execution of educational programs. By leveraging modern technologies and implementing efficient 
IT processes, I contributed to the enhancement of training experiences for magistrates while upholding the operational 
standards of the **Scuola Superiore della Magistratura**.`
,
    },
    {
      title: "Cyber Security Analyst",
      subtitle: "AGID - Agenzia per l'Italia Digitale",
      location: "Rome, Italy",
      period: "Dec 2024 - Present",
      description: `As of *December 1, 2024*, I have been assigned to work at *AGID* (Agenzia per l'Italia Digitale), 
part of the *Presidency of the Council of Ministers*. I serve as a cybersecurity specialist within the 
*CERT-AGID* (*Computer Emergency Response Team*), a national team dedicated to protecting critical infrastructure 
and ensuring the security of public administration systems.

At CERT-AGID, my responsibilities include:
- Conducting *OSINT (Open Source Intelligence)* investigations to identify emerging cyber threats.
- Managing and continuously updating our flow of *Indicators of Compromise (IoCs)* by analyzing large-scale 
  *phishing* and *malware campaigns*.
- Monitoring and mitigating *data breaches* to safeguard sensitive information and public data.
- Performing *penetration tests* and conducting *vulnerability assessments* to identify and remediate security gaps.
- Implementing and maintaining *Intrusion Detection Systems (IDS)* to detect and respond to potential threats in real time.
- Collaborating with *national* and *international partners* to share threat intelligence and protect critical infrastructure.

Additionally, I participate in the continuous *monitoring* of public administration (*PA*) systems to identify 
anomalies, mitigate attacks, and ensure compliance with national cybersecurity standards. This includes 
analyzing advanced persistent threats (*APTs*), ransomware activities, and *zero-day vulnerabilities* 
to provide actionable insights.

My work also involves creating comprehensive *risk assessments* and coordinating response plans during 
cyber incidents to minimize damage and restore operational continuity. I contribute to the development 
of security protocols, policy enforcement, and the education of stakeholders on cybersecurity best practices.

By leveraging cutting-edge tools and technologies, such as *SIEM systems*, *sandbox environments*, and 
*network traffic analysis tools*, I ensure that the CERT-AGID team remains at the forefront of national 
cybersecurity defense.`
,
    },
  ];

  // Effetto Fade-In al caricamento della sezione
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("work-story");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="work-story" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titolo */}
        <h2
  className={`text-4xl font-bold text-gray-900 mb-12 text-center transition-opacity duration-1000 ${
    isVisible ? "opacity-100" : "opacity-0"
  }`}
>
  My Work <span className="text-blue-500">Story</span>
</h2>


        {/* Timeline */}
        <div className="relative">
          {/* Linea di Progresso */}
          <div className="absolute top-10 left-0 w-full h-1 bg-gray-200 z-0">
            <div
              className="h-1 bg-blue-600 transition-all duration-500"
              style={{ width: `${(activeStep + 1) * 25}%` }}
            ></div>
          </div>

          {/* Stepper */}
          <div className="relative flex justify-between items-center mb-10">
            {workExperiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col items-center w-1/4 text-center">
                {/* Cerchio indipendente */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ${
                    activeStep === index
                      ? "bg-blue-600 shadow-lg border-4 border-blue-600"
                      : "bg-gray-300 border-4 border-gray-100"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {index + 1}
                </div>
                {/* Periodo */}
                <p className="text-gray-600 text-sm mt-2">{exp.period.split(" - ")[0]}</p>
              </div>
            ))}
          </div>

          {/* Contenuto Dinamico */}
          <div
            className={`relative z-10 mt-12 text-gray-700 bg-white p-6 shadow-md rounded-lg animate-fadeInUp`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {workExperiences[activeStep].title}
            </h3>
            <h4 className="text-lg text-blue-600 mb-2">
              {workExperiences[activeStep].subtitle} |{" "}
              <span className="text-gray-700">{workExperiences[activeStep].location}</span>
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              {workExperiences[activeStep].period}
            </p>
            <p className="leading-relaxed">{workExperiences[activeStep].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
