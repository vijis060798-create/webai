import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-primary-500/20"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center relative z-10 min-h-[40px]">
            <img
              src="/logoex.png"
              alt="Victinet"
              className="h-10 md:h-12 w-auto object-contain"
              style={{
                display: "block",
                maxHeight: "48px",
                width: "auto",
                height: "auto",
                minWidth: "120px",
                backgroundColor: "transparent",
              }}
              onError={(e) => {
                console.error("Logo failed to load. Path:", "/logoex.png");
                const target = e.target as HTMLImageElement;
                target.style.border = "2px dashed red";
                target.style.minWidth = "200px";
                target.style.minHeight = "40px";
              }}
              onLoad={() => {
                console.log("Logo loaded successfully from /logoex.png");
              }}
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="/#solutions"
            className="text-slate-300 hover:text-primary-400 transition-colors">
            Solutions
          </a>
          <a
            href="/#how-it-works"
            className="text-slate-300 hover:text-primary-400 transition-colors">
            How It Works
          </a>
          <a
            href="/#why-us"
            className="text-slate-300 hover:text-primary-400 transition-colors">
            Why Us
          </a>
          <a
            href="/#contact"
            className="px-6 py-2 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full hover:shadow-lg hover:shadow-primary-500/50 transition-all">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
