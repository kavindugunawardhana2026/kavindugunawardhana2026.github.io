import React, { useState, useRef } from 'react';
import { Maximize2, X, ImageIcon } from 'lucide-react';
import { creativeWorks } from '../data';

// ──────────────────────────────────────────────────────────────────
//  DesignGallery — "Creative Works" section
//  To add a new card: edit src/data.js and add an object to the
//  `creativeWorks` array. No changes needed here.
// ──────────────────────────────────────────────────────────────────

// Map color names to actual Tailwind-safe values (required because
// Tailwind v4 purges dynamic class names).
const colorMap = {
  'neon-cyan':   { border: 'border-neon-cyan/50',   text: 'text-neon-cyan',   bg: 'bg-neon-cyan'   },
  'neon-purple': { border: 'border-neon-purple/50', text: 'text-neon-purple', bg: 'bg-neon-purple' },
  'neon-green':  { border: 'border-neon-green/50',  text: 'text-neon-green',  bg: 'bg-neon-green'  },
  'neon-pink':   { border: 'border-neon-pink/50',   text: 'text-neon-pink',   bg: 'bg-neon-pink'   },
};

const DesignGallery = () => {
  const [activeItem, setActiveItem] = useState(null);
  const containerRef = useRef(null);

  // Parallax tilt effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    containerRef.current.querySelectorAll('.gallery-card').forEach((card, index) => {
      const depth = (index % 2 === 0 ? 1 : -1) * 20;
      card.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.querySelectorAll('.gallery-card').forEach((card) => {
      card.style.transform = 'translate(0px, 0px)';
    });
  };

  return (
    <section id="gallery" className="py-24 relative z-10 bg-cyber-dark overflow-hidden">
      {/* Top separator line */}
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section heading */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase tracking-wider">
            Creative <span className="text-neon-purple text-glow-pink">Works</span>
          </h2>
          <p className="text-xl text-slate-400 font-mono">Blending aesthetics with technology.</p>
          {/* Decorative glow blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-purple/20 rounded-full blur-[80px] -z-10" />
        </div>

        {/* Grid of cards */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {creativeWorks.map((item) => {
            const c = colorMap[item.color] ?? colorMap['neon-cyan'];
            return (
              <div
                key={item.id}
                className={`gallery-card relative group rounded-xl overflow-hidden aspect-[4/3] glassmorphism border border-white/10 hover:${c.border} transition-transform duration-300 ease-out shadow-lg cursor-pointer`}
                onClick={() => setActiveItem(item)}
              >
                {/* ── Image (or placeholder) ── */}
                <div className="absolute inset-0 bg-cyber-light overflow-hidden">
                  {item.imageUrl ? (
                    <>
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const sibling = e.currentTarget.nextElementSibling;
                          if (sibling) sibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback shown if img errors */}
                      <div className="absolute inset-0 hidden flex-col items-center justify-center gap-3">
                        <div className={`w-16 h-16 rounded-full border-2 border-current ${c.text} flex items-center justify-center opacity-40`}>
                          <ImageIcon className="w-7 h-7" />
                        </div>
                        <span className={`${c.text} font-mono text-sm opacity-40 tracking-widest`}>
                          [ IMAGE UNAVAILABLE ]
                        </span>
                      </div>
                    </>
                  ) : (
                    /* No URL yet — show elegant placeholder */
                    <>
                      {/* Crosshatch pattern */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0l40 40M0 40l40-40' stroke='%23555' stroke-width='1'/%3E%3C/svg%3E\")",
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                        <div className={`w-16 h-16 rounded-full border-2 ${c.text} border-current flex items-center justify-center opacity-30`}>
                          <ImageIcon className="w-7 h-7" />
                        </div>
                        <span className={`${c.text} font-mono text-sm opacity-30 tracking-widest uppercase`}>
                          Upload image to data.js
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* ── Hover overlay with info ── */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className={`inline-block px-3 py-1 text-xs font-bold text-cyber-black ${c.bg} rounded-sm w-max mb-3 uppercase tracking-wider`}>
                    {item.type}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{item.description}</p>
                  <button className={`${c.text} flex items-center gap-2 hover:underline w-max`}>
                    <Maximize2 className="w-4 h-4" /> Enlarge
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Lightbox modal ── */}
      {activeItem && (() => {
        const c = colorMap[activeItem.color] ?? colorMap['neon-cyan'];
        return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <div
              className="absolute inset-0 bg-cyber-black/90 backdrop-blur-md"
              onClick={() => setActiveItem(null)}
            />
            <div className="relative z-10 w-full max-w-5xl bg-cyber-light rounded-xl border border-white/20 shadow-2xl flex flex-col md:flex-row overflow-hidden">
              {/* Close button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 text-white hover:text-neon-pink bg-cyber-black/50 p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image area */}
              <div className="w-full md:w-2/3 aspect-video md:aspect-auto bg-black flex items-center justify-center overflow-hidden">
                {activeItem.imageUrl ? (
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className={`${c.text} font-mono opacity-40 text-center px-8`}>
                    [ HIGH-RES IMAGE OF: {activeItem.title} ]<br />
                    <span className="text-xs opacity-60 mt-2 block">Add imageUrl in data.js</span>
                  </span>
                )}
              </div>

              {/* Details panel */}
              <div className="w-full md:w-1/3 p-8 flex flex-col">
                <span className={`${c.text} font-mono text-sm mb-2 uppercase tracking-widest`}>
                  {activeItem.type}
                </span>
                <h3 className="text-3xl font-heading font-bold text-white mb-4">{activeItem.title}</h3>
                <div className="w-12 h-1 bg-white/20 mb-6" />
                <p className="text-slate-300 leading-relaxed">{activeItem.description}</p>
                <div className="mt-auto pt-8 border-t border-white/10">
                  <button
                    onClick={() => setActiveItem(null)}
                    className="w-full py-3 rounded-lg border border-white/20 text-white hover:bg-white hover:text-cyber-black transition-colors font-bold tracking-wide"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};

export default DesignGallery;
