import { useState, useEffect, useRef } from "react";

export default function WhatIDo() {
  const [activeTab, setActiveTab] = useState("webDev");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Effetto Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Contenuto dinamico
  const tabContent = {
    webDev: (
      <div className="mt-6 text-gray-700 leading-relaxed">
  <h3 className="font-bold text-gray-800 mb-2">Web Developing</h3>
  <p>
    My journey into web development began during high school, where I first experimented with{" "}
    <span className="font-semibold">HTML</span> and <span className="font-semibold">CSS</span>. 
    I was fascinated by how simple code could transform into visually appealing web pages. As I grew 
    more comfortable with these fundamental technologies, I started exploring{" "}
    <span className="font-semibold">WordPress</span> and its powerful ecosystem of themes and plugins. 
    Tools like <span className="font-semibold">Elementor</span> allowed me to build functional websites quickly, 
    while integrating custom <span className="font-semibold">CSS</span> for tailored design solutions.
  </p>
  <p>
    As my interest in programming deepened, I transitioned into more dynamic development by learning{" "}
    <span className="font-semibold">JavaScript</span>. This marked a turning point as I started building 
    interactive user interfaces and rich web applications. I focused on modern frameworks like{" "}
    <span className="font-semibold">React</span> and later{" "}
    <span className="font-semibold">Next.js</span> for server-side rendering and optimized performance. 
    To complement these tools, I incorporated <span className="font-semibold">Tailwind CSS</span> to streamline 
    the design process and improve scalability.
  </p>
  <p>
    Moving beyond the frontend, I explored backend development with{" "}
    <span className="font-semibold">Node.js</span> and added support for{" "}
    <span className="font-semibold">PHP</span>-based solutions. Initially, I worked with{" "}
    <span className="font-semibold">relational databases</span> like{" "}
    <span className="font-semibold">MySQL</span> and tools such as{" "}
    <span className="font-semibold">phpMyAdmin</span> for structured data management. Over time, I expanded 
    into <span className="font-semibold">non-relational databases</span> like{" "}
    <span className="font-semibold">MongoDB</span> for projects requiring more flexible data storage. 
    This allowed me to create robust full-stack applications with secure data management and high scalability.
  </p>
  <p>
    I have also gained experience in API integration and development, using{" "}
    <span className="font-semibold">RESTful APIs</span> to connect frontend and backend services seamlessly. 
    For deployment and version control, I leverage tools like{" "}
    <span className="font-semibold">Git</span> and platforms like{" "}
    <span className="font-semibold">GitHub</span> to maintain codebases efficiently. Additionally, I use{" "}
    <span className="font-semibold">Vercel</span> and <span className="font-semibold">Netlify </span> 
    for fast and reliable deployment of frontend projects.
  </p>
  <p>
    My current focus is on building secure, performant, and accessible digital products that deliver 
    an <span className="font-semibold">exceptional user experience</span>. I am passionate about writing 
    clean, maintainable code and keeping up with the latest web technologies to continually improve 
    my development process.
  </p>
</div>

    ),
    aiExpert: (
      <div className="mt-6 text-gray-700 leading-relaxed">
      <h3 className="font-bold text-gray-800 mb-2">AI Expert</h3>
      <p>
        As an expert in <span className="font-semibold">Artificial Intelligence</span>, I design and develop 
        intelligent solutions that automate workflows, enhance decision-making processes, and solve complex problems 
        with precision. My work focuses on combining cutting-edge AI technologies with practical business applications.
      </p>
      <p>
        I specialize in creating <span className="font-semibold">customized AI-powered chatbots</span> and{" "}
        <span className="font-semibold">virtual assistants</span> that cater to specific client needs. These solutions 
        are built using advanced natural language processing (NLP) techniques and frameworks like{" "}
        <span className="font-semibold">TensorFlow</span>, <span className="font-semibold">PyTorch</span>, and{" "}
        <span className="font-semibold">spaCy</span>. By integrating state-of-the-art models such as{" "}
        <span className="font-semibold">GPT</span> and <span className="font-semibold">RAG (Retrieval-Augmented Generation)</span>, 
        I deliver intelligent systems capable of understanding context, generating human-like responses, and providing 
        accurate, real-time answers to users.
      </p>
      <p>
        My expertise extends to building and deploying <span className="font-semibold">machine learning</span> and{" "}
        <span className="font-semibold">deep learning</span> models for various applications, including{" "}
        <span className="font-semibold">image recognition</span>, <span className="font-semibold">object detection</span>, 
        and <span className="font-semibold">predictive analytics</span>. I utilize tools like{" "}
        <span className="font-semibold">OpenCV</span> and <span className="font-semibold">Scikit-learn</span> to solve 
        vision-related tasks and implement data-driven solutions.
      </p>
      <p>
        In addition, I have a strong foundation in the <span className="font-semibold">theoretical concepts</span> of AI, 
        including <span className="font-semibold">neural networks</span>, <span className="font-semibold">reinforcement learning</span>, 
        and <span className="font-semibold">optimization algorithms</span>. I stay up-to-date with the latest advancements 
        in AI research to continuously improve the performance and efficiency of my models.
      </p>
      <p>
        I have experience working with <span className="font-semibold">cloud platforms</span> such as{" "}
        <span className="font-semibold">AWS</span> and <span className="font-semibold">Google Cloud</span> to deploy 
        scalable AI applications. My work involves integrating APIs, optimizing AI workflows, and ensuring seamless deployment 
        across various environments.
      </p>
      <p>
        My AI-driven solutions empower businesses to optimize operations, improve decision-making, enhance 
        customer satisfaction, and deliver highly <span className="font-semibold">personalized experiences</span> 
        to their clients. Whether it’s a tailored chatbot, an intelligent recommendation engine, or a predictive analytics system, 
        I leverage AI to drive innovation and deliver measurable results.
      </p>
    </div>
    
      
    ),
    cyberSec: (
      <div className="mt-6 text-gray-700 leading-relaxed">
  <h3 className="font-bold text-gray-800 mb-2">Cybersecurity</h3>
  <p>
    I am currently working as a professional <span className="font-semibold">Cyber Security Analyst </span> 
    with a strong focus on protecting systems, networks, and applications from modern cyber threats. 
    My work involves identifying vulnerabilities, mitigating risks, and ensuring the security and resilience 
    of digital infrastructures.
  </p>
  <p>
    My expertise includes conducting <span className="font-semibold">vulnerability assessments</span> and{" "}
    <span className="font-semibold">penetration testing</span> to identify potential weak points within 
    systems and applications. I also specialize in performing <span className="font-semibold">OSINT</span> 
    (Open-Source Intelligence) investigations to gather actionable information on threat actors and security risks.
  </p>
  <p>
    In my role, I actively analyze and track <span className="font-semibold">malware campaigns</span> and{" "}
    <span className="font-semibold">phishing attacks</span>, documenting their behavior and providing mitigation 
    strategies. I utilize <span className="font-semibold">sandbox environments</span> to safely test and analyze 
    malicious files, ensuring that no impact is made on production systems.
  </p>
  <p>
    I have hands-on experience implementing advanced security techniques such as{" "}
    <span className="font-semibold">cryptography</span> for data protection and{" "}
    <span className="font-semibold">steganography</span> to detect and prevent hidden communication channels 
    used by malicious actors. I also focus on identifying <span className="font-semibold">Indicators of Compromise</span> 
    (IoCs) to help organizations respond effectively to potential breaches.
  </p>
  <p>
    My workflow includes utilizing <span className="font-semibold">SIEM systems</span> (Security Information and Event Management) 
    for real-time threat detection, analysis, and response. I constantly monitor security events and logs, correlating 
    data to identify patterns and anomalies that could indicate unauthorized access or attacks.
  </p>
  <p>
    By combining proactive security measures with continuous monitoring and testing, I ensure robust protection 
    against evolving cyber threats. My commitment to staying up-to-date with the latest security trends, tools, 
    and techniques allows me to safeguard organizations and their data while maintaining compliance with 
    <span className="font-semibold">industry standards</span>.
  </p>
</div>

    ),
  };

  return (
    <section
      ref={sectionRef}
      className={`py-12 bg-gray-50 px-4 transition-all duration-1000 ${
        isVisible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Titolo */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
  What I <span className="text-blue-500">Do</span>
</h2>


        {/* Menu Testuale */}
        <div className="grid grid-cols-3 border-b text-center">
          <div
            className={`pb-2 cursor-pointer text-sm font-medium ${
              activeTab === "webDev"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("webDev")}
          >
            Web Developing
          </div>
          <div
            className={`pb-2 cursor-pointer text-sm font-medium ${
              activeTab === "aiExpert"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("aiExpert")}
          >
            AI Expert
          </div>
          <div
            className={`pb-2 cursor-pointer text-sm font-medium ${
              activeTab === "cyberSec"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("cyberSec")}
          >
            Cybersecurity
          </div>
        </div>

        {/* Contenuto delle Tab */}
        <div>{tabContent[activeTab]}</div>
      </div>
    </section>
  );
}
