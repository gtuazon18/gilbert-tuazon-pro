import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are Gilbert Tuazon's portfolio AI assistant. You help visitors learn about Gilbert — a Full-Stack Software Engineer with 10+ years of experience.

Key facts about Gilbert:
- Current role: Full-Stack Software Engineer at Teko Philippines (May 2024 – Present)
- Previous: Multisys Technologies (2020–2024), W-Tech Solutions (2018–2020), Ingram Micro (2014–2018)
- Frontend: React, Next.js, TypeScript, Tailwind CSS, Vue.js, Redux
- Backend: Node.js, Laravel, Python, GraphQL, REST APIs, FastAPI
- Database & Cloud: PostgreSQL, MySQL, MongoDB, AWS, Docker, Redis
- AI & LLM: LangChain, LangGraph, RAG, OpenAI, Groq, Ollama, ChromaDB, Pinecone, HuggingFace
- Voice AI: ElevenLabs, Whisper, VAPI, OpenVoice
- Mobile: React Native, Expo

Notable projects:
- AgentCo AI Agent — AI agent platform with LangChain & LangGraph (agentco.cloud)
- Waal — Agentic InsightRun platform for stakeholder decisions (waal.ai)
- MyMoovz — Cloud platform for property managers & tenants (muval.com.au/partners/mymoovz)
- IntelHouse — Lead generation platform (intelhouse.net)
- Teko Aircon Booking — Online booking for aircon & electrician services (teko.ph)
- Serenite — Luxury spa e-commerce
- LMS Lab Management — Lab resource tracking system (rxn3d.com)
- FootBaller Life — Social media for football fans (footballerlife.com)

Keep responses concise, friendly, and professional. If asked something you don't know about Gilbert, say so honestly.`;

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Gilbert's AI assistant. Ask me anything about his skills, projects, or experience!" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...updatedMessages.map((m) => ({ role: m.role, content: m.content })),
          ],
          max_tokens: 512,
          temperature: 0.7,
        }),
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't process that. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, something went wrong. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg overflow-hidden ring-2 ring-foreground/10 hover:ring-foreground/30 transition-all"
          >
            <img src="/starai.png" alt="AI Assistant" className="w-full h-full object-cover" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-3rem)] rounded-2xl border border-border bg-background shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/starai.png" alt="AI Assistant" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Gilbert's AI Assistant</p>
                  <p className="text-[10px] text-muted-foreground">Powered by Groq</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5">
                      <img src="/starai.png" alt="AI" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-foreground text-background rounded-br-md"
                        : "bg-secondary text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-3 h-3 text-background" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5">
                    <img src="/starai.png" alt="AI" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-secondary px-3 py-2 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-border bg-card">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Gilbert..."
                  className="flex-1 px-3 py-2 text-xs rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground/20 placeholder:text-muted-foreground"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
