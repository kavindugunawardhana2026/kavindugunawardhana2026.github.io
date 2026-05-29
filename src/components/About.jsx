import React from 'react';
import { Cpu, Layers, PenTool } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-cyber-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            <span className="text-glow-pink text-neon-pink">&lt;</span> About_Me <span className="text-glow-pink text-neon-pink">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glassmorphism p-8 rounded-2xl border-l-4 border-l-neon-pink shadow-neon-pink relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-pink/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
            <p className="text-lg text-slate-300 leading-relaxed font-body">
              I am driven by a strong passion for <span className="text-white font-semibold">logic-heavy hardware engineering</span>, exploring the intricacies of <span className="text-neon-cyan">3D procedural generation with Blender</span>, and pioneering the seamless integration of physical systems with <span className="text-neon-purple font-semibold">artificial intelligence</span>.
              <br/><br/>
              My work emphasizes a unique focus on <span className="text-white font-semibold">high-fidelity design aesthetics</span> alongside complex engineering problem-solving. Whether it's wiring an embedded circuit or designing a premium UI, I believe the interface between human and machine should be both flawlessly functional and visually stunning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glassmorphism p-6 rounded-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-neon-cyan border border-white/5 hover:border-neon-cyan/50">
              <div className="w-14 h-14 rounded-full bg-cyber-light flex items-center justify-center mb-4">
                <Cpu className="w-7 h-7 text-neon-cyan" />
              </div>
              <h3 className="text-white font-bold mb-2">Hardware & AI</h3>
              <p className="text-sm text-slate-400">Bridging the gap between physical embedded systems and neural logic.</p>
            </div>
            
            <div className="glassmorphism p-6 rounded-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-neon-purple border border-white/5 hover:border-neon-purple/50 sm:translate-y-8">
              <div className="w-14 h-14 rounded-full bg-cyber-light flex items-center justify-center mb-4">
                <Layers className="w-7 h-7 text-neon-purple" />
              </div>
              <h3 className="text-white font-bold mb-2">3D Procedural</h3>
              <p className="text-sm text-slate-400">Generating complex node-based structures and renders in Blender.</p>
            </div>

            <div className="glassmorphism p-6 rounded-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-neon-pink border border-white/5 hover:border-neon-pink/50 sm:col-span-2 sm:w-2/3 sm:mx-auto">
              <div className="w-14 h-14 rounded-full bg-cyber-light flex items-center justify-center mb-4">
                <PenTool className="w-7 h-7 text-neon-pink" />
              </div>
              <h3 className="text-white font-bold mb-2">UI/UX Aesthetics</h3>
              <p className="text-sm text-slate-400">Crafting high-end, premium interfaces that wow users instantly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
