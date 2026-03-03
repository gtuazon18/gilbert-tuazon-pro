import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LightWavesBackground } from "@/components/ui/light-waves";

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

  // Re-animate cards when filter changes
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
    <div ref={pageRef} className="relative min-h-screen w-full overflow-hidden">
      <LightWavesBackground
        colors={["#20e3b2", "#0ea5e9", "#06b6d4", "#8b5cf6", "#0284c7"]}
        speed={0.8}
        intensity={0.4}
        className="fixed inset-0 -z-10"
      />

      <div className="relative z-10">
        <Navbar />

        <main className="container px-6 pt-32 pb-24">
          {/* Heading */}
          <div ref={headingRef} className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-mono text-primary mb-3 text-sm">{"// Blog"}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Thoughts & Insights
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Writing about full-stack development, AI systems, and the craft of building great software.
            </p>
          </div>

          {/* Tag filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground border-primary"
                    : "glass-card text-muted-foreground border-transparent hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {activeTag === "All" && (
            <div className="max-w-5xl mx-auto mb-12">
              {posts
                .filter((p) => p.featured)
                .map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="blog-card block glass-card glow-card rounded-2xl p-8 md:p-10 group hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                        Featured
                      </span>
                      {post.tags.map((t) => (
                        <span key={t} className="font-mono text-xs text-muted-foreground">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                    <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                      <span className="ml-auto text-primary group-hover:translate-x-1 transition-transform">
                        Read more →
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          )}

          {/* Posts grid */}
          <div ref={gridRef} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {filtered
              .filter((p) => activeTag !== "All" || !p.featured)
              .map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="blog-card block glass-card rounded-xl p-6 group hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((t) => (
                      <span key={t} className="font-mono text-xs text-primary/70">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Blog;
