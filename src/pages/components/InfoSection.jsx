import { useState } from "react";

export default function InfoSection() {
    // Stato per gestire il valore del select
    const [jobRole, setJobRole] = useState("");

    return (
        <section className="flex flex-col md:flex-row items-stretch min-h-screen">
            {/* Sezione Sinistra con Gradiente */}
            <div
                className="w-full md:w-1/2 bg-gradient-to-br from-blue-700 via-blue-400 to-blue-200 
                            flex items-center justify-center px-4 sm:px-8 py-28 md:py-0 
                            animate-fadeIn md:animate-slideInLeft"
            >
                <div className="max-w-lg text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                        Programmer, <span className="italic text-blue-300">AI expert</span> and Web Developer
                    </h1>
                    <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                        I specialize in building high-performance web applications and innovative AI solutions to bring your ideas to life.
                    </p>
                </div>
            </div>

            {/* Sezione Destra con Form */}
            <div
                className="w-full md:w-1/2 bg-white flex flex-grow items-start justify-center px-4 sm:px-8 py-12 md:pt-40 
                            min-h-[600px] overflow-auto animate-fadeIn md:animate-slideInRight"
            >
                <div className="w-full max-w-lg text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
                        Talk to Me, Computer Engineer
                    </h2>
                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="First Name*"
                                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Last Name*"
                                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Work Email*"
                                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Company Name*"
                                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Select con useState per evitare il warning */}
                        <select
                            value={jobRole}
                            onChange={(e) => setJobRole(e.target.value)}
                            className="w-full border border-gray-300 p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>
                                Job Role
                            </option>
                            <option value="manager">Manager</option>
                            <option value="developer">Developer</option>
                            <option value="executive">Executive</option>
                            <option value="other">Other</option>
                        </select>

                        <textarea
                            placeholder="How can we help you?"
                            rows="4"
                            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>

                        <div className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                            />
                            <label className="text-sm text-gray-600">
                                I accept the terms of the{" "}
                                <a href="#" className="text-blue-500 hover:underline">
                                    privacy policy
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition duration-300"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
