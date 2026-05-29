import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
// We would import the image here if it was bundled, but we'll use a direct path or placeholder for now.
// import multiVisionImg from '../assets/images/multivision_screenshot.png';

const Projects = () => {
  const projects = [
    {
      title: "Multi Vision Education Platform",
      description: "A premium EdTech tuition platform. Designed and developed the full modern UI/UX, including student dashboards, AI advisors, and interactive learning tools.",
      tags: ["Web Development", "UI/UX Design", "Frontend Development", "AI"],
      image: "/src/assets/images/multivision_screenshot.png",
      accentColor: "neon-cyan"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10 bg-cyber-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-start mb-16 border-l-4 border-neon-cyan pl-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
            Featured_Engineering<span className="text-neon-cyan">.projects()</span>
          </h2>
          <p className="text-slate-400 text-lg">Executing complex architectural builds.</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden glassmorphism border border-white/10 hover:border-neon-cyan/50 transition-all duration-500 shadow-lg hover:shadow-neon-cyan flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 relative overflow-hidden bg-cyber-dark min-h-[300px]">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzMiLz4KPC9zdmc+')] opacity-20"></div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-screen"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hide broken image
                  }}
                />
                
                {/* Cyberpunk overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/5 rounded-bl-[100px] -z-10"></div>
                
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-glow-cyan transition-all">{project.title}</h3>
                
                <div className="glassmorphism p-6 rounded-xl border border-white/5 mb-6 relative z-10 -ml-4 md:-ml-12 shadow-2xl">
                  <p className="text-slate-300 leading-relaxed font-body">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-mono text-neon-cyan border border-neon-cyan/30 bg-neon-cyan/5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a href="#" className="flex items-center gap-2 text-white hover:text-neon-cyan transition-colors">
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-2 text-white hover:text-neon-cyan transition-colors">
                    <Code className="w-5 h-5" /> Source
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
