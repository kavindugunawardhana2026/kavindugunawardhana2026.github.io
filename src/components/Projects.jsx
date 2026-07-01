import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { projects } from '../data';

// ──────────────────────────────────────────────────────────────────
//  Projects — Engineering / Development work
//  To add a new card: edit src/data.js and add an object to the
//  `projects` array. No changes needed here.
// ──────────────────────────────────────────────────────────────────

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 bg-cyber-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <div className="flex flex-col items-start mb-16 border-l-4 border-neon-cyan pl-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
            Featured_Engineering<span className="text-neon-cyan">.projects()</span>
          </h2>
          <p className="text-slate-400 text-lg">Executing complex architectural builds.</p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden glassmorphism border border-white/10 hover:border-neon-cyan/50 transition-all duration-500 shadow-lg hover:shadow-neon-cyan flex flex-col md:flex-row"
            >
              {/* ── Image panel ── */}
              <div className="md:w-1/2 relative overflow-hidden bg-cyber-dark min-h-[300px]">

                {/* Subtle dot-grid fallback pattern (always visible beneath the image) */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='2' cy='2' r='2' fill='%23333'/%3E%3C/svg%3E\")",
                  }}
                />

                {project.imageUrl ? (
                  /* ── Real project screenshot ── */
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      // If image fails to load, show the placeholder text instead
                      e.currentTarget.style.display = 'none';
                      const sibling = e.currentTarget.nextElementSibling;
                      if (sibling) sibling.style.display = 'flex';
                    }}
                  />
                ) : null}

                {/* Placeholder — shown when imageUrl is empty or image fails */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                  style={{ display: project.imageUrl ? 'none' : 'flex' }}
                >
                  <div className="w-16 h-16 rounded-full border-2 border-neon-cyan/40 flex items-center justify-center">
                    <Code className="w-7 h-7 text-neon-cyan/50" />
                  </div>
                  <span className="text-neon-cyan/40 font-mono text-sm tracking-widest">
                    [ NO IMAGE YET ]
                  </span>
                </div>

                {/* Cyberpunk gradient overlay (always on top of image) */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* ── Content panel ── */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/5 rounded-bl-[100px] -z-10" />

                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-glow-cyan transition-all">
                  {project.title}
                </h3>

                <div className="glassmorphism p-6 rounded-xl border border-white/5 mb-6 relative z-10 -ml-4 md:-ml-12 shadow-2xl">
                  <p className="text-slate-300 leading-relaxed font-body">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-neon-cyan border border-neon-cyan/30 bg-neon-cyan/5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-auto">
                  <a
                    href={project.liveUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-neon-cyan transition-colors font-mono text-sm"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-neon-cyan transition-colors font-mono text-sm"
                  >
                    <Code className="w-5 h-5" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
