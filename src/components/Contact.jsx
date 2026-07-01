import React, { useState } from 'react';
import { Send, Code, Briefcase, Palette, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Cyberpunk confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00F0FF', '#FF007F', '#9D00FF']
      });
      
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-cyber-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,127,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Initialize <span className="text-neon-pink">Connection</span>
          </h2>
          <p className="text-slate-400">Open a secure channel for collaboration or inquiries.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-3 glassmorphism p-8 rounded-2xl border border-white/10 shadow-neon-pink">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-cyber-black/50 border border-white/20 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-neon-pink focus:shadow-[0_0_15px_rgba(255,0,127,0.3)] transition-all peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-slate-400 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-pink peer-focus:bg-cyber-dark px-1 peer-valid:-top-3 peer-valid:text-xs peer-valid:bg-cyber-dark px-1 pointer-events-none">
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-cyber-black/50 border border-white/20 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-neon-pink focus:shadow-[0_0_15px_rgba(255,0,127,0.3)] transition-all peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-slate-400 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-pink peer-focus:bg-cyber-dark px-1 peer-valid:-top-3 peer-valid:text-xs peer-valid:bg-cyber-dark px-1 pointer-events-none">
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-cyber-black/50 border border-white/20 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-neon-pink focus:shadow-[0_0_15px_rgba(255,0,127,0.3)] transition-all peer resize-none"
                  placeholder=" "
                ></textarea>
                <label className="absolute left-4 top-4 text-slate-400 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-pink peer-focus:bg-cyber-dark px-1 peer-valid:-top-3 peer-valid:text-xs peer-valid:bg-cyber-dark px-1 pointer-events-none">
                  Message Payload
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSent}
                className="w-full py-4 bg-transparent border-2 border-neon-pink text-neon-pink font-bold rounded-lg hover:bg-neon-pink hover:text-white transition-all duration-300 shadow-neon-pink flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Transmitting...</span>
                ) : isSent ? (
                  <span>Payload Delivered</span>
                ) : (
                  <>Transmit <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2 flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-white mb-2">Connect Nodes</h3>
            
            <a href="https://github.com/kavindugunawardhana2026" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 glassmorphism rounded-xl border border-white/5 hover:border-white/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-cyber-black flex items-center justify-center group-hover:shadow-neon-cyan transition-shadow">
                <Code className="w-6 h-6 text-white group-hover:text-neon-cyan transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold">GitHub</h4>
                <p className="text-slate-400 text-sm">Source code & commits</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/kavindu-kalhara-6820573aa/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 glassmorphism rounded-xl border border-white/5 hover:border-white/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-cyber-black flex items-center justify-center group-hover:shadow-[0_0_15px_#0077b5] transition-shadow">
                <Briefcase className="w-6 h-6 text-white group-hover:text-[#0077b5] transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold">LinkedIn</h4>
                <p className="text-slate-400 text-sm">Professional network</p>
              </div>
            </a>

            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 glassmorphism rounded-xl border border-white/5 hover:border-white/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-cyber-black flex items-center justify-center group-hover:shadow-[0_0_15px_#1769ff] transition-shadow">
                <Palette className="w-6 h-6 text-white group-hover:text-[#1769ff] transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold">Behance</h4>
                <p className="text-slate-400 text-sm">Design portfolio</p>
              </div>
            </a>

            <a href="mailto:hello@example.com" className="group flex items-center gap-4 p-4 glassmorphism rounded-xl border border-white/5 hover:border-white/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-cyber-black flex items-center justify-center group-hover:shadow-neon-pink transition-shadow">
                <Mail className="w-6 h-6 text-white group-hover:text-neon-pink transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold">Email</h4>
                <p className="text-slate-400 text-sm">Direct communication</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-8 bg-cyber-black border-t border-white/10 text-center relative z-10">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-6 h-6 rounded bg-cyber-light border border-neon-cyan/30 flex items-center justify-center">
          <span className="text-neon-cyan text-xs font-bold">K</span>
        </div>
      </div>
      <p className="text-slate-500 text-sm font-mono">
        © {new Date().getFullYear()} K.K.A. Gunawardhana. All systems operational.
      </p>
    </footer>
  );
};
