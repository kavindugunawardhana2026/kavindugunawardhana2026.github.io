import React, { useState, useRef } from 'react';
import { Maximize2, X } from 'lucide-react';

const DesignGallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Cybernetic Arm 3D",
      type: "Blender Art",
      desc: "Realistic 3D procedural render of a futuristic robotic element.",
      color: "neon-cyan"
    },
    {
      id: 2,
      title: "Tech Startup Identity",
      type: "Branding",
      desc: "Modern, minimalist logo and identity for a tech startup.",
      color: "neon-purple"
    },
    {
      id: 3,
      title: "Bio-Tech Fusion",
      type: "Vector Design",
      desc: "A digital illustration poster blending nature and technology.",
      color: "neon-green"
    },
    {
      id: 4,
      title: "Neuro-Link App",
      type: "UI Concept",
      desc: "Futuristic mobile app interface design.",
      color: "neon-pink"
    }
  ];

  const [activeItem, setActiveItem] = useState(null);
  const containerRef = useRef(null);

  // Parallax effect using mouse coordinates inside the container
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    const cards = containerRef.current.querySelectorAll('.gallery-card');
    cards.forEach((card, index) => {
      const depth = (index % 2 === 0 ? 1 : -1) * 20; // Alternate depth directions
      card.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.gallery-card');
    cards.forEach((card) => {
      card.style.transform = `translate(0px, 0px)`;
    });
  };

  return (
    <section id="gallery" className="py-24 relative z-10 bg-cyber-dark overflow-hidden">
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase tracking-wider">
            Creative <span className="text-neon-purple text-glow-pink">Works</span>
          </h2>
          <p className="text-xl text-slate-400 font-mono">Blending aesthetics with technology.</p>
          
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-purple/20 rounded-full blur-[80px] -z-10"></div>
        </div>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 perspective-1000"
        >
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-card relative group rounded-xl overflow-hidden aspect-[4/3] glassmorphism border border-white/10 transition-transform duration-300 ease-out shadow-lg hover:border-${item.color}/50 hover:shadow-[0_0_20px_rgba(var(--color-${item.color}),0.3)]`}
              onClick={() => setActiveItem(item)}
            >
              {/* Image Placeholder (Wait for actual images) */}
              <div className="absolute inset-0 bg-cyber-light flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGw0MCA0ME0wIDQwbDQwLTQwIiBzdHJva2U9IiM1NTUiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')]"></div>
                <span className={`text-${item.color} font-mono opacity-50 text-xl`}>[ IMAGE PLACEHOLDER ]</span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className={`inline-block px-3 py-1 text-xs font-bold text-cyber-black bg-${item.color} rounded-sm w-max mb-3 uppercase tracking-wider`}>
                  {item.type}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{item.desc}</p>
                <button className={`text-${item.color} flex items-center gap-2 hover:underline w-max`}>
                  <Maximize2 className="w-4 h-4" /> Enlarge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-cyber-black/90 backdrop-blur-md" onClick={() => setActiveItem(null)}></div>
          
          <div className="relative z-10 w-full max-w-5xl bg-cyber-light rounded-xl border border-white/20 shadow-2xl flex flex-col md:flex-row overflow-hidden">
            <button 
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 text-white hover:text-neon-pink bg-cyber-black/50 p-2 rounded-full backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-full md:w-2/3 aspect-video md:aspect-auto bg-black flex items-center justify-center">
               <span className={`text-${activeItem.color} font-mono opacity-50`}>[ HIGH-RES IMAGE OF: {activeItem.title} ]</span>
            </div>
            
            <div className="w-full md:w-1/3 p-8 flex flex-col">
              <span className={`text-${activeItem.color} font-mono text-sm mb-2 uppercase tracking-widest`}>{activeItem.type}</span>
              <h3 className="text-3xl font-heading font-bold text-white mb-4">{activeItem.title}</h3>
              <div className="w-12 h-1 bg-white/20 mb-6"></div>
              <p className="text-slate-300 leading-relaxed">
                {activeItem.desc}
              </p>
              
              <div className="mt-auto pt-8 border-t border-white/10">
                <button className="w-full py-3 rounded-lg border border-white/20 text-white hover:bg-white hover:text-cyber-black transition-colors font-bold tracking-wide">
                  View Full Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignGallery;
