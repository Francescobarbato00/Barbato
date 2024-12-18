import React, { useEffect, useState } from "react";
import { db } from "/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

// Funzione per generare lo slug dal titolo
const generateSlug = (title) => {
  return title
    .toLowerCase() // Converti in minuscolo
    .trim() // Rimuovi spazi all'inizio e alla fine
    .replace(/[^a-z0-9\s]/g, "") // Rimuovi caratteri speciali
    .replace(/\s+/g, "-"); // Sostituisci spazi con trattini
};

const BlogGrid = () => {
  const [posts, setPosts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Stato di caricamento
  const postsPerPage = 6;

  const categories = [
    { id: "all", name: "All" },
    { id: "news", name: "News" },
    { id: "conference", name: "Conference" },
    { id: "event", name: "Event" },
  ];

  // Funzione per recuperare i post da Firestore
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title || "Untitled Post",
          slug: generateSlug(data.title || "untitled"), // Genera lo slug
          description: data.description || "No description available.",
          category: data.category || "Uncategorized",
          image: data.image || "https://via.placeholder.com/400x300", // Immagine di default
          date: data.date?.seconds
            ? new Date(data.date.seconds * 1000).toLocaleDateString("en-US")
            : data.date || "No date available",
        };
      });
      setPosts(postsData);
    } catch (error) {
      console.error("Errore durante il fetch dei post:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    fetchPosts();
  }, []);

  // Filtra i post in base alla categoria selezionata
  const filteredPosts = posts.filter(
    (post) => selectedCategory === "all" || post.category === selectedCategory
  );

  // Calcola l'indice dei post da visualizzare per la paginazione
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white">
      {/* Titolo Blog */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">Our Blog</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-lg">
          Insights, strategies, and stories to grow your business and succeed.
        </p>
      </div>

      {/* Filtri Categoria */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id);
              setCurrentPage(1); // Resetta alla prima pagina quando cambia la categoria
            }}
            className={`px-4 py-2 text-sm md:text-base rounded-full border-2 ${
              selectedCategory === category.id
                ? "bg-blue-500 text-white border-blue-500"
                : "text-blue-500 border-blue-500 hover:bg-blue-100"
            } transition-all duration-300`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Caricamento */}
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <>
          {/* Griglia Articoli */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
            {currentPosts.map((post) => (
              <a key={post.id} href={`/blog/${post.slug}`} className="block">
                <div className="shadow-md rounded-lg bg-gray-50 hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-36 md:h-44 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-gray-500 text-xs md:text-sm mb-2">
                      {post.date} • Admin
                    </p>
                    <h2 className="text-sm md:text-lg font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-700 text-xs md:text-sm">
                      {post.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Paginazione */}
          <div className="flex justify-center items-center mt-10 space-x-2">
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              &lt;
            </button>
            {Array.from(
              { length: Math.ceil(filteredPosts.length / postsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
            <button
              onClick={() =>
                currentPage < Math.ceil(filteredPosts.length / postsPerPage) &&
                paginate(currentPage + 1)
              }
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogGrid;
