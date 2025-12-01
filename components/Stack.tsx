import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Smartphone, Layers, Code, Globe2, Zap, GitBranch } from 'lucide-react';

const Stack: React.FC = () => {
  const skills = [
    { name: "Laravel", icon: Server, desc: "PHP Framework" },
    { name: "Flutter", icon: Smartphone, desc: "Mobile Framework" },
    { name: "PostgreSQL", icon: Database, desc: "Relational Database" },
    { name: "PHP", icon: Code, desc: "Server Language" },
    { name: "Vue.js", icon: Globe2, desc: "Frontend Framework" },
    { name: "Tailwind", icon: Layers, desc: "Utility CSS" },
    { name: "Livewire", icon: Zap, desc: "Laravel Component" },
    { name: "Git/CI/CD", icon: GitBranch, desc: "Version Control" },
  ];

  return (
    <section id="stack" className="py-24 bg-zinc-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-neon-400">Arsenal</span></h2>
          <p className="text-zinc-400 max-w-2xl">
            My preferred stack for building highly scalable, performant, and maintainable web and mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(74, 222, 128, 0.5)' }}
              className="p-6 bg-dark-800 border border-zinc-800 rounded hover:shadow-[0_0_20px_rgba(74,222,128,0.1)] transition-all duration-300 group"
            >
              <div className="mb-4 text-zinc-400 group-hover:text-neon-400 transition-colors">
                <skill.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
              <p className="text-xs text-zinc-500 font-mono">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;