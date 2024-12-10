import React from 'react';
import ArticleContent2 from './components/ArticleContent2';
import Headers from './components/Headers';
  // Assuming Header component is already created.
import Footer from './components/Footer';

const Article2Page = () => {
  return (
    <div>
      <Headers />
      <div className="mt-16"> {/* Aggiunge margine sopra l'articolo */}
      <ArticleContent2 />
    </div>
    <Footer />
    </div>
  );
};

export default Article2Page;
