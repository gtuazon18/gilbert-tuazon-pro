import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, UsersRound, Heart, MessageCircle, Share2, Bookmark,
  TrendingUp, Code2, Cpu, Zap, Globe, Flame, ThumbsUp,
  Github, ExternalLink, AlertCircle, Send, User,
} from "lucide-react";
import Footer from "@/components/Footer";

/* ─── Types ─── */
interface Post {
  id: number;
  author: string;
  avatar: string;
  handle: string;
  time: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  liked?: boolean;
  bookmarked?: boolean;
  type: "discussion" | "resource" | "showcase" | "question";
  isGuest?: boolean;
}

interface TrendingTopic {
  tag: string;
  posts: number;
  icon: React.ElementType;
}

interface OpenSourceProject {
  name: string;
  description: string;
  stars: string;
  language: string;
  languageColor: string;
  url: string;
}

/* ─── Bad Words Filter ─── */
const BANNED_WORDS = [
  // English
  "fuck","fucker","fucking","fucked","fck","fuk","phuck","shit","shitty","shitting",
  "damn","ass","asses","bitch","bitches","bastard","dick","dickhead","cock",
  "pussy","cunt","whore","slut","slutty","fag","faggot","nigger","nigga",
  "retard","retarded","stfu","gtfo","wtf","bullshit","dumbass","asshole",
  "motherfucker","mofo","dipshit","jackass","crap","piss","pissed",
  "porn","nude","naked","rape","molest","pedo","pedophile",
  "racist","sexist","idiot","stupid","moron","imbecile",
  "scam","scammer","spam","spammer",
  // Filipino / Tagalog
  "gago","gaga","tangina","tang ina","putangina","putang ina","puta","punyeta",
  "lintik","leche","lecheng","ulol","ulul","tanga","bobo","boba","tarantado",
  "tarantada","hayop","animal","kupal","gunggong","pakyu","pakshet",
  "hindot","hindutan","kantot","kantutan","titi","puke","puki","betlog",
  "bayag","burat","pokpok","malandi","peste","siraulo","inutil","hudas",
  "demonyo","engot","shunga","tungak","ungas","buang","yawa","bwiset",
  "bwisit","amputa","amputangina","kinangina","kingina",
  // Spanish
  "mierda","puta","puto","pendejo","pendeja","cabron","cabrona","chingar",
  "chingada","verga","culo","coño","cono","joder","jodido","marica",
  "maricon","estupido","estupida","idiota","imbecil","pinche","carajo",
  "hijo de puta","hijueputa","malparido","gonorrea","huevon",
  // French
  "merde","putain","salaud","salope","connard","connasse","enculer","encule",
  "batard","batarde","foutre","bordel","nique","niquer","couille","branleur",
  "branlette","con","conne","fdp","fils de pute","pd","petasse",
  // German
  "scheiße","scheisse","scheiss","arschloch","arsch","fotze","hurensohn",
  "wichser","fick","ficken","drecksau","miststuck","schwuchtel","vollidiot",
  "dumm","hure","schlampe",
  // Portuguese
  "merda","porra","caralho","foda","fodase","foda-se","puta","cuzao",
  "filho da puta","viado","arrombado","otario","babaca","desgraca",
  // Italian
  "cazzo","minchia","vaffanculo","stronzo","stronza","puttana","merda",
  "figa","coglione","deficiente","imbecille",
  // Japanese (romaji)
  "kuso","baka","aho","shine","kisama","temee","chikushou","manko","chinko",
  "yariman","ketsu","unko","fuzakeru","busu","debu","kimoi",
  // Korean (romanized)
  "shibal","sibal","ssibal","gaesaekki","byungshin","jiral","michin",
  "ssang","ggeo","nom",
  // Chinese (pinyin)
  "tama","tamade","cao","caonima","sha","shabi","niubi","hundan","wangba",
  "gou","gundan","bichi","jiба",
  // Indonesian / Malay
  "anjing","bangsat","babi","kontol","memek","ngentot","jancok","asu",
  "bajingan","keparat","setan","bodoh","tolol","goblok","bego",
  // General slurs & hate
  "nazi","hitler","kkk","terrorist",
];

const containsBadWords = (text: string): { hasBadWords: boolean; found: string[] } => {
  const lower = text.toLowerCase();
  const found: string[] = [];
  for (const word of BANNED_WORDS) {
    const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    if (regex.test(lower)) {
      found.push(word);
    }
  }
  return { hasBadWords: found.length > 0, found };
};

/* ─── Data ─── */
const trendingTopics: TrendingTopic[] = [
  { tag: "React 19", posts: 342, icon: Flame },
  { tag: "AI Agents", posts: 289, icon: Cpu },
  { tag: "TypeScript 5.5", posts: 256, icon: Code2 },
  { tag: "Edge Computing", posts: 198, icon: Globe },
  { tag: "Rust for Web", posts: 175, icon: Zap },
];

const openSourceProjects: OpenSourceProject[] = [
  { name: "langchain-ai/langchain", description: "Building applications with LLMs through composability", stars: "92.4k", language: "Python", languageColor: "bg-blue-500", url: "https://github.com/langchain-ai/langchain" },
  { name: "vercel/next.js", description: "The React Framework for the Web", stars: "126k", language: "JavaScript", languageColor: "bg-yellow-400", url: "https://github.com/vercel/next.js" },
  { name: "denoland/deno", description: "A modern runtime for JavaScript and TypeScript", stars: "97.2k", language: "Rust", languageColor: "bg-orange-500", url: "https://github.com/denoland/deno" },
];

const defaultPosts: Post[] = [
  {
    id: 1,
    author: "Gilbert Tuazon",
    avatar: "GT",
    handle: "@gilbertdev",
    time: "2h ago",
    content: "Just integrated LangChain with a custom RAG pipeline for our internal docs search. The retrieval accuracy jumped from 72% to 94% after fine-tuning the chunking strategy. If you're building RAG apps, chunk size matters more than you think!",
    tags: ["AI", "LangChain", "RAG"],
    likes: 48,
    comments: 12,
    shares: 8,
    type: "discussion",
  },
  {
    id: 2,
    author: "Sarah Chen",
    avatar: "SC",
    handle: "@sarahcodes",
    time: "4h ago",
    content: "Shipped a new open-source tool for generating type-safe API clients from OpenAPI specs. It supports React Query hooks out of the box. Would love feedback from the community!",
    tags: ["OpenSource", "TypeScript", "DX"],
    likes: 124,
    comments: 31,
    shares: 45,
    type: "showcase",
  },
  {
    id: 3,
    author: "Marcus Rivera",
    avatar: "MR",
    handle: "@marcusdev",
    time: "6h ago",
    content: "What's everyone's take on server components vs. client components in Next.js 15? I've been defaulting to server components for everything except interactive UI, but curious about performance patterns others have found.",
    tags: ["NextJS", "React", "Architecture"],
    likes: 67,
    comments: 43,
    shares: 12,
    type: "question",
  },
  {
    id: 4,
    author: "Aiko Tanaka",
    avatar: "AT",
    handle: "@aikotanaka",
    time: "8h ago",
    content: "Just published a deep dive on WebSocket vs SSE for real-time features. TL;DR: SSE wins for most use cases unless you need bidirectional comms. Full article covers benchmarks, scalability patterns, and when to use each.",
    tags: ["WebSockets", "SSE", "Backend"],
    likes: 89,
    comments: 22,
    shares: 34,
    type: "resource",
  },
  {
    id: 5,
    author: "Dev Patel",
    avatar: "DP",
    handle: "@devpatel_",
    time: "12h ago",
    content: "Hot take: Most microservice architectures would be better as well-structured monoliths. We converted 12 services back into a monolith and our deployment time went from 45min to 3min. Fight me.",
    tags: ["Architecture", "DevOps", "Microservices"],
    likes: 312,
    comments: 87,
    shares: 56,
    type: "discussion",
  },
  {
    id: 6,
    author: "Luna Kim",
    avatar: "LK",
    handle: "@lunacodes",
    time: "1d ago",
    content: "Built a CLI tool that watches your codebase and auto-generates Mermaid diagrams of your architecture. It uses tree-sitter for parsing and supports TypeScript, Python, and Go. Open source on my GitHub!",
    tags: ["CLI", "OpenSource", "DevTools"],
    likes: 203,
    comments: 41,
    shares: 67,
    type: "showcase",
  },
];

const tabs = [
  { label: "Feed", value: "feed" },
  { label: "Trending", value: "trending" },
  { label: "Showcase", value: "showcase" },
  { label: "Questions", value: "questions" },
] as const;

type TabValue = (typeof tabs)[number]["value"];
type PostType = Post["type"];

const postTypeOptions: { label: string; value: PostType; emoji: string }[] = [
  { label: "Discussion", value: "discussion", emoji: "💬" },
  { label: "Showcase", value: "showcase", emoji: "🚀" },
  { label: "Question", value: "question", emoji: "❓" },
  { label: "Resource", value: "resource", emoji: "📖" },
];

/* ─── Post Card ─── */
const PostCard = ({ post, index }: { post: Post; index: number }) => {
  const [liked, setLiked] = useState(post.liked ?? false);
  const [likes, setLikes] = useState(post.likes);
  const [bookmarked, setBookmarked] = useState(post.bookmarked ?? false);

  const typeColor = {
    discussion: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    resource: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    showcase: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    question: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-card rounded-2xl border border-border p-5 hover:border-border/80 transition-all"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
            post.isGuest
              ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white"
              : "bg-gradient-to-br from-zinc-700 to-zinc-900 dark:from-zinc-300 dark:to-zinc-500 text-white dark:text-zinc-900"
          }`}>
            {post.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">{post.author}</span>
              {post.isGuest && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  guest
                </span>
              )}
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${typeColor[post.type]}`}>
                {post.type}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span>{post.handle}</span>
              <span>·</span>
              <span>{post.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <p className="text-sm text-foreground leading-relaxed mb-3">{post.content}</p>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-5">
          <button
            onClick={() => { setLiked(!liked); setLikes(l => liked ? l - 1 : l + 1); }}
            className={`flex items-center gap-1.5 text-xs transition-colors ${liked ? "text-red-500" : "text-muted-foreground hover:text-red-500"}`}
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
            <span>{likes}</span>
          </button>
          <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <Share2 className="w-4 h-4" />
            <span>{post.shares}</span>
          </button>
        </div>
        <button
          onClick={() => setBookmarked(!bookmarked)}
          className={`transition-colors ${bookmarked ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`} />
        </button>
      </div>
    </motion.div>
  );
};

/* ─── Compose Box ─── */
const ComposeBox = ({ onPost }: { onPost: (post: Post) => void }) => {
  const [guestName, setGuestName] = useState("");
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState<PostType>("discussion");
  const [tagsInput, setTagsInput] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handlePost = () => {
    setError("");

    const trimmedName = guestName.trim();
    const trimmedContent = content.trim();

    if (!trimmedName) {
      setError("Please enter your name to post.");
      return;
    }

    if (trimmedName.length < 2) {
      setError("Name must be at least 2 characters.");
      return;
    }

    if (!trimmedContent) {
      setError("Please write something to share.");
      return;
    }

    if (trimmedContent.length < 10) {
      setError("Post must be at least 10 characters long.");
      return;
    }

    // Check name for bad words
    const nameCheck = containsBadWords(trimmedName);
    if (nameCheck.hasBadWords) {
      setError("Your name contains inappropriate language. Please use a different name.");
      return;
    }

    // Check content for bad words
    const contentCheck = containsBadWords(trimmedContent);
    if (contentCheck.hasBadWords) {
      setError("Your post contains inappropriate language. Please keep it respectful and professional.");
      return;
    }

    // Check tags for bad words
    const tagsCheck = containsBadWords(tagsInput);
    if (tagsCheck.hasBadWords) {
      setError("Your tags contain inappropriate language. Please use appropriate tags.");
      return;
    }

    const initials = trimmedName.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
    const handle = `@${trimmedName.toLowerCase().replace(/\s+/g, "")}`;
    const tags = tagsInput.split(",").map(t => t.trim().replace(/^#/, "")).filter(Boolean);

    const newPost: Post = {
      id: Date.now(),
      author: trimmedName,
      avatar: initials || "GU",
      handle,
      time: "just now",
      content: trimmedContent,
      tags,
      likes: 0,
      comments: 0,
      shares: 0,
      type: postType,
      isGuest: true,
    };

    onPost(newPost);
    setContent("");
    setTagsInput("");
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const autoResize = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="bg-card rounded-2xl border border-border p-5">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
          <User className="w-4 h-4" />
        </div>
        <div className="flex-1 space-y-3">
          {/* Guest name */}
          <input
            type="text"
            value={guestName}
            onChange={e => { setGuestName(e.target.value); setError(""); }}
            placeholder="Your name"
            maxLength={40}
            className="w-full rounded-lg bg-secondary/50 border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />

          {/* Content */}
          <textarea
            ref={textareaRef}
            value={content}
            onChange={e => { setContent(e.target.value); setError(""); autoResize(); }}
            placeholder="Share your thoughts with the community..."
            maxLength={500}
            rows={2}
            className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
          />

          {/* Tags input */}
          <input
            type="text"
            value={tagsInput}
            onChange={e => { setTagsInput(e.target.value); setError(""); }}
            placeholder="Tags (comma separated, e.g. React, TypeScript)"
            maxLength={100}
            className="w-full rounded-lg bg-secondary/50 border border-border px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />

          {/* Post type + actions */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5 flex-wrap">
              {postTypeOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setPostType(opt.value)}
                  className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors ${
                    postType === opt.value
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {opt.emoji} {opt.label}
                </button>
              ))}
            </div>
            <button
              onClick={handlePost}
              className="flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              <Send className="w-3 h-3" />
              Post
            </button>
          </div>

          {/* Character count */}
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-muted-foreground">{content.length}/500 characters</p>
          </div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-start gap-2 text-xs text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2"
              >
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg px-3 py-2"
              >
                Your thought has been shared with the community!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main ─── */
const STORAGE_KEY = "community-guest-posts";

const Community = () => {
  const [activeTab, setActiveTab] = useState<TabValue>("feed");
  const [guestPosts, setGuestPosts] = useState<Post[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(guestPosts));
  }, [guestPosts]);

  const allPosts = [...guestPosts, ...defaultPosts];

  const handleNewPost = (post: Post) => {
    setGuestPosts(prev => [post, ...prev]);
  };

  const filteredPosts = activeTab === "feed"
    ? allPosts
    : activeTab === "trending"
      ? [...allPosts].sort((a, b) => b.likes - a.likes)
      : activeTab === "showcase"
        ? allPosts.filter(p => p.type === "showcase")
        : allPosts.filter(p => p.type === "question");

  return (
    <div className="min-h-screen bg-background">
      <main className="container px-6 pt-12 pb-16">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-2">
              <UsersRound className="w-8 h-8 text-muted-foreground" />
              <h1 className="text-3xl md:text-4xl font-bold">Community</h1>
            </div>
            <p className="text-muted-foreground mb-8">A space for developers to share, learn, and build together</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* ─── Main Feed ─── */}
            <div className="lg:col-span-2 space-y-4">
              {/* Tabs */}
              <div className="flex gap-1 bg-card rounded-xl border border-border p-1">
                {tabs.map(tab => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`flex-1 text-sm font-medium py-2 rounded-lg transition-all ${
                      activeTab === tab.value
                        ? "bg-foreground text-background shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Compose box */}
              <ComposeBox onPost={handleNewPost} />

              {/* Posts */}
              {filteredPosts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>

            {/* ─── Sidebar ─── */}
            <div className="space-y-4">
              {/* Trending Topics */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="bg-card rounded-2xl border border-border p-5">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-muted-foreground" />
                  <h2 className="font-bold text-sm">Trending in Tech</h2>
                </div>
                <div className="space-y-3">
                  {trendingTopics.map((topic, i) => {
                    const Icon = topic.icon;
                    return (
                      <motion.div
                        key={topic.tag}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.2 + i * 0.05 }}
                        className="flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                            <Icon className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="text-sm font-medium group-hover:text-foreground transition-colors">#{topic.tag.replace(/\s/g, "")}</p>
                            <p className="text-[11px] text-muted-foreground">{topic.posts} posts</p>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">#{i + 1}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Open Source Spotlight */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="bg-card rounded-2xl border border-border p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Github className="w-5 h-5 text-muted-foreground" />
                  <h2 className="font-bold text-sm">Open Source Spotlight</h2>
                </div>
                <div className="space-y-3">
                  {openSourceProjects.map((project, i) => (
                    <motion.a
                      key={project.name}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 + i * 0.05 }}
                      className="block group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium group-hover:text-foreground transition-colors truncate">{project.name}</p>
                          <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{project.description}</p>
                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                              <span className={`w-2 h-2 rounded-full ${project.languageColor}`} />
                              {project.language}
                            </span>
                            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                              {project.stars}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Community Stats */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="bg-card rounded-2xl border border-border p-5">
                <h2 className="font-bold text-sm mb-4">Community Stats</h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Members", value: "2.4k", icon: UsersRound },
                    { label: "Posts", value: "1.2k", icon: MessageCircle },
                    { label: "Reactions", value: "8.7k", icon: ThumbsUp },
                    { label: "Projects", value: "340", icon: Code2 },
                  ].map(stat => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="text-center p-3 rounded-xl bg-secondary/50">
                        <Icon className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
                        <p className="text-lg font-bold">{stat.value}</p>
                        <p className="text-[11px] text-muted-foreground">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Community Guidelines */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="bg-card rounded-2xl border border-border p-5">
                <h2 className="font-bold text-sm mb-3">Community Guidelines</h2>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p>Be respectful and professional</p>
                  <p>No inappropriate language or spam</p>
                  <p>Share knowledge, help others grow</p>
                  <p>Keep discussions tech-focused</p>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} className="bg-card rounded-2xl border border-border p-5">
                <h2 className="font-bold text-sm mb-3">Quick Links</h2>
                <div className="space-y-2">
                  {[
                    { label: "Code of Conduct", emoji: "📋" },
                    { label: "Contributing Guide", emoji: "🤝" },
                    { label: "Discord Server", emoji: "💬" },
                    { label: "Weekly Newsletter", emoji: "📧" },
                  ].map(link => (
                    <div key={link.label} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      <span>{link.emoji}</span>
                      <span>{link.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
