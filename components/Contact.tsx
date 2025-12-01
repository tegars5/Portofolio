import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neon-400/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-full mb-8">
          <div className="w-2 h-2 bg-neon-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-zinc-300 font-mono uppercase tracking-wider">Open for Opportunities</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Ready to build the <br />
          <span className="text-zinc-500">next big thing?</span>
        </h2>

        <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">I'm currently looking for full-time opportunities at technology-driven companies. If you think I'd be a good fit, let's discuss.</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="mailto:your.email@gmail.com" className="group relative px-8 py-4 bg-neon-400 text-black font-bold text-lg rounded overflow-hidden transition-transform hover:-translate-y-1">
            <span className="relative z-10 flex items-center gap-2">
              <Mail size={20} /> Say Hello
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
          </a>

          <a href="/resume.pdf" download className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-mono">
            Download Resume <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <footer className="absolute bottom-0 w-full py-6 border-t border-zinc-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-zinc-600 font-mono">
          <p>&copy; 2024 LARAVEL.folio</p>
          <p>Built with Laravel & Flutter</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
