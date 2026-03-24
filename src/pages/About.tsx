import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-mono-tech text-sm mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> BACK
        </Link>
        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
          <div className="border border-primary border-glow overflow-hidden"
            style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}>
            <img src={profilePhoto} alt="Prosper Akpama-Ndu" className="w-full h-auto" />
          </div>
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-primary text-glow mb-2">ABOUT ME</h1>
            <p className="font-mono-tech text-muted-foreground leading-relaxed mt-6">
              Hi, I'm Prosper Akpama-Ndu — a passionate developer focused on designing efficient tech solutions. More details coming soon...
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
