import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Inline SVGs — immune to lucide-react version changes
const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.404 11.52 11.52 0 013.003.404c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

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
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kavindu-kalhara-6820573aa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-[#0077b5] hover:drop-shadow-[0_0_6px_rgba(0,119,181,0.8)] transition-all duration-300"
            >
              <LinkedinIcon className="w-5 h-5" />
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
              <GithubIcon className="w-5 h-5" />
              <span className="text-sm font-mono">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kavindu-kalhara-6820573aa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-slate-400 hover:text-[#0077b5] transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span className="text-sm font-mono">LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
