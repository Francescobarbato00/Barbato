import React from 'react';
import { useRouter } from 'next/router';

const ArticleContent = () => {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
        {/* Article Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center leading-snug sm:leading-tight">
          Case Study: AI Utilization in the Ministry of Justice
        </h2>

        {/* Image */}
        <img
          src="/AI.webp"
          alt="AI in the Ministry of Justice"
          className="w-full h-48 sm:h-60 object-cover mb-6 rounded"
        />

        {/* Article Body */}
        <div className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
          <p className="mb-4">
            <strong>Challenge</strong><br />
            In a fast-evolving digital era, the Ministry of Justice found itself facing the daunting challenge of modernizing its operations...
          </p>

          <p className="mb-4">
            <strong>Solution</strong><br />
            To address these challenges, we implemented a comprehensive AI solution that combined advanced Machine Learning...
          </p>

          <p className="mb-4">
            One of the key innovations of this AI solution was its seamless integration with the Ministry’s existing IT infrastructure...
          </p>

          <p className="mb-4">
            Furthermore, the AI was able to continuously learn from its interactions and adapt to new legal cases...
          </p>

          <p className="mb-4">
            The implementation of AI also opened doors to explore more advanced applications in the future...
          </p>

          <p className="mb-4">
            <strong>Results</strong><br />
            The implementation of AI within the Ministry of Justice resulted in several impactful improvements across its operations...
          </p>

          <p className="mb-4">
            Ultimately, the adoption of AI in the Ministry of Justice underscored the importance of embracing digital transformation...
          </p>

          {/* Back to Home Button */}
          <div className="text-center sm:text-left mt-8">
            <button
              onClick={goHome}
              className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-full text-sm sm:text-base"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleContent;
