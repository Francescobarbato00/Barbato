import ArticleContent from './components/ArticleContent';
import Footer from './components/Footer';
import Header from './components/Header.jsx';
  // Assicurati che il nome del componente sia 'Header' e non 'Headers'

const ArticlePage = () => {
  return (
    <div>
      <Header /> {/* Usa 'Header' correttamente */}
      <div className="mt-16"> {/* Aggiunge margine sopra l'articolo */}
        <ArticleContent />
      </div>
    <Footer />
    </div>
  );
};

export default ArticlePage;
