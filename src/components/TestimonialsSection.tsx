import React, { useState } from 'react';
import { Quote, Star, Sparkles, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'hireEZ takes the manual process and some of that redundancy out of your hand, so you can actually spend quality time talking with the most qualified candidates.',
    author: 'Brandon Olivas',
    role: 'Senior Talent Acquisition Leader',
    company: 'Compass Group',
    category: 'Enterprise',
    avatar: 'BO',
    metric: '65% Time Saved',
    metricLabel: 'on initial sourcing cycles'
  },
  {
    id: '2',
    quote:
      "hireEZ's AI Agent is a HUGE time-saver! It organizes and ranks candidates with precision so my team can connect with top talent before our competitors even review applications.",
    author: 'Julia Vogel',
    role: 'Corporate Talent Acquisition Partner',
    company: 'Compass Group',
    category: 'Enterprise',
    avatar: 'JV',
    metric: '3x Pipeline Speed',
    metricLabel: 'from open req to shortlist'
  },
  {
    id: '3',
    quote:
      "With hireEZ we're making Intelligent Decisions when it comes to attracting talent, understanding the competitive market landscape, and building sustainable hiring pipelines.",
    author: 'Celinda Appleby',
    role: 'Director of Employee Experience',
    company: 'Visa',
    category: 'Tech',
    avatar: 'CA',
    metric: '45+ Platforms',
    metricLabel: 'unified candidate intelligence'
  },
  {
    id: '4',
    quote:
      'With hireEZ, we now have access to more candidates than LinkedIn. We uncover hard-to-find clinical and specialized talent in regions other platforms miss completely.',
    author: 'Allen Hornback',
    role: 'Talent Acquisition Director',
    company: 'BrightSpring Health Services',
    category: 'Healthcare',
    avatar: 'AH',
    metric: '+40% Reach',
    metricLabel: 'beyond standard LinkedIn talent'
  },
  {
    id: '5',
    quote:
      'EZ Agent empowers the Samsara recruiting team to identify and engage with more of the best passive and inbound talent while automating calendar coordination seamlessly.',
    author: 'Nick Survoy',
    role: 'Senior Program Manager',
    company: 'Samsara',
    category: 'Tech',
    avatar: 'NS',
    metric: '92% Acceptance',
    metricLabel: 'on multi-panel interview invites'
  },
  {
    id: '6',
    quote:
      "hireEZ's autonomous capability transforms recruiting from transactional search into proactive talent architecture. It is the most impactful AI workflow we have implemented.",
    author: 'Elena Rodriguez',
    role: 'VP of Global Talent Strategy',
    company: 'FinTech Cloud Leaders',
    category: 'Advisors',
    avatar: 'ER',
    metric: '50% Spend Saved',
    metricLabel: 'by replacing fragmented point tools'
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Enterprise', 'Tech', 'Healthcare', 'Advisors'];

  const filteredTestimonials =
    activeCategory === 'All'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === activeCategory);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#0D111D] border-t border-white/[0.06] relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header with scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
            Social Proof
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Hear from <span className="text-[#00DC82]">Global Teams</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            See how recruiting leaders and talent acquisition teams replace manual busywork with hireEZ EZ Agent.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Masonry Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl bg-[#151B2E] border border-white/[0.08] p-6 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header with quote mark and category badge */}
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {t.company}
                  </span>
                </div>

                {/* Quote Text verbatim */}
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed italic">
                  "{t.quote}"
                </p>

                {/* Quantitative Metric Highlight Banner */}
                {t.metric && (
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs">
                    <span className="font-extrabold text-[#00DC82] text-sm">{t.metric}</span>
                    <span className="text-[11px] text-slate-400">{t.metricLabel}</span>
                  </div>
                )}
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400/20 via-teal-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-300 shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
