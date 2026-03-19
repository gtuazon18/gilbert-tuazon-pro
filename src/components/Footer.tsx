import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const NAMESPACE = "gilbert-tuazon-pro";
const KEY = "portfolio-views";

const Footer = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("counted");

    if (!hasVisited) {
      // Increment and get count for new session
      fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`)
        .then((res) => res.json())
        .then((data) => {
          setViews(data.count);
          sessionStorage.setItem("counted", "true");
          sessionStorage.setItem("view-count", String(data.count));
        })
        .catch(() => setViews(null));
    } else {
      // Already counted this session, show cached count
      const cached = sessionStorage.getItem("view-count");
      if (cached) {
        setViews(parseInt(cached, 10));
      }
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
