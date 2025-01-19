import { useState } from "react";

export default function InfoSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        jobRole: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        setLoading(false);

        if (response.ok) {
            setSuccess("Email inviata con successo!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                phone: "",
                jobRole: "",
                message: "",
            });
        } else {
            setSuccess("Errore nell'invio dell'email.");
        }
    };

    return (
        <section className="flex flex-col md:flex-row items-stretch min-h-screen">
            {/* Sezione Sinistra */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-700 via-blue-400 to-blue-200 flex items-center justify-center px-4 sm:px-8 py-28 md:py-0 animate-fadeIn md:animate-slideInLeft">
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
            <div className="w-full md:w-1/2 bg-white flex flex-grow items-start justify-center px-4 sm:px-8 py-12 md:pt-40 min-h-[600px] overflow-auto animate-fadeIn md:animate-slideInRight">
                <div className="w-full max-w-lg text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
                        Talk to Me, Computer Engineer
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="text" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} required className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <input type="text" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleChange} required className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="email" name="email" placeholder="Work Email*" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <input type="text" name="company" placeholder="Company Name*" value={formData.company} onChange={handleChange} required className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        
                        <select name="jobRole" value={formData.jobRole} onChange={handleChange} className="w-full border border-gray-300 p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="" disabled>Job Role</option>
                            <option value="manager">Manager</option>
                            <option value="developer">Developer</option>
                            <option value="executive">Executive</option>
                            <option value="other">Other</option>
                        </select>

                        <textarea name="message" placeholder="How can we help you?" rows="4" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

                        <div className="flex items-start space-x-2">
                            <input type="checkbox" required className="w-5 h-5 text-blue-600 focus:ring-blue-500" />
                            <label className="text-sm text-gray-600">
                                I accept the terms of the <a href="#" className="text-blue-500 hover:underline">privacy policy</a>
                            </label>
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition duration-300">
                            {loading ? "Sending..." : "SUBMIT"}
                        </button>

                        {success && <p className="text-green-500 mt-4">{success}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
