export default function VisionMission() {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-blue-500 via-blue-100 to-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Titolo con Effetto di Ingresso */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 animate-fadeInUp">
          Vision and Mission
        </h2>

        {/* Vision */}
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          Our vision is to explore new technological frontiers, standing out for
          our <span className="font-semibold">curiosity</span> and{" "}
          <span className="font-semibold">execution speed</span>. We aim to be
          leaders in providing innovative solutions that create a{" "}
          <span className="font-semibold">positive, sustainable, and lasting impact</span>{" "}
          for businesses worldwide.
        </p>

        {/* Mission */}
        <p className="text-lg text-gray-800 leading-relaxed">
          Our mission is to develop <span className="font-semibold">cutting-edge technological solutions</span>{" "}
          to address current needs and anticipate future challenges. By combining{" "}
          <span className="font-semibold">operational agility</span> with{" "}
          <span className="font-semibold">innovative thinking</span>, we strive to deliver{" "}
          <span className="font-semibold">valuable results</span> that empower businesses 
          and create a lasting competitive edge.
        </p>
      </div>
    </section>
  );
}
