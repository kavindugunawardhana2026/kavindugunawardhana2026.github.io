import React from 'react';
import { Terminal, Palette } from 'lucide-react';

const Skills = () => {
  const coreTech = [
    { name: 'Python', color: 'neon-cyan' },
    { name: 'C', color: 'neon-cyan' },
    { name: 'C++', color: 'neon-cyan' },
    { name: 'Dart', color: 'neon-cyan' },
    { name: 'React Native', color: 'neon-cyan' },
    { name: 'Embedded Systems', color: 'neon-green' },
    { name: 'Circuit Design', color: 'neon-green' },
  ];

  const creativeDesign = [
    { name: 'Graphic Design', color: 'neon-pink' },
    { name: 'UI/UX', color: 'neon-pink' },
    { name: 'Blender (3D Procedural)', color: 'neon-purple' },
    { name: 'Vector Illustration', color: 'neon-pink' },
    { name: 'Brand Identity', color: 'neon-pink' },
  ];

  const renderBadge = (skill) => {
    const isCyan = skill.color === 'neon-cyan';
    const isGreen = skill.color === 'neon-green';
    const isPink = skill.color === 'neon-pink';
    const isPurple = skill.color === 'neon-purple';

    let colorClass = '';
    let glowClass = '';
    
    if (isCyan) { colorClass = 'border-neon-cyan text-neon-cyan'; glowClass = 'hover:shadow-neon-cyan hover:bg-neon-cyan/10'; }
    if (isGreen) { colorClass = 'border-neon-green text-neon-green'; glowClass = 'hover:shadow-neon-green hover:bg-neon-green/10'; }
    if (isPink) { colorClass = 'border-neon-pink text-neon-pink'; glowClass = 'hover:shadow-neon-pink hover:bg-neon-pink/10'; }
    if (isPurple) { colorClass = 'border-[#B026FF] text-[#B026FF]'; glowClass = 'hover:shadow-[0_0_15px_rgba(176,38,255,0.4)] hover:bg-[#B026FF]/10'; }

    return (
      <div 
        key={skill.name} 
        className={`px-4 py-2 rounded-full border bg-cyber-light/40 backdrop-blur-sm cursor-default transition-all duration-300 transform hover:-translate-y-1 ${colorClass} ${glowClass}`}
      >
        <span className="font-mono text-sm tracking-wide">{skill.name}</span>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-cyber-dark">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            <span className="text-glow-cyan text-neon-cyan">System</span>.Capabilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Core Tech */}
          <div className="glassmorphism p-8 rounded-2xl border-t-2 border-t-neon-cyan">
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <Terminal className="text-neon-cyan w-6 h-6" />
              <h3 className="text-2xl font-bold text-white">Core Tech</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {coreTech.map(renderBadge)}
            </div>
          </div>

          {/* Creative & Design */}
          <div className="glassmorphism p-8 rounded-2xl border-t-2 border-t-neon-pink">
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <Palette className="text-neon-pink w-6 h-6" />
              <h3 className="text-2xl font-bold text-white">Creative & Design</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {creativeDesign.map(renderBadge)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
