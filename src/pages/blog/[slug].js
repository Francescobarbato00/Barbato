import { useRouter } from "next/router";
import { db } from "/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Header from "../components/Headers";
import Footer from "../components/Footer";

const ArticleContent = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  const goHome = () => {
    router.push("/");
  };

  // URL dell'articolo per la condivisione
  const shareUrl = `https://barbato.vercel.app/blog/${post.slug}`;

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Contenuto dell'Articolo */}
      <section className="py-12 sm:py-16 bg-white fade-in-up">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
          {/* Titolo */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center pt-12">
            {post.title}
          </h1>

          {/* Immagine */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 sm:h-60 object-cover mb-6 rounded"
          />

          {/* Descrizione */}
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {post.description}
          </p>

          {/* Corpo dell'articolo */}
          {post.content && (
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}

          {/* Data */}
          <p className="text-sm text-gray-500 mt-4">
            Published on: {post.date ? new Date(post.date).toLocaleDateString() : "No date available"}
          </p>

          {/* Sezione Condivisione - AGGIUNTA QUI SOTTO */}
          <div className="mt-4 flex items-center space-x-4">
            <span className="text-sm font-semibold text-gray-700">Share with:</span>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 text-sm"
              aria-label="Share on WhatsApp"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 text-sm"
              aria-label="Share on Facebook"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 text-sm"
              aria-label="Share on LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
          {/* FINE SEZIONE CONDIVISIONE */}

          {/* Bottone per tornare alla Home */}
          <div className="text-left mt-8">
        <button
            onClick={() => router.push("/blog")} // Cambia "/" in "/blog"
            className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-full"
        >
            Back to Blog
        </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ArticleContent;

export async function getStaticPaths() {
  const querySnapshot = await getDocs(collection(db, "posts"));

  const paths = querySnapshot.docs
    .map((doc) => {
      const data = doc.data();
      if (data.slug) {
        return { params: { slug: data.slug } };
      }
      return null;
    })
    .filter(Boolean);

  console.log("Percorsi generati:", paths);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const q = query(collection(db, "posts"), where("slug", "==", params.slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("Nessun documento trovato per lo slug:", params.slug);
      return { notFound: true };
    }

    const rawData = querySnapshot.docs[0].data();

    const post = {
      ...rawData,
      date: rawData.date?.toDate().toISOString() || null,
    };

    console.log("Dati del post recuperati:", post);

    return {
      props: { post },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Errore durante il recupero del post:", error);
    return { notFound: true };
  }
}
