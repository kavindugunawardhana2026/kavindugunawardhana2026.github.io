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

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Profile Image Section */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative group w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-neon-cyan shadow-neon-cyan transform transition-transform duration-500 hover:scale-105 hover:-rotate-2">
              <div className="absolute inset-0 bg-neon-cyan/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
              <img
                src="https://github.com/kavindugunawardhana2026.png"
                alt="Profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-neon-pink/30 blur-2xl rounded-full z-0"></div>
            </div>
          </div>

          {/* Text & Skills Section */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="glassmorphism p-8 md:p-10 rounded-2xl border-l-4 border-l-neon-pink shadow-neon-pink relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-pink/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-body text-justify">
                I am a <span className="text-white font-semibold">multi-disciplinary technologist</span> driven by the intersection of <span className="text-neon-cyan">full-stack development</span>, <span className="text-neon-purple font-semibold">graphic design</span>, and <span className="text-neon-green font-semibold">embedded electronics</span>. My expertise lies in crafting seamless digital experiences and robust hardware solutions that bridge the gap between complex engineering and <span className="text-white font-semibold">user-centric design</span>.
                <br /><br />
                From designing <span className="text-neon-pink font-semibold">high-impact visual identities</span> and intuitive UI/UX for web applications to engineering efficient firmware and circuitry for intelligent systems, I thrive on solving real-world challenges. Whether I am writing optimized code for the web or developing <span className="text-neon-cyan">automated electronic systems</span>, I maintain a relentless focus on creating <span className="text-white font-semibold">functional, scalable, and aesthetically refined solutions</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glassmorphism p-6 rounded-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-neon-cyan border border-white/5 hover:border-neon-cyan/50">
                <div className="w-14 h-14 rounded-full bg-cyber-light flex items-center justify-center mb-4">
                  <Cpu className="w-7 h-7 text-neon-cyan" />
                </div>
                <h3 className="text-white font-bold mb-2">Hardware & AI</h3>
                <p className="text-sm text-slate-400">Bridging the gap between physical embedded systems and neural logic.</p>
              </div>

              <div className="glassmorphism p-6 rounded-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-neon-purple border border-white/5 hover:border-neon-purple/50">
                <div className="w-14 h-14 rounded-full bg-cyber-light flex items-center justify-center mb-4">
                  <Layers className="w-7 h-7 text-neon-purple" />
                </div>
                <h3 className="text-white font-bold mb-2">3D Procedural</h3>
                <p className="text-sm text-slate-400">Generating complex node-based structures and renders in Blender.</p>
              </div>

              <div className="glassmorphism p-6 rounded-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-neon-pink border border-white/5 hover:border-neon-pink/50">
                <div className="w-14 h-14 rounded-full bg-cyber-light flex items-center justify-center mb-4">
                  <PenTool className="w-7 h-7 text-neon-pink" />
                </div>
                <h3 className="text-white font-bold mb-2">UI/UX Aesthetics</h3>
                <p className="text-sm text-slate-400">Crafting high-end, premium interfaces that wow users instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
