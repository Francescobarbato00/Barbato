export default function SoftSkillsSection() {
    return (
      <section className="bg-gray-100 py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Titolo */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Why Contact Me?
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              My key soft skills that drive success and collaboration.
            </p>
          </div>
  
          {/* Griglia con le 3 Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 - Leadership */}
            <div className="bg-white shadow-md p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Leadership
              </h3>
              <p className="text-gray-600 text-base">
                I lead by example, fostering collaboration and empowering teams to
                achieve their goals efficiently and confidently.
              </p>
            </div>
  
            {/* Box 2 - Problem-Solving */}
            <div className="bg-white shadow-md p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Problem-Solving
              </h3>
              <p className="text-gray-600 text-base">
                I excel at analyzing complex challenges and delivering innovative,
                practical solutions that drive success.
              </p>
            </div>
  
            {/* Box 3 - Empathy */}
            <div className="bg-white shadow-md p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Empathy
              </h3>
              <p className="text-gray-600 text-base">
                Understanding others' perspectives enables me to build strong,
                supportive relationships and foster collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  