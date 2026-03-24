import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import cat3d from "@/assets/cat-3d-modeling.jpg";
import catSoftware from "@/assets/cat-software.jpg";
import catEmbedded from "@/assets/cat-embedded.jpg";
import catArchModels from "@/assets/cat-arch-models.jpg";
import catArchDrawings from "@/assets/cat-arch-drawings.jpg";

const categories = [
  { title: "3D Modelling", image: cat3d, slug: "3d-modelling" },
  { title: "Software Engineering", image: catSoftware, slug: "software-engineering" },
  { title: "Embedded Systems", image: catEmbedded, slug: "embedded-systems" },
  { title: "Architectural Physical Models", image: catArchModels, slug: "architectural-models" },
  { title: "Architectural Drawings & Detailings", image: catArchDrawings, slug: "architectural-drawings" },
];

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
    {children}
  </a>
);

const Index = () => {
  const tagline = "Designing efficient tech solutions, just for you....";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [cursorBlinking, setCursorBlinking] = useState(true);
  const location = useLocation();

  // Handle scroll-to from navbar navigation
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(state.scrollTo!);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      if (i >= tagline.length) {
        setTimeout(() => setShowCursor(false), 1200);
        return;
      }
      setDisplayedText(tagline.slice(0, i + 1));
      i++;

      if (tagline[i - 1] === " " && i >= 2 && tagline[i - 2] === ",") {
        setCursorBlinking(true);
        timeout = setTimeout(() => typeNext(), 1000);
      } else {
        setCursorBlinking(false);
        timeout = setTimeout(() => typeNext(), 40);
      }
    };

    typeNext();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-transparent pt-16 relative z-10">
      {/* Hero Section */}
      <div className="flex items-center justify-center p-6 md:p-12 min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-6xl flex flex-col items-center gap-8">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-center items-center flex flex-col"
          >
            <p className="font-mono-tech text-muted-foreground tracking-[0.3em] text-sm">
              HI THERE, I AM
            </p>

            <div>
              <h1 className="font-display font-900 text-[2.7rem] md:text-[4.05rem] text-primary text-glow hover:text-glow-strong transition-all duration-300 cursor-default tracking-wider">
                PROSPER
              </h1>
              <h1 className="font-display font-bold text-[2.7rem] md:text-[4.05rem] text-foreground hover:text-glow transition-all duration-300 cursor-default tracking-wider mt-1">
                AKPAMA-NDU
              </h1>
              <p className="font-mono-tech text-muted-foreground text-sm md:text-lg tracking-[0.15em] mt-3">
                Architecture Student, Software &amp; Embedded Systems Engineer
              </p>
            </div>

            {/* Tagline with decorative line - full width */}
            <div className="relative w-[calc(100vw-3rem)] md:w-[calc(100vw-6rem)]">
              <div className="flex items-center gap-3 justify-center">
                <div className="w-3 h-3 border border-primary rotate-45 shrink-0" />
                <div className="h-px bg-primary animate-line-expand flex-1" />
              </div>
              <p className="font-mono-tech text-muted-foreground mt-3 text-base md:text-lg text-center">
                {displayedText}{showCursor && <span className={cursorBlinking ? "animate-[pulse_1.2s_ease-in-out_infinite]" : ""}>|</span>}
              </p>
              <div className="flex items-center gap-3 mt-3 justify-center">
                <div className="h-px bg-primary animate-line-expand flex-1" />
                <div className="w-3 h-3 border border-primary rotate-45 shrink-0" />
              </div>
            </div>

            {/* Buttons & Socials */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <a
                href="#projects-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-3 border border-primary px-6 py-3 rounded-xl font-mono-tech text-sm tracking-widest text-foreground hover:bg-primary hover:text-primary-foreground transition-all border-glow"
              >
                PROJECTS <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-5">
                <SocialIcon href="https://github.com"><Github className="w-6 h-6" /></SocialIcon>
                <SocialIcon href="https://linkedin.com"><Linkedin className="w-6 h-6" /></SocialIcon>
                <SocialIcon href="https://instagram.com">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
                </SocialIcon>
                <SocialIcon href="https://wa.me/"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></SocialIcon>
                <SocialIcon href="mailto:hello@example.com"><Mail className="w-6 h-6" /></SocialIcon>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* About / Description Section */}
      <motion.div
        id="about-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="px-6 md:px-12 pb-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Text content - left side */}
            <div className="flex-1">
              <h2 className="font-display text-2xl md:text-3xl text-muted-foreground mb-6 tracking-wider">
                ABOUT ME
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl text-justify leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                I am a multidisciplinary designer and engineer passionate about creating innovative solutions across digital and physical domains. From crafting immersive 3D models and developing robust software systems to designing embedded hardware and building architectural masterpieces — every project is an opportunity to push boundaries and deliver excellence. Explore my work below to see how I bring ideas to life through technology, creativity, and precision engineering.
              </p>
            </div>

            {/* Photo & Resume - right side */}
            <div className="flex flex-col items-center gap-6 shrink-0">
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary border-glow">
                <img
                  src={profilePhoto}
                  alt="Prosper Akpama-Ndu"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-3 border border-primary px-6 py-3 rounded-xl font-mono-tech text-sm tracking-widest text-foreground hover:bg-primary hover:text-primary-foreground transition-all border-glow"
              >
                RESUME <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects Strip Section */}
      <motion.div
        id="projects-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="px-6 md:px-12 pb-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-primary text-glow mb-8 tracking-wider text-center">
            PROJECTS
          </h2>

          <div className="flex flex-col gap-3">
            {categories.map((cat, i) => (
              <Link
                key={cat.slug}
                to={`/projects/${cat.slug}`}
                className="group relative block h-28 md:h-36 overflow-hidden border border-border hover:border-primary transition-all duration-300"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent flex items-center px-8">
                  <div className="flex items-center gap-4">
                    <span className="font-mono-tech text-xs text-muted-foreground tracking-widest">
                      0{i + 1}
                    </span>
                    <div className="w-8 h-px bg-primary" />
                    <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors tracking-wider">
                      {cat.title.toUpperCase()}
                    </h3>
                  </div>
                  <ArrowRight className="ml-auto w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
