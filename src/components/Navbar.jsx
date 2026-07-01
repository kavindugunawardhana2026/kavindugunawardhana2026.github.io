import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism py-3 shadow-neon-cyan' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-heading font-bold text-white flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-cyber-light border border-neon-cyan/30 flex items-center justify-center group-hover:shadow-neon-cyan transition-all duration-300">
            <span className="text-neon-cyan text-xl font-bold">K</span>
          </div>
          <span className="group-hover:text-glow-cyan transition-all duration-300">K.K.A. G</span>
        </a>

        {/* Desktop Nav + Social Icons */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white hover:text-glow-cyan transition-all duration-300 text-sm tracking-widest uppercase font-medium"
            >
              {link.name}
            </a>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-4">
            <a
              href="https://github.com/kavindugunawardhana2026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-neon-cyan hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.8)] transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kavindu-kalhara-6820573aa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-[#0077b5] hover:drop-shadow-[0_0_6px_rgba(0,119,181,0.8)] transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X className="text-neon-pink" /> : <Menu className="text-neon-cyan" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glassmorphism absolute top-full left-0 w-full border-t border-white/10 flex flex-col items-center py-6 space-y-4 shadow-neon-pink">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white text-lg hover:text-glow-pink transition-all"
            >
              {link.name}
            </a>
          ))}
          {/* Social icons in mobile menu */}
          <div className="flex items-center gap-6 pt-2 border-t border-white/10 w-full justify-center">
            <a
              href="https://github.com/kavindugunawardhana2026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-slate-400 hover:text-neon-cyan transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-mono">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kavindu-kalhara-6820573aa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-slate-400 hover:text-[#0077b5] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-mono">LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
