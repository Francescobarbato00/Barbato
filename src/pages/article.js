import ArticleContent from './components/ArticleContent';
import Footer from './components/Footer';
import Headers from './components/Headers';
  // Assicurati che il nome del componente sia 'Header' e non 'Headers'

const ArticlePage = () => {
  return (
    <div>
      <Headers /> {/* Usa 'Header' correttamente */}
      <div className="mt-16"> {/* Aggiunge margine sopra l'articolo */}
        <ArticleContent />
      </div>
    <Footer />
    </div>
  );
};

export default ArticlePage;
