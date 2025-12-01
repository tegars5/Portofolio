import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { handleSmoothScroll } from "../utils/scrollUtils";

const Hero: React.FC = () => {
  const phrases = ["Full Stack Developer", "Laravel-Flutter Specialist", "Problem Solver"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentPhraseIndex, typingSpeed, phrases]);

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-block px-3 py-1 border border-neon-400/30 bg-neon-400/10 rounded-full mb-6">
            <span className="text-neon-400 text-xs font-mono font-bold tracking-wider">AVAILABLE FOR HIRE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">experiences</span> that matter.
          </h1>

          <div className="h-8 mb-8">
            <span className="text-xl md:text-2xl text-zinc-400 font-mono">
              I am a <span className="text-white">{text}</span>
              <span className="animate-blink text-neon-400">|</span>
            </span>
          </div>

          <p className="text-zinc-400 max-w-md text-lg mb-10 leading-relaxed">Designing and developing scalable enterprise applications with Laravel and Flutter. Focused on performance, accessibility, and minimalist design.</p>

          <div className="flex gap-6 items-center">
            <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")} className="bg-white text-black px-8 py-3.5 rounded font-bold hover:bg-neon-400 transition-colors duration-300 cursor-pointer">
              View Work
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-neon-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-neon-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-neon-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden md:block">
          {/* Abstract Tech Visualization */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 border border-zinc-800 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-zinc-800 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-zinc-900 rounded-full border border-neon-400 shadow-[0_0_30px_rgba(74,222,128,0.2)] flex items-center justify-center">
                <span className="font-mono font-bold text-2xl text-neon-400">LARAVEL</span>
              </div>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-zinc-900 px-3 py-1 rounded border border-zinc-800 text-xs font-mono">Laravel</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-zinc-900 px-3 py-1 rounded border border-zinc-800 text-xs font-mono">Flutter</div>
            <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 bg-zinc-900 px-3 py-1 rounded border border-zinc-800 text-xs font-mono">PostgreSQL</div>
            <div className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 bg-zinc-900 px-3 py-1 rounded border border-zinc-800 text-xs font-mono">Vue</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
