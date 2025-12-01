import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ArrowUp } from "lucide-react";
import { Project } from "../types";

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const projects: Project[] = [
    {
      id: 1,
      title: "Nexus E-Commerce",
      description: "A full-featured headless e-commerce platform with real-time inventory, Stripe integration, and an admin dashboard.",
      tech: ["Laravel", "Flutter", "PostgreSQL", "Livewire", "Stripe"],
      imageUrl: "https://picsum.photos/800/600?random=1",
      liveUrl: "https://nexus-ecommerce-demo.vercel.app",
      repoUrl: "https://github.com/yourusername/nexus-ecommerce",
    },
    {
      id: 2,
      title: "TaskMaster Pro",
      description: "Collaborative project management tool featuring real-time socket.io updates, drag-and-drop kanban boards, and team chat.",
      tech: ["Vue.js", "Laravel", "PostgreSQL", "Tailwind"],
      imageUrl: "https://picsum.photos/800/600?random=2",
      liveUrl: "https://taskmaster-pro-demo.netlify.app",
      repoUrl: "https://github.com/yourusername/taskmaster-pro",
    },
    {
      id: 3,
      title: "FinTrack AI",
      description: "Personal finance visualizer that uses AI to categorize transactions and predict future spending habits based on history.",
      tech: ["Flutter", "Laravel", "PostgreSQL", "PHP"],
      imageUrl: "https://picsum.photos/800/600?random=3",
      liveUrl: "https://fintrack-ai-demo.herokuapp.com",
      repoUrl: "https://github.com/yourusername/fintrack-ai",
    },
    {
      id: 4,
      title: "SocialSphere",
      description: "A decentralized social media feed focusing on privacy, featuring end-to-end encrypted messaging and local storage.",
      tech: ["Vue.js", "Laravel", "PostgreSQL", "PHP"],
      imageUrl: "https://picsum.photos/800/600?random=4",
      liveUrl: "https://socialsphere-app.vercel.app",
      repoUrl: "https://github.com/yourusername/socialsphere",
    },
    {
      id: 5,
      title: "CodeCollab IDE",
      description: "Real-time collaborative code editor with syntax highlighting, live sharing, and integrated video chat for remote pair programming.",
      tech: ["Vue.js", "Laravel", "PostgreSQL", "WebRTC"],
      imageUrl: "https://picsum.photos/800/600?random=5",
      liveUrl: "https://codecollab-ide.herokuapp.com",
      repoUrl: "https://github.com/yourusername/codecollab-ide",
    },
    {
      id: 6,
      title: "WeatherWise AI",
      description: "Smart weather prediction app using machine learning models to provide hyper-local forecasts and climate insights.",
      tech: ["Flutter", "Laravel", "PostgreSQL", "PHP"],
      imageUrl: "https://picsum.photos/800/600?random=6",
      liveUrl: "https://weatherwise-ai.vercel.app",
      repoUrl: "https://github.com/yourusername/weatherwise-ai",
    },
    {
      id: 7,
      title: "DevFlow CMS",
      description: "Headless CMS built for developers with drag-and-drop interface, REST/GraphQL APIs, and multi-tenant architecture.",
      tech: ["Laravel", "Vue.js", "PostgreSQL", "PHP"],
      imageUrl: "https://picsum.photos/800/600?random=7",
      liveUrl: "https://devflow-cms.netlify.app",
      repoUrl: "https://github.com/yourusername/devflow-cms",
    },
    {
      id: 8,
      title: "CryptoPortfolio Tracker",
      description: "Advanced cryptocurrency portfolio management with real-time analytics, P&L tracking, and automated tax reporting.",
      tech: ["Flutter", "Laravel", "PostgreSQL", "PHP"],
      imageUrl: "https://picsum.photos/800/600?random=8",
      liveUrl: "https://crypto-portfolio-track.vercel.app",
      repoUrl: "https://github.com/yourusername/crypto-portfolio-tracker",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-neon-400">Projects</span>
            </h2>
            <p className="text-zinc-400 max-w-xl">A selection of applications demonstrating end-to-end development capabilities and architectural patterns.</p>
          </div>
          <button onClick={() => setShowAll(!showAll)} className="group flex items-center gap-2 text-neon-400 font-mono text-sm hover:text-white transition-all duration-300">
            {showAll ? "SHOW LESS" : "VIEW ALL REPOSITORIES"}
            {showAll ? <ArrowUp size={16} className="transform group-hover:-translate-y-1 transition-transform" /> : <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-zinc-900 border border-zinc-800 overflow-hidden"
            >
              {/* Image Overlay */}
              <div className="aspect-video overflow-hidden relative">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-neon-400 text-black p-3 rounded-full hover:bg-white transition-colors" title="View Live Demo">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="bg-zinc-800 text-white p-3 rounded-full hover:bg-white hover:text-black transition-colors" title="View Source Code">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-mono text-zinc-300 bg-zinc-800 border border-zinc-700 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
