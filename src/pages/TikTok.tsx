import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const tiktokPosts = [
  { id: "7646806939032112405", user: "gatuazon" },
  // ponytail: add more { id, user } entries here as you post
];

const TikTokPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />Back to Portfolio
            </Link>
            <h1 className="text-3xl font-bold">TikTok Content</h1>
            <p className="text-muted-foreground mt-1">Behind the scenes, tech tips, and more.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiktokPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden border border-border"
              >
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${post.id}`}
                  className="w-full"
                  style={{ height: "560px", border: "none" }}
                  allowFullScreen
                  allow="encrypted-media"
                  title={`TikTok post ${post.id}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TikTokPage;
