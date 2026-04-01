import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    slug: "building-ai-voice-agents",
    title: "Building Production-Ready AI Voice Agents with VAPI & ElevenLabs",
    excerpt:
      "A deep dive into architecting low-latency voice AI pipelines — from ASR with Whisper to synthesis with ElevenLabs and orchestration with VAPI.",
    date: "Feb 20, 2026",
    readTime: "8 min read",
    tags: ["AI", "VAPI", "ElevenLabs", "Voice"],
    featured: true,
    image: "/blog/voice-ai.jpg",
  },
  {
    slug: "next-js-app-router-patterns",
    title: "Advanced Next.js App Router Patterns for Large-Scale Apps",
    excerpt:
      "Parallel routes, intercepting routes, and server actions — practical patterns for building complex Next.js 14+ apps at scale.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    tags: ["Next.js", "React", "TypeScript"],
    featured: false,
    image: "/blog/nextjs.jpg",
  },
  {
    slug: "langchain-rag-production",
    title: "LangChain RAG in Production: What Nobody Tells You",
    excerpt:
      "Lessons learned shipping a retrieval-augmented generation system to thousands of users — chunking strategies, reranking, and eval pipelines.",
    date: "Dec 10, 2025",
    readTime: "10 min read",
    tags: ["LangChain", "AI", "RAG", "Pinecone"],
    featured: false,
    image: "/blog/rag.jpg",
  },
  {
    slug: "postgres-performance",
    title: "PostgreSQL Performance at Scale: Indexing, Partitioning & Query Plans",
    excerpt:
      "Practical techniques to squeeze maximum performance from PostgreSQL — covering EXPLAIN ANALYZE, partial indexes, table partitioning, and connection pooling.",
    date: "Nov 5, 2025",
    readTime: "7 min read",
    tags: ["PostgreSQL", "Database", "Performance"],
    featured: false,
    image: "/blog/postgres.jpg",
  },
  {
    slug: "react-native-ai",
    title: "Integrating On-Device AI into React Native Apps",
    excerpt:
      "How to ship ML inference directly on iOS and Android using React Native, Core ML, and ONNX Runtime for offline-capable AI features.",
    date: "Oct 1, 2025",
    readTime: "9 min read",
    tags: ["React Native", "AI", "Mobile"],
    featured: false,
    image: "/blog/react-native.jpg",
  },
  {
    slug: "docker-monorepo",
    title: "Monorepo + Docker: A Practical Setup for Full-Stack Teams",
    excerpt:
      "A battle-tested monorepo architecture with Turborepo, Docker Compose, and shared TypeScript packages — from dev to production.",
    date: "Sep 12, 2025",
    readTime: "5 min read",
    tags: ["Docker", "DevOps", "Monorepo"],
    featured: false,
    image: "/blog/docker.jpg",
  },
];

const ALL_TAGS = ["All", ...Array.from(new Set(posts.flatMap((p) => p.tags)))];

const Blog = () => {
  const [activeTag, setActiveTag] = useState("All");
  const pageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = activeTag === "All" ? posts : posts.filter((p) => p.tags.includes(activeTag));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      const cards = gridRef.current?.querySelectorAll(".blog-card");
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          scale: 0.97,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".blog-card");
    if (cards) {
      gsap.from(cards, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.06,
        ease: "power2.out",
      });
    }
  }, [activeTag]);

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <main className="container px-6 pt-12 pb-24">
        {/* Heading */}
        <div ref={headingRef} className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm text-muted-foreground mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Thoughts & Insights
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Writing about full-stack development, AI systems, and the craft of building great software.
          </p>
        </div>

        {/* Tag filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                activeTag === tag
                  ? "bg-foreground text-white border-foreground"
                  : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {activeTag === "All" && (
          <div className="max-w-5xl mx-auto mb-8">
            {posts
              .filter((p) => p.featured)
              .map((post) => {
                return (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="blog-card block bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-md transition-all duration-300"
                  >
                    {/* Cover image */}
                    <div className="h-48 md:h-64 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-8 md:p-10">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-foreground text-white">
                          Featured
                        </span>
                        {post.tags.map((t) => (
                          <span key={t} className="text-xs text-muted-foreground">
                            #{t}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-muted-foreground transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>&middot;</span>
                        <span>{post.readTime}</span>
                        <span className="ml-auto font-medium text-foreground group-hover:translate-x-1 transition-transform">
                          Read more &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        )}

        {/* Posts grid */}
        <div ref={gridRef} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {filtered
            .filter((p) => activeTag !== "All" || !p.featured)
            .map((post) => {
              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="blog-card block bg-card rounded-xl border border-border overflow-hidden group hover:shadow-md transition-all duration-300"
                >
                  {/* Cover image */}
                  <div className="h-36 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.map((t) => (
                        <span key={t} className="text-xs text-muted-foreground">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-muted-foreground transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
