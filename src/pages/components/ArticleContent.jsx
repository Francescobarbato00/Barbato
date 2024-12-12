import React from 'react';
import { useRouter } from 'next/router';

const ArticleContent = () => {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <section className="py-12 sm:py-16 bg-white fade-in-up">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
        {/* Article Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center leading-snug sm:leading-tight fade-in-up">
          Understanding Cybersecurity: The Importance of Hashing Algorithms in Protecting Sensitive Data
        </h2>

        {/* Image */}
        <img
          src="/security.jpg"
          alt="Cybersecurity Hashing"
          className="w-full h-48 sm:h-60 object-cover mb-6 rounded fade-in-up"
        />

        {/* Article Body */}
        <div className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 fade-in-up">
          <h3 className="text-2xl font-semibold mb-4 fade-in-up">
            The Growing Importance of Cybersecurity in the Digital Age
          </h3>
          <p className="mb-4">
            In today’s society, one of the most significant concerns is cybersecurity. The rapid growth of digital
            technologies has led to an unprecedented increase in the amount of data circulating through the{' '}
            <strong>World Wide Web</strong>. From social media to e-commerce, banking, and cloud services, countless
            data packets are transmitted across networks every second.
          </p>
          <p className="mb-4">
            However, amidst this immense flow of data are <strong>sensitive pieces of information</strong> such as
            personal details, financial records, login credentials, and more. These data points are critical because
            if they fall into the wrong hands, they can be exploited for identity theft, fraud, or other malicious
            purposes. Protecting this information has become a top priority for organizations and individuals alike.
          </p>
          <p className="mb-4">
            This is where the role of cryptographic algorithms comes into play. Among the various techniques used in
            cybersecurity, <strong>hashing</strong> algorithms stand out for their ability to secure sensitive data
            effectively.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-4 fade-in-up">
            What is Hashing? A Fundamental Concept in Data Protection
          </h3>
          <p className="mb-4">
            <strong>Hashing</strong> is a cryptographic process that converts input data (such as text, passwords, or
            files) into a fixed-length string of characters, known as the <strong>hash</strong> or{' '}
            <strong>digest</strong>. This transformation is performed by a <strong>hash function</strong> that follows
            a mathematical algorithm.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Deterministic</strong>: The same input will always produce the same hash.
            </li>
            <li>
              <strong>Fixed-Length Output</strong>: Regardless of the size of the input, the output hash will have a
              predetermined length (e.g., 128 bits, 160 bits, or 256 bits).
            </li>
            <li>
              <strong>Irreversibility</strong>: Hash functions are <strong>one-way</strong>; it is computationally
              infeasible to reverse a hash to obtain the original input.
            </li>
            <li>
              <strong>Collision Resistance</strong>: It is difficult to find two different inputs that produce the
              same hash.
            </li>
            <li>
              <strong>Avalanche Effect</strong>: A slight change in the input results in a completely different hash
              output.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-4 fade-in-up">Why is Hashing Used in Cybersecurity?</h3>
          <p className="mb-4">
            Hashing plays a crucial role in various aspects of cybersecurity, primarily because of its ability to
            protect sensitive information while ensuring data integrity. Below are the most common use cases of
            hashing:
          </p>

          <h4 className="text-xl font-medium mt-4 mb-2 fade-in-up">1. Password Storage</h4>
          <p className="mb-4">
            Instead of storing plaintext passwords, systems store the hash of passwords. When a user logs in, the
            system hashes the entered password and compares it with the stored hash. If they match, access is granted.
            This ensures that even if the database is compromised, the actual passwords remain secure.
          </p>

          <h4 className="text-xl font-medium mt-4 mb-2 fade-in-up">2. Data Integrity Verification</h4>
          <p className="mb-4">
            Hashing is used to check if data has been tampered with. By comparing the hash of the original file with
            that of the received file, one can verify if the data remains unchanged.
          </p>

          <h4 className="text-xl font-medium mt-4 mb-2 fade-in-up">3. Digital Signatures</h4>
          <p className="mb-4">
            Hashing ensures that digital signatures are reliable and that documents or messages have not been altered
            in transit.
          </p>

          <h4 className="text-xl font-medium mt-4 mb-2 fade-in-up">4. Message Authentication Codes (MAC)</h4>
          <p className="mb-4">
            Hashing algorithms are often combined with cryptographic keys to create MACs, which help verify the
            authenticity and integrity of messages.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-4 fade-in-up">Conclusion: The Role of Hashing in Modern Cybersecurity</h3>
          <p className="mb-4">
            Hashing algorithms like <strong>SHA-256</strong> are indispensable tools in modern cybersecurity, ensuring the 
            security, integrity, and authenticity of data. While older algorithms like <strong>MD5</strong> and <strong>SHA-1</strong> 
            have been deemed insecure due to advances in computing power and cryptanalysis, <strong>SHA-256</strong> continues 
            to stand strong as the industry standard. Organizations and developers must remain vigilant, adopting modern hashing 
            techniques and best practices to protect sensitive data and safeguard digital systems against evolving threats.
          </p>
        </div>

         {/* Back to Home Button */}
         <div className="text-left mt-8 fade-in-up">
            <button 
              onClick={goHome} 
              className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-full"
            >
              Back to Home
            </button>
          </div>
      </div>
    </section>
  );
};

export default ArticleContent;
