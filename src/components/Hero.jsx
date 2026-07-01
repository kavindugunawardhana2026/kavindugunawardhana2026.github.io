import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import NeuralCanvas from './NeuralCanvas';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "AI Undergraduate @ UoM | Founder of Alpha Dynamics Creations & Web solutions | Modern Graphic Designer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <NeuralCanvas />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-purple/30 bg-cyber-light/50 backdrop-blur-md mb-8 animate-float shadow-neon-pink">
          <span className="w-2 h-2 rounded-full bg-neon-pink animate-pulse"></span>
          <span className="text-xs font-mono text-neon-pink tracking-widest uppercase">System Online</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-white tracking-tighter">
          K.K.A. <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-pulse-slow text-glow-cyan">Gunawardhana</span>
        </h1>

        <div className="h-16 md:h-12 flex items-center justify-center mb-12">
          <p className="text-lg md:text-xl text-slate-300 font-mono border-r-2 border-neon-cyan pr-2 animate-[pulse_1s_infinite]">
            {text}
          </p>
        </div>

        <a
          href="#projects"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-cyber-dark border border-neon-cyan rounded-lg overflow-hidden hover:scale-105 shadow-neon-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
        >
          <div className="absolute inset-0 w-full h-full -ml-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent group-hover:animate-[grid-scroll_2s_linear_infinite] opacity-20"></div>
          <span className="relative flex items-center gap-2">
            Explore My Work <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
