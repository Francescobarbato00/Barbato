export default function ShippingSection() {
    return (
      <>
        {/* Sezione Superiore Grigio Chiaro */}
        <section className="bg-gray-100 py-24 relative z-0">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              A Section Above Shipping Content
            </h2>
            <p className="text-gray-600 text-lg">
              Questo è il contenuto introduttivo della sezione sopra il rettangolo blu.
            </p>
          </div>
        </section>
  
        {/* Rettangolo Blu Sovrapposto */}
        <div className="bg-blue-600 text-white py-12 px-8 md:px-16 shadow-lg rounded-lg absolute top-[-120px] left-1/2 transform -translate-x-1/2 z-10 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shipping More Than Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Colonna 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                ✍️ Popular Writings
              </h3>
              <ul className="text-white text-sm">
                <li>Annual Reflection Framework</li>
                <li>Bringing Humanity Back to Email</li>
                <li>Work Life Harmony</li>
                <li>Web and Mobile App Sitemap</li>
              </ul>
            </div>
            {/* Colonna 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                🎙️ Podcast Interviews
              </h3>
              <ul className="text-white text-sm">
                <li>Methods and Mindsets with CTO at New Story</li>
                <li>Process Optimization</li>
                <li>Creating a Human-Centered Business</li>
                <li>From Medieval Times to CEO</li>
              </ul>
            </div>
            {/* Colonna 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                🛠️ Resources
              </h3>
              <ul className="text-white text-sm">
                <li>Code School Book</li>
                <li>Turntable.js</li>
                <li>Hamsterwheel.js</li>
                <li>Scrollimptious.js</li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Sezione Grigio Scura Sottostante */}
        <section className="bg-gray-900 py-32">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Talk</h2>
            <p className="text-gray-400 mb-6">
              Connect and chat about technology, life, and collaboration.
            </p>
            <a
              href="https://www.linkedin.com/in/your-profile"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONNECT ON LINKEDIN
            </a>
          </div>
        </section>
      </>
    );
  }
  