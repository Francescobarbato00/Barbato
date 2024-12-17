// pages/blog.js
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import BlogGrid from "./components/BlogGrid";

export default function Blog() {
  return (
    <div className="m-0 p-0 bg-white">
      {/* Header Section */}
      <Headers />

      {/* Main Content */}
      <main className="pt-32 pb-8">
        <BlogGrid />
      </main>

      {/* Footer */}
      <Footer />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}
