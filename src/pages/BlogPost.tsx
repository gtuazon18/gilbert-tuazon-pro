import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Footer from "@/components/Footer";

interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

const blogPosts: BlogPostData[] = [
  {
    slug: "building-ai-voice-agents",
    title: "Building Production-Ready AI Voice Agents with VAPI & ElevenLabs",
    date: "Feb 20, 2026",
    readTime: "8 min read",
    tags: ["AI", "VAPI", "ElevenLabs", "Voice"],
    content: `
## The Rise of Voice AI

Voice AI agents are transforming how businesses interact with customers. From customer support to appointment booking, voice-first interfaces are becoming the new standard.

In this post, I'll walk through the architecture behind building a production-ready voice AI agent using **VAPI** for orchestration, **ElevenLabs** for text-to-speech, and **Whisper** for speech-to-text.

## Architecture Overview

The pipeline consists of three core components:

- **ASR (Automatic Speech Recognition):** Whisper converts user speech to text with high accuracy across multiple languages
- **LLM Processing:** The transcribed text is processed by an LLM (Groq/OpenAI) to generate intelligent responses
- **TTS (Text-to-Speech):** ElevenLabs synthesizes natural-sounding voice output with emotion and intonation control

## Key Challenges

### Latency Management

The biggest challenge in voice AI is latency. Users expect sub-second response times. Here's how we tackled it:

1. **Streaming responses** — Start TTS synthesis as soon as the first tokens arrive from the LLM
2. **Connection pooling** — Maintain persistent WebSocket connections to reduce handshake overhead
3. **Edge deployment** — Deploy ASR models closer to users for faster transcription

### Context Management

Voice conversations are inherently stateful. We use **LangGraph** to manage conversation state, handle interruptions, and maintain context across turns.

### Voice Quality

ElevenLabs provides incredible voice quality, but tuning it for production requires attention to:

- **Stability vs. expressiveness** — Finding the right balance for your use case
- **Chunking strategy** — Breaking text into natural speech segments
- **Fallback voices** — Having backup TTS providers for reliability

## Production Lessons

After shipping this to production, here are the key takeaways:

- **Always have a fallback** — Voice APIs can be flaky. Design for graceful degradation
- **Monitor latency percentiles** — P95 matters more than average latency for voice UX
- **Test with real accents** — ASR accuracy varies significantly across accents and dialects
- **Rate limiting is critical** — Voice calls are expensive. Implement per-user rate limits early

## What's Next

The voice AI space is evolving rapidly. With models like OpenVoice enabling real-time voice cloning, we're entering an era where AI agents can speak with any voice, in any language, with natural emotion.

The key is building robust infrastructure now that can adapt as these models improve.
`,
  },
  {
    slug: "next-js-app-router-patterns",
    title: "Advanced Next.js App Router Patterns for Large-Scale Apps",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    tags: ["Next.js", "React", "TypeScript"],
    content: `
## Beyond Basic Routing

Next.js 14+ introduced powerful routing patterns that most teams aren't fully leveraging. Let's explore the patterns that make large-scale apps manageable.

## Parallel Routes

Parallel routes allow you to render multiple pages simultaneously in the same layout. This is perfect for dashboards:

\`\`\`
app/
  dashboard/
    @analytics/page.tsx
    @notifications/page.tsx
    layout.tsx
\`\`\`

Each slot loads independently, so a slow analytics query won't block the notification panel.

## Intercepting Routes

Intercepting routes let you show a route within the context of another route. The classic example is a photo modal:

- Clicking a photo opens it in a modal (intercepted route)
- Refreshing the page shows the full photo page (actual route)
- Sharing the URL always works correctly

## Server Actions

Server Actions simplify data mutations by eliminating the need for API routes in many cases:

- **Form submissions** — Direct server-side processing without client-side fetch
- **Optimistic updates** — Update UI immediately, roll back on error
- **Revalidation** — Automatically refresh cached data after mutations

## Route Groups

Route groups organize code without affecting the URL structure:

\`\`\`
app/
  (marketing)/
    about/page.tsx
    pricing/page.tsx
  (dashboard)/
    settings/page.tsx
    analytics/page.tsx
\`\`\`

Each group can have its own layout, error boundary, and loading state.

## Key Takeaways

- Use parallel routes for complex layouts with independent data requirements
- Intercepting routes create seamless modal experiences
- Server Actions reduce boilerplate for simple mutations
- Route groups keep large codebases organized without URL pollution
`,
  },
  {
    slug: "langchain-rag-production",
    title: "LangChain RAG in Production: What Nobody Tells You",
    date: "Dec 10, 2025",
    readTime: "10 min read",
    tags: ["LangChain", "AI", "RAG", "Pinecone"],
    content: `
## The RAG Reality Check

Everyone's building RAG systems. Few are building them well. After shipping a RAG pipeline to thousands of users, here's what I wish I'd known from the start.

## Chunking Matters More Than You Think

The default chunking strategy (fixed-size with overlap) is a terrible starting point for most documents. What actually works:

- **Semantic chunking** — Split on topic boundaries, not character counts
- **Document-aware splitting** — Respect headers, paragraphs, and list structures
- **Chunk size tuning** — Smaller chunks (200-500 tokens) for precise retrieval, larger chunks (1000+) for context-rich answers

## The Embedding Model Matters

We started with OpenAI's ada-002 and saw mediocre retrieval. Switching to **sentence-transformers/all-MiniLM-L6-v2** from HuggingFace improved our hit rate by 30% for our specific domain.

The lesson: benchmark embedding models on YOUR data, not public benchmarks.

## Reranking is Non-Negotiable

Vector similarity search returns candidates. Reranking turns candidates into answers. Our pipeline:

1. **Retrieve** top 20 chunks via vector search (ChromaDB)
2. **Rerank** using a cross-encoder model to find the top 5
3. **Generate** response using only the reranked context

This simple addition improved answer quality dramatically.

## Evaluation is Hard

How do you know if your RAG system is actually good? We built an eval pipeline with:

- **Retrieval metrics** — Are we finding the right chunks?
- **Answer quality** — Are the generated answers accurate and complete?
- **Faithfulness** — Does the answer stick to the provided context?

## Production Gotchas

- **Stale embeddings** — Re-embed when source documents change
- **Token limits** — Monitor context window usage carefully
- **Cost management** — Cache common queries to reduce LLM calls
- **Latency budgets** — Set strict timeouts for each pipeline stage

## The Stack That Works

For our production system, we landed on:

- **ChromaDB** for vector storage (simple, reliable)
- **HuggingFace embeddings** (cost-effective, good quality)
- **Groq** for LLM inference (fast, affordable)
- **LangChain** for orchestration (flexible, well-documented)

The best RAG system isn't the most complex one — it's the one that reliably answers your users' questions.
`,
  },
  {
    slug: "postgres-performance",
    title: "PostgreSQL Performance at Scale: Indexing, Partitioning & Query Plans",
    date: "Nov 5, 2025",
    readTime: "7 min read",
    tags: ["PostgreSQL", "Database", "Performance"],
    content: `
## When Postgres Gets Slow

PostgreSQL is remarkably fast out of the box. But at scale — millions of rows, hundreds of concurrent queries — you need to be intentional about performance.

## EXPLAIN ANALYZE is Your Best Friend

Before optimizing anything, understand what's actually happening:

\`\`\`sql
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT * FROM orders
WHERE user_id = 123
AND created_at > '2025-01-01';
\`\`\`

Look for:
- **Seq Scan** on large tables — usually means a missing index
- **High buffer reads** — data isn't cached, consider your working set size
- **Nested Loop** with high row counts — might need a different join strategy

## Indexing Strategy

Not all indexes are created equal:

- **B-tree** (default) — Great for equality and range queries
- **GIN** — Perfect for full-text search and JSONB queries
- **Partial indexes** — Index only the rows you actually query
- **Covering indexes** — Include all columns needed by the query to avoid table lookups

### Partial Index Example

If you mostly query active orders:

\`\`\`sql
CREATE INDEX idx_active_orders ON orders (user_id, created_at)
WHERE status = 'active';
\`\`\`

This index is smaller and faster than indexing all orders.

## Table Partitioning

When tables grow beyond ~100M rows, partitioning becomes essential:

- **Range partitioning** by date is the most common pattern
- **Partition pruning** eliminates irrelevant partitions at query time
- **Maintenance** becomes easier — drop old partitions instead of deleting rows

## Connection Pooling

PostgreSQL creates a process per connection. At 500+ connections, you'll feel the pain. Solutions:

- **PgBouncer** — Lightweight, battle-tested connection pooler
- **Transaction pooling mode** — Maximum connection reuse
- **Pool sizing** — Start with 2x CPU cores, tune from there

## Quick Wins

1. **Set appropriate work_mem** — Default 4MB is too low for complex queries
2. **Use VACUUM regularly** — Dead tuples slow everything down
3. **Monitor slow queries** — pg_stat_statements is invaluable
4. **Batch inserts** — Use COPY or multi-row INSERT for bulk loads
`,
  },
  {
    slug: "react-native-ai",
    title: "Integrating On-Device AI into React Native Apps",
    date: "Oct 1, 2025",
    readTime: "9 min read",
    tags: ["React Native", "AI", "Mobile"],
    content: `
## Why On-Device AI?

Cloud-based AI is great, but sometimes you need inference to happen on the device itself:

- **Privacy** — Sensitive data never leaves the device
- **Offline capability** — Works without network connectivity
- **Latency** — No round-trip to a server
- **Cost** — No per-inference API charges

## The React Native Challenge

React Native doesn't natively support ML frameworks. We need to bridge to native ML runtimes:

- **iOS:** Core ML for optimized Apple Silicon inference
- **Android:** TensorFlow Lite or ONNX Runtime

## Architecture

Our approach uses a native module pattern:

1. **Model preparation** — Convert your model to Core ML / TFLite format
2. **Native module** — Write Swift/Kotlin code to load and run the model
3. **Bridge layer** — Expose inference functions to JavaScript
4. **React hooks** — Wrap native calls in ergonomic React hooks

## Practical Use Cases

### Image Classification

On-device image classification runs in ~50ms on modern phones. Perfect for:
- Product recognition in e-commerce apps
- Document type detection
- Content moderation before upload

### Text Classification

Lightweight text models can run on-device for:
- Sentiment analysis of user input
- Spam detection in chat apps
- Language detection

### Smart Suggestions

On-device models can power:
- Auto-complete with personalized models
- Smart reply suggestions
- Context-aware notifications

## Performance Tips

- **Quantize models** — INT8 quantization reduces model size 4x with minimal accuracy loss
- **Batch processing** — Group multiple inferences when possible
- **Background threads** — Never run inference on the main thread
- **Model caching** — Load models once at app startup, keep in memory

## The Future

With Apple's MLX framework and Google's MediaPipe advancing rapidly, on-device AI in mobile apps is becoming mainstream. The key is starting with simple models and iterating based on real user feedback.
`,
  },
  {
    slug: "docker-monorepo",
    title: "Monorepo + Docker: A Practical Setup for Full-Stack Teams",
    date: "Sep 12, 2025",
    readTime: "5 min read",
    tags: ["Docker", "DevOps", "Monorepo"],
    content: `
## The Monorepo Advantage

Monorepos aren't just for Google. For full-stack teams shipping a frontend, backend, and shared packages, a monorepo with Docker Compose provides a development experience that's hard to beat.

## Project Structure

\`\`\`
monorepo/
  apps/
    web/          # Next.js frontend
    api/          # FastAPI backend
    worker/       # Background job processor
  packages/
    shared/       # Shared TypeScript types
    ui/           # Shared React components
    config/       # Shared configuration
  docker-compose.yml
  turbo.json
\`\`\`

## Docker Compose for Development

The key insight: use Docker Compose for services (databases, caches) but run your app code natively for fast hot-reload:

\`\`\`yaml
services:
  postgres:
    image: postgres:15
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
\`\`\`

Run \`docker compose up -d\` for infrastructure, then run your apps with their native dev servers.

## Production Dockerfiles

For production, each app gets its own optimized Dockerfile:

- **Multi-stage builds** — Separate build and runtime stages
- **Layer caching** — Copy package.json first, then source code
- **Minimal base images** — Use Alpine or distroless images
- **Non-root users** — Run containers as unprivileged users

## Turborepo for Build Orchestration

Turborepo handles the build graph:

- **Parallel builds** — Independent packages build simultaneously
- **Remote caching** — Share build artifacts across the team
- **Dependency-aware** — Only rebuild what changed

## Shared Packages

The real power of monorepos is code sharing:

- **Types** — Share TypeScript interfaces between frontend and backend
- **Validation** — Use Zod schemas in both client and server
- **UI components** — Shared design system across apps

## CI/CD Pipeline

- Build affected packages only (Turborepo's \`--filter\`)
- Run tests in parallel across packages
- Build Docker images only for changed apps
- Deploy independently per service

This setup scales from a 2-person team to 20+ engineers without major restructuring.
`,
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container px-6 pt-12 pb-24">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            {/* Content */}
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-xl font-bold mt-10 mb-4">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-semibold mt-8 mb-3">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">{children}</strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc pl-5 mb-4 space-y-1.5 text-muted-foreground">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-5 mb-4 space-y-1.5 text-muted-foreground">{children}</ol>
                  ),
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                  code: ({ className, children }) => {
                    const isBlock = className?.includes("language-");
                    if (isBlock) {
                      return (
                        <code className="block bg-secondary rounded-xl p-4 text-xs font-mono overflow-x-auto mb-4 whitespace-pre">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className="bg-secondary px-1.5 py-0.5 rounded text-xs font-mono text-foreground">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => <pre className="mb-4">{children}</pre>,
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline hover:opacity-70"
                    >
                      {children}
                    </a>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-2 border-foreground/20 pl-4 italic text-muted-foreground mb-4">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
