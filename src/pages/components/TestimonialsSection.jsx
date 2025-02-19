import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faComments, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Titolo */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-sm text-gray-500 uppercase">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            What People Are <br />
            <span className="font-normal">
              Saying <span className="text-blue-600">About Us</span>
            </span>
          </h2>
          <div className="w-12 h-1 bg-gray-900 mt-2 mx-auto md:mx-0"></div>
        </div>

        {/* Griglia delle testimonianze */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Testimonianza 1 */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-gray-900 mb-4">
              “Exceeded expectations in every way”
            </p>
            <p className="text-gray-700 mb-6">
              The team delivered a result that was both high-quality and timely. 
              Communication was seamless, and they exceeded expectations in every way.
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-4">
              <FontAwesomeIcon icon={faUserTie} className="w-12 h-12 text-blue-600" />
              <div>
                <p className="font-bold text-gray-900">Anonymous Client</p>
                <p className="text-sm italic text-gray-600">Project Feedback</p>
              </div>
            </div>
          </div>

          {/* Testimonianza 2 */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-gray-900 mb-4">
              “An exceptional experience throughout”
            </p>
            <p className="text-gray-700 mb-6">
              Professional, reliable, and dedicated. I appreciated their transparency 
              and focus on delivering a product that met all our needs.
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-4">
              <FontAwesomeIcon icon={faComments} className="w-12 h-12 text-blue-600" />
              <div>
                <p className="font-bold text-gray-900">Verified Customer</p>
                <p className="text-sm italic text-gray-600">Service Collaboration</p>
              </div>
            </div>
          </div>

          {/* Testimonianza 3 */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-gray-900 mb-4">
              “Highly recommended for their professionalism”
            </p>
            <p className="text-gray-700 mb-6">
              A pleasure to work with. The team was professional, proactive, and always 
              kept us informed throughout the process.
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-4">
              <FontAwesomeIcon icon={faHandsHelping} className="w-12 h-12 text-blue-600" />
              <div>
                <p className="font-bold text-gray-900">Satisfied Client</p>
                <p className="text-sm italic text-gray-600">General Testimonial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
