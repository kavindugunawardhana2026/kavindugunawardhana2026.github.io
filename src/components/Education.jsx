import React, { useRef } from 'react';
import { BookOpen, Star, Award, Trophy, GraduationCap } from 'lucide-react';

// ── Achievement data ───────────────────────────────────────────────
const achievements = [
  {
    year: "2015",
    title: "Scholarship Examination",
    result: "171",
    unit: "Marks",
    description: "Top-ranking score in the Grade 5 national scholarship examination.",
    icon: Star,
    accent: "#00F0FF",
    colorClass: "neon-cyan",
  },
  {
    year: "2021",
    title: "Ordinary Level",
    result: "9A's",
    unit: "G.C.E O/L",
    description: "Straight A's across all 9 subjects in the national O/L examination.",
    icon: Award,
    accent: "#9D00FF",
    colorClass: "neon-purple",
  },
  {
    year: "2024",
    title: "Advanced Level",
    result: "3A's",
    unit: "G.C.E A/L",
    description: "3 A passes in the Physical Science stream A/L examination.",
    icon: Trophy,
    accent: "#00FF87",
    colorClass: "neon-green",
  },
  {
    year: "2025",
    title: "University of Moratuwa",
    result: "✓",
    unit: "Selected",
    description: "BSc in Artificial Intelligence — Sri Lanka's premier technical university.",
    icon: GraduationCap,
    accent: "#FF007F",
    colorClass: "neon-pink",
    isCurrent: true,
  },
];

const Education = () => {
  const scrollRef = useRef(null);

  return (
    <section id="education" className="py-24 relative z-10 bg-cyber-black overflow-hidden">

      {/* ── Ambient background blobs ── */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-cyan/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section heading ── */}
        <div className="flex flex-col items-start mb-16 border-l-4 border-neon-purple pl-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
            Academic<span className="text-neon-purple"> Achievements</span>
          </h2>
          <p className="text-slate-400 text-lg">Milestones that define the journey.</p>
        </div>

        {/* ── Horizontal timeline ── */}
        <div className="relative">

          {/* Horizontal connector line */}
          <div className="hidden lg:block absolute top-[88px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-neon-cyan/60 via-neon-purple/60 via-neon-green/60 to-neon-pink/60" />
            {/* Animated travelling dot */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_8px_4px_rgba(255,255,255,0.6)]"
              style={{
                animation: 'travel 4s linear infinite',
              }}
            />
          </div>

          {/* Cards row */}
          <div
            ref={scrollRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.year}
                  className="group relative flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Year label above node */}
                  <span
                    className="font-mono text-xs font-bold tracking-[0.25em] uppercase mb-4"
                    style={{ color: item.accent }}
                  >
                    {item.year}
                  </span>

                  {/* Icon node */}
                  <div
                    className="relative w-14 h-14 rounded-full border-2 bg-cyber-light flex items-center justify-center z-10 mb-6
                      group-hover:scale-125 transition-all duration-500"
                    style={{
                      borderColor: item.accent,
                      boxShadow: `0 0 0 0 ${item.accent}40`,
                      animation: `node-pulse-${index} 3s ease-in-out infinite`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.accent }} />

                    {/* Ping ring */}
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        border: `2px solid ${item.accent}`,
                        animation: 'ping 1.2s cubic-bezier(0,0,0.2,1) infinite',
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="relative w-full rounded-2xl glassmorphism border border-white/10 p-6 overflow-hidden
                      group-hover:border-opacity-100 group-hover:-translate-y-2
                      transition-all duration-500 cursor-default"
                    style={{
                      '--accent': item.accent,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = item.accent + '80';
                      e.currentTarget.style.boxShadow = `0 0 24px ${item.accent}30, 0 0 60px ${item.accent}10`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    {/* Top shimmer line */}
                    <div
                      className="absolute top-0 left-4 right-4 h-[2px] rounded-full opacity-70"
                      style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                    />

                    {/* Glowing corner blob */}
                    <div
                      className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ background: item.accent }}
                    />

                    {/* Result — big & bold */}
                    <div
                      className="text-4xl md:text-5xl font-black font-heading mb-1 leading-none"
                      style={{
                        color: item.accent,
                        textShadow: `0 0 20px ${item.accent}80`,
                      }}
                    >
                      {item.result}
                    </div>

                    <div className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mb-3">
                      {item.unit}
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 font-heading leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-xs leading-relaxed">
                      {item.description}
                    </p>

                    {/* Currently Enrolled pill */}
                    {item.isCurrent && (
                      <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-neon-pink bg-neon-pink/10 border border-neon-pink/30 rounded-full px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse" />
                        Active
                      </div>
                    )}

                    {/* Index number watermark */}
                    <div
                      className="absolute bottom-3 right-4 text-6xl font-black font-heading opacity-5 select-none leading-none"
                      style={{ color: item.accent }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── University feature card ── */}
        <div className="mt-16 relative glassmorphism border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden group
          hover:border-neon-cyan/40 hover:shadow-neon-cyan transition-all duration-500">

          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-60" />
          {/* Ambient glow */}
          <div className="absolute -left-16 -top-16 w-48 h-48 bg-neon-cyan/15 rounded-full blur-[60px] group-hover:bg-neon-cyan/25 transition-colors duration-500" />
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-neon-purple/15 rounded-full blur-[60px] group-hover:bg-neon-purple/25 transition-colors duration-500" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Icon */}
            <div className="w-20 h-20 shrink-0 bg-cyber-light border-2 border-neon-cyan rounded-2xl flex items-center justify-center shadow-neon-cyan">
              <BookOpen className="text-neon-cyan w-10 h-10" />
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                <span className="text-neon-cyan font-mono text-xs font-bold tracking-widest uppercase">
                  Currently Enrolled · 2025 Intake
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-heading mb-1">
                BSc in Artificial Intelligence
              </h3>
              <p className="text-lg text-slate-300 font-mono mb-3">University of Moratuwa</p>
              <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
                Focusing on neural networks, machine learning algorithms, and the practical
                deployment of AI in embedded hardware environments.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ── Keyframes injected via style tag ── */}
      <style>{`
        @keyframes travel {
          0%   { left: 0%;   opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Education;
