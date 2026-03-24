import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollLink = (sectionId: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-xl border-b border-border/50">
      <div className="flex items-center justify-between px-8 py-6">
        <NavLink
          to="/"
          className="font-display text-sm font-bold tracking-[0.15em] text-foreground hover:text-primary transition-colors"
          activeClassName=""
        >
          PROSPER AKPAMA-NDU
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-16">
          <NavLink
            to="/"
            className="font-mono-tech text-sm font-bold tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            activeClassName="text-primary text-glow"
          >
            HOME
          </NavLink>
          <button
            onClick={() => handleScrollLink("projects-section")}
            className="font-mono-tech text-sm font-bold tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            WORK
          </button>
          <button
            onClick={() => handleScrollLink("about-section")}
            className="font-mono-tech text-sm font-bold tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            ABOUT
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-6 flex flex-col justify-between bg-transparent border-none cursor-pointer z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-full h-0.5 bg-foreground transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[10px]" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-foreground transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[10px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-background/80 backdrop-blur-xl border-t border-border/50">
          <NavLink
            to="/"
            className="font-mono-tech text-sm font-bold tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            activeClassName="text-primary text-glow"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </NavLink>
          <button
            onClick={() => handleScrollLink("projects-section")}
            className="font-mono-tech text-sm font-bold tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            WORK
          </button>
          <button
            onClick={() => handleScrollLink("about-section")}
            className="font-mono-tech text-sm font-bold tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            ABOUT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
