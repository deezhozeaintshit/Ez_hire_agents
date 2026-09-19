import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CommandSimulator } from './CommandSimulator';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenRegister: () => void;
  onOpenShortcuts?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onOpenRegister, onOpenShortcuts }) => {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background glow effects complementing the ambient layer */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Header Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-8 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="tracking-wide">Agentic AI Recruiting Platform for Every Hiring Step</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
            Your ambition <br />
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              just got a team.
            </span> <br />
            <span className="bg-gradient-to-r from-[#00DC82] via-[#10B981] to-teal-300 bg-clip-text text-transparent">
              Let agents source.
            </span>
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Your entire hiring pipeline, run by agents you direct — from one command center.
          </p>

          {/* CTA Row */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-contact-sales-btn"
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#10B981] hover:bg-[#059669] text-[#090D16] font-extrabold text-base transition-all duration-200 hover:scale-[1.02] shadow-[0_0_30px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact sales</span>
              <ArrowRight className="w-5 h-5 text-[#090D16]" />
            </button>

            <button
              id="hero-try-free-btn"
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-base border border-white/15 hover:border-emerald-500/40 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
            >
              <span>Try for free</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          {/* Metric Callout */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-white">Hire 75% faster</span> with hireEZ's agentic AI
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">1B+ Candidate Profiles Indexed</span>
          </div>
        </div>

        {/* Interactive Command Center Demo Simulator */}
        <div className="mt-14 lg:mt-18 max-w-5xl mx-auto">
          <CommandSimulator
            onOpenContact={onOpenContact}
            onOpenRegister={onOpenRegister}
            onOpenShortcuts={onOpenShortcuts}
          />
        </div>
      </div>
    </section>
  );
};
