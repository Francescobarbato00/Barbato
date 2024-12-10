import Headers from './components/Headers';
import ArticleContent3 from './components/ArticleContent3';  // Import the new article content component
import Footer from './components/Footer';

const ArticlePage3 = () => {
  return (
    <div>
      <Headers />
      <div className="mt-16"> {/* Aggiunge margine sopra l'articolo */}
      <ArticleContent3 /> 
    </div>
    <Footer />
    </div>
  );
};

export default ArticlePage3;
