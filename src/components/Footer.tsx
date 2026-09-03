import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const NAMESPACE = "gilbert-tuazon-pro";
const KEY = "portfolio-views";
const COUNTER_API = `https://abacus.jasoncameron.dev`;

export const VisitorCount = ({ className = "" }: { className?: string }) => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visitor-counted-v2") === "true";
    const endpoint = hasVisited ? "get" : "hit";

    fetch(`${COUNTER_API}/${endpoint}/${NAMESPACE}/${KEY}`)
      .then((response) => {
        if (!response.ok) throw new Error("Visitor counter unavailable");
        return response.json();
      })
      .then((data) => {
        const count = typeof data.value === "number" ? data.value : null;
        setViews(count);
        if (!hasVisited && count !== null) sessionStorage.setItem("visitor-counted-v2", "true");
      })
      .catch(() => setViews(null));
  }, []);

  if (views === null) return null;

  return (
    <div className={`flex items-center gap-1.5 text-sm text-muted-foreground ${className}`}>
      <Eye className="w-4 h-4" aria-hidden="true" />
      <span>{views.toLocaleString()} views</span>
    </div>
  );
};

const Footer = () => {

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <VisitorCount className="justify-center" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gilbert Tuazon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
