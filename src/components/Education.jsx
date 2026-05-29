import React from 'react';
import { BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10 bg-cyber-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12">
          Academic <span className="text-neon-cyan">Foundation</span>
        </h2>

        <div className="relative border border-white/10 glassmorphism p-8 md:p-12 rounded-2xl shadow-neon-cyan max-w-2xl mx-auto overflow-hidden group">
          {/* Decorative circuit lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
          <div className="absolute -left-12 -top-12 w-32 h-32 bg-neon-cyan/20 rounded-full blur-[40px] group-hover:bg-neon-cyan/40 transition-colors duration-500"></div>
          
          <div className="w-16 h-16 mx-auto bg-cyber-light border border-neon-cyan rounded-full flex items-center justify-center mb-6 relative z-10">
            <BookOpen className="text-neon-cyan w-8 h-8" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">BSc in Artificial Intelligence</h3>
          <p className="text-xl text-slate-300 font-mono mb-4">University of Moratuwa</p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-neon-cyan font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
            Currently Parsing
          </div>

          <p className="text-slate-400 max-w-lg mx-auto">
            Focusing on neural networks, machine learning algorithms, and the practical deployment of AI in embedded hardware environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
