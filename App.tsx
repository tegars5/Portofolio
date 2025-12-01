import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <main className="bg-dark-900 min-h-screen text-zinc-100 selection:bg-neon-400 selection:text-black">
      <Navbar />
      <Hero />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;