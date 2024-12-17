import React, { useEffect, useState } from "react";

const BlogGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    { id: 1, category: "news", image: "/images/blog1.jpg", date: "July 14, 2019", title: "Why Lead Generation is Key for Business Growth", description: "A small river named Duden flows by their place and supplies it with the necessary regelialia." },
    { id: 2, category: "conference", image: "/images/blog2.jpg", date: "July 14, 2019", title: "How to Build Effective Teams in Your Business", description: "The power of teamwork can transform small tasks into large achievements." },
    { id: 3, category: "event", image: "/images/blog3.jpg", date: "July 14, 2019", title: "Top Marketing Strategies to Drive Revenue", description: "Discover marketing techniques that can push your business ahead of the competition." },
    { id: 4, category: "news", image: "/images/blog4.jpg", date: "July 14, 2019", title: "The Future of Remote Work in 2024", description: "Remote work is evolving. Here's what businesses need to know to stay ahead." },
    { id: 5, category: "conference", image: "/images/blog5.jpg", date: "July 14, 2019", title: "Importance of Customer Satisfaction in Business Growth", description: "Learn why happy customers are key to sustainable business growth." },
    { id: 6, category: "event", image: "/images/blog6.jpg", date: "July 14, 2019", title: "Harnessing Data Analytics for Smarter Decisions", description: "Data-driven decisions are shaping the future of businesses worldwide." },
    { id: 7, category: "event", image: "/images/blog7.jpg", date: "July 14, 2019", title: "Future of Digital Marketing in 2024", description: "How digital marketing strategies will evolve for businesses." },
    { id: 8, category: "news", image: "/images/blog8.jpg", date: "July 14, 2019", title: "Innovation in the Tech Industry", description: "Latest trends and innovations driving the tech world." },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "news", name: "News" },
    { id: "conference", name: "Conference" },
    { id: "event", name: "Event" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredPosts = blogPosts.filter(
    (post) => selectedCategory === "all" || post.category === selectedCategory
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 bg-white">
      {/* Titolo Blog */}
      <div>
        <h1 className="blog-title">Our Blog</h1>
        <p className="blog-subtitle">
          Insights, strategies, and stories to grow your business and succeed.
        </p>
      </div>

      {/* Filtri Categoria */}
      <div
        className={`flex justify-center space-x-4 mt-8 mb-10 animate__animated ${
          isVisible ? "animate__fadeIn" : ""
        }`}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full border-2 ${
              selectedCategory === category.id
                ? "bg-blue-500 text-white border-blue-500"
                : "text-blue-500 border-blue-500 hover:bg-blue-100"
            } transition-all duration-300`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Griglia Articoli */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {currentPosts.map((post, index) => (
          <div
            key={post.id}
            className={`shadow-md rounded-lg blog-article bg-gray-50 hover:shadow-xl transition-shadow duration-300 animate__animated ${
              isVisible ? "animate__fadeInUp" : ""
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={post.image} alt={post.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-2">{post.date} • Admin</p>
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 text-sm">{post.description}</p>
            </div>
          </div>
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
            currentPage <
              Math.ceil(filteredPosts.length / postsPerPage) &&
            paginate(currentPage + 1)
          }
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BlogGrid;
