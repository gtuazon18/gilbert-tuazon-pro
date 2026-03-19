import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const COUNTER_API_NAMESPACE = "gilbert-tuazon-pro";
const COUNTER_API_KEY = "portfolio-views";

const Footer = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("counted");

    if (!hasVisited) {
      // Increment and get count for new session
      fetch(`https://api.countapi.xyz/hit/${COUNTER_API_NAMESPACE}/${COUNTER_API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          setViews(data.value);
          sessionStorage.setItem("counted", "true");
        })
        .catch(() => {
          // Fallback: just get current count
          fetch(`https://api.countapi.xyz/get/${COUNTER_API_NAMESPACE}/${COUNTER_API_KEY}`)
            .then((res) => res.json())
            .then((data) => setViews(data.value))
            .catch(() => setViews(null));
        });
    } else {
      // Already counted this session, just get current count
      fetch(`https://api.countapi.xyz/get/${COUNTER_API_NAMESPACE}/${COUNTER_API_KEY}`)
        .then((res) => res.json())
        .then((data) => setViews(data.value))
        .catch(() => setViews(null));
    }
  }, []);

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          {views !== null && (
            <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span>{views.toLocaleString()} views</span>
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gilbert Tuazon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
